const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email configuration with your credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'diginess.store@gmail.com',
    pass: 'ggue jiye ithn cjic' // Your app password
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
            <p><strong>Payment:</strong> ✓ Paid via Razorpay</p>
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
            <a href="http://localhost:5500/account.html" class="button">Track Your Order</a>
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

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- POST http://localhost:${PORT}/api/send-order-email`);
  console.log(`- GET  http://localhost:${PORT}/api/health`);
});