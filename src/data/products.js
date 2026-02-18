export const products = [
    {
        id: 101,
        name: "Canon EOS 1500D 24.1MP Digital SLR Camera",
        category: "Camera",
        price: 30500,
        image: new URL('../assets/canon-1500d-1.jpg', import.meta.url).href,
        images: [
            new URL('../assets/canon-1500d-1.jpg', import.meta.url).href,
            new URL('../assets/canon-1500d-2.jpg', import.meta.url).href
        ],
        description: "24.1megapixel APS-C CMOS sensor & DIGIC 4+ image processor. 9 point AF with 1 centre cross-type AF point. Standard ISO 100 - 6400 (expandable to 12 800). WiFi / NFC Supported.",
        specs: {
            "Compatible Mountings": "Universal tripod mount",
            "Aspect Ratio": "1.35:1",
            "Photo Sensor Technology": "CMOS",
            "Supported File Format": "aps-c",
            "Image Stabilisation": "Optical",
            "Maximum Focal Length": "55 Millimeters",
            "Optical Zoom": "3 x",
            "Maximum Aperture": "3.5 Millimeters",
            "Expanded ISO Minimum": "100",
            "Metering Description": "Evaluative::Partial::Center Weighted",
            "Warranty": "2 Year Warranty from Canon India"
        },
        rating: 4.8,
        inStock: true
    },
    {
        id: 102,
        name: "Sony Alpha a7 III",
        category: "Camera",
        price: 168000,
        image: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Versatile full-frame mirrorless camera for photo and video.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 103,
        name: "Godox AD200 Pro",
        category: "Lighting",
        price: 26000,
        image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Pocket flash speedlight for professional lighting.",
        rating: 4.6,
        inStock: true
    },
    {
        id: 104,
        name: "SanDisk Extreme Pro 128GB",
        category: "Accessories",
        price: 2500,
        image: "https://images.unsplash.com/photo-1563544955328-fefce27148ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "High-speed SD card for 4K video recording.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 105,
        name: "Vanguard Alta Pro Tripod",
        category: "Accessories",
        price: 12000,
        image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Professional tripod with multi-angle central column.",
        rating: 4.5,
        inStock: true
    },
    {
        id: 106,
        name: "Camera Cleaning Kit",
        category: "Accessories",
        price: 850,
        image: "https://images.unsplash.com/photo-1621600109033-6f4eb1203b87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Complete cleaning kit for lenses and sensors.",
        rating: 4.3,
        inStock: true
    }
];
