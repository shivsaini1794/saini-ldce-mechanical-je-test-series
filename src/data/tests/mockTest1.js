const mockTest = [
  {
    id: 1,
    question: "Validity of Premium Rake BPC is?",
    options: ["12+4 Days", "12+3 Days", "12+5 Days", "12+2 Days"],
    answer: "12+3 Days"
  },
  {
    id: 2,
    question: "Validity of GDR is?",
    options: [
      "Up to Next Examination Point",
      "400 Km",
      "30 Days",
      "6000 Km"
    ],
    answer: "Up to Next Examination Point"
  },
  {
    id: 3,
    question: "Validity of BPC for Intensive Examination is?",
    options: [
      "Start to End",
      "End to Start",
      "End to End",
      "Start to Start"
    ],
    answer: "End to End"
  },
  {
    id: 4,
    question: "Colour of BPC for CC Rake is?",
    options: ["Yellow", "Green", "White", "Black"],
    answer: "Yellow"
  },
  {
    id: 5,
    question: "Colour of BPC for Premium Rake is?",
    options: ["Yellow", "Green", "Red", "White"],
    answer: "Green"
  },
  {
    id: 6,
    question: "Validity of BPC for CC Rake of A Class Yard is?",
    options: [
      "6000 Km or 35 Days",
      "6000 Km or 30 Days",
      "6000 Km or 25 Days",
      "6000 Km or 29 Days"
    ],
    answer: "6000 Km or 30 Days"
  },
  {
    id: 7,
    question: "Gap between brake block and wheel tread on ICF coach is?",
    options: ["3 mm", "4 mm", "5 mm", "6 mm"],
    answer: "5 mm"
  },
  {
    id: 8,
    question: "H-Type Coupler is used in?",
    options: [
      "CBC Coaching Stock",
      "Engine",
      "Wagon Stock",
      "None of the Above"
    ],
    answer: "CBC Coaching Stock"
  },
  {
    id: 9,
    question: "Coupler used in Engine/Loco is?",
    options: [
      "AARE Type",
      "H-Type",
      "HTEA Type",
      "Alliance-II"
    ],
    answer: "AARE Type"
  },
  {
    id: 10,
    question: "Horizontal gathering in H-Type Coupler is?",
    options: ["±110 mm", "±90 mm", "±100 mm", "±80 mm"],
    answer: "±100 mm"
  },
  {
  id: 11,
  question: "Horizontal gathering in H-Type coupler is?",
  options: ["±110 mm", "±90 mm", "±100 mm", "±80 mm"],
  answer: "±100 mm"
},
{
  id: 12,
  question: "Vertical gathering in H-Type coupler is?",
  options: ["±110 mm", "±90 mm", "±100 mm", "±80 mm"],
  answer: "±100 mm"
},
{
  id: 13,
  question: "Position of knuckle in full lock position of H-Type coupler is?",
  options: ["Vertical", "Horizontal", "60°", "170°"],
  answer: "Vertical"
},
{
  id: 14,
  question: "Function of anti-creep is performed by?",
  options: [
    "Lever Connecting Gauge",
    "Locking Piece",
    "Knuckle Thrower",
    "Anti Rotation Lug"
  ],
  answer: "Anti Rotation Lug"
},
{
  id: 15,
  question: "CBC Contour Gauge No.3 is used for inspecting?",
  options: [
    "Knuckle",
    "Locking Piece",
    "Knuckle Thrower",
    "Toggle"
  ],
  answer: "Knuckle"
},
{
  id: 16,
  question: "Stroke of H-Type coupler in tension is?",
  options: ["58 mm", "60 mm", "65 mm", "42 mm"],
  answer: "58 mm"
},
{
  id: 17,
  question: "Stroke of H-Type coupler in compression is?",
  options: ["80 mm", "60 mm", "65 mm", "42 mm"],
  answer: "80 mm"
},
{
  id: 18,
  question: "Length of LHB coach is?",
  options: ["23540 mm", "22996 mm", "26740 mm", "24351 mm"],
  answer: "23540 mm"
},
{
  id: 19,
  question: "Maximum speed of LHB coach is?",
  options: ["130 km/h", "140 km/h", "160 km/h", "180 km/h"],
  answer: "160 km/h"
},
{
  id: 20,
  question: "Bogie used in LHB coach is?",
  options: [
    "ICF Bogie",
    "FIAT Bogie",
    "CASNUB Bogie",
    "BEML Bogie"
  ],
  answer: "FIAT Bogie"
},
{
  id: 21,
  question: "Brake system used in LHB coach is?",
  options: [
    "Vacuum Brake",
    "Air Brake",
    "Disc Brake",
    "Hand Brake"
  ],
  answer: "Disc Brake"
},
{
  id: 22,
  question: "Material used for LHB coach body is?",
  options: [
    "Mild Steel",
    "Stainless Steel",
    "Cast Iron",
    "Aluminium"
  ],
  answer: "Stainless Steel"
},
{
  id: 23,
  question: "Ride Index of LHB coach is better because of?",
  options: [
    "ICF Bogie",
    "FIAT Bogie",
    "CASNUB Bogie",
    "None"
  ],
  answer: "FIAT Bogie"
},
{
  id: 24,
  question: "LHB coach is mainly designed for speed up to?",
  options: [
    "110 km/h",
    "130 km/h",
    "160 km/h",
    "200 km/h"
  ],
  answer: "160 km/h"
},
{
  id: 25,
  question: "LHB coaches are equipped with which type of brake?",
  options: [
    "Vacuum Brake",
    "Disc Brake",
    "Wooden Brake",
    "Shoe Brake"
  ],
  answer: "Disc Brake"
},
{
  id: 26,
  question: "Droppage of BP pressure for full service brake application on coaching train is?",
  options: [
    "0.5 to 0.8 Kg/cm²",
    "1.0 to 1.5 Kg/cm²",
    "2.0 to 2.5 Kg/cm²",
    "3.0 Kg/cm²"
  ],
  answer: "1.0 to 1.5 Kg/cm²"
},
{
  id: 27,
  question: "Oil oozing between wheel seat and axle is called?",
  options: [
    "Hot Axle",
    "Loose Axle",
    "Cracked Axle",
    "Bent Axle"
  ],
  answer: "Loose Axle"
},
{
  id: 28,
  question: "When pull rod is grazing on axle, it forms?",
  options: [
    "Hot Axle",
    "Loose Axle",
    "Notched Axle",
    "Broken Axle"
  ],
  answer: "Notched Axle"
},
{
  id: 29,
  question: "Distance between adjuster tube and mark on spindle is called?",
  options: [
    "A Dimension",
    "B Dimension",
    "SAB E Dimension",
    "C Dimension"
  ],
  answer: "SAB E Dimension"
},
{
  id: 30,
  question: "GDR check is valid for?",
  options: [
    "200 Km",
    "300 Km",
    "400 Km",
    "600 Km"
  ],
  answer: "400 Km"
},
{
  id: 31,
  question: "If driver fails to log kilometers, CC Rake BPC expires on?",
  options: [
    "14th Day",
    "21st Day",
    "30th Day",
    "35th Day"
  ],
  answer: "21st Day"
},
{
  id: 32,
  question: "Buffer height (Empty Wagon) should be?",
  options: [
    "1080–1095 mm",
    "1090–1105 mm",
    "1105–1120 mm",
    "1085–1100 mm"
  ],
  answer: "1090–1105 mm"
},
{
  id: 33,
  question: "Permitted flat face on ICF wheel is?",
  options: [
    "40 mm",
    "45 mm",
    "50 mm",
    "55 mm"
  ],
  answer: "50 mm"
},
{
  id: 34,
  question: "Maximum wheel diameter of BLC wagon is?",
  options: [
    "820 mm",
    "830 mm",
    "840 mm",
    "850 mm"
  ],
  answer: "840 mm"
},
{
  id: 35,
  question: "Maximum BC pressure in empty condition for BLC wagon is?",
  options: [
    "1.8 Kg/cm²",
    "2.0 Kg/cm²",
    "2.2 Kg/cm²",
    "2.5 Kg/cm²"
  ],
  answer: "2.2 Kg/cm²"
},
{
  id: 36,
  question: "FIAT bogie is able to run at 100 m curve with speed of?",
  options: ["100 kmph", "60 kmph", "40 kmph", "30 kmph"],
  answer: "100 kmph"
},
{
  id: 37,
  question: "When required pressure is achieved, the position of air spring valve is?",
  options: ["Vertical", "Horizontal", "Inclined", "None"],
  answer: "Horizontal"
},
{
  id: 38,
  question: "Length over body of ICF BG coach is?",
  options: ["23340 mm", "23100 mm", "21337 mm", "22132 mm"],
  answer: "23340 mm"
},
{
  id: 39,
  question: "Rigid wheelbase of ICF BG trolley is?",
  options: ["2896 mm", "2803 mm", "2990 mm", "2837 mm"],
  answer: "2896 mm"
},
{
  id: 40,
  question: "The other name of Pilot Valve is?",
  options: ["PESAD", "PEASD", "PDEAS", "EPASD"],
  answer: "PEASD"
},
{
  id: 41,
  question: "Which part is NOT used in ICF trolley?",
  options: ["Dashpot", "Side Bearer", "Shock Absorber", "Drag Link"],
  answer: "Shock Absorber"
},
{
  id: 42,
  question: "POH period of departmental coach (except ART/ARME) is?",
  options: ["24 Months", "36 Months", "42 Months", "60 Months"],
  answer: "42 Months"
},
{
  id: 43,
  question: "POH period of OCV attached with passenger train is?",
  options: ["9 Months", "12 Months", "18 Months", "24 Months"],
  answer: "18 Months"
},
{
  id: 44,
  question: "In coach, load transmission takes place through?",
  options: ["Center Pivot", "Bogie", "Side Bearer", "Wheel"],
  answer: "Side Bearer"
},
{
  id: 45,
  question: "Piston stroke of BVZC is?",
  options: ["70±5 mm", "70±15 mm", "70±10 mm", "70±20 mm"],
  answer: "70±10 mm"
},
{
  id: 46,
  question: "Piston stroke of BOXN in empty condition is?",
  options: ["85±10 mm", "85±5 mm", "85±15 mm", "85±20 mm"],
  answer: "85±10 mm"
},
{
  id: 47,
  question: "Piston stroke of BTPN in loaded condition is?",
  options: ["87±10 mm", "87±15 mm", "87±20 mm", "87±25 mm"],
  answer: "87±10 mm"
},
{
  id: 48,
  question: "Pay load of BOXNHL wagon is?",
  options: ["70 Ton", "71 Ton", "75 Ton", "68 Ton"],
  answer: "71 Ton"
},
{
  id: 49,
  question: "Question 49 is incomplete in the uploaded PDF snippet. We will keep the original PDF wording when we reach that page.",
  options: ["A", "B", "C", "D"],
  answer: "A"
},
{
  id: 50,
  question: "Maximum speed of BOXNHS wagon is?",
  options: [
    "95 KMPH",
    "100 KMPH",
    "110 KMPH",
    "85 KMPH"
  ],
  answer: "100 KMPH"
},
{
  id: 51,
  question: "Pay load of BOXNHA wagon is?",
  options: [
    "65.23 ton",
    "68 ton",
    "66 ton",
    "65 ton"
  ],
  answer: "65.23 ton"
},
{
  id: 52,
  question: "Pay load of BOST wagon is?",
  options: [
    "56.28 ton",
    "63 ton",
    "65 ton",
    "68 ton"
  ],
  answer: "56.28 ton"
},
{
  id: 53,
  question: "Maximum speed of BOST-HS wagon is?",
  options: [
    "95 KMPH",
    "110 KMPH",
    "100 KMPH",
    "120 KMPH"
  ],
  answer: "100 KMPH"
},
{
  id: 54,
  question: "Length of BOST wagon (HS to HS) is?",
  options: [
    "128000 mm",
    "12800 mm",
    "12700 mm",
    "12900 mm"
  ],
  answer: "12800 mm"
},
{
  id: 55,
  question: "Maximum speed of BOXNHA wagon is?",
  options: [
    "110 KMPH",
    "95 KMPH",
    "120 KMPH",
    "100 KMPH"
  ],
  answer: "100 KMPH"
},
{
  id: 56,
  question: "Length and width of BFNS is similar to which wagon?",
  options: [
    "BOX",
    "Covered Wagon",
    "Tank Wagon",
    "None of the Above"
  ],
  answer: "BOX"
},
{
  id: 57,
  question: "Brake power at the time of issuing BPC for CC rake should be?",
  options: [
    "95%",
    "100%",
    "85%",
    "75%"
  ],
  answer: "100%"
},
{
  id: 58,
  question: "Brake power at the time of issuing BPC for Premium rake should be?",
  options: [
    "90%",
    "85%",
    "100%",
    "80%"
  ],
  answer: "90%"
},
{
  id: 59,
  question: "Multiple loading rake requires which type of examination?",
  options: [
    "Extensive",
    "Intensive",
    "Both Extensive & Intensive",
    "None"
  ],
  answer: "Intensive"
},
{
  id: 60,
  question: "Question 60 is incomplete in the uploaded PDF snippet.",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answer: "Option A"
},
{
  id: 61,
  question: "For CC rake, minimum wheel flange thickness should not be less than?",
  options: [
    "22 mm",
    "25 mm",
    "28 mm",
    "30 mm"
  ],
  answer: "22 mm"
},
{
  id: 62,
  question: "New methods of train examination pattern are?",
  options: [
    "Rake Examination & Intensive Examination",
    "Rolling In Examination & Rolling Out Examination",
    "CC Examination & Premium Examination",
    "None of the above"
  ],
  answer: "Rolling In Examination & Rolling Out Examination"
},
{
  id: 63,
  question: "Maximum permissible wheel tread hollowing for CC rake is?",
  options: [
    "3 mm",
    "4 mm",
    "5 mm",
    "6 mm"
  ],
  answer: "5 mm"
},
{
  id: 64,
  question: "Condemning wheel flange thickness is?",
  options: [
    "22 mm",
    "25 mm",
    "28 mm",
    "30 mm"
  ],
  answer: "22 mm"
},
{
  id: 65,
  question: "Maximum permissible wheel flat for freight wagon is?",
  options: [
    "40 mm",
    "50 mm",
    "60 mm",
    "70 mm"
  ],
  answer: "60 mm"
},
{
  id: 66,
  question: "Examination of CC rake is mainly carried out at?",
  options: [
    "Premium Yard",
    "A Class Yard",
    "Goods Shed",
    "Terminal only"
  ],
  answer: "A Class Yard"
},
{
  id: 67,
  question: "BPC is issued after completion of?",
  options: [
    "Brake Power Test",
    "POH",
    "ROH",
    "Wheel Turning"
  ],
  answer: "Brake Power Test"
},
{
  id: 68,
  question: "Brake Power Certificate (BPC) is issued by?",
  options: [
    "Loco Pilot",
    "C&W Staff",
    "Guard",
    "Station Master"
  ],
  answer: "C&W Staff"
},
{
  id: 69,
  question: "Premium rake is mainly used for?",
  options: [
    "Passenger Train",
    "High Priority Freight",
    "Departmental Stock",
    "Parcel Van"
  ],
  answer: "High Priority Freight"
},
{
  id: 70,
  question: "Brake Power Certificate is related to?",
  options: [
    "Brake Efficiency",
    "Wheel Diameter",
    "Axle Load",
    "Buffer Height"
  ],
  answer: "Brake Efficiency"
},
{
  id: 71,
  question: "Thickness of side panel of BOXNHL is?",
  options: [
    "2.8 mm",
    "2.0 mm",
    "2.5 mm",
    "2.1 mm"
  ],
  answer: "2.8 mm"
},
{
  id: 72,
  question: "Thickness of floor plate of BOXNHL is?",
  options: [
    "5 mm",
    "6 mm",
    "8 mm",
    "10 mm"
  ],
  answer: "8 mm"
},
{
  id: 73,
  question: "Thickness of end wall of BOXNHL is?",
  options: [
    "4 mm",
    "5 mm",
    "6 mm",
    "8 mm"
  ],
  answer: "5 mm"
},
{
  id: 74,
  question: "Body material of BOXNHL wagon is?",
  options: [
    "IRSM-44",
    "IRSM-45",
    "IRSM-41",
    "IRS-M16"
  ],
  answer: "IRSM-44"
},
{
  id: 75,
  question: "Pay load capacity of BOXNHL wagon is?",
  options: [
    "70.8 tonnes",
    "71.8 tonnes",
    "69.8 tonnes",
    "72.8 tonnes"
  ],
  answer: "70.8 tonnes"
},
{
  id: 76,
  question: "Axle load of BOXNHL wagon is?",
  options: [
    "22.8 tonnes",
    "22.9 tonnes",
    "22.5 tonnes",
    "23.0 tonnes"
  ],
  answer: "22.9 tonnes"
},
{
  id: 77,
  question: "Axle load of BOXNEL wagon is?",
  options: [
    "2.5 tonnes",
    "25 tonnes",
    "26 tonnes",
    "24 tonnes"
  ],
  answer: "25 tonnes"
},
{
  id: 78,
  question: "Minimum wheel diameter of BOXNEL wagon is?",
  options: [
    "850 mm",
    "900 mm",
    "950 mm",
    "800 mm"
  ],
  answer: "950 mm"
},
{
  id: 79,
  question: "Pay load capacity of BOXNHL wagon is?",
  options: [
    "70.8 tonnes",
    "70.5 tonnes",
    "75.8 tonnes",
    "75.5 tonnes"
  ],
  answer: "70.8 tonnes"
},
{
  id: 80,
  question: "Spring arrangement of BOXNHL on one side (O,I,S) is?",
  options: [
    "7,7,5",
    "7,7,3",
    "7,7,2",
    "7,7,4"
  ],
  answer: "7,7,2"
},
{
  id: 81,
  question: "Length of one unit of BLC wagon is?",
  options: ["65 m", "68 m", "69 m", "67 m"],
  answer: "69 m"
},
{
  id: 82,
  question: "Length of one rake of BLC wagon is?",
  options: ["619 m", "618 m", "620 m", "621 m"],
  answer: "619 m"
},
{
  id: 83,
  question: "Floor height of BLC wagon is?",
  options: [
    "1275–1273 mm",
    "1273–1275 mm",
    "1275–1272 mm",
    "1272–1276 mm"
  ],
  answer: "1273–1275 mm"
},
{
  id: 84,
  question: "Height of Slackless Draw Bar of BLC wagon is?",
  options: ["840 mm", "846 mm", "845 mm", "847 mm"],
  answer: "845 mm"
},
{
  id: 85,
  question: "Weight of 'A' car of BLC wagon in empty condition is?",
  options: ["19.15 t", "19.18 t", "19.11 t", "19.10 t"],
  answer: "19.10 t"
},
{
  id: 86,
  question: "Weight of 'B' car of BLC wagon in empty condition is?",
  options: ["18.0 t", "18.1 t", "18.3 t", "18.5 t"],
  answer: "18.0 t"
},
{
  id: 87,
  question: "In one unit of BLC wagon, how many A & B cars are used?",
  options: [
    "02 A & 02 B",
    "03 A & 02 B",
    "02 A & 03 B",
    "03 A & 03 B"
  ],
  answer: "02 A & 03 B"
},
{
  id: 88,
  question: "Slackless draw bar is provided at both ends of which BLC car?",
  options: ["A Car", "B Car", "Both", "None"],
  answer: "B Car"
},
{
  id: 89,
  question: "President of IRCA is GM of?",
  options: [
    "Central Railway",
    "Southern Railway",
    "Northern Railway",
    "Western Railway"
  ],
  answer: "Northern Railway"
},
{
  id: 90,
  question: "IRCA Rule Book Part III Chapter IV contains?",
  options: [
    "Definitions",
    "Rejection Rules",
    "Maintenance Procedure",
    "Repair Practice"
  ],
  answer: "Rejection Rules"
},
{
  id: 91,
  question: "IRCA Rule Book Part III Chapter I contains?",
  options: [
    "Rejection Rules",
    "Maintenance Procedure",
    "Definitions",
    "Repair Practice"
  ],
  answer: "Definitions"
},
{
  id: 92,
  question: "IRCA Rule Book Part III Chapter II contains?",
  options: [
    "Maintenance & Repair Practice",
    "Definitions",
    "Rejection Rules",
    "Maintenance Procedure"
  ],
  answer: "Maintenance & Repair Practice"
},
{
  id: 93,
  question: "IRCA Rule Book Part III Chapter III contains?",
  options: [
    "Definitions",
    "Rejection Rules",
    "Maintenance Procedure",
    "Repair Practice"
  ],
  answer: "Maintenance Procedure"
},
{
  id: 94,
  question: "First edition of IRCA Rule Book was enforced in?",
  options: ["1935", "1932", "1933", "1920"],
  answer: "1932"
},
{
  id: 95,
  question: "IRCA Rule Book Part III consists of how many Annexures?",
  options: ["05", "07", "09", "10"],
  answer: "09"
},
{
  id: 96,
  question: "First POH of BOX-N wagon is done after?",
  options: ["06 Years", "05 Years", "07 Years", "03 Years"],
  answer: "06 Years"
},
{
  id: 97,
  question: "POH period of departmental stock is?",
  options: [
    "5 years & 40 months",
    "6 years & 45 months",
    "6 years & 42 months",
    "6 years & 43 months"
  ],
  answer: "6 years & 42 months"
},
{
  id: 98,
  question: "Minimum buffer height of wagon after POH is?",
  options: ["1080 mm", "1085 mm", "1095 mm", "1090 mm"],
  answer: "1090 mm"
},
{
  id: 99,
  question: "CC rake requires how many man-hours?",
  options: ["50", "75", "100", "25"],
  answer: "100"
},
{
  id: 100,
  question: "Steam cleaning of tank wagon is done for?",
  options: ["60 Hours", "24 Hours", "12 Hours", "9 Hours"],
  answer: "24 Hours"
},

];

export default mockTest;