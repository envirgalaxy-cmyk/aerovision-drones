const projects = [
  {
    id: "bridge-inspection-2024",
    title: "Golden Gate Bridge Annual Inspection",
    description: "Complete structural inspection of the Golden Gate Bridge using LiDAR-equipped drones, delivering 4K photogrammetry models and thermal imaging reports for deferred maintenance planning.",
    industry: "Infrastructure",
    serviceType: "Inspection",
    location: "San Francisco, CA",
    year: 2024,
    coverImage: "/assets/images/project-bridge.jpg",
    images: [
      "/assets/images/project-bridge.jpg",
      "/assets/images/project-bridge-after.jpg"
    ],
    tags: ["LiDAR", "Thermal Imaging", "Photogrammetry", "Infrastructure"],
    client: "Caltrans",
    results: "Identified 14 maintenance-critical zones, reducing inspection time by 70%",
    featured: true,
    hasBeforeAfter: true,
    beforeImage: "/assets/images/project-bridge.jpg",
    afterImage: "/assets/images/project-bridge-after.jpg",
    challenge: "Traditional rope-access inspections required multi-week lane closures and posed significant safety risks to inspectors working at height over open water.",
    approach: "Deployed a fleet of LiDAR-equipped drones with millimeter-precision sensors, capturing 1.2 billion data points in a single 6-hour operation without disrupting traffic flow."
  },
  {
    id: "farm-mapping-precision",
    title: "Central Valley Precision Agriculture Mapping",
    description: "Multispectral aerial mapping across 12,000 acres of farmland to generate NDVI crop health indices, irrigation analysis, and yield prediction models for a consortium of agricultural producers.",
    industry: "Agriculture",
    serviceType: "Mapping",
    location: "Fresno, CA",
    year: 2024,
    coverImage: "/assets/images/project-farm.jpg",
    images: [
      "/assets/images/project-farm.jpg",
      "/assets/images/project-farm-after.jpg"
    ],
    tags: ["Multispectral", "NDVI", "Precision Agriculture", "Mapping"],
    client: "Valley Ag Consortium",
    results: "Increased yield by 18%, reduced water usage by 24% through precision irrigation",
    featured: true,
    hasBeforeAfter: true,
    beforeImage: "/assets/images/project-farm.jpg",
    afterImage: "/assets/images/project-farm-after.jpg",
    challenge: "Farmers across 12,000 acres lacked granular field-level data, resulting in uniform fertilizer and irrigation application that wasted resources and left yield potential unrealized.",
    approach: "Flew multispectral missions bi-weekly throughout the growing season, generating NDVI, NDRE, and thermal layers processed into field-prescription maps compatible with variable-rate application equipment."
  },
  {
    id: "solar-thermal-inspection",
    title: "Mojave Solar Farm Thermal Inspection",
    description: "Thermal drone inspection of 480MW solar installation, identifying underperforming panels and hotspot anomalies across 2,800 acres, enabling targeted maintenance and energy recovery.",
    industry: "Energy",
    serviceType: "Inspection",
    location: "Mojave, CA",
    year: 2023,
    coverImage: "/assets/images/project-solar.jpg",
    images: [
      "/assets/images/project-solar.jpg",
      "/assets/images/project-solar-after.jpg"
    ],
    tags: ["Thermal Inspection", "Solar", "Energy", "Anomaly Detection"],
    client: "SunPower Corp",
    results: "Recovered 3.2MW of lost generation through targeted panel replacement",
    featured: true,
    hasBeforeAfter: true,
    beforeImage: "/assets/images/project-solar.jpg",
    afterImage: "/assets/images/project-solar-after.jpg",
    challenge: "Manual ground-level inspection of 1.4 million solar panels across 2,800 acres would take 18 months and cost over $2M, with significant revenue loss during downtime.",
    approach: "Executed systematic thermal flyovers at dawn and dusk (optimal thermal delta conditions) using radiometric FLIR cameras, auto-flagging hotspot anomalies with GPS coordinates for maintenance crews."
  },
  {
    id: "urban-surveillance-network",
    title: "Downtown Security Surveillance Network",
    description: "Deployment of autonomous drone patrol network across a 4-block commercial district, integrating AI-powered threat detection, real-time feeds, and incident alerting for private security operations.",
    industry: "Security",
    serviceType: "Surveillance",
    location: "Las Vegas, NV",
    year: 2024,
    coverImage: "/assets/images/project-security.jpg",
    images: ["/assets/images/project-security.jpg"],
    tags: ["AI Detection", "Surveillance", "Autonomous", "Security"],
    client: "Pinnacle Security Group",
    results: "40% reduction in security incidents, 24/7 automated monitoring coverage",
    featured: false,
    challenge: "A high-traffic commercial district required 24/7 perimeter monitoring but lacked the budget to staff ground security around the clock across the entire area.",
    approach: "Integrated three autonomous drone-in-a-box units with AI-powered behavior analysis, geofencing triggers, and encrypted live feeds streamed to a central security operations center."
  },
  {
    id: "coastal-film-production",
    title: "Pacific Coast Cinematic Campaign",
    description: "High-altitude 6K aerial cinematography for a premium automotive commercial, capturing sweeping coastal highways and mountain terrain with RED camera-equipped cinematic drones.",
    industry: "Film & Media",
    serviceType: "Cinematography",
    location: "Big Sur, CA",
    year: 2024,
    coverImage: "/assets/images/project-film.jpg",
    images: ["/assets/images/project-film.jpg"],
    tags: ["6K Cinema", "Aerial Footage", "Commercial", "Film"],
    client: "Apex Creative Agency",
    results: "Award-winning campaign with 50M+ views across digital channels",
    featured: false,
    challenge: "The production required smooth, cinematic tracking shots along a narrow coastal highway with dramatic cliff edges — conditions that make traditional helicopter-mounted cameras impractical and dangerous.",
    approach: "Deployed a RED Komodo-equipped DJI Inspire 3 with 3-axis gimbal stabilization, executing precisely choreographed follow-cam routes at 1m/s tracking speed for silky 6K footage."
  },
  {
    id: "3d-city-mapping",
    title: "San Jose Smart City 3D Mapping",
    description: "Complete 3D point cloud and mesh generation of downtown San Jose using LiDAR and photogrammetry drones, feeding GIS datasets for urban planning, infrastructure design, and flood modeling.",
    industry: "Urban Planning",
    serviceType: "Mapping",
    location: "San Jose, CA",
    year: 2023,
    coverImage: "/assets/images/project-city.jpg",
    images: ["/assets/images/project-city.jpg"],
    tags: ["LiDAR", "3D Mapping", "GIS", "Urban Planning"],
    client: "City of San Jose",
    results: "Delivered 1.2TB point cloud dataset with sub-5cm accuracy for 12 city blocks",
    featured: false,
    challenge: "The city's urban planning department needed an up-to-date 3D digital twin of the downtown core for flood risk modeling, but existing photogrammetry data was 7 years old.",
    approach: "Coordinated multi-drone LiDAR and RGB missions across 6 operational days, processing 1.2TB of raw capture into GIS-ready point clouds and textured meshes via Pix4D and ArcGIS pipelines."
  }
];
const services = [
  {
    id: "aerial-inspection",
    slug: "precision-inspections",
    title: "Precision Inspections",
    description: "Advanced aerial inspection services using LiDAR, thermal, and high-resolution cameras to identify structural issues, maintenance needs, and safety hazards with unmatched accuracy.",
    longDescription: "Our precision inspection service combines cutting-edge LiDAR sensors, thermal infrared cameras, and 61MP photogrammetric rigs to produce inspection reports that outperform traditional methods on every metric. Certified FAA Part 107 operators execute planned flight paths that guarantee complete coverage of every structure, delivering millimeter-accurate defect detection without putting a single inspector at risk. From aging bridge decks to high-voltage transmission towers, we provide the data your engineers need to make confident maintenance and safety decisions.",
    icon: "Eye",
    imageUrl: "/assets/images/project-bridge.jpg",
    features: [
      "LiDAR & thermal infrared imaging",
      "Sub-centimeter point cloud accuracy",
      "Automated anomaly detection AI",
      "FAA Part 107 certified operators",
      "Detailed digital inspection reports"
    ],
    benefits: [
      "Eliminate inspector safety risk",
      "3× faster than traditional inspection",
      "No lane or facility closures",
      "Insurance-grade documentation"
    ],
    industries: ["Infrastructure", "Energy", "Construction", "Oil & Gas"],
    priceRange: "From $2,500 per mission"
  },
  {
    id: "mapping-gis",
    slug: "mapping-gis",
    title: "Advanced Mapping & GIS",
    description: "Full-coverage aerial mapping producing 2D orthomosaics, 3D point clouds, and digital elevation models for engineering, planning, and environmental analysis.",
    longDescription: "From centimeter-accurate orthomosaics to full-terrain 3D mesh reconstructions, our mapping service delivers GIS-ready data products that integrate seamlessly into AutoCAD, ArcGIS, and BIM environments. Our flight planners optimize every mission for complete coverage and optimal ground sampling distance, while our post-processing pipeline produces final deliverables within 48 hours of flight completion.",
    icon: "Map",
    imageUrl: "/assets/images/project-city.jpg",
    features: [
      "Orthomosaic & DSM generation",
      "3D point cloud processing",
      "GIS-ready deliverables",
      "Real-time field data collection",
      "Integration with AutoCAD, ArcGIS"
    ],
    benefits: [
      "Centimeter-level accuracy",
      "Rapid field-to-deliverable turnaround",
      "Open-standard data formats",
      "Repeatable temporal surveys"
    ],
    industries: ["Agriculture", "Urban Planning", "Mining", "Construction"],
    priceRange: "From $3,500 per survey"
  },
  {
    id: "surveillance",
    slug: "security-surveillance",
    title: "Security & Surveillance",
    description: "Continuous aerial surveillance and autonomous patrol solutions integrated with AI-powered threat detection for perimeter security, event monitoring, and critical asset protection.",
    longDescription: "Our surveillance systems combine autonomous drone-in-a-box infrastructure with AI-powered behavior detection to provide persistent aerial monitoring at a fraction of the cost of ground-based security teams. Live encrypted video feeds integrate with existing SOC dashboards, while automated incident alerts ensure your team responds only when it matters.",
    icon: "Shield",
    imageUrl: "/assets/images/project-security.jpg",
    features: [
      "AI-powered threat detection",
      "24/7 autonomous patrol",
      "Live feed integration",
      "Geo-fencing & alerts",
      "Evidence-grade recording"
    ],
    benefits: [
      "24/7 automated monitoring",
      "Faster incident response",
      "Evidence-grade footage",
      "Wide area coverage"
    ],
    industries: ["Security", "Defense", "Events", "Critical Infrastructure"],
    priceRange: "From $1,800 per day"
  },
  {
    id: "cinematography",
    slug: "aerial-cinematography",
    title: "Aerial Cinematography",
    description: "Cinematic-grade aerial photography and videography for film, advertising, real estate, and brand campaigns using industry-leading camera platforms.",
    longDescription: "Whether you need sweeping landscape establishing shots or tight vehicle-tracking sequences, our cinema drone operators bring the visual language of feature film to every project. We fly RED, ARRI, and Sony VENICE camera systems on purpose-built cinematic platforms, delivering footage that meets broadcast and theatrical standards.",
    icon: "Film",
    imageUrl: "/assets/images/project-film.jpg",
    features: [
      "6K/8K cinema cameras",
      "3-axis stabilization",
      "FPV & tracking shots",
      "Same-day color grading",
      "Licensed for commercial use"
    ],
    benefits: [
      "Cinema-grade 6K/8K footage",
      "FPV and tracking capabilities",
      "Licensed & insured operations",
      "Fast turnaround"
    ],
    industries: ["Film & Media", "Real Estate", "Tourism", "Sports"],
    priceRange: "From $1,500 per half-day"
  },
  {
    id: "environmental",
    slug: "environmental-monitoring",
    title: "Environmental Monitoring",
    description: "Multispectral and hyperspectral drone surveys for ecological assessment, vegetation health mapping, wildlife tracking, and environmental impact analysis.",
    longDescription: "Our environmental monitoring service gives ecologists, agricultural scientists, and government agencies a consistent, repeatable data collection platform for tracking ecosystem changes over time. Multispectral and hyperspectral sensors capture vegetation indices invisible to standard cameras, while thermal payloads support nocturnal wildlife surveys.",
    icon: "Leaf",
    imageUrl: "/assets/images/project-farm.jpg",
    features: [
      "Multispectral & hyperspectral",
      "NDVI vegetation indices",
      "Wildlife population surveys",
      "Emissions monitoring",
      "Change detection over time"
    ],
    benefits: [
      "Non-invasive survey methods",
      "Repeatable temporal data",
      "Early problem detection",
      "Regulatory-compliant reporting"
    ],
    industries: ["Agriculture", "Forestry", "Environmental", "Government"],
    priceRange: "From $2,000 per survey"
  },
  {
    id: "emergency-response",
    slug: "emergency-response",
    title: "Emergency Response Support",
    description: "Rapid-deployment drone operations for search & rescue, disaster assessment, firefighting support, and real-time situational awareness during critical incidents.",
    longDescription: "When every minute counts, our emergency response team deploys within 30 minutes with thermal search & rescue drones, real-time incident mapping systems, and encrypted communications infrastructure. We work alongside fire, law enforcement, and SAR teams to extend their operational reach and provide commanders with live aerial situational awareness.",
    icon: "AlertTriangle",
    imageUrl: "/assets/images/project-city.jpg",
    features: [
      "Thermal search & rescue",
      "Real-time incident mapping",
      "Night vision capability",
      "Rapid deployment (<30 min)",
      "SAR database integration"
    ],
    benefits: [
      "Faster victim location",
      "Reduced responder risk",
      "Live command-post feeds",
      "Comprehensive incident documentation"
    ],
    industries: ["Public Safety", "Defense", "Government", "Disaster Relief"],
    priceRange: "On-call contract pricing"
  }
];
const industries = [
  {
    id: "infrastructure",
    title: "Infrastructure & Construction",
    description: "Accelerate project timelines and reduce inspection costs for bridges, highways, pipelines, and large-scale construction sites with aerial intelligence.",
    icon: "Building2",
    useCases: [
      "Bridge and tower structural inspection",
      "Construction progress monitoring",
      "Pipeline leak detection",
      "Road and highway assessment",
      "3D site modeling for BIM"
    ],
    benefits: [
      "Reduce inspection costs by up to 70%",
      "Eliminate human risk in dangerous zones",
      "Daily progress reporting",
      "Millimeter-accuracy measurements"
    ],
    color: "blue"
  },
  {
    id: "agriculture",
    title: "Agriculture & Farming",
    description: "Precision agriculture solutions delivering crop health data, irrigation optimization, and yield forecasts that transform how farms operate at scale.",
    icon: "Sprout",
    useCases: [
      "Crop health NDVI mapping",
      "Irrigation efficiency analysis",
      "Pest and disease early detection",
      "Livestock monitoring",
      "Topographic surveying"
    ],
    benefits: [
      "Increase yields by 15–25%",
      "Cut water consumption by 20%",
      "Early crop problem detection",
      "Comprehensive field reporting"
    ],
    color: "green"
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Thermal and visual inspections of solar farms, wind turbines, power lines, and substations that maximize uptime and reduce maintenance costs.",
    icon: "Zap",
    useCases: [
      "Solar panel hotspot detection",
      "Wind turbine blade inspection",
      "Transmission line survey",
      "Substation monitoring",
      "Oil & gas facility inspection"
    ],
    benefits: [
      "3× faster inspections",
      "Real-time anomaly alerts",
      "Reduce downtime and losses",
      "Insurance-grade documentation"
    ],
    color: "yellow"
  },
  {
    id: "security",
    title: "Security & Defense",
    description: "Autonomous surveillance, perimeter monitoring, and tactical situational awareness for private security, government, and critical infrastructure protection.",
    icon: "ShieldCheck",
    useCases: [
      "Perimeter and asset surveillance",
      "Event and crowd monitoring",
      "Border patrol support",
      "Evidence collection",
      "Tactical reconnaissance"
    ],
    benefits: [
      "24/7 automated monitoring",
      "Faster incident response",
      "Evidence-grade footage",
      "Wide area coverage"
    ],
    color: "red"
  },
  {
    id: "film-media",
    title: "Film, Media & Real Estate",
    description: "Professional aerial cinematography and photography for productions, advertising campaigns, and premium real estate marketing that demands stunning visuals.",
    icon: "Camera",
    useCases: [
      "Feature film aerial sequences",
      "Commercial advertising shoots",
      "Real estate showcase photography",
      "Sports broadcast coverage",
      "Tourism and destination content"
    ],
    benefits: [
      "Cinema-grade 6K/8K footage",
      "FPV and tracking capabilities",
      "Licensed & insured operations",
      "Fast turnaround"
    ],
    color: "purple"
  },
  {
    id: "urban-planning",
    title: "Urban Planning & Government",
    description: "Comprehensive mapping, modeling, and monitoring solutions for city planners, government agencies, and public infrastructure managers.",
    icon: "Landmark",
    useCases: [
      "3D city mapping and modeling",
      "Flood and disaster modeling",
      "Urban growth monitoring",
      "Traffic analysis",
      "Environmental impact assessment"
    ],
    benefits: [
      "GIS-ready datasets",
      "Centimeter-level accuracy",
      "Repeatable temporal surveys",
      "Open-standard data formats"
    ],
    color: "cyan"
  }
];
const coverageZones = [
  {
    id: "bay-area",
    name: "San Francisco Bay Area",
    region: "Northern California",
    lat: 37.7749,
    lng: -122.4194,
    radius: 80,
    description: "Full operational coverage including San Francisco, Oakland, San Jose, and surrounding counties.",
    active: true
  },
  {
    id: "los-angeles",
    name: "Greater Los Angeles",
    region: "Southern California",
    lat: 34.0522,
    lng: -118.2437,
    radius: 120,
    description: "Coverage across LA, Orange County, Riverside, and the Inland Empire.",
    active: true
  },
  {
    id: "central-valley",
    name: "Central Valley",
    region: "California",
    lat: 36.7783,
    lng: -119.4179,
    radius: 150,
    description: "Agricultural and industrial operations across the entire Central Valley corridor.",
    active: true
  },
  {
    id: "nevada-corridor",
    name: "Nevada Corridor",
    region: "Nevada",
    lat: 36.1699,
    lng: -115.1398,
    radius: 100,
    description: "Las Vegas metro area and surrounding desert regions, including commercial and security contracts.",
    active: true
  },
  {
    id: "pacific-northwest",
    name: "Pacific Northwest",
    region: "Oregon & Washington",
    lat: 45.5051,
    lng: -122.675,
    radius: 200,
    description: "Expanding coverage across Portland, Seattle, and the wider Pacific Northwest region.",
    active: false
  }
];
export {
  coverageZones as c,
  industries as i,
  projects as p,
  services as s
};
