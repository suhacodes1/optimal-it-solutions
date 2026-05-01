import { useEffect, useMemo, useRef, useState } from "react";
import logo from "./assets/ray-ban.png";
import appfutura from "./assets/appfutura.webp";
import clutch from "./assets/clutch-verified.png";
import designrush from "./assets/designrush.webp";
import dmca from "./assets/dmca-verified-badge.png";
import goodfirms from "./assets/goodfirms.png";
import rightfirms from "./assets/rightfirms.webp";
import trustpilot from "./assets/trustpilot.png";

const navItems = ["Services", "Work", "About", "Contact"];

const messages = [
  "Hey, I want to build a website",
  "Hey, I need help with an AI solution",
  "Hey, I want to scale my business",
  "Hey, I need a mobile app",
];

const heroSlides = [
  {
    id: "next",
    eyebrow: "Web and App Development Experts",
    headline: "We Build What's Next. Scale Without Limits",
    text: "We are here to help you turn ideas into real working systems that drive real revenue. From ecommerce to AI development, custom web development, and digital marketing, we cater to your brand needs.",
    cta: "Let's Develop Now",
    theme: "from-[rgba(255,131,43,0.24)] to-[rgba(255,95,45,0.06)]",
  },
  {
    id: "ai",
    eyebrow: "AI Development",
    headline: "AI That Works For You",
    text: "AI shouldn't feel complicated or out of reach. We build practical AI solutions that automate tasks and fit naturally into how your business already performs.",
    cta: "Build with AI",
    theme: "from-[rgba(86,176,255,0.2)] to-[rgba(255,131,43,0.06)]",
  },
  {
    id: "web",
    eyebrow: "Custom Web Development",
    headline: "Built Around Your Business",
    text: "Your business is real, so your website shouldn't be generic. We develop custom platforms that match your workflows and give you room to grow without limitations.",
    cta: "Start Your Platform",
    theme: "from-[rgba(255,198,87,0.18)] to-[rgba(255,131,43,0.06)]",
  },
  {
    id: "growth",
    eyebrow: "Digital Marketing and Growth Systems",
    headline: "Digital Marketing- Growth You Can See and Measure",
    text: "More traffic means nothing without results. We focus on attracting the right audience and turning them into customers through strategies that deliver consistent, measurable growth.",
    cta: "Let's Develop Now",
    theme: "from-[rgba(255,131,43,0.22)] to-[rgba(146,90,255,0.08)]",
  },
  {
    id: "ecommerce",
    eyebrow: "E-commerce",
    headline: "Sell Smarter",
    text: "We create effortless ecommerce experiences for your customers that are easily manageable for you. From product pages to checkout, every detail helps turn visitors into buyers.",
    cta: "Launch Your Store",
    theme: "from-[rgba(79,143,247,0.18)] to-[rgba(255,131,43,0.07)]",
  },
];

const expertiseItems = [
  { title: "Ecommerce", icon: "cart" },
  { title: "AI Automation", icon: "ai" },
  { title: "Marketing", icon: "megaphone" },
  { title: "Web Development", icon: "code" },
];

const serviceTabs = [
  {
    id: "launch",
    label: "Launch Something New",
    headline: "Turn Ideas Into Systems.",
    highlight: "Grow Without Limits.",
    text: "We build solutions from launching new products to optimizing and scaling operations that are designed to perform today and adapt as your business expands.",
    cards: [
      {
        title: "Product Engineering",
        text: "We turn ideas into scalable products from SaaS platforms to startup MVPs.",
        bullets: ["Custom Software Platforms", "SaaS applications", "Startup MVPs"],
        featured: true,
      },
      {
        title: "Mobile Applications",
        text: "iOS, Android, or cross-platform apps that are built for performance, usability, and real-world demand.",
        bullets: ["iOS Development", "Android App Development", "Hybrid App Development"],
      },
      {
        title: "AI-Powered Products",
        text: "Integrate machine learning and automation directly into your product experience.",
        bullets: ["Integrate intelligent automation", "Machine learning", "AI System integration"],
      },
      {
        title: "Digital Platforms & Marketplaces",
        text: "Build connected ecosystems where users, services, and data work together seamlessly.",
        bullets: ["Social Media Marketing", "Ecommerce Website", "Shopify Website"],
      },
      {
        title: "Product Design & User Experience",
        text: "User-centered design that drives engagement and adoption.",
        bullets: ["User Experience Design", "User Interface Design", "Product Development"],
      },
    ],
  },
  {
    id: "scale",
    label: "Scale My Business",
    headline: "Make Your Business",
    highlight: "Smarter, Faster, and More Efficient",
    text: "As businesses grow, systems become more complex. We help companies automate operations, integrate intelligent systems, and scale infrastructure so their technology evolves alongside their business.",
    cards: [
      {
        title: "AI & Intelligent Automation",
        text: "Reduce manual processes and create systems that think, learn, and improve over time.",
        bullets: ["Process Automation", "Intelligent Systems", "AI Integration"],
        featured: true,
      },
      {
        title: "Cloud & Infrastructure Scaling",
        text: "Reliable, flexible cloud setups that grow with your business not against it.",
        bullets: ["Cloud Architecture", "Infrastructure Scaling", "Cloud Migration"],
      },
      {
        title: "Operational Platforms",
        text: "Custom dashboards, CRM integrations, and internal systems that streamline operations.",
        bullets: ["Custom dashboards", "CRM integrations", "AI System integration"],
      },
      {
        title: "Customer Acquisition Systems",
        text: "Build B2B and B2C platforms that connect users, services, and data.",
        bullets: ["SEO", "PPC", "SMM"],
      },
      {
        title: "Data & Business Intelligence",
        text: "Analytics pipelines and reporting systems that power smarter decision-making.",
        bullets: ["Data Science", "Intelligent Dashboards", "Data Centers"],
      },
    ],
  },
];

