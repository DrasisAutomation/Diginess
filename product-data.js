// Complete Product Data - DIGINESS Tech Store
const productData = [
  {
    slug: "ai-intelligent-robot",
    name: 'AI Peluche Intelligent Robot',
    priceNum: 1999,
    price: '₹1999',
    img: 'assets/products/1.png',
    images: [
      'assets/products/1.png',
      'assets/products/2.png'
    ],
    category: 'AI Toys',
    description: `
      <h3>Interactive AI Intelligent Peluche Robot</h3>
      <p>Your friendly AI companion that speaks and engages in intelligent conversations with you. Perfect for all ages!</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>AI Powered Conversations:</strong> Natural language processing for friendly interactions</li>
        <li><strong>Voice Recognition:</strong> Understands your voice commands and questions</li>
        <li><strong>Cute Peluche Design:</strong> Soft and huggable plush exterior</li>
        <li><strong>Interactive Learning:</strong> Learns from your conversations</li>
        <li><strong>Multi-language Support:</strong> Communicate in multiple languages</li>
        <li><strong>USB Rechargeable:</strong> Long battery life for continuous play</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>AI Engine: Advanced NLP technology</li>
        <li>Battery: 8+ hours of conversation time</li>
        <li>Charging: USB-C charging cable included</li>
        <li>Material: Soft premium plush with internal electronics</li>
      </ul>
      
      <p>Make a new friend with DIGINESS AI Robot - Your personal intelligent companion!</p>
    `
  },
  {
    slug: "led-stylish-cap",
    name: 'LED Stylish Cap with Display',
    priceNum: 1499,
    price: '₹1,499',
    img: 'assets/products/3.png',
    images: [
      'assets/products/3.png',
      'assets/products/4.png',
      'assets/products/5.png'
    ],
    category: 'Wearables',
    description: `
      <h3>Premium LED Display Cap</h3>
      <p>Stylish baseball cap with programmable LED display on the front. Create custom animations and messages!</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Full LED Display:</strong> Bright, programmable LED panel on cap front</li>
        <li><strong>Multiple Animations:</strong> Pre-loaded patterns and custom animation support</li>
        <li><strong>Wireless Control:</strong> Control via smartphone app via Bluetooth</li>
        <li><strong>Long Battery Life:</strong> 12+ hours on single charge</li>
        <li><strong>Stylish Design:</strong> Premium fabric with LED integration</li>
        <li><strong>Water Resistant:</strong> Splash-resistant electronics</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>LED Type: Full RGB programmable display</li>
        <li>Connectivity: Bluetooth 5.0</li>
        <li>Battery: Rechargeable lithium-ion, 12+ hours</li>
        <li>Charging: Micro-USB charging port</li>
      </ul>
      
      <p>Stand out from the crowd with DIGINESS LED Cap - Express yourself with light!</p>
    `
  },
  {
    slug: "tactical-pen",
    name: 'Tactical Multi-Tool Pen',
    priceNum: 899,
    price: '₹899',
    img: 'assets/products/6.png',
    images: [
      'assets/products/6.png',
      'assets/products/7.png'
    ],
    category: 'Tools',
    description: `
      <h3>Professional Tactical Pen with Multiple Tools</h3>
      <p>An essential everyday carry tool combining pen, flashlight, blade, and glass breaker in one compact design.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Premium Writing:</strong> Smooth ballpoint pen for everyday writing</li>
        <li><strong>LED Flashlight:</strong> Bright LED with adjustable brightness levels</li>
        <li><strong>Tactical Blade:</strong> Sharp, replaceable cutting blade</li>
        <li><strong>Glass Breaker:</strong> Emergency window breaker tip</li>
        <li><strong>Robust Construction:</strong> Aircraft-grade aluminum body</li>
        <li><strong>Pocket Clip:</strong> Secure carrying clip for easy access</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Material: Aircraft-grade aluminum alloy</li>
        <li>Length: 6.2 inches (compact and portable)</li>
        <li>LED Power: 150+ lumens</li>
        <li>Battery: Two AAA batteries included</li>
      </ul>
      
      <p>Your ultimate multi-tool companion from DIGINESS - Always ready for any situation!</p>
    `
  },
  {
    slug: "led-bluetooth-tshirt",
    name: 'LED Bluetooth T-Shirt',
    priceNum: 2499,
    price: '₹2,499',
    img: 'assets/products/8.png',
    images: [
      'assets/products/8.png',
      'assets/products/9.png'
    ],
    category: 'Wearables',
    description: `
      <h3>Smart LED Display T-Shirt</h3>
      <p>Revolutionary wearable technology - a comfortable t-shirt with a full front LED display for animations and messages.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>LED Front Display:</strong> Programmable RGB LED grid on chest area</li>
        <li><strong>Animation Support:</strong> Create and display custom animations</li>
        <li><strong>Bluetooth Control:</strong> Pair with smartphone for easy customization</li>
        <li><strong>Washable Design:</strong> Removable/waterproof electronics for washing</li>
        <li><strong>Comfortable Fit:</strong> Premium cotton blend fabric</li>
        <li><strong>Long Battery:</strong> 10+ hours of continuous display</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Material: 70% Cotton, 30% Polyester blend</li>
        <li>LED Display: Full RGB programmable array</li>
        <li>Battery: Rechargeable via USB-C</li>
        <li>Connectivity: Bluetooth 5.0</li>
        <li>Available Sizes: XS to XXL</li>
      </ul>
      
      <p>Express your style in motion with DIGINESS LED T-Shirt - Tech fashion reimagined!</p>
    `
  },
  {
    slug: "car-power-inverter",
    name: 'Car Power Inverter 220V Converter',
    priceNum: 3499,
    price: '₹3,499',
    img: 'assets/products/10.png',
    images: [
      'assets/products/10.png',
      'assets/products/11.png'
    ],
    category: 'Automotive',
    description: `
      <h3>Premium Car Power Inverter with USB Sockets</h3>
      <p>Convert your car's 12V DC power to 220V AC power for all your devices on the road!</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>DC to AC Conversion:</strong> 12V to 220V efficient power conversion</li>
        <li><strong>Dual USB Ports:</strong> Additional USB charging for smartphones and tablets</li>
        <li><strong>1000W Capacity:</strong> Power multiple devices simultaneously</li>
        <li><strong>Safety Protection:</strong> Over-voltage, over-current, and overheat protection</li>
        <li><strong>Compact Design:</strong> Fits easily in car cup holder</li>
        <li><strong>LED Display:</strong> Real-time voltage and power monitoring</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Input: 12V DC car battery</li>
        <li>Output: 220V AC, 1000W peak</li>
        <li>USB Ports: 2x fast charging USB</li>
        <li>Efficiency: 94% power conversion</li>
        <li>Cooling: Built-in cooling fan</li>
      </ul>
      
      <p>Never run out of power on long drives with DIGINESS Car Inverter - Power on the go!</p>
    `
  },
  {
    slug: "mini-hygrometer",
    name: 'Mini Digital Hygrometer',
    priceNum: 599,
    price: '₹599',
    img: 'assets/products/12.png',
    images: [
      'assets/products/12.png',
      'assets/products/13.png'
    ],
    category: 'Monitors',
    description: `
      <h3>Digital Hygrometer - Temperature & Humidity Monitor</h3>
      <p>Compact device that displays real-time room temperature and humidity levels with precision sensors.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Dual Display:</strong> Shows temperature and humidity simultaneously</li>
        <li><strong>High Accuracy:</strong> ±1°C temperature and ±3% humidity accuracy</li>
        <li><strong>Large LCD Screen:</strong> Easy-to-read digital display</li>
        <li><strong>Min/Max Recording:</strong> Tracks temperature and humidity extremes</li>
        <li><strong>Compact Design:</strong> Fits anywhere - desk, shelf, or wall-mounted</li>
        <li><strong>Long Battery Life:</strong> 12+ months on two AAA batteries</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Temperature Range: -10°C to +50°C</li>
        <li>Humidity Range: 10% to 99%</li>
        <li>Display: Large LCD, easy-to-read figures</li>
        <li>Power: 2x AAA batteries (included)</li>
        <li>Dimensions: Compact pocket size</li>
      </ul>
      
      <p>Monitor your room conditions perfectly with DIGINESS Hygrometer - Small device, big comfort!</p>
    `
  },
  {
    slug: "magnetic-super-pen",
    name: 'Magnetic Super Pen',
    priceNum: 749,
    price: '₹749',
    img: 'assets/products/14.png',
    images: [
      'assets/products/14.png',
      'assets/products/15.png'
    ],
    category: 'Stationery',
    description: `
      <h3>Premium Magnetic Super Pen with Magnetic Page</h3>
      <p>Stylish pen with powerful magnetic properties - sticks to any metal surface for convenient desk organization and unique decoration.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Strong Magnetic Base:</strong> Adheres to any ferrous metal surface</li>
        <li><strong>Premium Build:</strong> High-quality metal and plastic construction</li>
        <li><strong>Smooth Writing:</strong> Precision ballpoint for smooth writing experience</li>
        <li><strong>Magnetic Page Marker:</strong> Included magnetic bookmark for pages</li>
        <li><strong>Desk Decor:</strong> Modern design that enhances any workspace</li>
        <li><strong>Multiple Colors:</strong> Available in various stylish finishes</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Material: Premium aluminum and steel</li>
        <li>Magnet Strength: Professional-grade neodymium magnets</li>
        <li>Ink: Smooth gel ink, refillable</li>
        <li>Dimensions: Standard pen size (6 inches)</li>
        <li>Weight: Balanced for comfortable writing</li>
      </ul>
      
      <p>Add magnetism to your desk with DIGINESS Magnetic Super Pen - Form meets function!</p>
    `
  },
  {
    slug: "magnetic-floating-pen",
    name: 'Magnetic Floating Pen with Base',
    priceNum: 1299,
    price: '₹1,299',
    img: 'assets/products/16.png',
    images: [
      'assets/products/16.png',
      'assets/products/17.png',
      'assets/products/18.png'
    ],
    category: 'Decor',
    description: `
      <h3>Magnetic Floating Pen Display with Premium Base</h3>
      <p>Watch your pen float effortlessly in mid-air with our magnetic levitation technology - a stunning desk decoration.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Magnetic Levitation:</strong> Pen floats silently in the magnetic field</li>
        <li><strong>Premium Pen:</strong> Smooth-writing pen with magnetic core</li>
        <li><strong>Elegant Base:</strong> Wooden or metal base for stability</li>
        <li><strong>LED Lighting:</strong> Optional ambient lighting on base</li>
        <li><strong>Desk Showpiece:</strong> Modern art meets functionality</li>
        <li><strong>USB Powered:</strong> Powers the magnetic levitation system</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Levitation Technology: Electromagnetic suspension</li>
        <li>Base Material: Premium wood or stainless steel</li>
        <li>Power: USB connection for continuous operation</li>
        <li>Floating Height: 2-3 inches above base</li>
        <li>Display Stability: Rotating and hovering capabilities</li>
      </ul>
      
      <p>Defy gravity with DIGINESS Magnetic Floating Pen - Innovation as a decorative art!</p>
    `
  },
  {
    slug: "type-c-lighter",
    name: 'USB Type-C Lighter',
    priceNum: 699,
    price: '₹699',
    img: 'assets/products/19.png',
    images: [
      'assets/products/19.png'
    ],
    category: 'Accessories',
    description: `
      <h3>Modern USB Type-C Rechargeable Lighter</h3>
      <p>Innovative rechargeable lighter that charges via USB Type-C - no fuel or flint needed!</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>USB Type-C Charging:</strong> Charges from your phone charger or power bank</li>
        <li><strong>Flameless Design:</strong> Electric arc ignition for safety</li>
        <li><strong>Windproof:</strong> Works in any weather conditions</li>
        <li><strong>Long Battery Life:</strong> Up to 50+ ignitions per charge</li>
        <li><strong>Compact Size:</strong> Pocket-friendly design</li>
        <li><strong>Eco-Friendly:</strong> No fuel, butane, or flint required</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Ignition: Electric arc technology</li>
        <li>Charging Port: USB Type-C</li>
        <li>Battery: Rechargeable lithium-ion</li>
        <li>Uses: 50+ per charge</li>
        <li>Material: Premium stainless steel</li>
      </ul>
      
      <p>The future of lighting with DIGINESS USB Lighter - Tech meets practicality!</p>
    `
  },
  {
    slug: "nas-256gb",
    name: '256GB NAS Private Cloud Storage',
    priceNum: 12999,
    price: '₹12,999',
    img: 'assets/products/20.png',
    images: [
      'assets/products/20.png',
      'assets/products/21.png'
    ],
    category: 'Storage',
    description: `
      <h3>Personal 256GB NAS - Your Private Cloud</h3>
      <p>Enterprise-grade Network-Attached Storage for secure, personal cloud storage and backup solutions.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>256GB Storage:</strong> Massive capacity for all your files</li>
        <li><strong>Network Access:</strong> Access from anywhere via WiFi or internet</li>
        <li><strong>Private Cloud:</strong> Complete control and privacy of your data</li>
        <li><strong>RAID Support:</strong> Automatic backup and redundancy options</li>
        <li><strong>Multiple Users:</strong> Share files with family and colleagues securely</li>
        <li><strong>Mobile Apps:</strong> Seamless access from iOS and Android devices</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Storage: 256GB total capacity</li>
        <li>Connectivity: Gigabit Ethernet, WiFi 6</li>
        <li>RAID: RAID 0, 1, 5, 6 support</li>
        <li>Users: Up to 64 concurrent users</li>
        <li>Power: Energy-efficient 24/7 operation</li>
      </ul>
      
      <p>Your data, your rules with DIGINESS NAS - Ultimate privacy and accessibility!</p>
    `
  },
  {
    slug: "laser-measuring-device",
    name: 'Digital Laser Measuring Device',
    priceNum: 2199,
    price: '₹2,199',
    img: 'assets/products/22.png',
    images: [
      'assets/products/22.png',
      'assets/products/23.png'
    ],
    category: 'Tools',
    description: `
      <h3>Compact Laser Distance Measuring Device</h3>
      <p>Professional-grade digital laser measurement tool for precision measurements up to 100 meters away.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Laser Precision:</strong> Accurate measurements up to 100m distance</li>
        <li><strong>Digital Display:</strong> Clear LCD screen with multiple unit options</li>
        <li><strong>Area Calculation:</strong> Automatically calculates area and volume</li>
        <li><strong>Compact Design:</strong> Fits in your pocket easily</li>
        <li><strong>Backlit Display:</strong> Works in low light conditions</li>
        <li><strong>Data Storage:</strong> Save and recall up to 20 measurements</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Range: Up to 100 meters</li>
        <li>Accuracy: ±2mm error margin</li>
        <li>Measurement Units: Meter, feet, inch, inch/fraction</li>
        <li>Display: LCD with backlight</li>
        <li>Battery: 2x AAA batteries included</li>
      </ul>
      
      <p>Measure with precision using DIGINESS Laser Meter - Professional accuracy in your hands!</p>
    `
  },
  {
    slug: "mini-bluetooth-mouse",
    name: 'Mini Bluetooth Mouse Card Reader',
    priceNum: 1099,
    price: '₹1,099',
    img: 'assets/products/24.png',
    images: [
      'assets/products/24.png',
      'assets/products/25.png'
    ],
    category: 'Peripherals',
    description: `
      <h3>Ultra-Thin Bluetooth Mouse with Card Reader</h3>
      <p>Thinner than a credit card, this Bluetooth mouse also features a built-in card reader for convenience.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Card Thin Design:</strong> Slimmer than any traditional mouse</li>
        <li><strong>Bluetooth Connectivity:</strong> Wireless connection to any Bluetooth device</li>
        <li><strong>Built-in Card Reader:</strong> Read SD cards and microSD cards</li>
        <li><strong>Dual Function:</strong> Use as mouse or card reader simultaneously</li>
        <li><strong>Portable:</strong> Lightweight, fits in shirt pocket</li>
        <li><strong>Long Battery:</strong> 3+ months on a single charge</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Thickness: 5mm (thinner than credit card)</li>
        <li>Connectivity: Bluetooth 5.0</li>
        <li>Card Support: SD, SDHC, microSD, microSDHC</li>
        <li>Battery: Rechargeable lithium, lasts 3 months</li>
        <li>Compatibility: Windows, macOS, iOS, Android</li>
      </ul>
      
      <p>Ultimate portability with DIGINESS Card Mouse - Innovation in thinness!</p>
    `
  },
  {
    slug: "desk-calendar",
    name: 'Stainless Steel Perpetual Desk Calendar',
    priceNum: 849,
    price: '₹849',
    img: 'assets/products/26.png',
    images: [
      'assets/products/26.png',
      'assets/products/27.png'
    ],
    category: 'Office',
    description: `
      <h3>Premium Stainless Steel Desktop Calendar</h3>
      <p>Elegant perpetual calendar made of premium stainless steel - works for any year, forever!</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Perpetual Design:</strong> Valid for all upcoming years, no need to replace</li>
        <li><strong>Stainless Steel Construction:</strong> Durable and corrosion-resistant</li>
        <li><strong>Mini Size:</strong> Takes minimal desk space</li>
        <li><strong>Magnetic Days/Dates:</strong> Magnetic tiles for day and date</li>
        <li><strong>Professional Look:</strong> Modern minimalist design</li>
        <li><strong>Desk Organizer:</strong> Great gift and workspace accessory</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Material: Premium stainless steel</li>
        <li>Type: Perpetual (all-year calendar)</li>
        <li>Dimensions: Compact tabletop size</li>
        <li>Components: Magnetic date and day tiles</li>
        <li>Finishing: Polished matte finish</li>
      </ul>
      
      <p>Stay organized in style with DIGINESS Steel Calendar - Elegance that lasts forever!</p>
    `
  },
  {
    slug: "professional-screwdriver-set",
    name: 'Professional Electric Screwdriver Set',
    priceNum: 2899,
    price: '₹2,899',
    img: 'assets/products/28.png',
    images: [
      'assets/products/28.png',
      'assets/products/29.png'
    ],
    category: 'Tools',
    description: `
      <h3>Complete Electric Screwdriver Set with 80+ Bits</h3>
      <p>Professional-grade cordless electric screwdriver with comprehensive bit set, tweezers, and spudger tools.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Electric Power:</strong> Cordless rechargeable operation</li>
        <li><strong>80+ Bit Set:</strong> Includes 80 different screwdriver bits for any task</li>
        <li><strong>Precision Control:</strong> Two-speed settings for different applications</li>
        <li><strong>USB Charging:</strong> Recharges via USB-C in 2 hours</li>
        <li><strong>Plus Accessories:</strong> Tweezers, spudger, and precision tools included</li>
        <li><strong>Compact Design:</strong> Comfortable grip, travel-friendly</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Motor: Brushless electric motor</li>
        <li>Speeds: 2-speed settings (300-600 RPM)</li>
        <li>Bits: 80+ precision screwdriver bits</li>
        <li>Battery: Rechargeable lithium-ion, 2+ hours per charge</li>
        <li>Charging: USB-C, fully charges in 2 hours</li>
        <li>Torque: Adjustable from 0.4 to 0.8 N·m</li>
      </ul>
      
      <p>Every repair made easy with DIGINESS Pro Screwdriver Set - Complete solution for any job!</p>
    `
  },
  {
    slug: "smart-lock-box",
    name: 'Smart Biometric Lock Box',
    priceNum: 4999,
    price: '₹4,999',
    img: 'assets/products/30.png',
    images: [
      'assets/products/30.png'
    ],
    category: 'Security',
    description: `
      <h3>Intelligent Biometric Smart Lock Box</h3>
      <p>Secure your valuables with advanced biometric technology - works for doors, drawers, and grills!</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Biometric Security:</strong> Fingerprint recognition for authorized access</li>
        <li><strong>Multiple Access:</strong> Store 100+ fingerprints for family/office</li>
        <li><strong>Versatile Use:</strong> Lock boxes, doors, drawers, and grills</li>
        <li><strong>Emergency Override:</strong> Backup access via PIN code</li>
        <li><strong>Anti-Tamper:</strong> Alarm triggers on unauthorized attempts</li>
        <li><strong>Durable Build:</strong> Heavy-duty steel construction</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Security Type: Biometric fingerprint + PIN backup</li>
        <li>Capacity: 100 fingerprints</li>
        <li>Recognition Speed: <0.5 seconds</li>
        <li>Material: Heavy-duty steel</li>
        <li>Power: Rechargeable battery, 6+ months per charge</li>
        <li>Alarm: Audio alert on unauthorized attempts</li>
      </ul>
      
      <p>Protect what matters with DIGINESS Smart Lock Box - Security in your hands!</p>
    `
  },
  {
    slug: "smart-display-pen",
    name: 'Smart Display Pen with Usage Tracker',
    priceNum: 1899,
    price: '₹1,899',
    img: 'assets/products/31.png',
    images: [
      'assets/products/31.png',
      'assets/products/32.png'
    ],
    category: 'Smart Accessories',
    description: `
      <h3>Intelligent Pen with Built-in Usage Display</h3>
      <p>Track your writing time with this innovative pen that displays daily usage hours on its built-in screen.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Display Screen:</strong> Shows writing hours and usage statistics</li>
        <li><strong>Usage Tracking:</strong> Automatically records how long you've used it</li>
        <li><strong>Premium Writing:</strong> Smooth ballpoint writing experience</li>
        <li><strong>Rechargeable:</strong> USB-C charging for display and sensors</li>
        <li><strong>Data Analytics:</strong> Weekly and monthly usage reports</li>
        <li><strong>Stylish Design:</strong> Modern pen with tech integration</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Display: Small OLED screen for stats</li>
        <li>Tracking: Automatic motion and usage detection</li>
        <li>Battery: 5+ days of continuous use</li>
        <li>Charging: USB-C rechargeable</li>
        <li>Storage: Cloud sync of usage data</li>
        <li>Material: Premium aluminum and plastic</li>
      </ul>
      
      <p>Know your productivity with DIGINESS Smart Pen - Track, write, and improve!</p>
    `
  },
  {
    slug: "magnetic-doorbell",
    name: 'Magnetic Smart Doorbell',
    priceNum: 1599,
    price: '₹1,599',
    img: 'assets/products/33.png',
    images: [
      'assets/products/33.png',
      'assets/products/34.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>Magnetic Smart Doorbell with Motion Alert</h3>
      <p>Easy-to-install doorbell with magnetic mounting - triggers bell sound on door movement.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Magnetic Installation:</strong> No drilling - simply attach to metal door</li>
        <li><strong>Motion Detection:</strong> Senses movement and triggers bell sound</li>
        <li><strong>Multiple Sounds:</strong> Choose from 32 different bell tones</li>
        <li><strong>Wireless Range:</strong> 100+ meters transmission distance</li>
        <li><strong>Easy Removal:</strong> Take off anytime, leave no traces</li>
        <li><strong>Weather-Proof:</strong> Works in all weather conditions</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Installation: Magnetic, no tools needed</li>
        <li>Detection: Infrared motion sensor</li>
        <li>Range: 100+ meters wireless transmission</li>
        <li>Sounds: 32 pre-programmed bell tones</li>
        <li>Power: Rechargeable battery, 30+ days</li>
        <li>Frequency: 433 MHz</li>
      </ul>
      
      <p>Smart security meets convenience with DIGINESS Magnetic Doorbell - Instant alerts!</p>
    `
  },
  {
    slug: "2in1-comb",
    name: '2-in-1 Multi-Function Comb',
    priceNum: 499,
    price: '₹499',
    img: 'assets/products/35.png',
    images: [
      'assets/products/35.png'
    ],
    category: 'Grooming',
    description: `
      <h3>Multi-Purpose 2-in-1 Smart Comb</h3>
      <p>Innovative comb with dual functionality - hair comb and styling tool in one compact design.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Dual Design:</strong> Two combing surfaces for different hair types</li>
        <li><strong>Portable:</strong> Compact and lightweight for travel</li>
        <li><strong>Anti-Static:</strong> Reduces frizz and static in hair</li>
        <li><strong>Gentle on Hair:</strong> Smooth teeth prevent breakage</li>
        <li><strong>Ergonomic Grip:</strong> Comfortable to hold for extended use</li>
        <li><strong>Durable Material:</strong> Premium quality construction</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Material: Premium eco-friendly polymer</li>
        <li>Teeth Type: Anti-static smooth teeth</li>
        <li>Size: Compact pocket size</li>
        <li>Weight: Ultra-lightweight</li>
        <li>Design: Ergonomic with dual-function surfaces</li>
      </ul>
      
      <p>Groom with ease using DIGINESS 2-in-1 Comb - Simplicity meets functionality!</p>
    `
  },
  {
    slug: "ultra-thin-powerbank",
    name: 'Ultra-Thin Power Bank 2650mAh',
    priceNum: 999,
    price: '₹999',
    img: 'assets/products/36.png',
    images: [
      'assets/products/36.png'
    ],
    category: 'Power',
    description: `
      <h3>Ultra-Slim Power Bank - 2650mAh Capacity</h3>
      <p>Thinner and lighter than your smartphone - the most portable charging solution on the market.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Ultra-Thin Design:</strong> Slimmer than most phones, weighs just 95g</li>
        <li><strong>2650mAh Capacity:</strong> Charges smartphones once fully</li>
        <li><strong>Fast Charging:</strong> Quick charge technology for rapid power transfer</li>
        <li><strong>Dual Port:</strong> USB-A and USB-C output ports</li>
        <li><strong>LED Indicator:</strong> Battery level display</li>
        <li><strong>Premium Build:</strong> Metal and aluminum construction</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Capacity: 2650mAh (10Wh)</li>
        <li>Thickness: 7mm (world's thinnest)</li>
        <li>Weight: 95 grams</li>
        <li>Output: Dual ports (USB-A + USB-C)</li>
        <li>Input: USB-C charging</li>
        <li>Charging Time: 1 hour from 0-100%</li>
      </ul>
      
      <p>Stay charged, stay thin with DIGINESS Ultra Power Bank - Portability redefined!</p>
    `
  }
];