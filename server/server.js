const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Email configuration with your credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'diginess.store@gmail.com',
    pass: 'kcvf rxnd qqju xylw' // Your app password
  }
});

// Verify email connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Email connection error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Generate order summary HTML
function generateOrderEmail(orderData) {
  const { orderId, customerName, items, total, shippingInfo, date } = orderData;
  
  const itemsHtml = items.map(item => {
    const priceNum = item.priceNum || parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
    const itemTotal = priceNum * (item.quantity || 1);
    
    return `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity || 1}</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">₹${priceNum.toLocaleString('en-IN')}</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: left;">₹${itemTotal.toLocaleString('en-IN')}</td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
          background: #f5f5f5; 
          margin: 0; 
          padding: 20px; 
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 16px; 
          overflow: hidden; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
        }
        .header { 
          background: #000; 
          color: white; 
          padding: 40px 30px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 32px; 
          letter-spacing: 8px; 
          font-weight: 300; 
        }
        .header p { 
          margin: 10px 0 0; 
          opacity: 0.8; 
          font-size: 14px; 
          letter-spacing: 2px; 
        }
        .content { 
          padding: 40px 30px; 
        }
        .order-info { 
          background: #f8f9fa; 
          padding: 20px; 
          border-radius: 12px; 
          margin-bottom: 30px; 
          border: 1px solid #eee; 
        }
        .order-info p { 
          margin: 8px 0; 
          color: #333; 
          font-size: 14px; 
        }
        .order-info strong { 
          color: #000; 
          min-width: 100px; 
          display: inline-block; 
        }
        h2 { 
          margin: 0 0 20px; 
          color: #000; 
          font-size: 20px; 
          font-weight: 400; 
          letter-spacing: 2px; 
        }
        table { 
          width: 100%; 
          border-collapse: collapse; 
          margin: 25px 0; 
        }
        th { 
          background: #000; 
          color: white; 
          padding: 12px; 
          text-align: left; 
          font-size: 12px; 
          letter-spacing: 1px; 
          font-weight: 400; 
        }
        td { 
          padding: 12px; 
          border-bottom: 1px solid #eee; 
          font-size: 13px; 
        }
        .total-row { 
          background: #f8f9fa; 
          font-weight: bold; 
        }
        .total-row td { 
          border-bottom: none; 
          padding: 15px 12px; 
        }
        .address-box { 
          background: #f8f9fa; 
          padding: 20px; 
          border-radius: 12px; 
          margin: 20px 0; 
          border: 1px solid #eee; 
          line-height: 1.6; 
        }
        .button { 
          display: inline-block; 
          padding: 14px 40px; 
          background: #000; 
          color: white; 
          text-decoration: none; 
          border-radius: 40px; 
          margin-top: 30px; 
          font-size: 12px; 
          letter-spacing: 2px; 
          text-transform: uppercase; 
          border: 1px solid #000; 
          transition: all 0.3s; 
        }
        .button:hover { 
          background: white; 
          color: #000; 
        }
        .footer { 
          text-align: center; 
          padding: 30px; 
          color: #999; 
          font-size: 11px; 
          border-top: 1px solid #eee; 
          letter-spacing: 1px; 
        }
        .divider { 
          height: 1px; 
          background: #eee; 
          margin: 30px 0; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>DIGINESS</h1>
          <p>Order Confirmation</p>
        </div>
        
        <div class="content">
          <h2>Thank you for your order!</h2>
          <p style="color: #666; margin-bottom: 25px;">Hi ${customerName}, your order has been confirmed and will be processed soon.</p>
          
          <div class="order-info">
            <p><strong>Order ID:</strong> #${orderId}</p>
            <p><strong>Order Date:</strong> ${date}</p>
            <p><strong>Payment:</strong> ✓ Paid via Cashfree</p>
            <p><strong>Status:</strong> Processing</p>
          </div>
          
          <h2>Order Summary</h2>
          
          <table>
            <thead>
              <tr>
                <th >Item</th>
                <th style="text-align:center;">Qty</th>
                <th style="text-align:right;">Price</th>
                <th style="text-align:left;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td colspan="3" style="text-align: right; font-size: 14px;">Subtotal</td>
                <td style="font-size: 14px;">₹${total.toLocaleString('en-IN')}</td>
              </tr>
              <tr class="total-row">
                <td colspan="3" style="text-align: right; font-size: 14px;">Shipping</td>
                <td style="font-size: 14px;">Free</td>
              </tr>
              <tr class="total-row">
                <td colspan="3" style="text-align: right; font-size: 16px; font-weight: 700;">Grand Total</td>
                <td style="font-size: 18px; color: #000; font-weight: 700;">₹${total.toLocaleString('en-IN')}</td>
              </tr>
            </tfoot>
          </table>
          
          <h2 style="margin-top: 40px;">Shipping Address</h2>
          <div class="address-box">
            <strong style="font-size: 14px;">${shippingInfo.fullName}</strong><br>
            ${shippingInfo.address}<br>
            ${shippingInfo.city}, ${shippingInfo.state} - ${shippingInfo.zip}<br>
            India<br>
            Phone: ${shippingInfo.phone}
          </div>
          
          <div style="text-align: center;">
            <a href="https://diginess.lumihomecn.com/account.html" class="button">Track Your Order</a>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #666; font-size: 12px; line-height: 1.6;">
            We'll notify you once your order ships. If you have any questions, contact our support at support@diginess.store
          </p>
        </div>
        
        <div class="footer">
          <p>© 2026 DIGINESS. All rights reserved.</p>
          <p style="margin: 5px 0;">This is an automated email, please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// API endpoint to send order confirmation email
app.post('/api/send-order-email', async (req, res) => {
  try {
    const { orderData, userEmail } = req.body;
    
    console.log('Sending email to:', userEmail);
    console.log('Order data:', orderData.orderId);

    const mailOptions = {
      from: '"DIGINESS Store" <diginess.store@gmail.com>',
      to: userEmail,
      subject: `Order Confirmed #${orderData.orderId} - DIGINESS`,
      html: generateOrderEmail(orderData)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    
    res.json({ success: true, message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.json({ test: true, message: 'Test endpoint working' });
});

// ================= SMS OTP Functionality =================
// OTP storage (in-memory)
const otpStore = new Map(); // phoneNumber -> { otp, expiresAt }

// SMS Gateway credentials (as provided)
const SMS_API_URL = 'https://sms.textspeed.in/vb/apikey.php';
const SMS_API_KEY = 'gdCD8AQiQWAPDTS2';
const SMS_SENDER_ID = 'ZIAMRE';
const SMS_TEMPLATE_ID = '1707177390087516591';
const OTP_TEMPLATE = 'Your OTP for login is {OTP}. It is valid for 5 minutes. Do not share this code with anyone. Contact support if the OTP was not requested by you - Ziamore.';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post('/api/send-otp', async (req, res) => {
  try {

    const { phoneNumber } = req.body;

    console.log("=================================");
    console.log("SEND OTP REQUEST");
    console.log("Phone Number:", phoneNumber);
    console.log("=================================");

    // Validate phone number
    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        error: 'Phone number is required'
      });
    }

    // Must be exactly 10 digits
    if (!/^\d{10}$/.test(String(phoneNumber))) {
      return res.status(400).json({
        success: false,
        error: 'Phone number must be 10 digits'
      });
    }

    // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("Generated OTP:", otp);

    // Expiry time = 5 minutes
    const expiresAt = Date.now() + (5 * 60 * 1000);

    // Store OTP
    otpStore.set(String(phoneNumber), {
      otp,
      expiresAt
    });

    console.log("OTP Stored Successfully");

    // SMS Message
    const message =
      `Your OTP for login is ${otp}. It is valid for 5 minutes. Do not share this code with anyone. Contact support if the OTP was not requested by you - Ziamore.`;

    console.log("SMS Message:", message);

    // ==============================
    // SEND SMS USING TEXTSPEED API
    // ==============================

    const response = await axios.get(
      'https://sms.textspeed.in/vb/apikey.php',
      {
        params: {
          apikey: 'gdCD8AQiQWAPDTS2',
          senderid: 'ZIAMRE',
          templateid: '1707177390087516591',
          number: phoneNumber,
          message: message
        },
        timeout: 15000
      }
    );

    console.log("=================================");
    console.log("SMS API RESPONSE");
    console.log(response.data);
    console.log("=================================");

    // Success response
    return res.json({
      success: true,
      message: 'OTP sent successfully'
    });

  } catch (error) {

    console.error("=================================");
    console.error("OTP SEND ERROR");
    console.error(error.message);

    if (error.response) {
      console.error(error.response.data);
    }

    console.error("=================================");

    return res.status(500).json({
      success: false,
      error: 'Failed to send OTP'
    });
  }
});

