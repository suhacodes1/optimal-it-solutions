import { useMemo, useRef, useState } from "react";

const navItems = ["Services", "Work", "About", "Contact"];

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
];

const goalCards = [
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
      "top-8 right-22 h-[23rem] w-[13rem] sm:top-10 sm:right-28 sm:h-[26rem] sm:w-[14.5rem] xl:top-24 xl:right-64 xl:h-[29rem] xl:w-[17rem]",
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
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`h-18 w-18 ${className}`}>
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
  const [activeTab, setActiveTab] = useState("launch");
  const [activeGoal, setActiveGoal] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");
  const serviceCarouselRef = useRef(null);
  const testimonialCarouselRef = useRef(null);

  const activeService = useMemo(
    () => serviceTabs.find((tab) => tab.id === activeTab) ?? serviceTabs[0],
    [activeTab],
  );

  const activeGoalData = useMemo(
    () => goalSteps.find((step) => step.id === activeGoal) ?? goalSteps[0],
    [activeGoal],
  );

  const visibleGoalCards = useMemo(
    () => goalCards.filter((card) => card.step === "all" || activeGoal === "all" || card.step === activeGoal),
    [activeGoal],
  );

  const visibleImpactCards = useMemo(
    () => impactCards.filter((card) => activeIndustry === "ecommerce" || card.industry === activeIndustry || activeIndustry === "all"),
    [activeIndustry],
  );

  const activeIndustryCopy = useMemo(
    () => industries.find((industry) => industry.id === activeIndustry)?.description ?? industries[0].description,
    [activeIndustry],
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
        <nav className="fade-up flex flex-col items-stretch justify-between gap-4 rounded-[2rem] border border-[rgba(121,87,64,0.58)] bg-[linear-gradient(180deg,rgba(31,31,31,0.96),rgba(26,26,26,0.94))] px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.28)] md:flex-row md:items-center md:px-6 md:py-5">
          <div className="flex items-center gap-4">
            <div className="relative h-6 w-6 rounded-full border-[0.34rem] border-[var(--color-accent)] after:absolute after:inset-[0.22rem] after:rounded-full after:bg-white after:content-['']" />
            <div>
              <p className="m-0 text-[clamp(1.8rem,2vw,2.6rem)] leading-[0.9] font-extrabold tracking-[-0.06em]">OPTIMAL</p>
              <p className="m-0 text-[clamp(1.2rem,1.4vw,2rem)] leading-[0.9] tracking-[-0.07em]">IT SOLUTIONS</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 rounded-[1.3rem] border border-[rgba(51,79,118,0.65)] bg-black/80 p-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-3 text-white/85 transition duration-200 hover:-translate-y-0.5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 rounded-[1.3rem] border border-[rgba(51,79,118,0.65)] bg-black/80 p-2">
            <span className="hidden text-white/85 md:inline">888-710-6350</span>
            <a
              href="#contact"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </nav>

        <section id="services" className="grid items-center gap-12 pt-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(420px,0.75fr)] lg:pt-16">
          <div className="fade-up max-w-[980px]">
            <p className="m-0 text-[0.92rem] font-bold tracking-[0.22em] text-[var(--color-accent)] uppercase">
              Digital Marketing and Growth Systems
            </p>
            <h1 className="mt-5 max-w-[14ch] text-[clamp(3.6rem,7vw,7.5rem)] leading-[0.93] font-extrabold tracking-[-0.08em]">
              Digital Marketing-
              <br />
              You Can See and Measure Growth
            </h1>
            <p className="mt-7 max-w-[21ch] text-[clamp(1.15rem,1.9vw,1.7rem)] leading-[1.32] text-[var(--color-copy)]">
              More traffic means nothing without results. We focus on attracting the right audience and turning them
              into customers through strategies that deliver consistent, measurable growth.
            </p>

            <div className="mt-10">
              <a href="#contact" className={`${glassButton} min-w-[min(100%,24rem)]`}>
                <span>Let&apos;s Develop Now</span>
                <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-white/10">
                  <ArrowIcon />
                </span>
              </a>
            </div>

            <div className="fade-up delay-2 mt-16">
              <h2 className="m-0 text-[clamp(2.4rem,4vw,4rem)] leading-none font-extrabold tracking-[-0.06em]">
                Our Expertise
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {expertiseItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                    style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                  >
                    <div className="inline-flex text-white">
                      <ExpertiseIcon type={item.icon} />
                    </div>
                    <p className="mt-5 text-[clamp(1.8rem,2vw,2.35rem)] leading-[1.1] tracking-[-0.05em]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-up delay-1 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[540px] xl:min-h-[760px]">
            {phoneShowcase.map((phone) => (
              <article
                key={phone.title}
                className={`absolute overflow-hidden rounded-[2rem] border border-white/8 bg-[#111] shadow-[0_30px_80px_rgba(0,0,0,0.48)] ${phone.position} ${phone.floatClass}`}
              >
                <img src={phone.image} alt={phone.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.54))]" />
                <div className="absolute inset-x-[1.1rem] bottom-[1.2rem] z-10">
                  <p className={`m-0 text-[clamp(2.2rem,3vw,3.4rem)] leading-[0.95] font-extrabold tracking-[-0.06em] ${phone.titleClass}`}>
                    {phone.title}
                  </p>
                  <p className="mt-2 max-w-[8ch] text-[1.05rem] leading-[1.08]">{phone.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </header>

      <main className="relative z-10 mx-auto max-w-[1780px] px-4 pb-24 sm:px-6 lg:px-8">
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
                className={`cursor-pointer border-0 px-4 py-5 text-[1.1rem] font-extrabold uppercase tracking-[-0.04em] transition sm:text-[clamp(1.25rem,2vw,2rem)] ${
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
              <h2 className="text-[clamp(2.6rem,4.5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.08em]">
                {activeService.headline} <span className="text-[var(--color-accent)]">{activeService.highlight}</span>
              </h2>
              <p className="mt-6 max-w-[45ch] text-[clamp(1.05rem,1.6vw,1.45rem)] leading-[1.42] text-[var(--color-copy)]">
                {activeService.text}
              </p>
            </div>

            <div className="relative z-10 mt-11">
              <div className="mb-5 flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={() => scrollRow(serviceCarouselRef, "prev")}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.82)] text-2xl text-white/80 transition duration-200 hover:border-[rgba(255,131,43,0.34)] hover:text-white"
                  aria-label="Scroll service cards left"
                >
                  &lsaquo;
                </button>
                <button
                  type="button"
                  onClick={() => scrollRow(serviceCarouselRef, "next")}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-2xl text-white shadow-[0_18px_40px_rgba(255,110,36,0.18)] transition duration-200 hover:-translate-y-0.5"
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
                      className={`section-enter min-w-[20rem] snap-start rounded-[2rem] border p-7 transition duration-200 hover:-translate-y-[5px] sm:min-w-[29rem] xl:min-w-[38rem] ${
                        card.featured
                          ? "border-[rgba(255,149,72,0.28)] bg-[linear-gradient(135deg,rgba(183,88,18,0.88),rgba(239,106,12,0.96))]"
                          : "border-[rgba(87,78,111,0.45)] bg-[rgba(26,24,31,0.92)] hover:border-[rgba(255,131,43,0.38)]"
                      }`}
                      style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                    >
                      <div
                        className={`inline-flex h-28 w-28 items-center justify-center rounded-full ${
                          card.featured ? "bg-white text-[var(--color-accent)]" : "bg-white/10 text-white"
                        }`}
                      >
                        <ExpertiseIcon type={index === 0 ? "ai" : index === 1 ? "code" : "megaphone"} />
                      </div>
                      <h3 className="mt-6 max-w-[12ch] text-[clamp(2rem,2.4vw,3rem)] leading-none font-extrabold tracking-[-0.06em]">
                        {card.title}
                      </h3>
                      <p className="mt-4 max-w-[25ch] text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.42] text-white/92">{card.text}</p>
                      <ul className="mt-7 grid gap-3">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center justify-between gap-4 text-[clamp(1rem,1.2vw,1.1rem)] text-white/94">
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

        <section className="fade-up delay-1 relative mt-24 overflow-hidden rounded-[2.4rem] border border-[rgba(255,131,43,0.12)] bg-[linear-gradient(180deg,rgba(8,8,10,0.96),rgba(6,6,7,0.98))] px-5 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,131,43,0.18),transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,131,43,0.1),transparent_68%)] blur-3xl" />
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">Define Your Goals</h2>
            <p className="mx-auto mt-6 max-w-[42ch] text-[clamp(1.1rem,1.8vw,1.45rem)] leading-[1.38] text-white/88">
              Have a vision in mind? Share it with us. We’ll align the right technology, map out a clear path, and bring it to life step by step, with precision and purpose.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {goalSteps.map((step) => {
              const active = activeGoal === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveGoal(step.id)}
                  className={`group rounded-full border px-5 py-3 text-left transition duration-300 ${
                    active
                      ? "border-[rgba(255,149,72,0.32)] bg-[linear-gradient(135deg,rgba(255,131,43,0.22),rgba(255,95,45,0.12))] text-white shadow-[0_12px_30px_rgba(255,131,43,0.14)]"
                      : "border-white/10 bg-[rgba(20,20,24,0.9)] text-white/78 hover:border-[rgba(255,131,43,0.2)] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`h-3 w-3 rounded-full transition duration-300 ${
                        active ? "bg-[var(--color-accent)] shadow-[0_0_0_6px_rgba(255,131,43,0.14)]" : "bg-white/30"
                      }`}
                    />
                    <span className="text-[0.98rem] font-semibold">{step.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <div className="section-enter rounded-[2rem] border border-[rgba(255,131,43,0.16)] bg-[linear-gradient(180deg,rgba(29,20,16,0.82),rgba(17,17,20,0.92))] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">Active path</p>
              <h3 className="mt-4 max-w-[10ch] text-[clamp(2.2rem,3.2vw,4rem)] leading-[0.95] font-extrabold tracking-[-0.06em]">{activeGoalData.title}</h3>
              <p className="mt-5 max-w-[28ch] text-[clamp(1rem,1.25vw,1.15rem)] leading-[1.55] text-white/80">{activeGoalData.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-[rgba(255,131,43,0.22)] bg-[rgba(255,131,43,0.08)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
                  {activeGoalData.cta}
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                  Interactive service map
                </span>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleGoalCards.map((card, index) => (
              <article
                key={card.id}
                className={`group overflow-hidden rounded-[2rem] border border-white/20 bg-[#1a1a1f] transition duration-500 hover:-translate-y-2 hover:border-[rgba(255,131,43,0.35)] hover:shadow-[0_22px_50px_rgba(255,131,43,0.12)] ${
                  card.shape === "circle" ? "sm:aspect-square xl:aspect-auto xl:min-h-[430px]" : "min-h-[430px]"
                } opacity-0 [animation:fadeUp_0.8s_ease_forwards]`}
                style={{ animationDelay: `${0.06 * index}s` }}
              >
                {card.ctaOnly ? (
                  <div className="relative flex h-full min-h-[430px] items-center justify-center overflow-hidden">
                    <img src={card.image} alt="Team discussion" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,131,43,0.12),transparent_52%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[var(--color-accent)] text-center text-black shadow-[0_18px_40px_rgba(255,128,40,0.28)] transition duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <div>
                        <p className="text-[2rem] font-extrabold">CTA</p>
                        <div className="mt-2 inline-flex text-black">
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
                      <p className="text-[0.95rem] font-medium">{card.eyebrow}</p>
                    </div>
                    <div className="absolute inset-x-6 bottom-7">
                      <h3 className="text-[clamp(1.8rem,2.2vw,2.6rem)] leading-none font-medium tracking-[-0.05em] transition duration-300 group-hover:text-[var(--color-accent)]">{card.title}</h3>
                    </div>
                  </div>
                )}
              </article>
            ))}
            </div>
          </div>
        </section>

        <section id="about" className="fade-up mt-24">
          <div className="mx-auto max-w-[1260px] text-center">
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">Core solutions that move your business forward</h2>
            <p className="mx-auto mt-5 max-w-[56ch] text-[clamp(1.1rem,1.8vw,1.45rem)] leading-[1.4] text-white/88">
              Our understanding begins with the clear concept that growth stems from doing things the right way. Our core solutions revolve around an accurate, built, and ready-to-scale model.
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#272727]">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,rgba(255,131,43,0.42),transparent_38%)]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(270deg,rgba(255,131,43,0.24),transparent_26%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div className="px-8 py-10 lg:px-12">
                <h3 className="max-w-[8ch] text-[clamp(3rem,5vw,6rem)] leading-[0.88] font-medium tracking-[-0.06em]">AI Automation Development</h3>
                <p className="mt-6 max-w-[23ch] text-[clamp(1.15rem,1.6vw,1.55rem)] leading-[1.35] text-white/90">
                  Our state-of-the-art intelligent systems are designed to reduce manual work and help your business operate smarter with accuracy.
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
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1400&q=80"
                  alt="AI automation illustration"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,39,39,0.05),rgba(39,39,39,0.18))]" />
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up delay-1 mt-20">
          <div className="max-w-[1180px]">
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">Recognition for driving excellence</h2>
            <p className="mt-5 max-w-[52ch] text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.4] text-white/88">
              At Optimal IT Solutions, we are honored to be recognized for our relentless commitment to delivering cutting-edge solutions and exceptional service to our clients.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {badgeItems.map((badge, index) => (
              <div
                key={badge.title}
                className="flex items-center justify-center opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className={`flex h-44 w-44 items-center justify-center rounded-full border-4 border-white/10 ${badge.color} text-center text-black shadow-[0_12px_28px_rgba(0,0,0,0.24)]`}>
                  <div>
                    <p className="text-[0.82rem] font-bold uppercase tracking-[0.12em]">{badge.title}</p>
                    <p className="mt-2 text-[1.7rem] font-extrabold">{badge.title === "DMCA" ? "Verified" : "Top Rated"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-22 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="fade-up">
            <h2 className="max-w-[11ch] text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">AI-driven solutions for every stage of business</h2>
            <p className="mt-6 max-w-[20ch] text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.42] text-white/88">
              Just technology doesn’t solve problems. How you use it does. That’s why we involve AI in our solutions in practical ways that are aligned with your business model.
            </p>
            <a href="#contact" className={`${orangeButton} mt-9 min-w-[min(100%,17rem)] justify-center rounded-full px-8 py-5 text-[1.2rem]`}>
              <span>Get Started</span>
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessStageCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[rgba(26,24,31,0.92)] p-8 opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.08 * index}s` }}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-[8ch] text-[clamp(2rem,2.4vw,3rem)] leading-[1.02] font-medium tracking-[-0.05em]">{card.title}</h3>
                  <div className="text-white">
                    <ExpertiseIcon type={card.icon} className="h-20 w-20" />
                  </div>
                </div>
                <p className="mt-8 text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.4] text-white/90">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="fade-up">
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">Industries We&apos;ve Made Impact In</h2>
              <div className="mt-8 flex flex-wrap gap-4">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`rounded-full border px-8 py-4 text-[1rem] font-bold transition duration-200 ${
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

            <div className="fade-up delay-1 text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.38] text-white/90">
              {activeIndustryCopy}
            </div>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-3">
            {visibleImpactCards.map((card, index) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[rgba(31,31,35,0.96)] opacity-0 [animation:fadeUp_0.8s_ease_forwards]"
                style={{ animationDelay: `${0.07 * index}s` }}
              >
                <div className="p-7">
                  <div className="overflow-hidden rounded-[1.7rem]">
                    <img src={card.image} alt={card.title} className="h-[22rem] w-full object-cover" />
                  </div>
                  <p className="mt-6 text-[1.15rem] font-medium text-[var(--color-accent)]">{card.eyebrow}</p>
                  <h3 className="mt-4 max-w-[12ch] text-[clamp(2rem,2.2vw,3rem)] leading-[1.02] font-medium tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-5 text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.55] text-white/80">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[56rem]">
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">
                Testimonials that inspire us to work harder
              </h2>
              <p className="mt-5 max-w-[36ch] text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.45] text-white/86">
                We’ve built long-term partnerships by designing digital experiences that feel sharper, perform better, and support real business growth.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => scrollRow(testimonialCarouselRef, "prev")}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.82)] text-white/80 transition duration-200 hover:border-[rgba(255,131,43,0.34)] hover:text-white"
                aria-label="Scroll testimonials left"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                onClick={() => scrollRow(testimonialCarouselRef, "next")}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-3xl text-white shadow-[0_18px_40px_rgba(255,110,36,0.18)] transition duration-200 hover:-translate-y-0.5"
                aria-label="Scroll testimonials right"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          <div ref={testimonialCarouselRef} className="no-scrollbar mt-12 overflow-x-auto scroll-smooth pb-3">
            <div className="flex gap-8">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className="min-w-[20rem] snap-start overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[linear-gradient(180deg,rgba(30,28,36,0.96),rgba(26,24,31,0.95))] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.2)] opacity-0 [animation:fadeUp_0.8s_ease_forwards] sm:min-w-[28rem] xl:min-w-[33rem]"
                  style={{ animationDelay: `${0.08 * index}s` }}
                >
                  <div className="flex flex-wrap gap-3">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span
                        key={`${testimonial.name}-${starIndex}`}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-xl text-white shadow-[0_10px_18px_rgba(255,110,36,0.18)]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-10 text-[clamp(2rem,2.3vw,2.8rem)] leading-[1.02] font-extrabold tracking-[-0.05em]">
                    {testimonial.title}
                  </h3>
                  <p className="mt-6 text-[clamp(1rem,1.22vw,1.18rem)] leading-[1.6] text-white/82">
                    {testimonial.text}
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[1.6rem] leading-none font-extrabold tracking-[-0.04em]">{testimonial.name}</p>
                      <p className="mt-2 text-[1rem] text-white/68">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="fade-up pt-12">
            <h2 className="max-w-[8ch] text-[clamp(3rem,5.4vw,5.7rem)] leading-[0.98] font-extrabold tracking-[-0.06em]">Let&apos;s Build Something That Actually Works</h2>
            <p className="mt-8 max-w-[18ch] text-[clamp(1.15rem,1.8vw,1.6rem)] leading-[1.42] text-white/88">
              We are here to help you move forward with clarity, whether you are starting from scratch or scaling what already exists.
            </p>
            <a href="#contact" className={`${glassButton} mt-12 min-w-[min(100%,21rem)] rounded-full border-[var(--color-accent)] text-[var(--color-accent)]`}>
              <span>Start Your Project</span>
              <span className="inline-flex h-[2.65rem] w-[2.65rem] items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                <ArrowIcon />
              </span>
            </a>
          </div>

          <div className="fade-up delay-1 overflow-hidden rounded-[2rem] border border-[rgba(87,78,111,0.45)] bg-[rgba(31,29,42,0.96)] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[clamp(2.8rem,5vw,4.8rem)] leading-none font-extrabold tracking-[-0.06em]">ENQUIRY NOW</h3>
                <p className="mt-6 text-[1.1rem] text-white/88">Please fill the datils</p>
              </div>
              <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-3xl text-white/90">
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
                  <span className="text-[1rem] font-medium text-white/88">{field.label}</span>
                  <input
                    defaultValue={field.value}
                    className="rounded-full border border-[rgba(78,72,102,0.8)] bg-[rgba(36,33,47,0.98)] px-7 py-5 text-[1rem] text-white outline-none transition focus:border-[var(--color-accent)]"
                  />
                </label>
              ))}

              <label className="grid gap-3">
                <span className="text-[1rem] font-medium text-white/88">Write your requirement here (Optional)</span>
                <textarea
                  defaultValue="Hey,"
                  rows={6}
                  className="rounded-[1.6rem] border border-[var(--color-accent)] bg-[rgba(36,33,47,0.98)] px-7 py-6 text-[1rem] text-white outline-none transition focus:border-[var(--color-accent-strong)]"
                />
              </label>

              <button className="mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-8 py-5 text-[1.2rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,110,36,0.22)]">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
