import Array "mo:core/Array";

actor {

  // ── Types ──────────────────────────────────────────────────────────────────

  public type Project = {
    id : Nat;
    title : Text;
    industry : Text;
    serviceType : Text;
    description : Text;
    clientIndustry : Text;
    results : Text;
    hasBeforeAfter : Bool;
  };

  public type Service = {
    id : Nat;
    title : Text;
    slug : Text;
    description : Text;
    features : [Text];
    benefits : [Text];
    icon : Text;
  };

  public type Industry = {
    id : Nat;
    name : Text;
    slug : Text;
    description : Text;
    useCases : [Text];
    benefits : [Text];
    icon : Text;
  };

  public type CoverageZone = {
    id : Nat;
    name : Text;
    region : Text;
    description : Text;
    lat : Float;
    lng : Float;
  };

  // ── Sample Data ────────────────────────────────────────────────────────────

  let sampleProjects : [Project] = [
    {
      id = 1;
      title = "Downtown High-Rise Construction Progress";
      industry = "Construction";
      serviceType = "Aerial Photography";
      description = "Comprehensive aerial documentation of a 42-story residential tower from groundbreaking to topping out. Bi-weekly photo and video reports delivered to project stakeholders.";
      clientIndustry = "Construction";
      results = "Saved 15% on site inspection costs, identified 3 safety issues before escalation, delivered 48 progress reports over 24 months.";
      hasBeforeAfter = true;
    },
    {
      id = 2;
      title = "Vineyard Crop Health Assessment";
      industry = "Agriculture";
      serviceType = "Thermal Inspection";
      description = "Full NDVI and thermal mapping of a 500-acre vineyard in Napa Valley to identify irrigation deficiencies and early disease onset across multiple vine varieties.";
      clientIndustry = "Agriculture";
      results = "Detected irrigation failures in 12% of fields before visible symptoms appeared, increasing yield by an estimated 8% through targeted intervention.";
      hasBeforeAfter = true;
    },
    {
      id = 3;
      title = "Luxury Coastal Estate Marketing Campaign";
      industry = "Real Estate";
      serviceType = "Cinematic Filming";
      description = "Cinematic aerial and ground-level video production for a $14M oceanfront property listing. Included golden-hour flights, interior walkthroughs, and neighborhood context shots.";
      clientIndustry = "Real Estate";
      results = "Property sold within 11 days of listing — 60% faster than comparable properties in the area. Listing video garnered 85,000 views on social media.";
      hasBeforeAfter = false;
    },
    {
      id = 4;
      title = "Industrial Campus Security Audit";
      industry = "Security";
      serviceType = "Security Surveillance";
      description = "Nighttime and daytime perimeter surveillance of a 200-acre logistics facility using thermal and RGB cameras. Mapped blind spots and assessed fence-line vulnerabilities.";
      clientIndustry = "Security";
      results = "Identified 7 perimeter blind spots, reduced security patrol routes by 30%, and provided evidence for 2 unauthorized access incidents.";
      hasBeforeAfter = false;
    },
    {
      id = 5;
      title = "Highway Infrastructure Inspection";
      industry = "Infrastructure";
      serviceType = "3D Mapping";
      description = "Detailed 3D photogrammetric survey of a 12-mile highway corridor including bridges, overpasses, and retaining walls for the state DOT's annual structural assessment.";
      clientIndustry = "Infrastructure";
      results = "Reduced inspection time by 70% versus traditional ground teams, produced sub-centimeter accuracy point clouds, flagged 4 bridge deck anomalies for follow-up.";
      hasBeforeAfter = true;
    },
    {
      id = 6;
      title = "Feature Film Desert Chase Sequence";
      industry = "Film & Entertainment";
      serviceType = "Cinematic Filming";
      description = "Aerial cinematography for a Hollywood action film's climactic desert chase sequence. Operated custom-rigged heavy-lift drones with RED camera payloads across 3 shoot days.";
      clientIndustry = "Film & Entertainment";
      results = "Delivered 14 approved aerial shots used in the final cut, completed all shots within schedule, received cinematography credit in the film.";
      hasBeforeAfter = false;
    },
  ];

  let sampleServices : [Service] = [
    {
      id = 1;
      title = "Aerial Photography";
      slug = "aerial-photography";
      description = "Stunning high-resolution aerial imagery captured with professional-grade cameras and precision-stabilized gimbals. Perfect for real estate, marketing, and documentation.";
      features = [
        "50MP full-frame aerial stills",
        "RAW + JPEG delivery formats",
        "Same-day turnaround available",
        "Licensed FAA Part 107 pilots",
        "GPS-tagged metadata on all images",
        "Twilight and golden-hour sessions",
      ];
      benefits = [
        "Dramatically elevate your marketing materials",
        "Capture perspectives impossible from the ground",
        "Faster and more cost-effective than helicopter photography",
        "Fully insured flights up to $5M liability",
      ];
      icon = "camera";
    },
    {
      id = 2;
      title = "3D Mapping & Surveying";
      slug = "3d-mapping";
      description = "Centimeter-accurate photogrammetric 3D models and topographic surveys delivered as point clouds, orthomosaics, and digital elevation models compatible with all major GIS and CAD platforms.";
      features = [
        "Sub-2cm GSD resolution",
        "LiDAR and RGB sensor fusion",
        "AutoCAD, ArcGIS, and Revit compatible exports",
        "Real-time RTK GPS correction",
        "Volume and area calculations included",
        "Cloud-hosted model viewer provided",
      ];
      benefits = [
        "Replace weeks of ground survey in hours",
        "Reduce surveying costs by up to 70%",
        "Access to live project data from anywhere",
        "Fewer site visits for stakeholders",
      ];
      icon = "map";
    },
    {
      id = 3;
      title = "Thermal Inspection";
      slug = "thermal-inspection";
      description = "Radiometric thermal imaging for solar panels, rooftops, pipelines, electrical infrastructure, and crop health assessment. Detect anomalies invisible to the naked eye.";
      features = [
        "FLIR radiometric thermal cameras",
        "Temperature delta reporting",
        "Annotated defect maps delivered",
        "Simultaneous RGB + thermal capture",
        "IEC 62446-3 compliant solar reports",
        "Automated anomaly detection",
      ];
      benefits = [
        "Catch failures before costly downtime",
        "Non-destructive, non-contact inspection",
        "Cover large areas in a fraction of the time",
        "Insurance-grade documentation",
      ];
      icon = "thermometer";
    },
    {
      id = 4;
      title = "Land Surveying";
      slug = "land-surveying";
      description = "FAA-compliant aerial land surveys for boundary determination, construction stakeout, and as-built documentation. Delivered with registered survey-grade accuracy.";
      features = [
        "Ground control point network setup",
        "ALTA/NSPS compliant deliverables",
        "Property boundary mapping",
        "Volumetric stockpile calculations",
        "Cut/fill analysis for grading projects",
        "Licensed professional surveyor sign-off",
      ];
      benefits = [
        "Speed up permitting and approvals",
        "Reduce disputes with accurate boundary data",
        "Streamline construction planning",
        "Legally defensible survey documents",
      ];
      icon = "ruler";
    },
    {
      id = 5;
      title = "Security Surveillance";
      slug = "security-surveillance";
      description = "Rapid deployment aerial surveillance for large-scale security operations, event monitoring, perimeter assessment, and search-and-rescue support.";
      features = [
        "30x optical zoom camera payloads",
        "Nighttime IR and thermal capability",
        "Live video downlink to command post",
        "Encrypted video transmission",
        "Up to 4-hour continuous coverage per mission",
        "Emergency rapid-deployment within 2 hours",
      ];
      benefits = [
        "Cover areas ground teams cannot safely access",
        "Real-time situational awareness for command",
        "Deter unauthorized activity with visible presence",
        "Documented evidence chain of custody",
      ];
      icon = "shield";
    },
    {
      id = 6;
      title = "Cinematic Filming";
      slug = "cinematic-filming";
      description = "Hollywood-quality aerial cinematography for film, television, commercials, and branded content. We operate top-tier camera platforms and work seamlessly with your production crew.";
      features = [
        "RED, ARRI, and Sony cinema camera payloads",
        "6-axis stabilized heavy-lift platforms",
        "DIT and color science consultation",
        "FAA Part 107 Certificate of Waiver for complex airspace",
        "Storyboard-to-shot collaboration",
        "Full production insurance and location permits",
      ];
      benefits = [
        "Achieve shots that define your production",
        "Faster and safer than traditional helicopter rigs",
        "Seamless integration with your production schedule",
        "Broadcast and festival-ready deliverables",
      ];
      icon = "film";
    },
  ];

  let sampleIndustries : [Industry] = [
    {
      id = 1;
      name = "Construction";
      slug = "construction";
      description = "From site surveys to progress documentation and safety monitoring, our drones give construction teams a bird's-eye view of every project phase — keeping builds on time and on budget.";
      useCases = [
        "Pre-construction topographic surveys",
        "Weekly progress photo and video reports",
        "Earthwork volume calculations",
        "Safety compliance documentation",
        "As-built verification surveys",
        "Equipment and workforce tracking",
      ];
      benefits = [
        "Reduce site inspection costs by up to 60%",
        "Catch delays and issues before they escalate",
        "Improve stakeholder communication with visual updates",
        "Eliminate manual grade checks with aerial data",
      ];
      icon = "hard-hat";
    },
    {
      id = 2;
      name = "Agriculture";
      slug = "agriculture";
      description = "Precision agriculture starts from the sky. NDVI mapping, thermal crop health analysis, and irrigation monitoring help farmers maximize yield while minimizing inputs.";
      useCases = [
        "NDVI vegetation health mapping",
        "Irrigation system leak detection",
        "Pest and disease early warning",
        "Crop stand counts and plant health",
        "Drainage and soil moisture mapping",
        "Harvest planning and yield estimation",
      ];
      benefits = [
        "Increase yield through targeted interventions",
        "Reduce water and chemical inputs",
        "Identify problem areas weeks before visible symptoms",
        "Generate compliance documentation for subsidies",
      ];
      icon = "sprout";
    },
    {
      id = 3;
      name = "Real Estate";
      slug = "real-estate";
      description = "Properties sell faster and for more when showcased from the air. Our real estate drone services deliver the stunning imagery and video that modern buyers expect.";
      useCases = [
        "Luxury residential listing photography",
        "Commercial property aerial walkthroughs",
        "Development site context and neighborhood views",
        "HOA community overviews",
        "Rooftop and facade condition assessment",
        "Virtual tour aerial integration",
      ];
      benefits = [
        "List properties with scroll-stopping visuals",
        "Reduce days on market with compelling media",
        "Highlight lot size, views, and amenities",
        "Differentiate listings in a competitive market",
      ];
      icon = "home";
    },
    {
      id = 4;
      name = "Security & Law Enforcement";
      slug = "security";
      description = "Aerial surveillance platforms extend the reach of security teams, providing real-time intelligence and documentation for facilities, events, and critical infrastructure.";
      useCases = [
        "Perimeter security and intrusion detection",
        "Large event crowd monitoring",
        "Search and rescue operations",
        "Critical infrastructure threat assessment",
        "Traffic incident management support",
        "Evidence collection and documentation",
      ];
      benefits = [
        "Extend coverage without adding personnel",
        "Real-time video to incident commanders",
        "Reduce risk to personnel in dangerous situations",
        "Admissible aerial documentation for investigations",
      ];
      icon = "badge";
    },
    {
      id = 5;
      name = "Film & Entertainment";
      slug = "film-entertainment";
      description = "Aerial cinematography has transformed storytelling. Our cinema-grade drone platforms deliver the signature aerial shots that define modern film, TV, and commercial production.";
      useCases = [
        "Feature film aerial sequences",
        "Television commercial production",
        "Music video aerial coverage",
        "Sports event broadcasting",
        "Documentary and news gathering",
        "Theme park and resort promotional content",
      ];
      benefits = [
        "Access shots previously only possible by helicopter",
        "Faster setup times and lower cost than traditional rigs",
        "Quiet platforms suitable for sync-sound filming",
        "Work in locations helicopters cannot safely access",
      ];
      icon = "clapperboard";
    },
    {
      id = 6;
      name = "Infrastructure";
      slug = "infrastructure";
      description = "Bridges, power lines, pipelines, and highways require regular inspection. Our drones safely access difficult structures and deliver inspection-grade documentation at a fraction of traditional costs.";
      useCases = [
        "Bridge and overpass structural inspection",
        "Power line and pylon corridor surveys",
        "Pipeline leak and corrosion detection",
        "Cell tower and antenna inspection",
        "Dam and levee condition monitoring",
        "Road and highway pavement assessment",
      ];
      benefits = [
        "Inspect confined and dangerous spaces without risk",
        "Generate 3D inspection models for asset management",
        "Reduce inspection costs by up to 80%",
        "Maintain regulatory compliance with documented evidence",
      ];
      icon = "zap";
    },
  ];

  let sampleCoverageZones : [CoverageZone] = [
    {
      id = 1;
      name = "Greater Los Angeles";
      region = "West Coast";
      description = "Full coverage across LA County, Orange County, and the Inland Empire. FAA Part 107 waivers held for Class B, C, and D airspace including LAX, BUR, and SNA approach corridors.";
      lat = 34.0522;
      lng = -118.2437;
    },
    {
      id = 2;
      name = "San Francisco Bay Area";
      region = "West Coast";
      description = "Coverage across San Francisco, the East Bay, Silicon Valley, and the Peninsula. Extensive experience operating in complex Bay Area airspace with LAANC authorization.";
      lat = 37.7749;
      lng = -122.4194;
    },
    {
      id = 3;
      name = "Greater New York Metro";
      region = "East Coast";
      description = "Operations across the NYC five boroughs, New Jersey, Long Island, and Connecticut. Class B airspace authorizations and extensive urban operations experience.";
      lat = 40.7128;
      lng = -74.006;
    },
    {
      id = 4;
      name = "Dallas–Fort Worth Metroplex";
      region = "South Central";
      description = "Coverage of the entire DFW Metroplex and surrounding counties. Active relationships with local authorities for expedited permitting of commercial projects.";
      lat = 32.7767;
      lng = -96.797;
    },
    {
      id = 5;
      name = "Chicago Metropolitan Area";
      region = "Midwest";
      description = "Coverage across Cook County, the North Shore, DuPage, and the Illinois–Indiana corridor. Experience with O'Hare and Midway airspace coordination.";
      lat = 41.8781;
      lng = -87.6298;
    },
  ];

  // ── Queries ────────────────────────────────────────────────────────────────

  public query func getAllProjects() : async [Project] {
    sampleProjects;
  };

  public query func getAllServices() : async [Service] {
    sampleServices;
  };

  public query func getAllIndustries() : async [Industry] {
    sampleIndustries;
  };

  public query func getCoverageZones() : async [CoverageZone] {
    sampleCoverageZones;
  };

};
