import { useMemo, useRef, useState } from "react";

const navItems = ["Services", "Work", "About", "Contact"];

const heroSlides = [
  {
    id: "next",
    eyebrow: "Web and App Development Experts",
    headline: "We Build What's Next. Scale Without Limits",
    text:
      "We are here to help you turn ideas into real working systems that drive real revenue. From ecommerce to AI development, custom web development, and digital marketing, we cater to your brand needs.",
    cta: "Let's Develop Now",
    theme: "from-[rgba(255,131,43,0.24)] to-[rgba(255,95,45,0.06)]",
  },
  {
    id: "ai",
    eyebrow: "AI Development",
    headline: "AI That Works For You",
    text:
      "AI shouldn't feel complicated or out of reach. We build practical AI solutions that automate tasks and fit naturally into how your business already performs.",
    cta: "Build with AI",
    theme: "from-[rgba(86,176,255,0.2)] to-[rgba(255,131,43,0.06)]",
  },
  {
    id: "web",
    eyebrow: "Custom Web Development",
    headline: "Built Around Your Business",
    text:
      "Your business is real, so your website shouldn't be generic. We develop custom platforms that match your workflows and give you room to grow without limitations.",
    cta: "Start Your Platform",
    theme: "from-[rgba(255,198,87,0.18)] to-[rgba(255,131,43,0.06)]",
  },
  {
    id: "growth",
    eyebrow: "Digital Marketing and Growth Systems",
    headline: "Digital Marketing- Growth You Can See and Measure",
    text:
      "More traffic means nothing without results. We focus on attracting the right audience and turning them into customers through strategies that deliver consistent, measurable growth.",
    cta: "Let's Develop Now",
    theme: "from-[rgba(255,131,43,0.22)] to-[rgba(146,90,255,0.08)]",
  },
  {
    id: "ecommerce",
    eyebrow: "E-commerce",
    headline: "Sell Smarter",
    text:
      "We create effortless ecommerce experiences for your customers that are easily manageable for you. From product pages to checkout, every detail helps turn visitors into buyers.",
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

const companyMarquee = [
  "Michael",
  "Monday",
  "Acme",
  "Clutch",
  "GoodFirms",
  "DesignRush",
  "AppFutura",
  "RightFirms",
  "Trustpilot",
  "DMCA",
];

const serviceTabs = [
  {
    id: "launch",
    label: "Launch Something New",
    headline: "Turn Ideas Into Systems.",
    highlight: "Grow Without Limits.",
    text:
      "We build solutions from launching new products to optimizing and scaling operations that are designed to perform today and adapt as your business expands.",
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
        bullets: ["IOS Development, Android App Development, Hybrid App Development"],
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
    text:
      "As businesses grow, systems become more complex. We help companies automate operations, integrate intelligent systems, and scale infrastructure so their technology evolves alongside their business.",
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
  {
    id: "all",
    label: "All Services",
    accent: true,
    title: "Start with the full picture.",
    text: "See every capability at once, then drill into the service area that matches your next move.",
    cta: "Explore all services",
  },
  {
    id: "launch",
    label: "Launch a New Product",
    title: "Move from concept to launch.",
    text: "We shape new products with app development, UX, and system thinking so the first release already feels scalable.",
    cta: "Launch something new",
  },
  {
    id: "scale",
    label: "Scale Infrastructure",
    title: "Strengthen the systems underneath.",
    text: "When your product is growing, cloud, backend, and operational architecture need to grow with it.",
    cta: "Scale infrastructure",
  },
  {
    id: "growth",
    label: "Engage Customers & Grow",
    title: "Turn attention into traction.",
    text: "Growth-focused campaigns, PPC, and platform optimization help convert demand into measurable business movement.",
    cta: "Grow customer demand",
  },
  {
    id: "ai",
    label: "Innovate with AI & Automation",
    title: "Bring AI into the real workflow.",
    text: "Automation becomes valuable when it fits the team, the process, and the customer journey instead of feeling bolted on.",
    cta: "Bring in AI",
  },
  {
    id: "design",
    label: "Design & Experience",
    title: "Make every touchpoint feel premium.",
    text: "From interface design to brand motion and UX clarity, this is where the product starts to feel polished and memorable.",
    cta: "Shape the experience",
  },
  {
    id: "ecommerce",
    label: "E-Commerce & Platforms",
    title: "Create a smarter selling system.",
    text: "Commerce works best when product discovery, checkout, and management feel effortless on both sides.",
    cta: "Build the platform",
  },
];

const goalCards = [
  {
    id: "cta",
    step: "all",
    title: "CTA",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    ctaOnly: true,
    shape: "circle",
  },
  {
    id: "app",
    step: "launch",
    eyebrow: "IOS/Android/Hybrid",
    title: "App Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "design",
    step: "design",
    eyebrow: "Design",
    title: "Graphic Designing",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "marketing",
    step: "growth",
    eyebrow: "Marketing",
    title: "PPC/META ADS",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ai-card",
    step: "ai",
    eyebrow: "AI",
    title: "AI Solutions",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cloud",
    step: "scale",
    eyebrow: "Cloud",
    title: "Cloud Systems",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

const badgeItems = [
  { title: "DMCA", color: "bg-[#ffbf57]" },
  { title: "Clutch", color: "bg-[#dbe2e8]" },
  { title: "AppFutura", color: "bg-[#f26a3f]" },
  { title: "DesignRush", color: "bg-[#4f8ff7]" },
  { title: "RightFirms", color: "bg-[#eff2ff]" },
  { title: "GoodFirms", color: "bg-[#f6fbff]" },
  { title: "Trustpilot", color: "bg-[#f6fffb]" },
];

const businessStageCards = [
  {
    title: "STARTUPS",
    text:
      "Big ideas need the right start. We help you move from concept to execution with AI-powered systems that are simple, scalable, and built for growth from day one.",
    icon: "blocks",
  },
  {
    title: "SMALL BUSINESSES",
    text:
      "We simplify operations, introduce smart automation, and create systems that help you grow without narrowing down your resources.",
    icon: "note",
  },
  {
    title: "RESELLERS",
    text:
      "We offer scalable backend systems and AI-enhanced tools that will help you manage clients and growth more efficiently.",
    icon: "stack",
  },
  {
    title: "LARGE ENTERPRISES",
    text:
      "Our strong AI-powered solutions help in improving and connecting departments to support high-level decision-making.",
    icon: "shield",
  },
];

const industries = [
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "We build ecommerce platforms that convert. From seamless checkout experiences to backend systems that simplify inventory and order management, everything is designed to support growth.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    description:
      "We design trusted healthcare systems that simplify patient interactions and support providers with reliable digital tools.",
  },
  {
    id: "finance",
    label: "Finance and Banking",
    description:
      "We build high-performance finance applications that make transactions seamless without compromising compliance or reliability.",
  },
  {
    id: "education",
    label: "Education and eLearning",
    description:
      "We create platforms that make education more interactive, accessible, and easy to manage for institutions and learners.",
  },
  {
    id: "travel",
    label: "Travel and Hospitality",
    description:
      "We design faster booking and guest experiences that feel smooth for users and easier to manage for businesses.",
  },
  {
    id: "media",
    label: "Media and Entertainment",
    description:
      "We develop content platforms that support streaming, engagement, and strong performance at high demand.",
  },
  {
    id: "logistics",
    label: "Logistics and Supply Chain",
    description:
      "We improve coordination, tracking, and visibility so teams can manage operations with better control and fewer delays.",
  },
  {
    id: "sports",
    label: "Sports, Esports and Gaming",
    description:
      "We create real-time interactive platforms that support active users, live data, and scalable experiences.",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    description:
      "We build digital property experiences that simplify listings, communication, and the buying or renting journey.",
  },
];

const impactCards = [
  {
    industry: "ecommerce",
    eyebrow: "E-Commerce",
    title: "E commerce application design",
    text: "Shop furniture online. Find your perfect piece and have it delivered to your doorstep.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    industry: "finance",
    eyebrow: "Fintech",
    title: "Budgeting made easy application",
    text: "Trade stocks, cryptocurrencies, and more with our user-friendly app. Stay updated and make smart investment decisions.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    industry: "healthcare",
    eyebrow: "Dog walking",
    title: "Dog walking application design",
    text: "We are a responsible and loving pet owner seeking to provide a happy, healthy home for a dog.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    title: "Great design and support",
    text: "Optimal IT Solutions brought clarity to our product direction and completely lifted the quality of our website experience. The structure felt sharper, the UX felt cleaner, and the whole team was easy to work with.",
    name: "Bernardine Denigan",
    role: "Product manager at Cisco",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "A strong digital partner",
    text: "The team helped us rethink both design and growth systems at the same time. The result felt more premium, more intentional, and much easier for customers to move through.",
    name: "Medelene Polestico",
    role: "Industrial Design at Google",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Built with real business value",
    text: "From concept to rollout, everything felt considered. The new direction gave us a cleaner sales story, a more polished digital presence, and stronger confidence in the next phase of growth.",
    name: "Gael Donnay",
    role: "Interior Design at Infotech",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];

const phoneShowcase = [
  {
    title: "Travedia",
    subtitle: "Menjelajah budaya tanpa batas.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    position:
      "top-6 right-22 h-[23rem] w-[13rem] sm:top-10 sm:right-28 sm:h-[26rem] sm:w-[14.5rem] xl:top-24 xl:right-64 xl:h-[29rem] xl:w-[17rem]",
    titleClass: "text-[#e6ff38]",
    floatClass: "float-card-1",
  },
  {
    title: "Feed",
    subtitle: "Other posts",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80",
    position:
      "top-24 right-0 h-[18rem] w-[11rem] sm:top-28 sm:h-[20rem] sm:w-[13.5rem] xl:top-68 xl:right-12 xl:h-[24rem] xl:w-[20rem]",
    titleClass: "",
    floatClass: "float-card-2",
  },
  {
    title: "Barong",
    subtitle: "Comments",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80",
    position:
      "top-4 -right-3 h-[23rem] w-[13rem] sm:top-6 sm:-right-4 sm:h-[26rem] sm:w-[14.5rem] xl:top-18 xl:-right-4 xl:h-[29rem] xl:w-[17rem]",
    titleClass: "",
    floatClass: "float-card-3",
  },
];

const coreSolutions = [
  {
    id: "automation",
    label: "AI Automation",
    title: "AI Automation Development",
    text:
      "Our state-of-the-art intelligent systems are designed to reduce manual work and help your business operate smarter with accuracy.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "scaling",
    label: "Scaling",
    title: "Scaling Architecture",
    text:
      "Your foundation matters. We design systems built for stability and growth, so your business can scale seamlessly without disruptions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Mobile Experiences",
    text:
      "Great apps aren't just built, they're experienced. We create mobile applications that are intuitive, smooth, and designed for real user engagement from start to finish.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "growth",
    label: "Growth",
    title: "Digital Growth Solutions",
    text:
      "Growth should be predictable, not random. Our performance-driven marketing strategies focus on attracting the right audience and delivering measurable results.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "web",
    label: "Web",
    title: "Custom Web Development",
    text:
      "Your business is unique, your platform should be too. We build tailored web solutions aligned with your niche and goals, without forcing you into generic templates.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 12h12m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ExpertiseIcon({ type, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`h-11 w-11 ${className}`}>
      {type === "cart" && (
        <>
          <path {...common} d="M12 18h7l6 22h21l6-16H23" />
          <circle {...common} cx="28" cy="49" r="4" />
          <circle {...common} cx="46" cy="49" r="4" />
          <path {...common} d="M20 12h12m-6-6v12M14 28h18" />
        </>
      )}
      {type === "ai" && (
        <>
          <rect {...common} x="22" y="20" width="20" height="20" rx="6" />
          <path {...common} d="M18 25h-6m6 14h-6m40-14h-6m6 14h-6M25 18v-6m14 6v-6m-14 34v6m14-6v6" />
          <circle {...common} cx="29" cy="28" r="2" />
          <circle {...common} cx="35" cy="28" r="2" />
          <path {...common} d="M28 35c2 2 6 2 8 0" />
        </>
      )}
      {type === "megaphone" && (
        <>
          <path {...common} d="M19 34V23l21-7v25l-21-7Z" />
          <path {...common} d="M40 20l10-6v30l-10-6" />
          <path {...common} d="M19 34l4 11h8l-2-8" />
          <path {...common} d="M50 24h5m-5 10h5" />
        </>
      )}
      {type === "code" && (
        <>
          <rect {...common} x="10" y="14" width="44" height="30" rx="4" />
          <path {...common} d="m25 23-8 6 8 6m14-12 8 6-8 6m-8 9h2" />
          <path {...common} d="M18 50h28" />
          <circle {...common} cx="18" cy="20" r="1.5" />
          <circle {...common} cx="24" cy="20" r="1.5" />
        </>
      )}
      {type === "blocks" && (
        <>
          <rect {...common} x="15" y="30" width="14" height="18" rx="2" />
          <rect {...common} x="25" y="12" width="14" height="18" rx="2" />
          <rect {...common} x="35" y="30" width="14" height="18" rx="2" />
        </>
      )}
      {type === "note" && (
        <>
          <path {...common} d="M19 12h22l8 8v32H19z" />
          <path {...common} d="M41 12v10h10" />
          <path {...common} d="M26 30h16M26 38h16" />
        </>
      )}
      {type === "stack" && (
        <>
          <path {...common} d="M18 18h20a6 6 0 0 1 6 6v14H24a6 6 0 0 1-6-6z" />
          <path {...common} d="M24 26h20a6 6 0 0 1 6 6v14H30a6 6 0 0 1-6-6z" />
          <path {...common} d="M16 44h12m-6-6v12" />
        </>
      )}
      {type === "shield" && (
        <>
          <path {...common} d="M32 10 48 16v14c0 10-7 18-16 22C23 48 16 40 16 30V16z" />
          <path {...common} d="m24 31 5 5 11-12" />
        </>
      )}
    </svg>
  );
}

const glassButton =
  "inline-flex items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-[rgba(30,30,30,0.95)] px-5 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]";

const orangeButton =
  "inline-flex items-center justify-between gap-4 rounded-[1.35rem] border border-[rgba(255,149,72,0.28)] bg-[linear-gradient(135deg,rgba(186,90,18,0.88),rgba(255,109,13,0.96))] px-5 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]";

export default function App() {
  const [activeHero] = useState("growth");
  const [activeTab, setActiveTab] = useState("launch");
  const [activeGoal, setActiveGoal] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");
  const [activeCore, setActiveCore] = useState("automation");
  const serviceCarouselRef = useRef(null);
  const testimonialCarouselRef = useRef(null);

  const activeHeroData = useMemo(
    () => heroSlides.find((slide) => slide.id === activeHero) ?? heroSlides[0],
    [activeHero],
  );

  const activeService = useMemo(
    () => serviceTabs.find((tab) => tab.id === activeTab) ?? serviceTabs[0],
    [activeTab],
  );

  const activeGoalData = useMemo(
    () => goalSteps.find((step) => step.id === activeGoal) ?? goalSteps[0],
    [activeGoal],
  );

  const visibleGoalCards = goalCards;

  const visibleImpactCards = useMemo(
    () => impactCards.filter((card) => activeIndustry === "ecommerce" || card.industry === activeIndustry || activeIndustry === "all"),
    [activeIndustry],
  );

  const activeIndustryCopy = useMemo(
    () => industries.find((industry) => industry.id === activeIndustry)?.description ?? industries[0].description,
    [activeIndustry],
  );

  const activeCoreData = useMemo(
    () => coreSolutions.find((solution) => solution.id === activeCore) ?? coreSolutions[0],
    [activeCore],
  );

  function scrollRow(ref, direction) {
    if (!ref.current) return;

    const amount = Math.max(ref.current.clientWidth * 0.82, 320);
    ref.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-white">
      <div className="page-orbit page-orbit-left" />
      <div className="page-orbit page-orbit-right" />
      <div className="page-glow" />

      <header className="relative z-10 mx-auto max-w-[1700px] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <nav className="fade-up flex items-center justify-between rounded-[2rem] border border-[rgba(60,60,60,0.7)] bg-[rgba(18,18,18,0.96)] px-6 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.36)]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-6 rounded-full border-[0.34rem] border-[var(--color-accent)] after:absolute after:inset-[0.22rem] after:rounded-full after:bg-white after:content-['']" />
            <div>
              <p className="m-0 text-[1.05rem] leading-[0.9] font-extrabold tracking-[-0.05em]">OPTIMAL</p>
              <p className="m-0 text-[0.72rem] leading-[0.9] tracking-[-0.06em] text-white/70">IT SOLUTIONS</p>
            </div>
          </div>

          {/* Nav links - center pill */}
          <div className="hidden items-center gap-1 rounded-[1.2rem] border border-[rgba(60,60,60,0.8)] bg-[rgba(8,8,8,0.9)] px-2 py-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-[0.9rem] px-5 py-2.5 text-[0.9rem] text-white/80 transition duration-200 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="flex items-center gap-4">
            <span className="hidden text-[0.9rem] text-white/80 lg:inline">888-710-6350</span>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-5 py-2.5 text-[0.9rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </nav>

        <section id="services" className="grid items-center gap-8 pt-12 lg:grid-cols-[1fr_auto] lg:pt-20">
          <div className="fade-up">
            <h1 className="max-w-[18ch] text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.03em]">
              {activeHero === "growth" ? (
                <>
                  Digital Marketing- Growth
                  <br />
                  You Can See and Measure
                </>
              ) : (
                activeHeroData.headline
              )}
            </h1>
            <p className="mt-8 max-w-[52ch] text-[clamp(0.95rem,1.05vw,1.05rem)] leading-[1.55] text-white/70">
              {activeHeroData.text}
            </p>

            <div className="mt-10">
              <a href="#contact" className={`${glassButton} min-w-[min(100%,18rem)]`}>
                <span>{activeHeroData.cta}</span>
                <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-white/10">
                  <ArrowIcon />
                </span>
              </a>
            </div>

            <div className="fade-up delay-2 mt-20">
              <h2 className="m-0 text-[1.2rem] font-extrabold tracking-[-0.01em]">
                Our Expertise
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {expertiseItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                    style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                  >
                    <div className="inline-flex text-white">
                      <ExpertiseIcon type={item.icon} className="h-14 w-14" />
                    </div>
                    <p className="mt-4 text-[1rem] font-medium leading-[1.2]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockups matching Figma - 3 phones side by side with overlap */}
          <div className="fade-up delay-1 relative hidden lg:block" style={{ width: "640px", height: "700px", flexShrink: 0 }}>
            {/* Left phone - Travedia (leftmost, tallest) */}
            <article className="absolute overflow-hidden rounded-[2.2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.65)]" style={{ width: "210px", height: "430px", left: 0, top: "40px", zIndex: 1 }}>
              <img src={phoneShowcase[0].image} alt="Travedia" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.55))]" />
              <div className="absolute inset-x-4 bottom-5 z-10">
                <p className="text-[1.35rem] font-extrabold tracking-[-0.04em] text-[#e6ff38]">Travedia</p>
                <p className="mt-1 text-[0.8rem] leading-[1.25] text-white/85">Menjelajah budaya<br />tanpa batas.</p>
              </div>
            </article>

            {/* Center phone - Feed (tallest, most prominent) */}
            <article className="absolute overflow-hidden rounded-[2.2rem] border border-white/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.65)]" style={{ width: "210px", height: "500px", left: "195px", top: 0, zIndex: 2 }}>
              <img src={phoneShowcase[1].image} alt="Feed" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0),rgba(0,0,0,0.3))]" />
              <div className="absolute inset-x-4 bottom-5 z-10">
                <p className="text-[1.15rem] font-extrabold tracking-[-0.04em] text-white">Feed</p>
                <p className="mt-1 text-[0.78rem] text-white/80">Other posts</p>
              </div>
            </article>

            {/* Right phone - Barong (rightmost) */}
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

        <section aria-label="Companies" className="relative z-10 mx-auto overflow-hidden border-y border-white/10 bg-[rgba(10,10,10,0.95)] py-6">
          <div className="marquee-track flex w-max items-center gap-16">
            {[...Array(2)].map((_, repeatIdx) => (
              <div key={repeatIdx} className="flex items-center gap-16">
                {/* Michaels */}
                <div className="flex flex-col items-start opacity-80 hover:opacity-100 transition">
                  <span className="font-serif text-[1.5rem] font-bold italic text-white leading-none">Michaels</span>
                  <span className="text-[0.48rem] tracking-[0.18em] text-white/60 uppercase">Where Creativity Happens</span>
                </div>
                {/* Walmart */}
                <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                  <span className="text-[1.4rem] font-extrabold text-white tracking-tight">Walmart</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffc220]" fill="currentColor"><path d="M12 2l1.5 4.5L18 5l-3 3.5 2 4.5-5-2-5 2 2-4.5L6 5l4.5 1.5z"/></svg>
                </div>
                {/* WFMU */}
                <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-white text-black text-[0.55rem] font-extrabold tracking-tight leading-none">W<br/>FM</div>
                  <span className="text-[1.4rem] font-extrabold text-white tracking-tighter">U</span>
                </div>
                {/* Ray-Ban */}
                <div className="opacity-80 hover:opacity-100 transition">
                  <span className="font-serif text-[1.5rem] italic text-white font-bold tracking-wide">Ray·Ban</span>
                </div>
                {/* Converse */}
                <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20" strokeDasharray="2 2"/></svg>
                  <span className="text-[1.3rem] font-extrabold text-white tracking-widest uppercase">CONVERSE</span>
                </div>
                {/* Tissot */}
                <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                  <div className="flex h-7 w-7 items-center justify-center border-2 border-white rounded-sm">
                    <span className="text-[0.5rem] font-extrabold text-white leading-none text-center">TI<br/>TO</span>
                  </div>
                  <span className="text-[1.3rem] font-extrabold text-white tracking-widest uppercase">TISSOT</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-up delay-1 relative mt-0 overflow-hidden border-y border-white/6 bg-[linear-gradient(180deg,rgba(10,10,14,0.99),rgba(14,14,22,0.99))] px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-[1780px]">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">Define Your Goals</h2>
            <p className="mx-auto mt-6 max-w-[68ch] text-[clamp(1rem,1.12vw,1.1rem)] leading-[1.55] text-white/70">
              Have a vision in mind? Share it with us. We’ll align the right technology, map out a clear path, and bring it to life step by step, with precision and purpose.
            </p>
          </div>

          <div className="no-scrollbar mx-auto mt-14 max-w-[1240px] overflow-x-auto pb-4">
            <div className="relative grid min-w-[1080px] grid-cols-7 items-center px-8">
              <div className="absolute left-12 right-12 top-1/2 h-px -translate-y-1/2 bg-white/82" />
            {goalSteps.map((step) => {
              const active = activeGoal === step.id;
              const index = goalSteps.findIndex((item) => item.id === step.id);
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveGoal(step.id)}
                  className={`relative z-10 flex h-28 flex-col items-center justify-center text-center text-[1rem] font-bold transition duration-300 ${
                    active ? "text-[var(--color-accent)]" : "text-white"
                  }`}
                >
                  <span className={`${index % 2 === 0 ? "mb-9" : "mt-9 order-2"} max-w-[11rem] leading-tight`}>
                    {step.label}
                  </span>
                  <span
                    className={`absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-[#9a9a9a] transition duration-300 ${
                      active ? "h-8 w-8 border-[var(--color-accent)] bg-[#ff832b] shadow-[inset_0_0_0_7px_#050505]" : ""
                    }`}
                  />
                  <span className="sr-only">
                    {active ? "Selected" : "Select"} {step.label}
                  </span>
                </button>
              );
            })}
            </div>
          </div>

          <div className="no-scrollbar mt-16 overflow-x-auto pb-5">
            <div className="flex min-w-max gap-7 px-4 sm:px-10">
            {visibleGoalCards.map((card, index) => (
              <article
                key={card.id}
                className={`group shrink-0 overflow-hidden border border-white/25 bg-[#1a1a1f] transition duration-500 hover:-translate-y-2 hover:border-[rgba(255,131,43,0.35)] hover:shadow-[0_22px_50px_rgba(255,131,43,0.12)] ${
                  card.shape === "circle" ? "h-[17rem] w-[17rem] rounded-full" : "h-[17rem] w-[17.5rem] rounded-[1.6rem]"
                } opacity-0 [animation:fadeUp_0.8s_ease_forwards]`}
                style={{ animationDelay: `${0.06 * index}s` }}
              >
                {card.ctaOnly ? (
                  <div className="relative flex h-full items-center justify-center overflow-hidden">
                    <img src={card.image} alt="Team discussion" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,131,43,0.12),transparent_52%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[var(--color-accent)] text-center text-black shadow-[0_18px_40px_rgba(255,128,40,0.28)] transition duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <div>
                        <p className="text-[1rem] font-extrabold">CTA</p>
                        <div className="mt-1 inline-flex text-black">
                          <ArrowIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full">
                    <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.65))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,131,43,0.18),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-6 top-4 flex items-center gap-3 text-white">
                      <div className="h-px w-12 bg-white/80 transition duration-500 group-hover:w-16 group-hover:bg-[var(--color-accent)]" />
                      <p className="text-[0.9rem] font-semibold">{card.eyebrow}</p>
                    </div>
                    <div className="absolute inset-x-6 bottom-7">
                      <h3 className="text-[1.2rem] leading-none font-semibold tracking-[-0.03em] transition duration-300 group-hover:text-[var(--color-accent)]">{card.title}</h3>
                    </div>
                  </div>
                )}
              </article>
            ))}
            </div>
          </div>
          </div>
        </section>


        <section id="about" className="fade-up mt-24">
          <div className="mx-auto max-w-[1260px] text-center">
            <h2 className="text-[clamp(1.8rem,2.8vw,3rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">Core solutions that move your business forward</h2>
            <p className="mx-auto mt-5 max-w-[56ch] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.45] text-white/88">
              Our understanding begins with the clear concept that growth stems from doing things the right way. Our core solutions revolve around an accurate, built, and ready-to-scale model.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[1060px] flex-wrap justify-center gap-3">
            {coreSolutions.map((solution) => {
              const active = activeCore === solution.id;
              return (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveCore(solution.id)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition duration-300 sm:text-base ${
                    active
                      ? "border-[rgba(255,149,72,0.38)] bg-[var(--color-accent)] text-black shadow-[0_16px_32px_rgba(255,131,43,0.18)]"
                      : "border-white/10 bg-[rgba(20,20,24,0.88)] text-white/72 hover:border-[rgba(255,131,43,0.28)] hover:text-white"
                  }`}
                >
                  {solution.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#272727]">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,rgba(255,131,43,0.42),transparent_38%)]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(270deg,rgba(255,131,43,0.24),transparent_26%)]" />
            <div key={activeCoreData.id} className="section-enter relative grid items-center gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="px-8 py-10 lg:px-12">
                <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {activeCoreData.label}
                </p>
                <h3 className="max-w-[9ch] text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.92] font-extrabold tracking-[-0.03em]">{activeCoreData.title}</h3>
                <p className="mt-6 max-w-[32ch] text-[clamp(0.9rem,1vw,1rem)] leading-[1.55] text-white/85">
                  {activeCoreData.text}
                </p>
                <a href="#contact" className={`${glassButton} mt-8 min-w-[min(100%,21rem)] rounded-full border-white/35 bg-transparent`}>
                  <span>Learn About Us</span>
                  <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-white/10">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
              <div className="relative min-h-[360px] lg:min-h-[500px]">
                <img
                  src={activeCoreData.image}
                  alt={activeCoreData.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,39,39,0.05),rgba(39,39,39,0.18))]" />
              </div>
            </div>
          </div>
        </section>

         <section className="fade-up delay-1 mt-20">
          <div className="max-w-[1180px]">
            <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">Recognition for driving excellence</h2>
            <p className="mt-5 max-w-[52ch] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.45] text-white/88">
              At Optimal IT Solutions, we are honored to be recognized for our relentless commitment to delivering cutting-edge solutions and exceptional service to our clients.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {badgeItems.map((badge, index) => (
              <div
                key={badge.title}
                className="flex items-center justify-center opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className={`flex h-44 w-44 items-center justify-center rounded-full border-4 border-white/10 ${badge.color} text-center text-black shadow-[0_12px_28px_rgba(0,0,0,0.24)]`}>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em]">{badge.title}</p>
                    <p className="mt-2 text-[0.84rem] font-extrabold">{badge.title === "DMCA" ? "Verified" : "Top Rated"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="fade-up">
            <h2 className="max-w-[14ch] text-[clamp(1.6rem,2.2vw,2.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">AI-driven solutions for every stage of business</h2>
            <p className="mt-6 max-w-[28ch] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.45] text-white/88">
              Just technology doesn’t solve problems. How you use it does. That’s why we involve AI in our solutions in practical ways that are aligned with your business model.
            </p>
            <a href="#contact" className={`${orangeButton} mt-9 min-w-[min(100%,17rem)] justify-center rounded-full px-6 py-4 text-[0.84rem]`}>
              <span>Get Started</span>
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessStageCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[rgba(26,24,31,0.92)] p-6 opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.08 * index}s` }}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-[9ch] text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.04] font-medium tracking-[-0.03em]">{card.title}</h3>
                  <div className="text-white">
                    <ExpertiseIcon type={card.icon} className="h-11 w-11" />
                  </div>
                </div>
                <p className="mt-8 text-[clamp(0.76rem,0.88vw,0.86rem)] leading-[1.4] text-white/90">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

      <main className="relative z-10 mx-auto mt-32 max-w-[1780px] px-4 pb-24 sm:px-6 lg:px-8">
        <section
          id="work"
          className="fade-up delay-2 overflow-hidden rounded-[2rem] border border-[rgba(101,71,47,0.62)] bg-[linear-gradient(180deg,rgba(40,40,40,0.95),rgba(32,32,32,0.92))] shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
        >
          <div className="grid sm:grid-cols-2">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer border-0 px-4 py-5 text-[0.78rem] font-extrabold uppercase tracking-[-0.04em] transition sm:text-[clamp(0.86rem,1.05vw,1.05rem)] ${
                  activeTab === tab.id ? "bg-[#121212] text-[var(--color-accent)]" : "bg-[#121212] text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative bg-[linear-gradient(180deg,rgba(55,55,55,0.86),rgba(39,39,39,0.94))] px-5 py-8 sm:px-6 lg:px-8">
            <div className="service-backdrop service-backdrop-left" />
            <div className="service-backdrop service-backdrop-right" />

            <div key={activeService.id} className="section-enter relative z-10 max-w-[74rem] px-1">
              <h2 className="text-[clamp(1.15rem,1.55vw,1.55rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
                {activeService.headline} <span className="text-[var(--color-accent)]">{activeService.highlight}</span>
              </h2>
              <p className="mt-6 max-w-[48ch] text-[clamp(0.76rem,0.88vw,0.86rem)] leading-[1.48] text-[var(--color-copy)]">
                {activeService.text}
              </p>
            </div>

            <div className="relative z-10 mt-11">
              <div className="mb-5 flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={() => scrollRow(serviceCarouselRef, "prev")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.82)] text-2xl text-white/80 transition duration-200 hover:border-[rgba(255,131,43,0.34)] hover:text-white"
                  aria-label="Scroll service cards left"
                >
                  &lsaquo;
                </button>
                <button
                  type="button"
                  onClick={() => scrollRow(serviceCarouselRef, "next")}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-2xl text-white shadow-[0_18px_40px_rgba(255,110,36,0.18)] transition duration-200 hover:-translate-y-0.5"
                  aria-label="Scroll service cards right"
                >
                  &rsaquo;
                </button>
              </div>

              <div ref={serviceCarouselRef} className="no-scrollbar -mx-1 overflow-x-auto scroll-smooth pb-3">
                <div className="flex gap-6 px-1">
                  {activeService.cards.map((card, index) => (
                    <article
                      key={`${activeService.id}-${card.title}`}
                      className={`section-enter min-w-[20rem] snap-start rounded-[2rem] border p-6 transition duration-200 hover:-translate-y-[5px] sm:min-w-[29rem] xl:min-w-[38rem] ${
                        card.featured
                          ? "border-[rgba(255,149,72,0.28)] bg-[linear-gradient(135deg,rgba(183,88,18,0.88),rgba(239,106,12,0.96))]"
                          : "border-[rgba(87,78,111,0.45)] bg-[rgba(26,24,31,0.92)] hover:border-[rgba(255,131,43,0.38)]"
                      }`}
                      style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                    >
                      <div
                        className={`inline-flex h-20 w-20 items-center justify-center rounded-full ${
                          card.featured ? "bg-white text-[var(--color-accent)]" : "bg-white/10 text-white"
                        }`}
                      >
                        <ExpertiseIcon type={index === 0 ? "ai" : index === 1 ? "code" : "megaphone"} />
                      </div>
                      <h3 className="mt-6 max-w-[13ch] text-[clamp(1rem,1.2vw,1.25rem)] leading-none font-extrabold tracking-[-0.04em]">
                        {card.title}
                      </h3>
                      <p className="mt-4 max-w-[25ch] text-[clamp(0.76rem,0.88vw,0.86rem)] leading-[1.42] text-white/92">{card.text}</p>
                      <ul className="mt-7 grid gap-3">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center justify-between gap-4 text-[clamp(0.78rem,0.9vw,0.9rem)] text-white/94">
                            <span>{bullet}</span>
                            <span className="text-[var(--color-accent)]">
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

            <div className="section-enter relative z-10 pt-6">
              <a href="#contact" className={`${orangeButton} min-w-[min(100%,24rem)]`}>
                <span>Get a Free Consultation Now</span>
                <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-white/10">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </section>

      

       

        <section className="mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="fade-up">
              <h2 className="text-[clamp(1.6rem,2.2vw,2.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">Industries We&apos;ve Made Impact In</h2>
              <div className="mt-8 flex flex-wrap gap-4">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`rounded-full border px-5 py-3 text-[0.84rem] font-bold transition duration-200 ${
                      activeIndustry === industry.id
                        ? "border-[rgba(255,149,72,0.4)] bg-[var(--color-accent)] text-white"
                        : "border-[rgba(87,78,111,0.55)] bg-[rgba(35,31,49,0.92)] text-white/92 hover:border-[rgba(255,131,43,0.38)]"
                    }`}
                  >
                    {industry.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="fade-up delay-1 text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.38] text-white/90">
              {activeIndustryCopy}
            </div>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {visibleImpactCards.map((card, index) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[rgba(31,31,35,0.96)] opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.07 * index}s` }}
              >
                <div className="p-6">
                  <div className="overflow-hidden rounded-[1.7rem]">
                    <img src={card.image} alt={card.title} className="h-[22rem] w-full object-cover" />
                  </div>
                  <p className="mt-6 text-[0.78rem] font-medium text-[var(--color-accent)]">{card.eyebrow}</p>
                  <h3 className="mt-4 max-w-[12ch] text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.02] font-medium tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-5 text-[clamp(0.76rem,0.88vw,0.86rem)] leading-[1.55] text-white/80">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[56rem]">
              <h2 className="text-[clamp(1.6rem,2.2vw,2.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
                Testimonials that inspire us to work harder
              </h2>
              <p className="mt-5 max-w-[36ch] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.45] text-white/86">
                We’ve built long-term partnerships by designing digital experiences that feel sharper, perform better, and support real business growth.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => scrollRow(testimonialCarouselRef, "prev")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.82)] text-white/80 transition duration-200 hover:border-[rgba(255,131,43,0.34)] hover:text-white"
                aria-label="Scroll testimonials left"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                onClick={() => scrollRow(testimonialCarouselRef, "next")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-3xl text-white shadow-[0_18px_40px_rgba(255,110,36,0.18)] transition duration-200 hover:-translate-y-0.5"
                aria-label="Scroll testimonials right"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          <div ref={testimonialCarouselRef} className="no-scrollbar mt-12 overflow-x-auto scroll-smooth pb-3">
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className="min-w-[20rem] snap-start overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[linear-gradient(180deg,rgba(30,28,36,0.96),rgba(26,24,31,0.95))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)] opacity-0 [animation:fadeUp_0.8s_ease_forwards] sm:min-w-[28rem] xl:min-w-[33rem]"
                  style={{ animationDelay: `${0.08 * index}s` }}
                >
                  <div className="flex flex-wrap gap-3">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span
                        key={`${testimonial.name}-${starIndex}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-xl text-white shadow-[0_10px_18px_rgba(255,110,36,0.18)]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-10 text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.02] font-extrabold tracking-[-0.05em]">
                    {testimonial.title}
                  </h3>
                  <p className="mt-6 text-[clamp(0.74rem,0.86vw,0.84rem)] leading-[1.6] text-white/82">
                    {testimonial.text}
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[0.86rem] leading-none font-extrabold tracking-[-0.04em]">{testimonial.name}</p>
                      <p className="mt-2 text-[0.84rem] text-white/68">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="fade-up pt-12">
            <h2 className="max-w-[10ch] text-[clamp(1.6rem,2.2vw,2.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">Let&apos;s Build Something That Actually Works</h2>
            <p className="mt-8 max-w-[18ch] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.42] text-white/88">
              We are here to help you move forward with clarity, whether you are starting from scratch or scaling what already exists.
            </p>
            <a href="#contact" className={`${glassButton} mt-12 min-w-[min(100%,21rem)] rounded-full border-[var(--color-accent)] text-[var(--color-accent)]`}>
              <span>Start Your Project</span>
              <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                <ArrowIcon />
              </span>
            </a>
          </div>

          <div className="fade-up delay-1 overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.96)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[clamp(1.3rem,1.9vw,2rem)] leading-none font-extrabold tracking-[-0.06em]">ENQUIRY NOW</h3>
                <p className="mt-6 text-[0.78rem] text-white/88">Please fill the datils</p>
              </div>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-3xl text-white/90">
                ×
              </button>
            </div>

            <div className="mt-10 grid gap-6">
              {[
                { label: "Name", value: "Shubham Kumar" },
                { label: "Email", value: "shubham.k@kodehash.com" },
                { label: "Mobile", value: "+91 81144615" },
              ].map((field) => (
                <label key={field.label} className="grid gap-3">
                  <span className="text-[0.84rem] font-medium text-white/88">{field.label}</span>
                  <input
                    defaultValue={field.value}
                    className="rounded-full border border-[rgba(78,72,102,0.8)] bg-[rgba(36,33,47,0.98)] px-5 py-4 text-[0.84rem] text-white outline-none transition focus:border-[var(--color-accent)]"
                  />
                </label>
              ))}

              <label className="grid gap-3">
                <span className="text-[0.84rem] font-medium text-white/88">Write your requirement here (Optional)</span>
                <textarea
                  defaultValue="Hey,"
                  rows={6}
                  className="rounded-[1.6rem] border border-[var(--color-accent)] bg-[rgba(36,33,47,0.98)] px-5 py-4 text-[0.84rem] text-white outline-none transition focus:border-[var(--color-accent-strong)]"
                />
              </label>

              <button className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-4 text-[0.84rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
