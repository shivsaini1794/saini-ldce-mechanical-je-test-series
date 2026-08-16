const mockTest = [
  {
    id: 1,
    question: "भारत की सबसे लंबी नदी कौन सी है?",
    options: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    answer: "गंगा",
  },
  {
    id: 2,
    question: "LHB Coach का Full Form क्या है?",
    options: [
      "Linke Hofmann Busch",
      "Long Heavy Body",
      "Light High Body",
      "Linear Hydraulic Brake",
    ],
    answer: "Linke Hofmann Busch",
  },
  {
    id: 3,
    question: "भारतीय रेलवे का मुख्यालय कहाँ है?",
    options: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer: "नई दिल्ली",
  },

    {
    id: 4,
    question: "भारतीय रेलवे का राष्ट्रीयकरण कब हुआ?",
    options: ["1951", "1947", "1955", "1960"],
    answer: "1951",
  },
  {
    id: 5,
    question: "ICF का Full Form क्या है?",
    options: [
      "Integral Coach Factory",
      "Indian Coach Frame",
      "Integrated Coach Facility",
      "International Coach Factory",
    ],
    answer: "Integral Coach Factory",
  },
  {
    id: 6,
    question: "रेलवे में WAP इंजन किस प्रकार का होता है?",
    options: ["Electric Passenger", "Diesel Passenger", "Goods", "Metro"],
    answer: "Electric Passenger",
  },
  {
    id: 7,
    question: "रेलवे में WDG इंजन का उपयोग किसके लिए होता है?",
    options: ["Goods Train", "Passenger Train", "Metro", "EMU"],
    answer: "Goods Train",
  },
  {
    id: 8,
    question: "SI Unit of Force क्या है?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answer: "Newton",
  },
  {
    id: 9,
    question: "Power की SI Unit क्या है?",
    options: ["Watt", "Newton", "Joule", "Volt"],
    answer: "Watt",
  },
  {
    id: 10,
    question: "Pressure की SI Unit क्या है?",
    options: ["Pascal", "Newton", "Joule", "Bar"],
    answer: "Pascal",
  },
  {
    id: 11,
    question: "1 HP बराबर कितना Watt होता है?",
    options: ["746", "1000", "500", "735"],
    answer: "746",
  },
  {
    id: 12,
    question: "Thermodynamics का First Law किससे संबंधित है?",
    options: [
      "Energy Conservation",
      "Entropy",
      "Momentum",
      "Pressure"
    ],
    answer: "Energy Conservation",
  },
  {
    id: 13,
    question: "Boiling Point of Water?",
    options: ["100°C", "90°C", "80°C", "120°C"],
    answer: "100°C",
  },
  {
    id: 14,
    question: "Melting Point of Ice?",
    options: ["0°C", "10°C", "5°C", "2°C"],
    answer: "0°C",
  },
  {
    id: 15,
    question: "Steel में Carbon लगभग कितना होता है?",
    options: ["0.1–2%", "5%", "10%", "20%"],
    answer: "0.1–2%",
  },
  {
    id: 16,
    question: "Cast Iron में Carbon लगभग कितना होता है?",
    options: ["2–4%", "0.5%", "1%", "6%"],
    answer: "2–4%",
  },
  {
    id: 17,
    question: "रेलवे में Air Brake का मुख्य लाभ क्या है?",
    options: [
      "Safety",
      "High Fuel Consumption",
      "Low Speed",
      "Noise"
    ],
    answer: "Safety",
  },
  {
    id: 18,
    question: "Bearing का मुख्य कार्य क्या है?",
    options: [
      "Reduce Friction",
      "Increase Heat",
      "Increase Weight",
      "Stop Rotation"
    ],
    answer: "Reduce Friction",
  },
  {
    id: 19,
    question: "Gear का उपयोग किसलिए किया जाता है?",
    options: [
      "Power Transmission",
      "Cooling",
      "Lighting",
      "Painting"
    ],
    answer: "Power Transmission",
  },
  {
    id: 20,
    question: "Lathe Machine का मुख्य कार्य क्या है?",
    options: [
      "Turning",
      "Drilling",
      "Grinding",
      "Welding"
    ],
    answer: "Turning",
  },
  {
    id: 21,
    question: "Drilling Machine का उपयोग किसलिए होता है?",
    options: [
      "Hole Making",
      "Cutting",
      "Casting",
      "Forging"
    ],
    answer: "Hole Making",
  },
  {
    id: 22,
    question: "Welding में PPE का अर्थ क्या है?",
    options: [
      "Personal Protective Equipment",
      "Power Protection Equipment",
      "Pressure Pipe Equipment",
      "Personal Pipe Equipment"
    ],
    answer: "Personal Protective Equipment",
  },
  {
    id: 23,
    question: "रेलवे का सबसे बड़ा Zone कौन सा है?",
    options: [
      "Northern Railway",
      "Western Railway",
      "Central Railway",
      "Eastern Railway"
    ],
    answer: "Northern Railway",
  },
  {
    id: 24,
    question: "भारत का राष्ट्रीय पशु कौन है?",
    options: ["Tiger", "Lion", "Elephant", "Leopard"],
    answer: "Tiger",
  },
  {
    id: 25,
    question: "भारत का राष्ट्रीय गान किसने लिखा?",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra",
      "Premchand",
      "Subhash Bose"
    ],
    answer: "Rabindranath Tagore",
  },// Question 4 se aage yahin add honge
  {
    id: 26,
    question: "Steam का SI Unit क्या है?",
    options: ["kg", "N", "Pa", "J"],
    answer: "kg",
  },
  {
    id: 27,
    question: "Density की SI Unit क्या है?",
    options: ["kg/m³", "N/m", "Pa", "kg"],
    answer: "kg/m³",
  },
  {
    id: 28,
    question: "Specific Gravity किसका अनुपात है?",
    options: [
      "Density of substance / Density of water",
      "Mass / Volume",
      "Pressure / Area",
      "Force / Area"
    ],
    answer: "Density of substance / Density of water",
  },
  {
    id: 29,
    question: "Boiler में Safety Valve का कार्य क्या है?",
    options: [
      "Excess Pressure Release",
      "Water Fill",
      "Fuel Supply",
      "Steam Cool"
    ],
    answer: "Excess Pressure Release",
  },
  {
    id: 30,
    question: "रेलवे में CBC का Full Form क्या है?",
    options: [
      "Centre Buffer Coupler",
      "Central Brake Control",
      "Coach Brake Cylinder",
      "Central Buffer Coach"
    ],
    answer: "Centre Buffer Coupler",
  },
  {
    id: 31,
    question: "LHB Coach मुख्यतः किस धातु से बनता है?",
    options: ["Stainless Steel", "Copper", "Brass", "Cast Iron"],
    answer: "Stainless Steel",
  },
  {
    id: 32,
    question: "Wheel Gauge किससे मापा जाता है?",
    options: ["Vernier Gauge", "Scale", "Micrometer", "Feeler Gauge"],
    answer: "Vernier Gauge",
  },
  {
    id: 33,
    question: "Micrometer का Least Count कितना होता है?",
    options: ["0.01 mm", "0.1 mm", "1 mm", "0.5 mm"],
    answer: "0.01 mm",
  },
  {
    id: 34,
    question: "Vernier Caliper का सामान्य Least Count कितना होता है?",
    options: ["0.02 mm", "1 mm", "0.5 mm", "0.2 mm"],
    answer: "0.02 mm",
  },
  {
    id: 35,
    question: "Bearing का सबसे सामान्य प्रकार कौन सा है?",
    options: [
      "Ball Bearing",
      "Journal Bearing",
      "Bush Bearing",
      "Magnetic Bearing"
    ],
    answer: "Ball Bearing",
  },
  {
    id: 36,
    question: "Lathe Machine में Chuck का कार्य क्या है?",
    options: [
      "Hold Workpiece",
      "Cool Tool",
      "Measure Job",
      "Increase Speed"
    ],
    answer: "Hold Workpiece",
  },
  {
    id: 37,
    question: "Milling Machine का मुख्य कार्य क्या है?",
    options: ["Machining Flat Surface", "Welding", "Casting", "Forging"],
    answer: "Machining Flat Surface",
  },
  {
    id: 38,
    question: "Grinding Wheel का उपयोग किसलिए होता है?",
    options: ["Finishing", "Casting", "Forging", "Drilling"],
    answer: "Finishing",
  },
  {
    id: 39,
    question: "Heat Treatment का उद्देश्य क्या है?",
    options: [
      "Improve Mechanical Properties",
      "Increase Weight",
      "Reduce Length",
      "Change Colour"
    ],
    answer: "Improve Mechanical Properties",
  },
  {
    id: 40,
    question: "Normal Room Temperature लगभग कितना माना जाता है?",
    options: ["27°C", "50°C", "10°C", "0°C"],
    answer: "27°C",
  },
  {
    id: 41,
    question: "Torque की SI Unit क्या है?",
    options: ["N·m", "J", "W", "Pa"],
    answer: "N·m",
  },
  {
    id: 42,
    question: "Velocity की SI Unit क्या है?",
    options: ["m/s", "km", "N", "kg"],
    answer: "m/s",
  },
  {
    id: 43,
    question: "Acceleration की SI Unit क्या है?",
    options: ["m/s²", "m/s", "N", "kg"],
    answer: "m/s²",
  },
  {
    id: 44,
    question: "रेलवे ट्रैक की Broad Gauge चौड़ाई कितनी होती है?",
    options: ["1676 mm", "1000 mm", "762 mm", "1435 mm"],
    answer: "1676 mm",
  },
  {
    id: 45,
    question: "Indian Railways का Motto क्या है?",
    options: [
      "Lifeline of the Nation",
      "Nation First",
      "Speed with Safety",
      "Moving India"
    ],
    answer: "Lifeline of the Nation",
  },
  {
    id: 46,
    question: "बल = ?",
    options: [
      "Mass × Acceleration",
      "Mass × Velocity",
      "Pressure × Area",
      "Work / Time"
    ],
    answer: "Mass × Acceleration",
  },
  {
    id: 47,
    question: "Work की SI Unit क्या है?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Joule",
  },
  {
    id: 48,
    question: "Energy की SI Unit क्या है?",
    options: ["Joule", "Watt", "Volt", "Ampere"],
    answer: "Joule",
  },
  {
    id: 49,
    question: "रेलवे में Brake Power Test किससे संबंधित है?",
    options: [
      "Brake System",
      "Engine Oil",
      "Fuel Tank",
      "Wheel Painting"
    ],
    answer: "Brake System",
  },
  {
    id: 50,
    question: "भारतीय रेलवे की स्थापना किस वर्ष हुई थी?",
    options: ["1853", "1947", "1951", "1865"],
    answer: "1853",
  },
  {
    id: 51,
    question: "Steam Engine में कार्य करने वाला द्रव्य क्या है?",
    options: ["Steam", "Air", "Oil", "Water"],
    answer: "Steam",
  },
  {
    id: 52,
    question: "SI Unit of Temperature क्या है?",
    options: ["Kelvin", "Celsius", "Fahrenheit", "Joule"],
    answer: "Kelvin",
  },
  {
    id: 53,
    question: "Specific Heat की SI Unit क्या है?",
    options: ["J/kg·K", "W", "Pa", "N"],
    answer: "J/kg·K",
  },
  {
    id: 54,
    question: "रेलवे Wheel का Material सामान्यतः क्या होता है?",
    options: ["Cast Steel", "Copper", "Aluminium", "Plastic"],
    answer: "Cast Steel",
  },
  {
    id: 55,
    question: "रेलवे Axle का मुख्य कार्य क्या है?",
    options: ["Wheel Support", "Cooling", "Fuel Supply", "Lighting"],
    answer: "Wheel Support",
  },
  {
    id: 56,
    question: "Compressor का मुख्य कार्य क्या है?",
    options: ["Increase Air Pressure", "Decrease Pressure", "Cool Air", "Filter Air"],
    answer: "Increase Air Pressure",
  },
  {
    id: 57,
    question: "Pump किस ऊर्जा को Fluid Energy में बदलता है?",
    options: ["Mechanical Energy", "Heat Energy", "Electrical Energy", "Chemical Energy"],
    answer: "Mechanical Energy",
  },
  {
    id: 58,
    question: "Hydraulic Brake किस सिद्धांत पर कार्य करता है?",
    options: ["Pascal Law", "Newton Law", "Ohm Law", "Boyle Law"],
    answer: "Pascal Law",
  },
  {
    id: 59,
    question: "Bearing में Lubrication का मुख्य उद्देश्य क्या है?",
    options: ["Reduce Friction", "Increase Weight", "Increase Noise", "Reduce Speed"],
    answer: "Reduce Friction",
  },
  {
    id: 60,
    question: "Lathe Machine में Feed किसलिए दिया जाता है?",
    options: ["Tool Movement", "Cooling", "Painting", "Cleaning"],
    answer: "Tool Movement",
  },
  {
    id: 61,
    question: "Drill Machine का Cutting Tool क्या कहलाता है?",
    options: ["Twist Drill", "End Mill", "Reamer", "Tap"],
    answer: "Twist Drill",
  },
  {
    id: 62,
    question: "Casting Process में Molten Metal कहाँ डाला जाता है?",
    options: ["Mould", "Lathe", "Vice", "Chuck"],
    answer: "Mould",
  },
  {
    id: 63,
    question: "Forging किस तापमान पर सामान्यतः किया जाता है?",
    options: ["High Temperature", "Room Temperature", "Low Temperature", "0°C"],
    answer: "High Temperature",
  },
  {
    id: 64,
    question: "Heat Treatment में Annealing का उद्देश्य क्या है?",
    options: ["Soften Metal", "Increase Hardness", "Painting", "Cooling Water"],
    answer: "Soften Metal",
  },
  {
    id: 65,
    question: "Normalizing का उद्देश्य क्या है?",
    options: ["Improve Grain Structure", "Increase Weight", "Painting", "Cleaning"],
    answer: "Improve Grain Structure",
  },
  {
    id: 66,
    question: "Quenching सामान्यतः किस माध्यम में किया जाता है?",
    options: ["Oil/Water", "Air Only", "Steam", "Sand"],
    answer: "Oil/Water",
  },
  {
    id: 67,
    question: "Tempering का उद्देश्य क्या है?",
    options: ["Reduce Brittleness", "Increase Weight", "Increase Rust", "Cooling"],
    answer: "Reduce Brittleness",
  },
  {
    id: 68,
    question: "रेलवे में Bogie का मुख्य कार्य क्या है?",
    options: ["Support Coach", "Fuel Storage", "Cooling", "Lighting"],
    answer: "Support Coach",
  },
  {
    id: 69,
    question: "Coach Suspension का उद्देश्य क्या है?",
    options: ["Passenger Comfort", "Fuel Saving", "Painting", "Cleaning"],
    answer: "Passenger Comfort",
  },
  {
    id: 70,
    question: "Shock Absorber का कार्य क्या है?",
    options: ["Reduce Vibration", "Increase Speed", "Increase Noise", "Heat Generation"],
    answer: "Reduce Vibration",
  },
  {
    id: 71,
    question: "Indian Railways का सबसे तेज ट्रेन कौन-सी है?",
    options: ["Vande Bharat Express", "Rajdhani", "Shatabdi", "Duronto"],
    answer: "Vande Bharat Express",
  },
  {
    id: 72,
    question: "Vande Bharat मुख्यतः किस प्रकार की ट्रेन है?",
    options: ["Semi High Speed EMU", "Metro", "Goods Train", "Diesel Train"],
    answer: "Semi High Speed EMU",
  },
  {
    id: 73,
    question: "भारत का राष्ट्रीय ध्वज किस नाम से जाना जाता है?",
    options: ["तिरंगा", "अशोक ध्वज", "भारत ध्वज", "राष्ट्रीय पताका"],
    answer: "तिरंगा",
  },
  {
    id: 74,
    question: "भारत का संविधान कब लागू हुआ?",
    options: ["26 जनवरी 1950", "15 अगस्त 1947", "26 जनवरी 1949", "2 अक्टूबर 1950"],
    answer: "26 जनवरी 1950",
  },
  {
    id: 75,
    question: "भारतीय रेलवे का वर्तमान Broad Gauge कितना है?",
    options: ["1676 mm", "1435 mm", "1000 mm", "762 mm"],
    answer: "1676 mm",
  },
  {
    id: 76,
    question: "Newton का प्रथम नियम किससे संबंधित है?",
    options: ["जड़त्व", "बल", "ऊर्जा", "कार्य"],
    answer: "जड़त्व",
  },
  {
    id: 77,
    question: "SI Unit of Frequency क्या है?",
    options: ["Hertz", "Joule", "Watt", "Newton"],
    answer: "Hertz",
  },
  {
    id: 78,
    question: "SI Unit of Voltage क्या है?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Volt",
  },
  {
    id: 79,
    question: "SI Unit of Current क्या है?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    answer: "Ampere",
  },
  {
    id: 80,
    question: "SI Unit of Resistance क्या है?",
    options: ["Ohm", "Volt", "Ampere", "Henry"],
    answer: "Ohm",
  },
  {
    id: 81,
    question: "रेलवे में Air Compressor का उपयोग किसलिए होता है?",
    options: ["Air Brake System", "Cooling", "Fuel Supply", "Lighting"],
    answer: "Air Brake System",
  },
  {
    id: 82,
    question: "Brake Cylinder का कार्य क्या है?",
    options: ["Brake Apply करना", "Fuel Store करना", "Cooling", "Lubrication"],
    answer: "Brake Apply करना",
  },
  {
    id: 83,
    question: "LHB Coach में सामान्यतः किस प्रकार का Brake System होता है?",
    options: ["Air Brake", "Vacuum Brake", "Hydraulic Brake", "Mechanical Brake"],
    answer: "Air Brake",
  },
  {
    id: 84,
    question: "Vacuum Brake की तुलना में Air Brake का मुख्य लाभ क्या है?",
    options: [
      "अधिक प्रभावी ब्रेकिंग",
      "कम लागत",
      "कम वजन",
      "कम रखरखाव"
    ],
    answer: "अधिक प्रभावी ब्रेकिंग",
  },
  {
    id: 85,
    question: "Rail Fracture का पता लगाने के लिए किसका उपयोग किया जाता है?",
    options: [
      "Ultrasonic Testing",
      "Painting",
      "Grinding",
      "Hammer Test"
    ],
    answer: "Ultrasonic Testing",
  },
  {
    id: 86,
    question: "NDT का Full Form क्या है?",
    options: [
      "Non Destructive Testing",
      "New Design Test",
      "Normal Damage Test",
      "Non Dynamic Tool"
    ],
    answer: "Non Destructive Testing",
  },
  {
    id: 87,
    question: "Bearing Failure का मुख्य कारण क्या हो सकता है?",
    options: [
      "Poor Lubrication",
      "Painting",
      "Cooling",
      "Cleaning"
    ],
    answer: "Poor Lubrication",
  },
  {
    id: 88,
    question: "Indian Railways का सबसे बड़ा Coach Factory कौन सा है?",
    options: [
      "Integral Coach Factory",
      "DLW",
      "CLW",
      "RCF"
    ],
    answer: "Integral Coach Factory",
  },
  {
    id: 89,
    question: "RCF कहाँ स्थित है?",
    options: ["Kapurthala", "Chennai", "Varanasi", "Patiala"],
    answer: "Kapurthala",
  },
  {
    id: 90,
    question: "DLW का वर्तमान नाम क्या है?",
    options: [
      "Banaras Locomotive Works",
      "Diesel Loco Factory",
      "Rail Coach Works",
      "Rail Engine Factory"
    ],
    answer: "Banaras Locomotive Works",
  },
  {
    id: 91,
    question: "CLW कहाँ स्थित है?",
    options: ["Chittaranjan", "Delhi", "Mumbai", "Lucknow"],
    answer: "Chittaranjan",
  },
  {
    id: 92,
    question: "भारतीय रेलवे का Rail Museum कहाँ है?",
    options: ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer: "नई दिल्ली",
  },
  {
    id: 93,
    question: "Indian Railways का Slogan क्या है?",
    options: [
      "Lifeline of the Nation",
      "Moving India",
      "Nation First",
      "Rail for All"
    ],
    answer: "Lifeline of the Nation",
  },
  {
    id: 94,
    question: "रेलवे में POH का अर्थ क्या है?",
    options: [
      "Periodic Overhaul",
      "Power Over Head",
      "Passenger Operation Hub",
      "Public Office Handling"
    ],
    answer: "Periodic Overhaul",
  },
  {
    id: 95,
    question: "IOH का Full Form क्या है?",
    options: [
      "Intermediate Overhaul",
      "Internal Oil Handling",
      "Inspection Over Head",
      "Indian Operation Hub"
    ],
    answer: "Intermediate Overhaul",
  },
  {
    id: 96,
    question: "Wheel Profile की जाँच किसलिए की जाती है?",
    options: [
      "Safety",
      "Colour",
      "Weight",
      "Height"
    ],
    answer: "Safety",
  },
  {
    id: 97,
    question: "Coach Maintenance Depot का मुख्य कार्य क्या है?",
    options: [
      "Coach Maintenance",
      "Ticket Booking",
      "Fuel Supply",
      "Track Laying"
    ],
    answer: "Coach Maintenance",
  },
  {
    id: 98,
    question: "Rolling Stock में क्या शामिल होता है?",
    options: [
      "Locomotive, Coach, Wagon",
      "Track",
      "Platform",
      "Signal"
    ],
    answer: "Locomotive, Coach, Wagon",
  },
  {
    id: 99,
    question: "Indian Railways का नियंत्रण किस मंत्रालय के अधीन है?",
    options: [
      "Ministry of Railways",
      "Ministry of Transport",
      "Ministry of Road Transport",
      "Ministry of Heavy Industries"
    ],
    answer: "Ministry of Railways",
  },
  {
    id: 100,
    question: "Railway LDCE Mechanical JE की तैयारी के लिए सबसे महत्वपूर्ण क्या है?",
    options: [
      "Regular Mock Test Practice",
      "केवल Theory पढ़ना",
      "केवल GK पढ़ना",
      "केवल Previous Year देखना"
    ],
    answer: "Regular Mock Test Practice",
  }
];

export default mockTest;