// Verify OTP
app.post('/api/verify-otp', (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    console.log('Verify OTP request for:', phoneNumber, 'otp:', otp);

    if (!phoneNumber || !/^\d{10}$/.test(String(phoneNumber))) {
      return res.status(400).json({ verified: false, error: 'Invalid phone number. Must be 10 digits.' });
    }
    if (!otp || !/^\d{6}$/.test(String(otp))) {
      return res.status(400).json({ verified: false, error: 'Invalid OTP. Must be 6 digits.' });
    }

    const record = otpStore.get(String(phoneNumber));
    if (!record) {
      return res.status(404).json({ verified: false, error: 'No OTP found for this number' });
    }

    if (Date.now() > record.expiresAt) {
      otpStore.delete(String(phoneNumber));
      console.log('OTP expired for', phoneNumber);
      return res.status(410).json({ verified: false, error: 'OTP expired' });
    }

    if (String(record.otp) !== String(otp)) {
      console.log('Invalid OTP attempt for', phoneNumber);
      return res.status(400).json({ verified: false, error: 'Invalid OTP' });
    }

    // OTP verified
    otpStore.delete(String(phoneNumber));
    console.log('OTP verified for', phoneNumber);
    return res.json({ verified: true, message: 'OTP verified' });
  } catch (err) {
    console.error('verify-otp error:', err);
    res.status(500).json({ verified: false, error: 'Internal server error' });
  }
});

