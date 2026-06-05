// Complete Product Data - DIGINESS Tech Store
const productData = [
  {
    slug: "ai-intelligent-robot",
    name: 'AI Peluche Intelligent Robot',
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
    img: 'assets/products/10.png',
    images: [
      'assets/products/10.png',
      'assets/products/11.png'
    ],
    category: 'Travel',
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
    img: 'assets/products/12.png',
    images: [
      'assets/products/12.png',
      'assets/products/13.png'
    ],
    category: 'Tools',
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
    img: 'assets/products/14.png',
    images: [
      'assets/products/14.png',
      'assets/products/15.png'
    ],
    category: 'Accessories',
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
    img: 'assets/products/16.png',
    images: [
      'assets/products/16.png',
      'assets/products/17.png',
      'assets/products/18.png'
    ],
    category: 'Accessories',
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
    img: 'assets/products/20.png',
    images: [
      'assets/products/20.png',
      'assets/products/21.png'
    ],
    category: 'Smart Home',
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
    img: 'assets/products/24.png',
    images: [
      'assets/products/24.png',
      'assets/products/25.png'
    ],
    category: 'Accessories',
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
    img: 'assets/products/26.png',
    images: [
      'assets/products/26.png',
      'assets/products/27.png'
    ],
    category: 'Accessories',
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
    img: 'assets/products/30.png',
    images: [
      'assets/products/30.png'
    ],
    category: 'Smart Home',
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
    img: 'assets/products/31.png',
    images: [
      'assets/products/31.png',
      'assets/products/32.png'
    ],
    category: 'Accessories',
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
    img: 'assets/products/35.png',
    images: [
      'assets/products/35.png'
    ],
    category: 'Accessories',
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
    img: 'assets/products/36.png',
    images: [
      'assets/products/36.png'
    ],
    category: 'Travel',
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
  },
  {
    slug: 'fingerprint-clutch-purse',
    name: 'Fingerprint Clutch Purse',
    img: 'assets/products/37.png',
    images: [
      'assets/products/37.png'
    ],
    category: 'Accessories',
    description: `
      <h3>Smart Fingerprint Clutch Purse</h3>
      <p>Secure your essentials with a sleek clutch purse that opens only with your fingerprint.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Fingerprint Lock:</strong> Quick biometric access for added security</li>
        <li><strong>Compact Design:</strong> Slim profile perfect for evenings out</li>
        <li><strong>Premium Materials:</strong> Soft-touch exterior and durable lining</li>
        <li><strong>Multiple Compartments:</strong> Holds cards, cash, and phone safely</li>
        <li><strong>LED Status:</strong> Indicator light for lock/unlock state</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Lock Type: Biometric fingerprint sensor</li>
        <li>Battery: Rechargeable internal battery</li>
        <li>Capacity: Cards, cash, and small essentials</li>
        <li>Material: High-grade synthetic leather</li>
      </ul>
      <p>A secure and stylish clutch for on-the-go moments.</p>
    `
  },
  {
    slug: 'fingerprint-handbag',
    name: 'Fingerprint Hand Bag',
    img: 'assets/products/38.png',
    images: [
      'assets/products/38.png'
    ],
    category: 'Accessories',
    description: `
      <h3>Fingerprint Secure Hand Bag</h3>
      <p>A premium handbag with biometric locking for fashionable security.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Secure Biometric Access:</strong> Open instantly with your fingerprint</li>
        <li><strong>Elegant Design:</strong> Modern styling for day and night</li>
        <li><strong>Extra Pockets:</strong> Organized storage for phone, wallet, and keys</li>
        <li><strong>Comfortable Handles:</strong> Easy to carry all day</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Lock Type: Fingerprint sensor</li>
        <li>Material: Premium vegan leather</li>
        <li>Dimensions: Spacious everyday carry fit</li>
      </ul>
      <p>Secure style for the modern woman who values both fashion and safety.</p>
    `
  },
  {
    slug: 'fingerprint-backpack',
    name: 'Fingerprint Backpack',
    img: 'assets/products/39.png',
    images: [
      'assets/products/39.png'
    ],
    category: 'Accessories',
    description: `
      <h3>Fingerprint Secure Backpack</h3>
      <p>Carry your essentials with confidence in a backpack protected by biometric locking.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Fingerprint Lock:</strong> Fast unlocking and superior security</li>
        <li><strong>Spacious Interior:</strong> Room for laptop, books, and daily essentials</li>
        <li><strong>Comfort Padding:</strong> Ergonomic straps for long wear</li>
        <li><strong>Water Resistant:</strong> Keeps your belongings safe from light rain</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Lock Type: Biometric fingerprint sensor</li>
        <li>Material: Durable fabric with water resistance</li>
        <li>Capacity: Large everyday backpack</li>
      </ul>
      <p>Perfect for smart travelers and commuters who need security and comfort.</p>
    `
  },
  {
    slug: 'yumi-ai-intelligent-toy',
    name: 'Yumi AI Intelligent Toy',
    img: 'assets/products/40.png',
    images: [
      'assets/products/40.png'
    ],
    category: 'AI Toys',
    description: `
      <h3>Yumi AI Intelligent Toy</h3>
      <p>A playful AI companion with learning features and interactive responses.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Smart Interaction:</strong> Responds to voice and gestures</li>
        <li><strong>Learning Mode:</strong> Improves responses over time</li>
        <li><strong>Safe for Kids:</strong> Soft design with durable construction</li>
        <li><strong>Fun Activities:</strong> Games, stories, and educational play</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>AI Type: Interactive companion intelligence</li>
        <li>Battery: Rechargeable with USB-C</li>
        <li>Age Range: Suitable for children and families</li>
      </ul>
      <p>Yumi brings smart play and learning together in one adorable toy.</p>
    `
  },
  {
    slug: 'ct-plus-scientific-calculator',
    name: 'CT Plus Scientific Calculator',
    img: 'assets/products/41.png',
    images: [
      'assets/products/41.png'
    ],
    category: 'Accessories',
    description: `
      <h3>CT Plus Scientific Calculator</h3>
      <p>High-precision calculator for students, engineers, and professionals.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Scientific Functions:</strong> Includes trigonometry, logarithms, and statistics</li>
        <li><strong>Clear Display:</strong> Easy-to-read LCD screen</li>
        <li><strong>Solar + Battery:</strong> Dual power backup for reliability</li>
        <li><strong>Compact Design:</strong> Lightweight and portable</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Display: Multi-line LCD</li>
        <li>Power: Solar panel with battery backup</li>
        <li>Functions: 240+ scientific operations</li>
      </ul>
      <p>Smart, precise calculation for study and work.</p>
    `
  },
  {
    slug: 'escult-premium-smart-switches',
    name: 'Escult Premium Smart Switches',
    img: 'assets/products/42.png',
    images: [
      'assets/products/42.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>Escult Premium Smart Switches</h3>
      <p>Modern smart switches that combine style, performance, and home automation control.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Touch Control:</strong> Smooth touch buttons for lights and fans</li>
        <li><strong>Voice Ready:</strong> Works with smart assistants</li>
        <li><strong>Premium Finish:</strong> Sleek glass surface for luxury rooms</li>
        <li><strong>Remote Access:</strong> Control from your phone</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Compatibility: WiFi-enabled smart home systems</li>
        <li>Power: 220V AC</li>
        <li>Installation: Standard wall switch box</li>
      </ul>
      <p>Upgrade any room with intelligent, premium home controls.</p>
    `
  },
  {
    slug: 'lumi-glass-smart-switches',
    name: 'Lumi Glass Smart Switches',
    img: 'assets/products/43.png',
    images: [
      'assets/products/43.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>Lumi Glass Smart Switches</h3>
      <p>Elegant glass-panel switches for smart lighting and scene control.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Glass Touch Panel:</strong> Premium look and smooth touch feedback</li>
        <li><strong>Smart Home Ready:</strong> Works with popular voice assistants</li>
        <li><strong>Custom Scenes:</strong> Program multiple lighting scenes</li>
        <li><strong>Easy Installation:</strong> Fits standard switch boxes</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Compatibility: WiFi + smart assistant support</li>
        <li>Capacity: 16A switches</li>
        <li>Material: Tempered glass touch panel</li>
      </ul>
      <p>Beautiful glass switches for modern smart homes.</p>
    `
  },
  {
    slug: 'lumi-knx-ai-display',
    name: 'Lumi KNX AI Display',
    img: 'assets/products/44.png',
    images: [
      'assets/products/44.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>Lumi KNX AI Display</h3>
      <p>AI-powered home control display with KNX integration for advanced smart environments.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>AI Home Automation:</strong> Smart control for lights, climate, and security</li>
        <li><strong>KNX Compatibility:</strong> Works with KNX smart building systems</li>
        <li><strong>Interactive Display:</strong> Touchscreen interface for easy management</li>
        <li><strong>Voice Control:</strong> Built-in voice assistant support</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Screen: Touch-enabled color display</li>
        <li>Connectivity: KNX, WiFi, Bluetooth</li>
        <li>Power: Wired installation</li>
      </ul>
      <p>Advanced smart building display for modern homes and offices.</p>
    `
  },
  {
    slug: 'lumi-duo-quad-tactile',
    name: 'Lumi Duo Quad Tactile',
    img: 'assets/products/45.png',
    images: [
      'assets/products/45.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>Lumi Duo Quad Tactile</h3>
      <p>Multi-button tactile switch panel designed for flexible smart lighting control.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Quad Control:</strong> Four tactile buttons for room scenes and devices</li>
        <li><strong>Smart Automation:</strong> Integrates with smart home systems</li>
        <li><strong>Elegant Finish:</strong> Durable matte surface for premium feel</li>
        <li><strong>Programmable:</strong> Customizable button actions</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Compatibility: Smart home automation protocols</li>
        <li>Buttons: Four tactile controls</li>
        <li>Installation: Wall-mounted switch panel</li>
      </ul>
      <p>Powerful smart switch panel for intuitive room control.</p>
    `
  },
  {
    slug: 'lumi-versa-smart-switches',
    name: 'Lumi Versa Smart Switches',
    img: 'assets/products/48.png',
    images: [
      'assets/products/48.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>Lumi Versa Smart Switches</h3>
      <p>Versatile smart switches built for reliable lighting and device automation.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Versatile Control:</strong> Supports multiple load types and scenes</li>
        <li><strong>Smart Connectivity:</strong> Connects with WiFi and home automation platforms</li>
        <li><strong>Durable Design:</strong> Engineered for consistent performance</li>
        <li><strong>Energy Monitoring:</strong> Tracks power usage when paired with smart systems</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Compatibility: Smart home systems and voice assistants</li>
        <li>Capacity: Suitable for home lighting and appliances</li>
        <li>Installation: Standard switch box</li>
      </ul>
      <p>Reliable and flexible smart switches for every room in the house.</p>
    `
  },
  {
    slug: 'smartgreeter-sense',
    name: 'SmartGreeter Sense',
    img: 'assets/products/46.png',
    images: [
      'assets/products/46.png'
    ],
    category: 'Smart Home',
    description: `
      <h3>SmartGreeter Sense</h3>
      <p>An intelligent visitor engagement robot that detects arrivals and delivers personalized welcome messages.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Presence Detection:</strong> Detects human movement in reception areas</li>
        <li><strong>Welcome Messaging:</strong> Plays personalized greetings for visitors</li>
        <li><strong>Reception Ready:</strong> Ideal for offices, showrooms, and smart buildings</li>
        <li><strong>Engaging Design:</strong> Friendly robot interface for guest interactions</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Function: Visitor engagement and welcome messaging</li>
        <li>Connectivity: WiFi-enabled</li>
        <li>Power: Rechargeable battery or plug-in</li>
      </ul>
      <p>Enhance first impressions with smart reception automation.</p>
    `
  },
  {
    slug: 'scooter-luggage-trolley',
    name: 'Scooter Luggage Trolley',
    img: 'assets/products/47.png',
    images: [
      'assets/products/47.png'
    ],
    category: 'Travel',
    description: `
      <h3>Scooter Luggage Trolley</h3>
      <p>A smart luggage trolley that drives you through airports and stations with ease.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Motorized Ride:</strong> Drive your luggage for hands-free travel</li>
        <li><strong>Travel Friendly:</strong> Easy to maneuver in crowded transit hubs</li>
        <li><strong>Sturdy Frame:</strong> Durable construction for frequent journeys</li>
        <li><strong>Storage Capacity:</strong> Plenty of room for essentials and carry-on gear</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Mode: Electric scooter luggage trolley</li>
        <li>Battery: Rechargeable battery pack</li>
        <li>Capacity: Travel-size luggage compartment</li>
      </ul>
      <p>Travel smarter with luggage that moves with you.</p>
    `
  },
  {
    slug: 'usb-to-rs485-adapter',
    name: 'USB to RS485 Adapter',
    img: 'assets/products/49.png',
    images: [
      'assets/products/49.png',
      'assets/products/50.png'
    ],
    category: 'Computer Accessories',
    priceNum: 1299,
    price: '₹1,299',
    description: `
      <h3>USB to RS485 Adapter</h3>
      <p>Reliable USB to RS485 converter for industrial communication, automation, and serial device control.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>RS485 Compatibility:</strong> Connects USB devices to RS485 networks and devices</li>
        <li><strong>Stable Communication:</strong> Supports reliable half-duplex serial data transfer</li>
        <li><strong>Plug and Play:</strong> Easy driver installation for Windows and Linux</li>
        <li><strong>Compact Design:</strong> Portable adapter ready for field deployment</li>
        <li><strong>LED Indicators:</strong> Status LEDs for power and data transmission</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Interface: USB-A to RS485</li>
        <li>Protocol: Half-duplex RS485 serial communication</li>
        <li>Power: USB-powered</li>
        <li>Compatibility: Windows, Linux, macOS</li>
      </ul>
      <p>Perfect for connecting industrial controllers, meters, and automation equipment to modern PCs.</p>
    `
  },
  {
    slug: 'type-c-to-usb-3-converter',
    name: 'Type C to USB 3.0 Converter',
    img: 'assets/products/51.png',
    images: [
      'assets/products/51.png',
      'assets/products/52.png'
    ],
    category: 'Computer Accessories',
    priceNum: 899,
    price: '₹899',
    description: `
      <h3>Type C to USB 3.0 Converter</h3>
      <p>High-speed Type-C adapter that lets you connect USB 3.0 devices to modern laptops and tablets.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>USB 3.0 Speed:</strong> Fast data transfer up to 5Gbps</li>
        <li><strong>Wide Compatibility:</strong> Works with Type-C laptops, tablets, and smartphones</li>
        <li><strong>Compact Design:</strong> Lightweight and easy to carry in a bag or pocket</li>
        <li><strong>Durable Build:</strong> Reinforced connector and braided cable for long life</li>
        <li><strong>Plug and Play:</strong> No additional drivers required</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Connector: USB Type-C to USB Type-A 3.0</li>
        <li>Transfer Rate: Up to 5Gbps</li>
        <li>Compatibility: USB 3.0 / 2.0 peripherals</li>
        <li>Power: Bus powered</li>
      </ul>
      <p>Use this converter for fast file transfers, external drives, and USB accessories on Type-C devices.</p>
    `
  },
  {
    slug: 'type-c-8-in-1-hub',
    name: 'Type-C 8-in-1 Hub',
    img: 'assets/products/53.png',
    images: [
      'assets/products/53.png',
      'assets/products/54.png'
    ],
    category: 'Computer Accessories',
    priceNum: 2499,
    price: '₹2,499',
    description: `
      <h3>Type-C 8-in-1 Hub</h3>
      <p>Powerful Type-C hub with eight ports to expand your laptop or tablet connectivity in one compact unit.</p>
      <h4>Key Features:</h4>
      <ul>
        <li><strong>8 Ports:</strong> Multiple USB, HDMI, SD, and power delivery ports in one hub</li>
        <li><strong>High-Speed Data:</strong> USB 3.0 ports for fast transfers and peripherals</li>
        <li><strong>HDMI Output:</strong> Supports external displays for presentations and productivity</li>
        <li><strong>Power Delivery:</strong> Pass-through charging for compatible Type-C laptops</li>
        <li><strong>Compact Design:</strong> Sleek aluminum housing for durability and style</li>
      </ul>
      <h4>Specifications:</h4>
      <ul>
        <li>Ports: USB-C PD, USB 3.0, HDMI, SD, microSD, Ethernet (if available), audio</li>
        <li>Compatibility: USB-C laptops and tablets</li>
        <li>Transfer Rate: Up to 5Gbps on USB 3.0 ports</li>
        <li>Power Delivery: Up to 60W pass-through charging</li>
      </ul>
      <p>Expand your workstation instantly with DIGINESS Type-C Hub - the easiest way to connect all your devices.</p>
    `
  }
];