const goalSteps = [
  { id: "all", label: "All Services", accent: true, title: "Start with the full picture.", text: "See every capability at once, then drill into the service area that matches your next move.", cta: "Explore all services" },
  { id: "launch", label: "Launch a New Product", title: "Move from concept to launch.", text: "We shape new products with app development, UX, and system thinking so the first release already feels scalable.", cta: "Launch something new" },
  { id: "scale", label: "Scale Infrastructure", title: "Strengthen the systems underneath.", text: "When your product is growing, cloud, backend, and operational architecture need to grow with it.", cta: "Scale infrastructure" },
  { id: "growth", label: "Engage Customers & Grow", title: "Turn attention into traction.", text: "Growth-focused campaigns, PPC, and platform optimization help convert demand into measurable business movement.", cta: "Grow customer demand" },
  { id: "ai", label: "Innovate with AI & Automation", title: "Bring AI into the real workflow.", text: "Automation becomes valuable when it fits the team, the process, and the customer journey instead of feeling bolted on.", cta: "Bring in AI" },
  { id: "design", label: "Design & Experience", title: "Make every touchpoint feel premium.", text: "From interface design to brand motion and UX clarity, this is where the product starts to feel polished and memorable.", cta: "Shape the experience" },
  { id: "ecommerce", label: "E-Commerce & Platforms", title: "Create a smarter selling system.", text: "Commerce works best when product discovery, checkout, and management feel effortless on both sides.", cta: "Build the platform" },
];

