// Product data with rich HTML descriptions and multiple images
const productData = [
  {
    slug: "smart-watch-pro",
    name: 'Smart Watch Pro',
    priceNum: 16999,
    price: '₹16,999',
    img: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Watch',
    description: `
      <h3>Premium Smartwatch with Advanced Features</h3>
      <p>The Smart Watch Pro redefines what a wearable can do. Engineered for the modern professional who demands both style and substance.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Heart Rate Monitoring:</strong> 24/7 accurate heart rate tracking with alerts for abnormal readings</li>
        <li><strong>Built-in GPS:</strong> Track your runs, cycles, and hikes without needing your phone</li>
        <li><strong>7-Day Battery Life:</strong> Extended battery that keeps up with your busy lifestyle</li>
        <li><strong>Blood Oxygen Monitor:</strong> Track SpO2 levels during sleep and workouts</li>
        <li><strong>Sleep Tracking:</strong> Detailed analysis of light, deep, and REM sleep stages</li>
        <li><strong>5 ATM Water Resistance:</strong> Swim-proof and shower-friendly design</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Display: 1.4" AMOLED, always-on display</li>
        <li>Connectivity: Bluetooth 5.2, WiFi, NFC for payments</li>
        <li>Sensors: Accelerometer, gyroscope, heart rate, SpO2</li>
        <li>Compatibility: iOS 14+ and Android 10+</li>
      </ul>
      
      <p>Experience the perfect blend of fitness tracking and smart features with the Smart Watch Pro from DIGINESS.</p>
    `
  },
  {
    slug: "wireless-earbuds-x1",
    name: 'Wireless Earbuds X1',
    priceNum: 9999,
    price: '₹9,999',
    img: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Audio',
    description: `
      <h3>Immersive Sound, True Wireless Freedom</h3>
      <p>The Wireless Earbuds X1 deliver studio-quality audio with active noise cancellation, perfect for music lovers and frequent travelers.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Active Noise Cancellation:</strong> Block out up to 35dB of ambient noise</li>
        <li><strong>20-Hour Playtime:</strong> 5 hours from earbuds + 15 hours from charging case</li>
        <li><strong>Wireless Charging Case:</strong> Qi-compatible for cable-free charging</li>
        <li><strong>IPX4 Sweat Resistance:</strong> Perfect for workouts and light rain</li>
        <li><strong>Touch Controls:</strong> Intuitive touch sensors for music and calls</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Driver: 10mm dynamic drivers with graphene diaphragm</li>
        <li>Codecs: AAC, SBC</li>
        <li>Bluetooth: 5.2 with low latency gaming mode</li>
        <li>Fast charging: 15 min charge = 2 hours playback</li>
      </ul>
      
      <p>Elevate your audio experience with the Earbuds X1 - where clarity meets convenience.</p>
    `
  },
  {
    slug: "mini-drone-cam",
    name: 'Mini Drone Cam',
    priceNum: 21499,
    price: '₹21,499',
    img: 'https://tse2.mm.bing.net/th/id/OIP.epF6Hxs9i497obQQBjvqBAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    images: [
      'https://tse2.mm.bing.net/th/id/OIP.epF6Hxs9i497obQQBjvqBAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Camera',
    description: `
      <h3>Capture Life from New Heights</h3>
      <p>The Mini Drone Cam packs professional-grade aerial photography into a portable, foldable design that fits in your pocket.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>4K Ultra HD Camera:</strong> 30fps video with 12MP photos</li>
        <li><strong>3-Axis Gimbal Stabilization:</strong> Smooth footage even in windy conditions</li>
        <li><strong>30-Minute Flight Time:</strong> Extended battery for longer adventures</li>
        <li><strong>5KM HD Video Transmission:</strong> Low-latency feed to your smartphone</li>
        <li><strong>Intelligent Flight Modes:</strong> Follow me, waypoints, orbit, and return-to-home</li>
      </ul>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Max speed: 16 m/s in sport mode</li>
        <li>Wind resistance: Level 5</li>
        <li>Obstacle sensing: Forward and downward sensors</li>
        <li>Foldable size: 145×85×58mm</li>
      </ul>
      
      <p>Whether you're a beginner or pro, the Mini Drone Cam makes aerial cinematography accessible to everyone.</p>
    `
  },
  {
    slug: "smart-speaker-360",
    name: 'Smart Speaker 360',
    priceNum: 12499,
    price: '₹12,499',
    img: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Audio',
    description: `
      <h3>360° Sound for Every Room</h3>
      <p>The Smart Speaker 360 fills any space with rich, room-filling sound while serving as your intelligent home assistant.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>360° Audio:</strong> Full-range drivers project sound in every direction</li>
        <li><strong>Voice Control:</strong> Built-in far-field microphones for hands-free control</li>
        <li><strong>Multi-Room Audio:</strong> Sync multiple speakers throughout your home</li>
        <li><strong>Smart Home Hub:</strong> Control lights, thermostats, and more</li>
      </ul>
    `
  },
  {
    slug: "fitness-tracker-flex",
    name: 'Fitness Tracker Flex',
    priceNum: 5999,
    price: '₹5,999',
    img: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Watch',
    description: `
      <h3>Your Daily Wellness Companion</h3>
      <p>The Fitness Tracker Flex is your lightweight, comfortable partner for achieving your health and fitness goals.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Step counting, distance, and calories burned</li>
        <li>24/7 heart rate monitoring</li>
        <li>Sleep quality analysis</li>
        <li>14 activity modes</li>
        <li>5-day battery life</li>
        <li>Water-resistant up to 50m</li>
      </ul>
    `
  },
  {
    slug: "vr-headset-pro",
    name: 'VR Headset Pro',
    priceNum: 32999,
    price: '₹32,999',
    img: 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'VR',
    description: `
      <h3>Step Into New Worlds</h3>
      <p>The VR Headset Pro delivers immersive virtual reality with stunning visuals and precise tracking for gaming, entertainment, and productivity.</p>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Dual 4K displays for sharp, clear visuals</li>
        <li>Inside-out tracking - no external sensors needed</li>
        <li>110° field of view</li>
        <li>Ergonomic design with adjustable straps</li>
        <li>Built-in spatial audio</li>
        <li>Compatible with thousands of VR games and apps</li>
      </ul>
    `
  },
  {
    slug: "power-bank-20k",
    name: 'Power Bank 20K',
    priceNum: 3499,
    price: '₹3,499',
    img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/2764674/pexels-photo-2764674.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Accessory',
    description: `
      <h3>Power When You Need It Most</h3>
      <p>The Power Bank 20K ensures your devices never run out of battery, whether you're traveling, commuting, or working remotely.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>20,000mAh capacity - charges most phones 4-5 times</li>
        <li>USB-C Power Delivery: 18W fast charging</li>
        <li>Two USB-A ports + one USB-C port</li>
        <li>Charge two devices simultaneously</li>
        <li>LED battery level indicator</li>
        <li>Slim, portable design</li>
      </ul>
    `
  },
  {
    slug: "action-camera-4k",
    name: 'Action Camera 4K',
    priceNum: 18999,
    price: '₹18,999',
    img: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?w=600&h=800&fit=crop',
      'https://tse2.mm.bing.net/th/id/OIP.epF6Hxs9i497obQQBjvqBAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
    ],
    category: 'Camera',
    description: `
      <h3>Capture Every Adventure</h3>
      <p>The Action Camera 4K is built for thrill-seekers who want to document their most exciting moments in stunning detail.</p>
      
      <h4>Specifications:</h4>
      <ul>
        <li>4K video at 60fps, 1080p at 240fps slow-motion</li>
        <li>20MP photos with burst mode</li>
        <li>Waterproof up to 10m without housing</li>
        <li>Electronic image stabilization</li>
        <li>Voice control for hands-free operation</li>
        <li>Compatible with all standard action camera mounts</li>
      </ul>
    `
  },
  {
    slug: "smart-glasses",
    name: 'Smart Glasses',
    priceNum: 27499,
    price: '₹27,499',
    img: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'VR',
    description: `
      <h3>The Future of Wearable Tech</h3>
      <p>Smart Glasses seamlessly blend style with cutting-edge technology, keeping you connected without looking at your phone.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>AR display for notifications, navigation, and more</li>
        <li>Built-in speakers and microphone for calls</li>
        <li>Touch-sensitive frame for controls</li>
        <li>Blue light filtering lenses</li>
        <li>8-hour battery life</li>
        <li>Customizable prescription lenses available</li>
      </ul>
    `
  },
  {
    slug: "gps-tracker",
    name: 'GPS Tracker',
    priceNum: 6799,
    price: '₹6,799',
    img: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/2764674/pexels-photo-2764674.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Accessory',
    description: `
      <h3>Never Lose What Matters</h3>
      <p>The GPS Tracker gives you peace of mind by helping you keep track of your valuable items, pets, or loved ones.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Real-time GPS tracking via mobile app</li>
        <li>Geofence alerts when items leave designated areas</li>
        <li>Compact, water-resistant design</li>
        <li>30-day battery life</li>
        <li>Works worldwide with cellular connectivity</li>
        <li>Two-way location sharing</li>
      </ul>
    `
  },
  {
    slug: "smart-ring",
    name: 'Smart Ring',
    priceNum: 8999,
    price: '₹8,999',
    img: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Watch',
    description: `
      <h3>Health Tracking, Discreetly on Your Finger</h3>
      <p>The Smart Ring packs advanced health sensors into a stylish, comfortable ring that you'll forget you're wearing.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Heart rate, sleep, and activity tracking</li>
        <li>Temperature monitoring for cycle tracking</li>
        <li>7-day battery life</li>
        <li>Titanium construction, hypoallergenic</li>
        <li>Wireless charging</li>
        <li>Available in multiple sizes and finishes</li>
      </ul>
    `
  },
  {
    slug: "noise-cancelling-hp",
    name: 'Noise Cancelling HP',
    priceNum: 14999,
    price: '₹14,999',
    img: 'https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Audio',
    description: `
      <h3>Escape Into Your Music</h3>
      <p>These over-ear headphones combine premium sound quality with industry-leading noise cancellation for the ultimate listening experience.</p>
      
      <h4>Specifications:</h4>
      <ul>
        <li>Adaptive noise cancellation adjusts to your environment</li>
        <li>40mm custom drivers for deep bass and clear highs</li>
        <li>30-hour battery with quick charge</li>
        <li>Comfort-fit ear cushions for all-day wear</li>
        <li>Foldable design for travel</li>
        <li>Wired option for lossless audio</li>
      </ul>
    `
  },
  {
    slug: "digital-notebook",
    name: 'Digital Notebook',
    priceNum: 11299,
    price: '₹11,299',
    img: 'https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Accessory',
    description: `
      <h3>The Perfect Blend of Paper and Digital</h3>
      <p>Write naturally on paper-like surface while all your notes are automatically saved and organized in the cloud.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Write with any pen (special paper required) or stylus</li>
        <li>Instantly digitize handwritten notes</li>
        <li>Search handwritten text</li>
        <li>Convert handwriting to text</li>
        <li>Sync with cloud services (Google Drive, Dropbox, Evernote)</li>
        <li>30-day battery life</li>
      </ul>
    `
  },
  {
    slug: "drone-4k-pro",
    name: 'Drone 4K Pro',
    priceNum: 39999,
    price: '₹39,999',
    img: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?w=600&h=800&fit=crop',
      'https://tse2.mm.bing.net/th/id/OIP.epF6Hxs9i497obQQBjvqBAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Camera',
    description: `
      <h3>Professional Aerial Photography</h3>
      <p>The Drone 4K Pro is designed for serious creators who demand the best in image quality and flight performance.</p>
      
      <h4>Specifications:</h4>
      <ul>
        <li>1-inch CMOS sensor for 20MP photos</li>
        <li>4K HDR video at 60fps</li>
        <li>40-minute max flight time</li>
        <li>Omnidirectional obstacle sensing</li>
        <li>10km HD video transmission</li>
        <li>Advanced subject tracking and waypoint missions</li>
      </ul>
    `
  },
  {
    slug: "smart-doorbell",
    name: 'Smart Doorbell',
    priceNum: 7999,
    price: '₹7,999',
    img: 'https://images.pexels.com/photos/2764674/pexels-photo-2764674.jpeg?w=600&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/2764674/pexels-photo-2764674.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=600&h=800&fit=crop',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?w=600&h=800&fit=crop'
    ],
    category: 'Accessory',
    description: `
      <h3>See Who's at Your Door, Anywhere</h3>
      <p>The Smart Doorbell gives you peace of mind by letting you see and speak with visitors from your smartphone, no matter where you are.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>1080p HD video with night vision</li>
        <li>Two-way audio with noise reduction</li>
        <li>Motion detection alerts</li>
        <li>Cloud and local recording options</li>
        <li>Works with existing doorbell wiring or battery</li>
        <li>Weather-resistant design</li>
      </ul>
    `
  }
];