// ================= Cashfree =================
const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || 'TEST112971349bcd61e5ac290d4eac1f43179211';
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || '';
if (!CASHFREE_SECRET_KEY) {
  console.warn('WARNING: CASHFREE_SECRET_KEY is not set in environment or .env file');
}
const CASHFREE_ENV = (process.env.CASHFREE_ENV || (CASHFREE_APP_ID.startsWith('TEST') ? 'TEST' : 'PROD')).toUpperCase();
const CASHFREE_BASE_URL = CASHFREE_ENV === 'PROD' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';

// Get Cashfree Config for frontend
app.get('/api/cashfree-config', (req, res) => {
  res.json({
    appId: CASHFREE_APP_ID,
    env: CASHFREE_ENV === 'PROD' ? 'production' : 'sandbox',
    mode: CASHFREE_ENV === 'PROD' ? 'production' : 'sandbox'
  });
});

// Backward compatibility endpoint for key discovery
app.get('/api/razorpay-key', (req, res) => {
  res.json({
    keyId: CASHFREE_APP_ID,
    appId: CASHFREE_APP_ID,
    mode: CASHFREE_ENV === 'PROD' ? 'production' : 'sandbox'
  });
});

// Create Cashfree Order
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', customerId, customerPhone, customerName, customerEmail, orderId, returnUrl } = req.body;
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return res.status(400).json({ success: false, error: 'Invalid amount' });
    }

    const cleanOrderId = orderId 
      ? String(orderId).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 45) 
      : 'order_' + Date.now();
    const cleanPhone = (customerPhone ? String(customerPhone).replace(/[^0-9]/g, '').slice(-10) : '') || '9999999999';
    const cleanCustomerId = (customerId ? String(customerId).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 45) : '') || ('cust_' + Date.now());

    const orderPayload = {
      order_id: cleanOrderId,
      order_amount: Number(Number(amount).toFixed(2)),
      order_currency: currency,
      customer_details: {
        customer_id: cleanCustomerId,
        customer_name: customerName || 'Customer',
        customer_email: customerEmail || 'customer@diginess.store',
        customer_phone: cleanPhone
      },
      order_meta: {
        return_url: returnUrl || null
      }
    };

    console.log('Creating Cashfree order:', cleanOrderId, 'amount:', orderPayload.order_amount);

    const response = await axios.post(`${CASHFREE_BASE_URL}/orders`, orderPayload, {
      headers: {
        'x-client-id': CASHFREE_APP_ID,
        'x-client-secret': CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01',
        'Content-Type': 'application/json'
      },
      timeout: 15000
    });

    console.log('Cashfree order created successfully:', response.data.order_id);

    return res.json({
      success: true,
      orderId: response.data.order_id,
      paymentSessionId: response.data.payment_session_id,
      cfOrderId: response.data.cf_order_id,
      order: response.data
    });
  } catch (err) {
    const errorData = err.response ? err.response.data : (err.message || err);
    console.error('create-order error:', errorData);
    return res.status(502).json({
      success: false,
      error: 'Failed to create Cashfree order',
      details: errorData
    });
  }
});

// Verify Cashfree Order Status
app.get('/api/verify-order/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const response = await axios.get(`${CASHFREE_BASE_URL}/orders/${encodeURIComponent(orderId)}`, {
      headers: {
        'x-client-id': CASHFREE_APP_ID,
        'x-client-secret': CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01'
      },
      timeout: 10000
    });

    return res.json({
      success: true,
      orderStatus: response.data.order_status,
      order: response.data
    });
  } catch (err) {
    const errorData = err.response ? err.response.data : (err.message || err);
    console.error('verify-order error:', errorData);
    return res.status(502).json({
      success: false,
      error: 'Failed to verify order',
      details: errorData
    });
  }
});

// Start server
const PORT = 6453;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- POST /api/send-order-email`);
  console.log(`- GET  /api/health`);
  console.log(`- GET  /api/test`);
  console.log(`- POST /api/send-otp`);
  console.log(`- POST /api/verify-otp`);
  console.log(`- GET  /api/cashfree-config`);
  console.log(`- POST /api/create-order`);
  console.log(`- GET  /api/verify-order/:orderId`);
});