const goalCards = [
  { id: "cta", step: "all", title: "CTA", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80", ctaOnly: true, shape: "circle" },
  { id: "app", step: "launch", eyebrow: "IOS/Android/Hybrid", title: "App Development", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80" },
  { id: "design", step: "design", eyebrow: "Design", title: "Graphic Designing", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80" },
  { id: "marketing", step: "growth", eyebrow: "Marketing", title: "PPC/META ADS", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80" },
  { id: "ai-card", step: "ai", eyebrow: "AI", title: "AI Solutions", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80" },
  { id: "cloud", step: "scale", eyebrow: "Cloud", title: "Cloud Systems", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
];

const badgeItems = [
  { title: "AppFutura", logo: appfutura },
  { title: "Clutch", logo: clutch },
  { title: "DesignRush", logo: designrush },
  { title: "DMCA", logo: dmca },
  { title: "GoodFirms", logo: goodfirms },
  { title: "RightFirms", logo: rightfirms },
  { title: "Trustpilot", logo: trustpilot },
];

const businessStageCards = [
  { title: "STARTUPS", text: "Big ideas need the right start. We help you move from concept to execution with AI-powered systems that are simple, scalable, and built for growth from day one.", icon: "blocks" },
  { title: "SMALL BUSINESSES", text: "We simplify operations, introduce smart automation, and create systems that help you grow without narrowing down your resources.", icon: "note" },
  { title: "RESELLERS", text: "We offer scalable backend systems and AI-enhanced tools that will help you manage clients and growth more efficiently.", icon: "stack" },
  { title: "LARGE ENTERPRISES", text: "Our strong AI-powered solutions help in improving and connecting departments to support high-level decision-making.", icon: "shield" },
];

const industries = [
  { id: "ecommerce", label: "E-commerce", description: "We build ecommerce platforms that convert. From seamless checkout experiences to backend systems that simplify inventory and order management, everything is designed to support growth." },
  { id: "healthcare", label: "Healthcare", description: "We design trusted healthcare systems that simplify patient interactions and support providers with reliable digital tools." },
  { id: "finance", label: "Finance and Banking", description: "We build high-performance finance applications that make transactions seamless without compromising compliance or reliability." },
  { id: "education", label: "Education and eLearning", description: "We create platforms that make education more interactive, accessible, and easy to manage for institutions and learners." },
  { id: "travel", label: "Travel and Hospitality", description: "We design faster booking and guest experiences that feel smooth for users and easier to manage for businesses." },
  { id: "media", label: "Media and Entertainment", description: "We develop content platforms that support streaming, engagement, and strong performance at high demand." },
  { id: "logistics", label: "Logistics and Supply Chain", description: "We improve coordination, tracking, and visibility so teams can manage operations with better control and fewer delays." },
  { id: "sports", label: "Sports, Esports and Gaming", description: "We create real-time interactive platforms that support active users, live data, and scalable experiences." },
  { id: "real-estate", label: "Real Estate", description: "We build digital property experiences that simplify listings, communication, and the buying or renting journey." },
];

const impactCards = [
  { industry: "ecommerce", eyebrow: "E-Commerce", title: "E commerce application design", text: "Shop furniture online. Find your perfect piece and have it delivered to your doorstep.", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80" },
  { industry: "finance", eyebrow: "Fintech", title: "Budgeting made easy application", text: "Trade stocks, cryptocurrencies, and more with our user-friendly app. Stay updated and make smart investment decisions.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80" },
  { industry: "healthcare", eyebrow: "Dog walking", title: "Dog walking application design", text: "We are a responsible and loving pet owner seeking to provide a happy, healthy home for a dog.", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80" },
];

const testimonials = [
  { title: "Great design and support", text: "Optimal IT Solutions brought clarity to our product direction and completely lifted the quality of our website experience. The structure felt sharper, the UX felt cleaner, and the whole team was easy to work with.", name: "Bernardine Denigan", role: "Product manager at Cisco", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
  { title: "A strong digital partner", text: "The team helped us rethink both design and growth systems at the same time. The result felt more premium, more intentional, and much easier for customers to move through.", name: "Medelene Polestico", role: "Industrial Design at Google", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
  { title: "Built with real business value", text: "From concept to rollout, everything felt considered. The new direction gave us a cleaner sales story, a more polished digital presence, and stronger confidence in the next phase of growth.", name: "Gael Donnay", role: "Interior Design at Infotech", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" }, {
    name: "Sarah Mitchell",
    role: "Marketing Lead at Shopify",
    title: "Exceptional UX transformation",
    text: "The redesign completely improved our user journey. Engagement increased and the experience feels far more intuitive and polished.",
    image: "/images/user4.jpg",
  },
];

const phoneShowcase = [
  { title: "Travedia", subtitle: "Menjelajah budaya tanpa batas.", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80", titleClass: "text-[#e6ff38]" },
  { title: "Feed", subtitle: "Other posts", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80", titleClass: "" },
  { title: "Barong", subtitle: "Comments", image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80", titleClass: "" },
];

const coreSolutions = [
  { id: "automation", label: "AI Automation", title: "AI Automation Development", text: "Our state-of-the-art intelligent systems are designed to reduce manual work and help your business operate smarter with accuracy.", image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1400&q=80" },
  { id: "scaling", label: "Scaling", title: "Scaling Architecture", text: "Your foundation matters. We design systems built for stability and growth, so your business can scale seamlessly without disruptions.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80" },
  { id: "mobile", label: "Mobile", title: "Mobile Experiences", text: "Great apps aren't just built, they're experienced. We create mobile applications that are intuitive, smooth, and designed for real user engagement from start to finish.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80" },
  { id: "growth", label: "Growth", title: "Digital Growth Solutions", text: "Growth should be predictable, not random. Our performance-driven marketing strategies focus on attracting the right audience and delivering measurable results.", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1400&q=80" },
  { id: "web", label: "Web", title: "Custom Web Development", text: "Your business is unique, your platform should be too. We build tailored web solutions aligned with your niche and goals, without forcing you into generic templates.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80" },
];

/* ─── SVG Wave Background ─────────────────────────────────────────── */
function WaveBackground() {
  return (
    <div className="page-wave-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <radialGradient id="glowCenter" cx="78%" cy="10%" r="40%">
            <stop offset="0%" stopColor="rgba(220,100,10,0.7)" />
            <stop offset="35%" stopColor="rgba(180,65,5,0.32)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <radialGradient id="glowBottom" cx="88%" cy="85%" r="30%">
            <stop offset="0%" stopColor="rgba(160,55,5,0.30)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* Background glow blobs */}
        <rect width="1440" height="900" fill="url(#glowCenter)" />
        <rect width="1440" height="900" fill="url(#glowBottom)" />

        {/* Wave group 1 — bright tight waves near top-right */}
        <g className="wave-g1" opacity="0.75">
          <path d="M 900 -60 Q 1050 80 1200 40 Q 1350 0 1500 60" stroke="rgba(220,100,10,0.55)" strokeWidth="1.4" fill="none" />
          <path d="M 860 -20 Q 1020 130 1180 80 Q 1340 30 1500 100" stroke="rgba(210,88,8,0.48)" strokeWidth="1.2" fill="none" />
          <path d="M 820 20 Q 990 180 1160 120 Q 1330 60 1500 140" stroke="rgba(200,80,6,0.42)" strokeWidth="1.1" fill="none" />
          <path d="M 780 60 Q 960 220 1140 160 Q 1320 100 1500 180" stroke="rgba(190,72,5,0.36)" strokeWidth="1.0" fill="none" />
          <path d="M 740 100 Q 930 260 1120 200 Q 1310 140 1500 220" stroke="rgba(180,65,4,0.30)" strokeWidth="0.9" fill="none" />
          <path d="M 700 140 Q 900 300 1100 240 Q 1300 180 1500 260" stroke="rgba(170,58,3,0.25)" strokeWidth="0.85" fill="none" />
          <path d="M 660 180 Q 870 340 1080 280 Q 1290 220 1500 300" stroke="rgba(160,52,3,0.20)" strokeWidth="0.8" fill="none" />
          <path d="M 620 220 Q 840 380 1060 320 Q 1280 260 1500 340" stroke="rgba(150,46,2,0.16)" strokeWidth="0.75" fill="none" />
          <path d="M 580 260 Q 810 420 1040 360 Q 1270 300 1500 380" stroke="rgba(140,40,2,0.13)" strokeWidth="0.7" fill="none" />
          <path d="M 540 300 Q 780 460 1020 400 Q 1260 340 1500 420" stroke="rgba(130,35,2,0.10)" strokeWidth="0.65" fill="none" />
        </g>

        {/* Wave group 2 — slightly looser, mid section */}
        <g className="wave-g2" opacity="0.60">
          <path d="M 950 -80 Q 1100 60 1280 20 Q 1420 -10 1520 50" stroke="rgba(215,95,8,0.45)" strokeWidth="1.3" fill="none" />
          <path d="M 910 -30 Q 1070 120 1250 70 Q 1400 30 1520 90" stroke="rgba(205,85,7,0.38)" strokeWidth="1.1" fill="none" />
          <path d="M 870 20 Q 1040 170 1220 120 Q 1380 70 1520 130" stroke="rgba(195,75,6,0.32)" strokeWidth="1.0" fill="none" />
          <path d="M 830 70 Q 1010 220 1190 170 Q 1360 120 1520 170" stroke="rgba(185,68,5,0.26)" strokeWidth="0.9" fill="none" />
          <path d="M 790 120 Q 980 270 1160 220 Q 1340 170 1520 210" stroke="rgba(175,60,4,0.21)" strokeWidth="0.85" fill="none" />
          <path d="M 750 170 Q 950 320 1130 270 Q 1320 220 1520 250" stroke="rgba(165,54,3,0.16)" strokeWidth="0.8" fill="none" />
          <path d="M 710 220 Q 920 370 1100 320 Q 1300 270 1520 290" stroke="rgba(155,48,3,0.12)" strokeWidth="0.75" fill="none" />
        </g>

        {/* Wave group 3 — wide sweeping lower waves */}
        <g className="wave-g3" opacity="0.50">
          <path d="M 1000 700 Q 1150 620 1300 680 Q 1420 730 1520 700" stroke="rgba(200,80,6,0.35)" strokeWidth="1.2" fill="none" />
          <path d="M 950 740 Q 1110 660 1270 720 Q 1400 770 1520 740" stroke="rgba(190,70,5,0.28)" strokeWidth="1.0" fill="none" />
          <path d="M 900 780 Q 1070 700 1240 760 Q 1380 810 1520 780" stroke="rgba(180,62,4,0.22)" strokeWidth="0.9" fill="none" />
          <path d="M 850 820 Q 1030 740 1210 800 Q 1360 850 1520 820" stroke="rgba(170,55,3,0.17)" strokeWidth="0.85" fill="none" />
          <path d="M 800 860 Q 990 780 1180 840 Q 1340 890 1520 860" stroke="rgba(160,48,3,0.12)" strokeWidth="0.8" fill="none" />
        </g>
      </svg>
    </div>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M5 12h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function ExpertiseIcon({ type, className = "" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`h-11 w-11 ${className}`}>
      {type === "cart" && (<><path {...common} d="M12 18h7l6 22h21l6-16H23" /><circle {...common} cx="28" cy="49" r="4" /><circle {...common} cx="46" cy="49" r="4" /><path {...common} d="M20 12h12m-6-6v12M14 28h18" /></>)}
      {type === "ai" && (<><rect {...common} x="22" y="20" width="20" height="20" rx="6" /><path {...common} d="M18 25h-6m6 14h-6m40-14h-6m6 14h-6M25 18v-6m14 6v-6m-14 34v6m14-6v6" /><circle {...common} cx="29" cy="28" r="2" /><circle {...common} cx="35" cy="28" r="2" /><path {...common} d="M28 35c2 2 6 2 8 0" /></>)}
      {type === "megaphone" && (<><path {...common} d="M19 34V23l21-7v25l-21-7Z" /><path {...common} d="M40 20l10-6v30l-10-6" /><path {...common} d="M19 34l4 11h8l-2-8" /><path {...common} d="M50 24h5m-5 10h5" /></>)}
      {type === "code" && (<><rect {...common} x="10" y="14" width="44" height="30" rx="4" /><path {...common} d="m25 23-8 6 8 6m14-12 8 6-8 6m-8 9h2" /><path {...common} d="M18 50h28" /><circle {...common} cx="18" cy="20" r="1.5" /><circle {...common} cx="24" cy="20" r="1.5" /></>)}
      {type === "blocks" && (<><rect {...common} x="15" y="30" width="14" height="18" rx="2" /><rect {...common} x="25" y="12" width="14" height="18" rx="2" /><rect {...common} x="35" y="30" width="14" height="18" rx="2" /></>)}
      {type === "note" && (<><path {...common} d="M19 12h22l8 8v32H19z" /><path {...common} d="M41 12v10h10" /><path {...common} d="M26 30h16M26 38h16" /></>)}
      {type === "stack" && (<><path {...common} d="M18 18h20a6 6 0 0 1 6 6v14H24a6 6 0 0 1-6-6z" /><path {...common} d="M24 26h20a6 6 0 0 1 6 6v14H30a6 6 0 0 1-6-6z" /><path {...common} d="M16 44h12m-6-6v12" /></>)}
      {type === "shield" && (<><path {...common} d="M32 10 48 16v14c0 10-7 18-16 22C23 48 16 40 16 30V16z" /><path {...common} d="m24 31 5 5 11-12" /></>)}
    </svg>
  );
}

const glassButton = "inline-flex items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-[rgba(30,30,30,0.95)] px-5 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]";
const orangeButton = "inline-flex items-center justify-between gap-4 rounded-[1.35rem] border border-[rgba(255,149,72,0.28)] bg-[linear-gradient(135deg,rgba(186,90,18,0.88),rgba(255,109,13,0.96))] px-5 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]";

/* ─── App ─────────────────────────────────────────────────────────── */
export default function App() {
  const [activeHero] = useState("growth");
  const [activeTab, setActiveTab] = useState("launch");
  const [activeGoal, setActiveGoal] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");
  const [activeCore, setActiveCore] = useState("automation");
  const serviceCarouselRef = useRef(null);
  const testimonialCarouselRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const currentMessage = messages[messageIndex];
    const typing = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setTypedText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
          setTypedText("");
        }, 2000);
      }
    }, 40);
    return () => clearInterval(typing);
  }, [messageIndex]);

  const activeHeroData = useMemo(() => heroSlides.find((s) => s.id === activeHero) ?? heroSlides[0], [activeHero]);
  const activeService = useMemo(() => serviceTabs.find((t) => t.id === activeTab) ?? serviceTabs[0], [activeTab]);
  const activeGoalData = useMemo(() => goalSteps.find((s) => s.id === activeGoal) ?? goalSteps[0], [activeGoal]);
  const visibleGoalCards = useMemo(() => {
    if (activeGoal === "all") return goalCards;
    return goalCards.filter((card) => card.step === activeGoal);
  }, [activeGoal]);
  const visibleImpactCards = useMemo(() => impactCards.filter((c) => activeIndustry === "ecommerce" || c.industry === activeIndustry || activeIndustry === "all"), [activeIndustry]);
  const activeIndustryCopy = useMemo(() => industries.find((i) => i.id === activeIndustry)?.description ?? industries[0].description, [activeIndustry]);
  const activeCoreData = useMemo(() => coreSolutions.find((s) => s.id === "automation") ?? coreSolutions[0], []);

  function scrollRow(ref, direction) {
    if (!ref.current) return;
    const amount = Math.max(ref.current.clientWidth * 0.82, 320);
    ref.current.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white" style={{ fontFamily: '"Manrope", Arial, "Helvetica Neue", Helvetica, sans-serif' }}>

      {/* ── WAVE BACKGROUND (fixed, behind everything) ── */}
      <WaveBackground />

      {/* ── NAV ── */}
      <header className="relative z-10 mx-auto max-w-[1700px] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <nav className="fade-up flex items-center justify-between rounded-[2rem] border border-[rgba(60,60,60,0.7)] bg-[rgba(18,18,18,0.96)] px-6 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.36)]">
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-6 rounded-full border-[0.34rem] border-[var(--color-accent)] after:absolute after:inset-[0.22rem] after:rounded-full after:bg-white after:content-['']" />
            <div>
              <p className="m-0 text-[1.05rem] leading-[0.9] font-extrabold tracking-[-0.05em]">OPTIMAL</p>
              <p className="m-0 text-[0.72rem] leading-[0.9] tracking-[-0.06em] text-white/70">IT SOLUTIONS</p>
            </div>
          </div>
          <div className="hidden items-center gap-1 rounded-[1.2rem] border border-[rgba(60,60,60,0.8)] bg-[rgba(8,8,8,0.9)] px-2 py-2 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-[0.9rem] px-5 py-2.5 text-[0.9rem] text-white/80 transition duration-200 hover:bg-white/5 hover:text-white">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-[0.9rem] text-white/80 lg:inline">888-710-6350</span>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-5 py-2.5 text-[0.9rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]">
              Let&apos;s Connect
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section id="services" className="grid items-center gap-8 pt-12 lg:grid-cols-[1fr_auto] lg:pt-20">
          <div className="fade-up">
            <h1 className="max-w-[18ch] text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] font-extrabold tracking-[-0.03em]">
              {activeHero === "growth" ? (
                <>Digital Marketing- Growth<br />You Can See and Measure</>
              ) : (
                activeHeroData.headline
              )}
            </h1>
            <p className="mt-4 max-w-[52ch] text-[clamp(1.1rem,1.4vw,1.4rem)] leading-[1.6] text-white/88">
              {activeHeroData.text}
            </p>
            <div className="mt-8">
              <a href="#contact" className={`${glassButton} min-w-[min(100%,18rem)]`}>
                <span>{activeHeroData.cta}</span>
                <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-white/10"><ArrowIcon /></span>
              </a>
            </div>

            <div className="fade-up delay-2 mt-16">
              <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">Our Expertise</h2>
              <div className="mt-5 grid gap-1 sm:grid-cols-2 xl:grid-cols-4">
                {expertiseItems.map((item, index) => (
                  <div key={item.title} className="opacity-0 [animation:fadeUp_0.8s_ease_forwards]" style={{ animationDelay: `${0.15 * (index + 1)}s` }}>
                    <div className="inline-flex text-white">
                      <ExpertiseIcon type={item.icon} className="h-16 w-16 sm:h-20 sm:w-20" />
                    </div>
                    <p className="mt-2 text-[1.6rem] font-semibold leading-[1.2]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockups */}
          <div className="fade-up delay-1 relative hidden lg:block" style={{ width: "640px", height: "700px", flexShrink: 0 }}>
            <article className="absolute overflow-hidden rounded-[2.2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.65)]" style={{ width: "210px", height: "430px", left: 0, top: "40px", zIndex: 1 }}>
              <img src={phoneShowcase[0].image} alt="Travedia" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.55))]" />
              <div className="absolute inset-x-4 bottom-5 z-10">
                <p className="text-[1.35rem] font-extrabold tracking-[-0.04em] text-[#e6ff38]">Travedia</p>
                <p className="mt-1 text-[0.8rem] leading-[1.25] text-white/85">Menjelajah budaya<br />tanpa batas.</p>
              </div>
            </article>
            <article className="absolute overflow-hidden rounded-[2.2rem] border border-white/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.65)]" style={{ width: "210px", height: "500px", left: "195px", top: 0, zIndex: 2 }}>
              <img src={phoneShowcase[1].image} alt="Feed" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0),rgba(0,0,0,0.3))]" />
              <div className="absolute inset-x-4 bottom-5 z-10">
                <p className="text-[1.15rem] font-extrabold tracking-[-0.04em] text-white">Feed</p>
                <p className="mt-1 text-[0.78rem] text-white/80">Other posts</p>
              </div>
            </article>
            <article className="absolute overflow-hidden rounded-[2.2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.65)]" style={{ width: "210px", height: "440px", left: "390px", top: "30px", zIndex: 1 }}>
              <img src={phoneShowcase[2].image} alt="Barong" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.52))]" />
              <div className="absolute inset-x-4 bottom-5 z-10">
                <p className="text-[1.15rem] font-extrabold tracking-[-0.04em] text-white">Barong</p>
                <p className="mt-1 text-[0.78rem] text-white/80">Comments</p>
              </div>
            </article>
          </div>
        </section>
      </header>

      {/* ── MARQUEE ── */}
      <section aria-label="Companies" className="relative z-10 mx-auto overflow-hidden border-y border-white/10 bg-[rgba(10,10,10,0.95)] py-6">
        <div className="marquee-track flex w-max items-center gap-16">
          {[...Array(2)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex items-center gap-16">
              <div className="flex flex-col items-start opacity-80 hover:opacity-100 transition">
                <span className="font-serif text-[1.5rem] font-bold italic text-white leading-none">Michaels</span>
                <span className="text-[0.48rem] tracking-[0.18em] text-white/60 uppercase">Where Creativity Happens</span>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <span className="text-[1.4rem] font-extrabold text-white tracking-tight">Walmart</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffc220]" fill="currentColor"><path d="M12 2l1.5 4.5L18 5l-3 3.5 2 4.5-5-2-5 2 2-4.5L6 5l4.5 1.5z" /></svg>
              </div>
              <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-white text-black text-[0.55rem] font-extrabold tracking-tight leading-none">W<br />FM</div>
                <span className="text-[1.4rem] font-extrabold text-white tracking-tighter">U</span>
              </div>
              <div className="opacity-80 hover:opacity-100 transition">
                <img src={logo} className="h-12 w-auto brightness-0 invert" alt="Ray-Ban" />
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" strokeDasharray="2 2" /></svg>
                <span className="text-[1.3rem] font-extrabold text-white tracking-widest uppercase">CONVERSE</span>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <div className="flex h-7 w-7 items-center justify-center border-2 border-white rounded-sm">
                  <span className="text-[0.5rem] font-extrabold text-white leading-none text-center">TI<br />TO</span>
                </div>
                <span className="text-[1.3rem] font-extrabold text-white tracking-widest uppercase">TISSOT</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEFINE YOUR GOALS ── */}
      <section className="fade-up delay-1 relative mt-0 overflow-hidden border-y border-white/6 bg-[linear-gradient(180deg,rgba(10,10,14,0.92),rgba(14,14,22,0.92))] px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[1780px]">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">Define Your Goals</h2>
            <p className="mx-auto mt-5 max-w-[68ch] text-[clamp(1.5rem,1.2vw,1.2rem)] leading-[1.65] text-white/70">
              Have a vision in mind? Share it with us. We'll align the right technology, map out a clear path, and bring it to life step by step, with precision and purpose.
            </p>
          </div>

          <div className="no-scrollbar mx-auto mt-14 max-w-[1300px] overflow-x-auto pb-2">
            <div className="relative min-w-[1000px] px-6">
              <div className="absolute left-0 right-0 top-[5.25rem] px-4 sm:px-6 lg:px-8">
                <div className="mx-[calc(100%/14)] h-[2px] bg-white/70" />
              </div>
              <div className="grid grid-cols-7">
                {goalSteps.map((step, index) => {
                  const active = activeGoal === step.id;
                  const isAbove = index % 2 === 0;
                  return (
                    <button key={step.id} type="button" onClick={() => setActiveGoal(step.id)} className="relative flex flex-col items-center">
                      <div className="flex h-16 w-full items-end justify-center pb-3">
                        {isAbove && (
                          <span className={`px-2 text-center text-[clamp(0.8rem,0.9vw,0.95rem)] font-bold leading-tight transition duration-300 ${active ? "text-[var(--color-accent)]" : "text-white"}`}>
                            {step.label}
                          </span>
                        )}
                      </div>
                      <div className="relative z-10 flex h-10 items-center justify-center">
                        <span className={`block rounded-full border border-white transition-all duration-300 ${active ? "h-8 w-8 border-[var(--color-accent)] bg-[var(--color-accent)] shadow-[inset_0_0_0_6px_#050505]" : "h-5 w-5 bg-[#9a9a9a]"}`} />
                      </div>
                      <div className="flex h-16 w-full items-start justify-center pt-3">
                        {!isAbove && (
                          <span className={`px-2 text-center text-[clamp(0.8rem,0.9vw,0.95rem)] font-bold leading-tight transition duration-300 ${active ? "text-[var(--color-accent)]" : "text-white"}`}>
                            {step.label}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="no-scrollbar mt-12 overflow-x-auto pb-5">
            <div className="flex min-w-max gap-5 px-4 sm:px-6">
              {visibleGoalCards.map((card, index) => (
                <article
                  key={card.id}
                  className={`group shrink-0 overflow-hidden border border-white/25 bg-[#1a1a1f] transition duration-500 hover:-translate-y-2 hover:border-[rgba(255,131,43,0.35)] hover:shadow-[0_22px_50px_rgba(255,131,43,0.12)] ${card.shape === "circle" ? "h-[15rem] w-[15rem] rounded-full" : "h-[15rem] w-[15.5rem] rounded-[1.4rem]"} opacity-0 [animation:fadeUp_0.8s_ease_forwards]`}
                  style={{ animationDelay: `${0.06 * index}s` }}
                >
                  {card.ctaOnly ? (
                    <div className="relative flex h-full items-center justify-center overflow-hidden">
                      <img src={card.image} alt="Team discussion" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/35" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,131,43,0.12),transparent_52%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                      <div className="relative flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-[var(--color-accent)] text-center text-black shadow-[0_18px_40px_rgba(255,128,40,0.28)] transition duration-500 group-hover:scale-105 group-hover:rotate-3">
                        <div><p className="text-[0.9rem] font-extrabold">CTA</p><div className="mt-0.5 inline-flex text-black"><ArrowIcon /></div></div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full">
                      <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.65))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,131,43,0.18),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-x-4 top-4 flex items-center gap-2 text-white">
                        <div className="h-px w-8 bg-white/80 transition duration-500 group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
                        <p className="text-[0.78rem] font-semibold">{card.eyebrow}</p>
                      </div>
                      <div className="absolute inset-x-4 bottom-5">
                        <h3 className="text-[1.05rem] leading-none font-semibold tracking-[-0.03em] transition duration-300 group-hover:text-[var(--color-accent)]">{card.title}</h3>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SOLUTIONS ── */}
      <section id="about" className="fade-up mt-20 mx-auto max-w-[1780px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1260px] text-center">
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">Core solutions that move your business forward</h2>
          <p className="mx-auto mt-4 max-w-[56ch] text-[clamp(1.1rem,1.4vw,1.4rem)] leading-[1.6] text-white/88">
            Our understanding begins with the clear concept that growth stems from doing things the right way. Our core solutions revolve around an accurate, built, and ready-to-scale model.
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#272727]">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,rgba(255,131,43,0.42),transparent_38%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(270deg,rgba(255,131,43,0.24),transparent_26%)]" />
          <div key={activeCoreData.id} className="section-enter relative grid items-center gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="px-8 py-10 lg:px-12">
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">{activeCoreData.label}</p>
              <h3 className="max-w-[9ch] text-[clamp(1.8rem,3vw,3rem)] leading-[0.92] font-extrabold tracking-[-0.03em]">{activeCoreData.title}</h3>
              <p className="mt-5 max-w-[32ch] text-[0.9rem] leading-[1.55] text-white/85">{activeCoreData.text}</p>
              <a href="#contact" className={`${glassButton} mt-7 min-w-[min(100%,21rem)] rounded-full border-white/35 bg-transparent`}>
                <span>Learn About Us</span>
                <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-white/10"><ArrowIcon /></span>
              </a>
            </div>
            <div className="relative min-h-[320px] lg:min-h-[460px]">
              <img src={activeCoreData.image} alt={activeCoreData.title} className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,39,39,0.05),rgba(39,39,39,0.18))]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="fade-up delay-1 mt-16 mx-auto max-w-[1780px] px-8 sm:px-12 lg:px-20">
  {/* TEXT */}
  <div className="max-w-[92rem]">
    <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
      Recognition for driving excellence
    </h2>

    <p className="mt-5 max-w-[88rem] text-[clamp(1.1rem,1.35vw,1.35rem)] leading-[1.35] font-semibold text-white/88">
      At Optimal IT Solutions, we are honored to be recognized for our relentless commitment
      <br className="hidden lg:block" />
      to delivering cutting-edge solutions and exceptional service to our clients.
    </p>
  </div>

  {/* LOGOS */}
  <div className="mt-20 flex w-full items-center justify-between gap-12">
    {badgeItems.map((badge) => (
      <div key={badge.title} className="flex flex-1 items-center justify-center">
        <img
          src={badge.logo}
          alt={badge.title}
          className="h-32 w-auto object-contain sm:h-40 lg:h-48"
        />
      </div>
    ))}
  </div>
</section>

      {/* ── AI-DRIVEN SOLUTIONS ── */}
      <section className="relative mt-24 lg:mt-28 mx-auto grid max-w-[1780px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="fade-up">
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">
            AI-driven solutions for every stage of business
          </h2>
          <p className="mt-6 max-w-[52ch] text-[clamp(1.05rem,1.15vw,1.35rem)] leading-[1.55] font-semibold text-white/90">
            Just technology doesn't solve problems. How you use it does. That's why we involve AI in our solutions in practical ways that are aligned with your business model.
          </p>
          <a href="#contact" className={`${orangeButton} mt-8 min-w-[min(100%,13rem)] justify-center rounded-full px-7 py-3.5 text-[clamp(0.95rem,1vw,1.05rem)] font-bold`}>
            <span>Get Started</span>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {businessStageCards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-[14.5rem] rounded-[1.6rem] border border-[rgba(87,78,111,0.55)] bg-[linear-gradient(180deg,rgba(30,29,35,0.96),rgba(28,28,31,0.96))] p-7 opacity-0 shadow-[0_20px_55px_rgba(0,0,0,0.25)] [animation:fadeUp_0.8s_ease_forwards]"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="max-w-[12ch] text-[clamp(1.35rem,1.55vw,1.75rem)] leading-[1.15] font-extrabold uppercase tracking-[0.02em] text-white">
                  {card.title}
                </h3>
                <div className="relative shrink-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[var(--color-accent)] blur-[6px] opacity-50" />
                  <div className="absolute h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[var(--color-accent)]" />
                  <div className="relative z-10 text-white">
                    <ExpertiseIcon type={card.icon} className="h-12 w-12 sm:h-30 sm:w-30" />
                  </div>
                </div>
              </div>
              <p className="mt-7 max-w-[35ch] text-[clamp(0.95rem,1.05vw,1.15rem)] leading-[1.35] font-semibold text-white/90">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <main className="relative z-10 mx-auto mt-24 max-w-[1780px] px-4 pb-24 sm:px-6 lg:px-8">

        {/* ── SERVICES TABS ── */}
       <section
  id="work"
  className="fade-up delay-2 overflow-hidden rounded-[2.2rem] border border-[rgba(101,71,47,0.62)] bg-[linear-gradient(180deg,rgba(40,40,40,0.95),rgba(32,32,32,0.92))] shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
>
  {/* TOP TABS */}
  <div className="grid grid-cols-2">
    {serviceTabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        onClick={() => setActiveTab(tab.id)}
        className={`cursor-pointer border-0 bg-[#121212] px-6 py-7 text-[clamp(1.25rem,1.8vw,2rem)] font-extrabold uppercase tracking-[0.02em] transition ${
          activeTab === tab.id ? "text-[var(--color-accent)]" : "text-white"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* MAIN BODY */}
  <div className="relative min-h-[48rem] bg-[linear-gradient(180deg,rgba(55,55,55,0.86),rgba(39,39,39,0.94))] px-10 py-20 lg:px-16">
    <div className="service-backdrop service-backdrop-left" />
    <div className="service-backdrop service-backdrop-right" />

    {/* HEADER TEXT */}
    <div key={activeService.id} className="section-enter relative z-10 max-w-[75rem]">
      <h2 className="text-[clamp(2.1rem,3vw,3.2rem)] leading-[1.05] font-extrabold tracking-[-0.035em]">
        {activeService.headline}{" "}
        <span className="text-[var(--color-accent)]">{activeService.highlight}</span>
      </h2>

      <p className="mt-5 max-w-[72rem] text-[clamp(1.05rem,1.3vw,1.35rem)] leading-[1.35] font-semibold text-white/88">
        {activeService.text}
      </p>
    </div>

    {/* ARROWS - upper right like Figma */}
    <div className="absolute right-12 top-[16.5rem] z-20 flex items-center gap-4">
      <button
        type="button"
        onClick={() => scrollRow(serviceCarouselRef, "prev")}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.82)] text-3xl text-white/80 transition duration-200 hover:border-[rgba(255,131,43,0.34)] hover:text-white"
        aria-label="Previous"
      >
        &lsaquo;
      </button>

      <button
        type="button"
        onClick={() => scrollRow(serviceCarouselRef, "next")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-3xl text-white shadow-[0_18px_40px_rgba(255,110,36,0.18)] transition duration-200 hover:-translate-y-0.5"
        aria-label="Next"
      >
        &rsaquo;
      </button>
    </div>

    {/* CARDS */}
    <div className="relative z-10 mt-14">
      <div ref={serviceCarouselRef} className="no-scrollbar overflow-x-auto scroll-smooth pb-5">
        <div className="flex gap-7">
          {activeService.cards.map((card, index) => (
            <article
              key={`${activeService.id}-${card.title}`}
              className={`section-enter flex h-[21rem] w-[31rem] shrink-0 snap-start flex-col rounded-[1.6rem] border p-8 transition duration-200 hover:-translate-y-[5px] ${
                card.featured
                  ? "border-[rgba(255,149,72,0.28)] bg-[linear-gradient(135deg,rgba(183,88,18,0.94),rgba(239,106,12,0.98))]"
                  : "border-[rgba(87,78,111,0.45)] bg-[rgba(26,24,31,0.92)] hover:border-[rgba(255,131,43,0.38)]"
              }`}
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${
                  card.featured
                    ? "bg-white text-[var(--color-accent)]"
                    : "border border-[rgba(255,131,43,0.35)] bg-white/10 text-white"
                }`}
              >
                <ExpertiseIcon
                  type={index === 0 ? "ai" : index === 1 ? "code" : "megaphone"}
                  className="h-8 w-8"
                />
              </div>

              <h3 className="mt-6 text-[1.55rem] leading-none font-extrabold tracking-[-0.03em]">
                {card.title}
              </h3>

              <p className="mt-5 text-[1.05rem] leading-[1.45] font-semibold text-white/92">
                {card.text}
              </p>

              <ul className="mt-auto grid gap-3 pt-6">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center justify-between gap-4 text-[1rem] text-white/94"
                  >
                    <span>{bullet}</span>
                    <span
                      className={
                        card.featured
                          ? "shrink-0 text-white/80"
                          : "shrink-0 text-[var(--color-accent)]"
                      }
                    >
                      <ArrowIcon />
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="section-enter relative z-10 mt-10">
      <a
        href="#contact"
        className={`${orangeButton} min-w-[22rem] rounded-[0.6rem] px-6 py-4 text-[1rem] font-bold`}
      >
        <span>Get a Free Consultation Now</span>
        <span className="inline-flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full bg-white/10">
          <ArrowIcon />
        </span>
      </a>
    </div>
  </div>
</section>
        {/* ── INDUSTRIES ── */}
        <section className="relative mt-24 overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="fade-up">
              <h2 className="whitespace-nowrap text-[clamp(1.6rem,2.2vw,2.6rem)] leading-[1.04] font-extrabold tracking-[-0.035em]">Industries We&apos;ve Made Impact In</h2>
              <div className="mt-7 flex max-w-[58rem] flex-wrap gap-4">
                {industries.map((industry) => (
                  <button key={industry.id} type="button" onClick={() => setActiveIndustry(industry.id)} className={`rounded-full border px-5 py-3 text-[clamp(0.9rem,1vw,1.05rem)] font-bold transition duration-200 ${activeIndustry === industry.id ? "border-[rgba(255,149,72,0.45)] bg-[var(--color-accent)] text-white" : "border-[rgba(87,78,111,0.65)] bg-[rgba(35,31,49,0.92)] text-white/92 hover:border-[rgba(255,131,43,0.45)]"}`}>
                    {industry.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="fade-up delay-1 max-w-[48rem] pt-3 text-[clamp(1.1rem,1.35vw,1.35rem)] leading-[1.55] font-semibold text-white/88 lg:justify-self-end">
              {activeIndustryCopy}
            </div>
          </div>
          <div className="mt-16 grid gap-8 xl:grid-cols-3">
            {visibleImpactCards.map((card, index) => (
              <article key={card.title} className="overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[linear-gradient(180deg,rgba(34,34,39,0.98),rgba(27,27,31,0.98))] opacity-0 shadow-[0_24px_70px_rgba(0,0,0,0.28)] [animation:fadeUp_0.8s_ease_forwards]" style={{ animationDelay: `${0.07 * index}s` }}>
                <div className="p-7">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img src={card.image} alt={card.title} className="h-[clamp(16rem,20vw,21rem)] w-full object-cover" />
                  </div>
                  <p className="mt-6 text-[0.9rem] font-bold text-[var(--color-accent)]">{card.eyebrow}</p>
                  <h3 className="mt-4 max-w-[18ch] text-[clamp(1.55rem,1.7vw,2rem)] leading-[1.1] font-extrabold tracking-[-0.04em] text-white">{card.title}</h3>
                  <p className="mt-5 text-[clamp(1rem,1.1vw,1.15rem)] leading-[1.6] text-white/82">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="mt-24">
  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
    <div className="max-w-[62rem]">
      <h2 className="whitespace-nowrap text-[clamp(1.6rem,2.2vw,2.6rem)] leading-[1.04] font-extrabold tracking-[-0.035em]">
        Testimonials that inspire us to work harder
      </h2>

      <p className="mt-6 max-w-[52ch] text-[clamp(1.1rem,1.35vw,1.35rem)] leading-[1.55] font-semibold text-white/88">
        We have a never-ending list of satisfied clients who have chosen us as their UI/UX design company.
      </p>
    </div>

    <div className="flex items-center gap-4 pt-2">
      <button
        type="button"
        onClick={() => scrollRow(testimonialCarouselRef, "prev")}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.82)] text-3xl text-white/80 transition duration-200 hover:border-[rgba(255,131,43,0.34)] hover:text-white"
        aria-label="Previous"
      >
        &lsaquo;
      </button>

      <button
        type="button"
        onClick={() => scrollRow(testimonialCarouselRef, "next")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-3xl text-white shadow-[0_18px_40px_rgba(255,110,36,0.18)] transition duration-200 hover:-translate-y-0.5"
        aria-label="Next"
      >
        &rsaquo;
      </button>
    </div>
  </div>

  {/* CAROUSEL */}
  <div
    ref={testimonialCarouselRef}
    className="no-scrollbar mt-16 overflow-x-auto scroll-smooth pb-4"
  >
    <div className="flex gap-7">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.name}
         className="flex h-[31rem] w-[20rem] shrink-0 snap-start flex-col rounded-[1.4rem] border border-[rgba(60,58,70,0.7)] bg-[rgba(28,27,33,0.98)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:w-[30rem] xl:w-[32rem]"
        >
          {/* Stars */}
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[0.45rem] bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-base text-white"
              >
                ★
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mt-8 text-[1.45rem] leading-[1.15] font-extrabold tracking-[-0.02em] text-white">
            {testimonial.title}
          </h3>

          {/* Body */}
          <p className="mt-6 text-[1rem] leading-[1.65] font-normal text-white/80">
            {testimonial.text}
          </p>

          {/* Author (sticks to bottom) */}
          <div className="mt-auto flex items-center gap-4 pt-8">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-[1.15rem] leading-none font-bold text-white">
                {testimonial.name}
              </p>
              <p className="mt-2 text-[0.9rem] text-white/65">
                {testimonial.role}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

        {/* ── CONTACT ── */}
        <section id="contact" className="mt-28">
          <div className="grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
            <div className="fade-up flex min-h-[44rem] flex-col justify-center bg-[rgba(8,8,12,0.98)] px-8 py-20 sm:px-12 lg:px-20">
              <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">
                Let&apos;s Build Something That Actually Works
              </h2>
              <p className="mt-10 max-w-[60ch] text-[clamp(1.15rem,1.4vw,1.45rem)] leading-[1.35] font-semibold text-white/90">
                We are here to help you move forward with clarity, whether you are starting from scratch or scaling what already exists.
              </p>
              <a href="#contact" className="mt-20 inline-flex max-w-[23rem] items-center justify-between gap-6 rounded-full border border-[var(--color-accent)] px-6 py-4 text-[1rem] font-bold text-[var(--color-accent)] transition duration-200 hover:-translate-y-0.5">
                <span>Start Your Project</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15"><ArrowIcon /></span>
              </a>
            </div>

            <div className="fade-up delay-1 relative overflow-hidden rounded-t-[2.3rem] bg-[rgba(22,20,32,0.98)] px-8 py-16 sm:px-12 lg:px-16">
              <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(circle_at_30%_45%,rgba(255,112,28,0.18),transparent_28%)]" />
              <div className="relative z-10 mb-10 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">ENQUIRE NOW</h3>
                  <p className="mt-5 text-[clamp(0.9rem,1vw,1.05rem)] font-semibold text-white/85">Please fill the details</p>
                </div>
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-xl text-white/80 transition hover:text-white">×</button>
              </div>
              <div className="relative z-10 grid gap-6">
                {[
                  { label: "Name", value: "Shubham Kumar", type: "text" },
                  { label: "Email", value: "shubham.k@kodehash.com", type: "email" },
                  { label: "Mobile", value: "+91 81144615", type: "tel" },
                ].map((field) => (
                  <label key={field.label} className="grid gap-2">
                    <span className="text-[0.9rem] font-semibold text-white/85">{field.label}</span>
                    <input type={field.type} defaultValue={field.value} className="h-[3.3rem] rounded-full border border-[rgba(78,72,102,0.7)] bg-[rgba(30,28,42,0.95)] px-6 text-[0.95rem] font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-[var(--color-accent)]" />
                  </label>
                ))}
                <label className="grid gap-2">
                  <span className="text-[0.9rem] font-semibold text-white/85">Write your requirement here (Optional)</span>
                  <textarea
                    placeholder={typedText}
                    rows={5}
                    className="min-h-[7.5rem] resize-none rounded-[1.2rem] border border-[var(--color-accent)] bg-[rgba(30,28,42,0.95)] px-6 py-4 text-[0.95rem] font-semibold text-white outline-none transition focus:border-[var(--color-accent-strong)]"
                  />
                </label>
                <button className="mt-4 inline-flex h-[3.8rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-7 text-[1rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.28)]">
                  Schedule a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
