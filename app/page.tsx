import { cookies } from "next/headers";
import { Language } from "@/context/i18n/dictionary";
import Link from "next/link";
import BarakahInteractive from "@/components/BarakahInteractive";
import FunSection from "@/components/FunSection";

// Complete Redesigned Multilingual Translation Object for the portfolio
const customTranslations = {
  en: {
    name: "Kaif Shaikh",
    headline: "Full-stack engineer and founder building <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a> — a group vehicle rental marketplace in India. Based in Kolkata.",
    bio: "I build backend-heavy products end-to-end, from architecture to production. Currently focused on Rahigo's go-to-market while open to remote full-stack roles at product-focused teams.",
    labels: {
      work: "Work Experience",
      sideBusiness: "Side Business / Catalyst",
      projects: "Featured Projects",
      stack: "Technical Stack",
      contact: "Get In Touch"
    },
    work: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        role: "Full-stack Engineer",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "Jan 2025 → Present",
        location: "rahigo.in · Kolkata, India",
        bullets: [
          "<strong>Two-Sided Marketplace</strong>: Built a two-sided marketplace from scratch — a customer app where users post trip requirements and a partner app where verified operators submit live competing quotes. Both shipped to Google Play Store.",
          "<strong>Real-Time Bidding</strong>: Designed a WebSocket-based real-time bidding system where multiple operators receive trip requests simultaneously and compete with quotes until the customer confirms.",
          "<strong>Telemetry & Masking</strong>: Built phone number masking using Exotel — operators and passengers can call each other without either side seeing the real number until departure day.",
          "<strong>Verification Safeguards</strong>: Enforced a vehicle photo verification system with automated 6-month expiry, blocking operators from quoting if their vehicle photos are outdated.",
          "<strong>Emergency Failover</strong>: Engineered a breakdown replacement guarantee flow — if a vehicle fails on trip day, the system flags the booking for emergency operator reassignment."
        ],
        tags: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ]
      },
      {
        logo: "https://www.myhaveit.io/HaveitLogo.svg",
        role: "Founding Full Stack Engineer",
        company: "Haveit",
        companyUrl: "https://www.myhaveit.io",
        date: "Dec 2024 → Dec 2025",
        location: "Remote / Kolkata",
        bullets: [
          "<strong>Architecture & Launch</strong>: Sole engineer who architected and launched the full platform — event planning marketplace connecting customers with venues, caterers, and 5+ vendor categories built on Node.js, Express, Redis, MongoDB and React.",
          "<strong>AI Recommendation</strong>: Built an AI vendor recommendation engine using vector embeddings and custom ranking logic that matches vendor suggestions to customer budgets dynamically.",
          "<strong>Vendor Control Center</strong>: Built vendor dashboards with live rate cards, add-on management, and automated matching filters."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "AI Embeddings", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M21.3 11.2a4 4 0 0 0-1-3.6 4.1 4.1 0 0 0-3.3-1.6c-.3 0-.6.1-.9.2a4 4 0 0 0-5.7-2.6 4.1 4.1 0 0 0-2.4 2.8 4 4 0 0 0-4 1.8A4.1 4.1 0 0 0 3 11.8a4 4 0 0 0 1 3.6 4.1 4.1 0 0 0 3.3 1.6h.9a4 4 0 0 0 5.7 2.6 4.1 4.1 0 0 0 2.4-2.8 4 4 0 0 0 4-1.8 4.1 4.1 0 0 0 1-3.6zm-8.8 8.1c-.8 0-1.6-.2-2.3-.7l1-.6a1.2 1.2 0 0 1 1.7 0l.9.9v.4zm4-1.8l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.6-1 1 .6a1.2 1.2 0 0 1 0 1.7l.3 1zm1.7-4l-1-.6a1.2 1.2 0 0 1-.6-1.6v-1.2l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.3 1.1zm-3.6-7.8l-1 .6a1.2 1.2 0 0 1-1.7 0l-.9-.9v-.4c.8 0 1.6.2 2.3.7zm-4 1.8l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.6 1-1-.6a1.2 1.2 0 0 1 0-1.7l-.3-1zm-1.7 4l1 .6a1.2 1.2 0 0 1 .6 1.6v1.2l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.3-1.1zM8.5 12a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0z'/></svg>" }
        ]
      },
      {
        logo: "https://www.intervue.io/favicon.ico",
        role: "Software Development Engineer Intern",
        company: "Intervue.io",
        companyUrl: "https://intervue.io",
        date: "Apr 2024 → Dec 2024",
        location: "Bengaluru, India",
        bullets: [
          "<strong>Video Infrastructure Migration</strong>: Migrated video infrastructure from Twilio to LiveKit, cutting costs by $2,000/month — 65% reduction — while handling 200+ daily live technical interviews with lower latency.",
          "<strong>AI Interview Engineering</strong>: Built and optimised full-stack features across the AI interview assessment workflow, reducing development cycle time by 35%.",
          "<strong>ML Pipeline Optimization</strong>: Rebuilt internal ML training pipelines, cutting model training time from 3 days to 8 hours."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      },
      {
        logo: "S",
        role: "Software Engineer Intern",
        company: "Simco Consultancy",
        date: "Jan 2024 → Mar 2024",
        location: "Kolkata, India",
        bullets: [
          "<strong>Latency Optimization</strong>: Diagnosed and resolved API latency bottlenecks on Render, improving response times by 30% across core user flows.",
          "<strong>Workflow Automation</strong>: Automated client reporting workflows using Google Apps Script and App Sheets, saving 20+ hours of manual work weekly and cutting report generation time by 40%.",
          "<strong>Competitive Web Scrapers</strong>: Built headless Puppeteer scrapers to pull and analyse competitor market data."
        ],
        tags: [
          { name: "Apps Script", icon: "https://cdn.simpleicons.org/google/7eb8f7" },
          { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      }
    ],
    sideBusiness: {
      title: "Barakah Travels",
      fleetLabel: "26-Seater Force Traveller Owner",
      fleetSub: "Personally Operated & Managed Fleet Asset",
      fleetBadge: "Owned Fleet",
      url: "https://barakahtravels.in",
      urlText: "barakahtravels.in ↗",
      tagline: "Outstation Travel Logistics · Kolkata, India (2023 → Present)",
      verifiedLabel: "Verify Website ↗",
      pitch: "I didn't start with a startup idea. I started with a travel agency.<br/><br/>Running Barakah Travels in Kolkata, I personally bought a 26-seater Force Traveller and handled hundreds of outstation trips — Digha, Mandarmani, Gangasagar. And every single booking was a mess. Customers had no way to compare prices. Operators quoted whatever they felt like. There was no accountability if a vehicle broke down. No trust, no transparency, just phone calls and luck.<br/><br/>After 9 months of living inside that chaos — tracking real bookings, real prices, real complaints — I had enough data and enough frustration to know exactly what needed to be built. That became Rahigo.",
      bullets: [
        "<strong>Route Optimization</strong>: Deployed SEO landing pages for high-intent route searches — live on <a href='https://www.barakahtravels.in/sitemap.xml' target='_blank' class='sliding-link font-medium'>sitemap.xml ↗</a>",
        "<strong>Demand Validation</strong>: Tracked organic booking intent across routes to validate real demand before building anything",
        "<strong>Supply Mapping</strong>: Onboarded 40+ fleet operators and mapped 9 months of regional pricing data — now the foundation of Rahigo's bidding algorithm"
      ],
      trafficTitle: "Route Intent & Traffic Dashboard",
      trafficSubtitle: "Interactive preview of SEO intent-mapping landing pages built to capture organic traffic:",
      routes: [
        {
          name: "Kolkata ↔ Digha",
          type: "Coastal Route",
          stat: "2.4k/mo organic search",
          badge: "Validated Demand",
          metric: "94% Intent Score",
          insight: "Captured outstation travelers searching for immediate weekend group bus bookings."
        },
        {
          name: "Kolkata ↔ Mandarmani",
          type: "Resort Route",
          stat: "1.8k/mo organic search",
          badge: "Operator Network",
          metric: "42 fleet mapped",
          insight: "Successfully mapped local operator price points and booking commission thresholds."
        },
        {
          name: "Kolkata ↔ Gangasagar",
          type: "Pilgrimage Route",
          stat: "3.2k/mo surge seasonal",
          badge: "Pricing Thesis",
          metric: "Peak baseline data",
          insight: "Analyzed dynamic holiday surge pricing to establish Rahigo's reverse-auction baseline."
        }
      ]
    },
    projects: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo",
        desc: "Reverse-auction group vehicle marketplace — live on Android & web",
        url: "https://rahigo.in",
        urlText: "rahigo.in ↗",
        caseStudyUrl: "/projects/rahigo"
      },
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo Blog",
        desc: "Headless CMS using Hashnode + Next.js ISR, custom sitemap & SEO meta tags",
        url: "https://rahigo.in/blog",
        urlText: "rahigo.in/blog ↗",
        caseStudyUrl: "/projects/travel-crm"
      },
      {
        logo: "OS",
        name: "Open source",
        desc: "Side projects and experiments on GitHub",
        url: "https://github.com/kraggy09",
        urlText: "github.com/kraggy09 ↗",
        caseStudyUrl: null
      }
    ],
    stack: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Zustand", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3zm-4.5-2.5c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm-11-3.5C4.67 8 4 8.67 4 9.5c0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm13 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5z'/></svg>" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
      { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
      { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/7eb8f7" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    contact: "Open to remote full-stack roles at product-focused teams.<br/>Reach me at <a href='mailto:kaifshaikh2013.sk@gmail.com' class='sliding-link'>kaifshaikh2013.sk@gmail.com</a> or on <a href='https://linkedin.com/in/mkaifshaikh' target='_blank' class='sliding-link'>LinkedIn</a>."
  },
  hi: {
    name: "कैफ शेख",
    headline: "फुल-स्टैक इंजीनियर और फाउंडर, भारत में ग्रुप व्हीकल रेंटल मार्केटप्लेस <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a> का निर्माण कर रहे हैं। कोलकाता में स्थित।",
    bio: "मैं आर्किटेक्चर से लेकर प्रोडक्शन तक, एंड-टू-एंड बैकएंड-हैवी प्रोडक्ट्स बनाता हूँ। वर्तमान में Rahigo के गो-टू-मार्केट पर केंद्रित हूँ और प्रोडक्ट-केंद्रित टीमों में रिमोट फुल-स्टैक भूमिकाओं के लिए उपलब्ध हूँ।",
    labels: {
      work: "कार्य अनुभव",
      sideBusiness: "साइड बिजनेस / उत्प्रेरक",
      projects: "प्रमुख प्रोजेक्ट्स",
      stack: "टेक स्टैक",
      contact: "संपर्क करें"
    },
    work: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        role: "को-फाउंडर और फुल-स्टैक इंजीनियर",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "जनवरी २०२५ → वर्तमान",
        location: "rahigo.in · कोलकाता, भारत",
        bullets: [
          "<strong>शून्य से दो-तरफा मार्केटप्लेस</strong>: शून्य से दो-तरफा मार्केटप्लेस बनाया — एक ग्राहक ऐप जहां उपयोगकर्ता यात्रा आवश्यकताओं को पोस्ट करते हैं और एक पार्टनर ऐप जहां सत्यापित ऑपरेटर लाइव कोट्स जमा करते हैं। दोनों Google Play Store पर उपलब्ध हैं।",
          "<strong>रीयल-टाइम बिडिंग</strong>: एक वेबसॉकेट्स आधारित रीयल-टाइम बिडिंग सिस्टम डिज़ाइन किया जहां कई ऑपरेटरों को एक साथ यात्रा अनुरोध प्राप्त होते हैं और वे ग्राहक द्वारा पुष्टि किए जाने तक कोट्स के साथ प्रतिस्पर्धा करते हैं।",
          "<strong>नंबर मास्किंग</strong>: Exotel का उपयोग करके फोन नंबर मास्किंग का निर्माण किया — ऑपरेटर और यात्री प्रस्थान के दिन तक असली नंबर देखे बिना एक-दूसरे को कॉल कर सकते हैं।",
          "<strong>सत्यापन सुरक्षा</strong>: स्वचालित 6-महीने की समाप्ति के साथ एक वाहन फोटो सत्यापन प्रणाली लागू की, यदि ऑपरेटरों के वाहन की तस्वीरें पुरानी हैं तो उन्हें बोली लगाने से रोक दिया जाता है।",
          "<strong>इमरजेंसी फेलओवर</strong>: एक ब्रेकडाउन रिप्लेसमेंट गारंटी फ्लो इंजीनियर किया — यदि यात्रा के दिन वाहन विफल हो जाता है, तो सिस्टम आपातकालीन ऑपरेटर पुनर्मूल्यांकन के लिए बुकिंग को फ़्लैग करता है।"
        ],
        tags: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ]
      },
      {
        logo: "https://www.myhaveit.io/HaveitLogo.svg",
        role: "संस्थापक फुल स्टैक इंजीनियर",
        company: "Haveit",
        companyUrl: "https://www.myhaveit.io",
        date: "दिसंबर २०२४ → दिसंबर २०२५",
        location: "रिमोट / कोलकाता",
        bullets: [
          "<strong>आर्किटेक्चर और लॉन्च</strong>: एकमात्र इंजीनियर जिसने पूरे प्लेटफॉर्म को आर्किटेक्ट और लॉन्च किया — इवेंट प्लानिंग मार्केटप्लेस जो ग्राहकों को वेन्यू, कैटरर्स और 5+ श्रेणियों से जोड़ता है। इसे Node.js, Express, Redis, MongoDB और React पर बनाया गया है।",
          "<strong>एआई अनुशंसा</strong>: वेक्टर एम्बेडिंग और कस्टम रैंकिंग लॉजिक का उपयोग करके एक AI विक्रेता अनुशंसा इंजन बनाया जो ग्राहकों के बजट से मेल खाने वाले विक्रेता सुझाव प्रदान करता है।",
          "<strong>विक्रेता नियंत्रण केंद्र</strong>: लाइव रेट कार्ड, ऐड-ऑन प्रबंधन और स्वचालित मिलान फ़िल्टर के साथ विक्रेता डैशबोर्ड बनाए।"
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "AI Embeddings", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M21.3 11.2a4 4 0 0 0-1-3.6 4.1 4.1 0 0 0-3.3-1.6c-.3 0-.6.1-.9.2a4 4 0 0 0-5.7-2.6 4.1 4.1 0 0 0-2.4 2.8 4 4 0 0 0-4 1.8A4.1 4.1 0 0 0 3 11.8a4 4 0 0 0 1 3.6 4.1 4.1 0 0 0 3.3 1.6h.9a4 4 0 0 0 5.7 2.6 4.1 4.1 0 0 0 2.4-2.8 4 4 0 0 0 4-1.8 4.1 4.1 0 0 0 1-3.6zm-8.8 8.1c-.8 0-1.6-.2-2.3-.7l1-.6a1.2 1.2 0 0 1 1.7 0l.9.9v.4zm4-1.8l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.6-1 1 .6a1.2 1.2 0 0 1 0 1.7l.3 1zm1.7-4l-1-.6a1.2 1.2 0 0 1-.6-1.6v-1.2l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.3 1.1zm-3.6-7.8l-1 .6a1.2 1.2 0 0 1-1.7 0l-.9-.9v-.4c.8 0 1.6.2 2.3.7zm-4 1.8l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.6 1-1-.6a1.2 1.2 0 0 1 0-1.7l-.3-1zm-1.7 4l1 .6a1.2 1.2 0 0 1 .6 1.6v1.2l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.3-1.1zM8.5 12a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0z'/></svg>" }
        ]
      },
      {
        logo: "https://www.intervue.io/favicon.ico",
        role: "सॉफ्टवेयर डेवलपमेंट इंजीनियर इंटर्न",
        company: "Intervue.io",
        companyUrl: "https://intervue.io",
        date: "अप्रैल २०२४ → दिसंबर २०२४",
        location: "बेंगलुरु, भारत",
        bullets: [
          "<strong>लागत अनुकूलन</strong>: वीडियो इंफ्रास्ट्रक्चर को Twilio से LiveKit में स्थानांतरित किया, जिससे कम विलंबता के साथ 200+ दैनिक लाइव तकनीकी साक्षात्कारों को संभालते हुए लागत में $2,000/माह (65% की कमी) की बचत हुई।",
          "<strong>एआई साक्षात्कार इंजीनियरिंग</strong>: AI साक्षात्कार मूल्यांकन वर्कफ़्लो पर फुल-स्टैक फीचर्स का विकास और अनुकूलन किया, जिससे विकास चक्र का समय 35% कम हो गया।",
          "<strong>एमएल पाइपलाइन अनुकूलन</strong>: आंतरिक एमएल प्रशिक्षण पाइपलाइनों को फिर से बनाया, जिससे मॉडल प्रशिक्षण समय 3 दिनों से घटकर 8 घंटे रह गया।"
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      },
      {
        logo: "S",
        role: "सॉफ्टवेयर इंजीनियर इंटर्न",
        company: "Simco Consultancy",
        date: "जनवरी २०२४ → मार्च २०२४",
        location: "कोलकाता, भारत",
        bullets: [
          "<strong>एपीआई विलंबता अनुकूलन</strong>: Render पर एपीआई विलंबता बाधाओं का निदान और समाधान किया, जिससे कोर उपयोगकर्ता प्रवाह में प्रतिक्रिया समय में 30% सुधार हुआ।",
          "<strong>कार्यप्रवाह स्वचालन</strong>: Google Apps Script और App Sheets का उपयोग करके क्लाइंट रिपोर्टिंग वर्कफ़्लो को स्वचालित किया, जिससे साप्ताहिक 20+ घंटे की मैन्युअल बचत हुई और रिपोर्ट निर्माण समय 40% कम हुआ।",
          "<strong>वेब स्क्रेपर्स</strong>: प्रतियोगी बाजार डेटा को खींचने और उनका विश्लेषण करने के लिए हेडलेस Puppeteer स्क्रेपर्स बनाए।"
        ],
        tags: [
          { name: "Apps Script", icon: "https://cdn.simpleicons.org/google/7eb8f7" },
          { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      }
    ],
    sideBusiness: {
      title: "बरकाह ट्रैवल्स",
      fleetLabel: "२६-सीटर फोर्स ट्रैवलर मालिक-संचालक",
      fleetSub: "व्यक्तिगत रूप से संचालित और प्रबंधित बेड़े संपत्ति",
      fleetBadge: "स्वामित्व बेड़ा",
      url: "https://barakahtravels.in",
      urlText: "barakahtravels.in ↗",
      tagline: "आउटस्टेशन ट्रैवल लॉजिस्टिक्स · कोलकाता, भारत (२०२३ → २०२४)",
      verifiedLabel: "वेबसाइट सत्यापित करें ↗",
      pitch: "मैंने एक स्टार्टअप विचार के साथ शुरुआत नहीं की। मैंने एक ट्रैवल एजेंसी के साथ शुरुआत की।<br/><br/>कोलकाता में बरकाह ट्रैवल्स चलाते हुए, मैंने व्यक्तिगत रूप से एक २६-सीटर फोर्स ट्रैवलर खरीदा और सैकड़ों आउटस्टेशन यात्राओं — दीघा, मंदारमनी, गंगासागर को संभाला। और हर एक बुकिंग एक गड़बड़ थी। ग्राहकों के पास कीमतों की तुलना करने का कोई तरीका नहीं था। ऑपरेटर जो मन में आता था, वह भाव बताते थे। यदि वाहन खराब हो गया तो कोई जवाबदेही नहीं थी। कोई विश्वास नहीं, कोई पारदर्शिता नहीं, बस फोन कॉल और किस्मत।<br/><br/>उस अराजकता के भीतर 9 महीने रहने के बाद — वास्तविक बुकिंग, वास्तविक कीमतों, वास्तविक शिकायतों को ट्रैक करने के बाद — मेरे पास यह जानने के लिए पर्याप्त डेटा और पर्याप्त हताशा थी कि वास्तव में क्या बनाया जाना चाहिए। वह राहिगो (Rahigo) बना।",
      bullets: [
        "<strong>मार्ग अनुकूलन</strong>: उच्च-इरादे वाले मार्ग खोजों के लिए SEO लैंडिंग पृष्ठ तैनात किए — <a href='https://www.barakahtravels.in/sitemap.xml' target='_blank' class='sliding-link font-medium'>sitemap.xml ↗</a> पर लाइव",
        "<strong>मांग इरादा सत्यापन</strong>: कुछ भी बनाने से पहले वास्तविक मांग को सत्यापित करने के लिए विभिन्न मार्गों पर ऑर्गेनिक बुकिंग इरादे को ट्रैक किया",
        "<strong>आपूर्ति मानचित्रण</strong>: 40+ बेड़े ऑपरेटरों को ऑनबोर्ड किया और 9 महीने के क्षेत्रीय मूल्य निर्धारण डेटा को मैप किया — जो अब राहिगो के बिडिंग एल्गोरिदम की नींव है"
      ],
      trafficTitle: "रूट इंटेंट और ट्रैफ़िक डैशबोर्ड",
      trafficSubtitle: "ऑर्गेनिक ट्रैफ़िक कैप्चर करने के लिए बनाए गए SEO लैंडिंग पेजों का इंटरैक्टिव पूर्वावलोकन:",
      routes: [
        {
          name: "कोलकाता ↔ दीघा",
          type: "तटीय मार्ग",
          stat: "2.4k/माह ऑर्गेनिक खोज",
          badge: "सत्यापित मांग",
          metric: "94% इरादा स्कोर",
          insight: "तत्काल सप्ताहांत समूह बस बुकिंग की तलाश करने वाले बाहरी यात्रियों को आकर्षित किया।"
        },
        {
          name: "कोलकाता ↔ मंदारमनी",
          type: "रिज़ॉर्ट मार्ग",
          stat: "1.8k/माह ऑर्गेनिक खोज",
          badge: "ऑपरेटर नेटवर्क",
          metric: "42 बेड़े मैप किए गए",
          insight: "स्थानीय ऑपरेटर मूल्य बिंदुओं और बुकिंग कमीशन सीमाओं का सफलतापूर्वक मानचित्रण किया।"
        },
        {
          name: "कोलकाता ↔ गंगासागर",
          type: "तीर्थयात्रा मार्ग",
          stat: "3.2k/माह मौसमी उछाल",
          badge: "मूल्य निर्धारण थीसिस",
          metric: "शिखर बेसलाइन डेटा",
          insight: "राहिगो की रिवर्स-नीलामी बेसलाइन स्थापित करने के लिए छुट्टियों के मूल्य में उतार-चढ़ाव का विश्लेषण किया।"
        }
      ]
    },
    projects: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo",
        desc: "रिवर्स-नीलामी ग्रुप वाहन मार्केटप्लेस - एंड्रॉइड और वेब पर लाइव",
        url: "https://rahigo.in",
        urlText: "rahigo.in ↗",
        caseStudyUrl: "/projects/rahigo"
      },
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo Blog",
        desc: "हैडलेस सीएमएस Hashnode + Next.js ISR, कस्टम साइटमैप और SEO मेटा टैग का उपयोग कर",
        url: "https://rahigo.in/blog",
        urlText: "rahigo.in/blog ↗",
        caseStudyUrl: "/projects/travel-crm"
      },
      {
        logo: "OS",
        name: "ओपन सोर्स",
        desc: "गिटहब पर साइड प्रोजेक्ट्स और प्रयोग",
        url: "https://github.com/kraggy09",
        urlText: "github.com/kraggy09 ↗",
        caseStudyUrl: null
      }
    ],
    stack: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Zustand", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3zm-4.5-2.5c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm-11-3.5C4.67 8 4 8.67 4 9.5c0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm13 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5z'/></svg>" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
      { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
      { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/7eb8f7" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    contact: "उत्पाद-केंद्रित टीमों में दूरस्थ फुल-स्टैक भूमिकाओं के लिए खुला है।<br/>मुझसे <a href='mailto:kaifshaikh2013.sk@gmail.com' class='sliding-link'>kaifshaikh2013.sk@gmail.com</a> पर या <a href='https://linkedin.com/in/mkaifshaikh' target='_blank' class='sliding-link'>LinkedIn</a> पर संपर्क करें।"
  },
  es: {
    name: "Kaif Shaikh",
    headline: "Ingeniero full-stack y fundador construyendo <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a>, un marketplace de alquiler de vehículos grupales en la India. Basado en Calcuta.",
    bio: "Construyo productos backend complejos de extremo a extremo, desde la arquitectura hasta la producción. Actualmente enfocado en el lanzamiento de Rahigo mientras estoy abierto a roles remotos full-stack en equipos enfocados en producto.",
    labels: {
      work: "Experiencia Laboral",
      sideBusiness: "Negocio Paralelo / Catalizador",
      projects: "Proyectos Destacados",
      stack: "Stack Técnico",
      contact: "Contacto"
    },
    work: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        role: "Co-fundador e Ingeniero Full-stack",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "Ene 2025 → Presente",
        location: "rahigo.in · Calcuta, India",
        bullets: [
          "<strong>Mercado Bilateral</strong>: Construí un mercado bilateral desde cero: una aplicación para clientes donde los usuarios publican requisitos de viaje y una aplicación para socios donde los operadores verificados envían cotizaciones competitivas en vivo. Ambas lanzadas en Google Play Store.",
          "<strong>Ofertas en Tiempo Real</strong>: Diseñé un sistema de ofertas en tiempo real basado en WebSockets donde múltiples operadores reciben solicitudes de viaje simultáneamente y compiten hasta que el cliente confirma.",
          "<strong>Enmascaramiento de Números</strong>: Implementé el enmascaramiento de números utilizando Exotel: los operadores y pasajeros pueden llamarse entre sí sin ver el número real hasta el día de la salida.",
          "<strong>Verificación de Vehículos</strong>: Establecí un sistema de verificación fotográfica de vehículos con vencimiento automático de 6 meses, bloqueando a los operadores si las fotos del vehículo están desactualizadas.",
          "<strong>Garantía de Fallo</strong>: Ingenié un flujo de garantía de reemplazo por avería: si un vehículo falla el día del viaje, el sistema marca la reserva para una reasignación de emergencia."
        ],
        tags: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ]
      },
      {
        logo: "https://www.myhaveit.io/HaveitLogo.svg",
        role: "Ingeniero de Software Fundador",
        company: "Haveit",
        companyUrl: "https://www.myhaveit.io",
        date: "Dic 2024 → Dic 2025",
        location: "Remoto / Calcuta",
        bullets: [
          "<strong>Arquitectura y Lanzamiento</strong>: Único ingeniero que diseñó y lanzó la plataforma completa: un marketplace de planificación de eventos que conecta a clientes con locales, catering y más de 5 categorías construido sobre Node.js, Express, Redis, MongoDB y React.",
          "<strong>Recomendación por IA</strong>: Desarrollé un motor de recomendación de proveedores de IA que utiliza incrustaciones vectoriales y lógica de clasificación personalizada para emparejar sugerencias con presupuestos dinámicamente.",
          "<strong>Paneles de Proveedores</strong>: Creé paneles de control para proveedores con tarifas en tiempo real, gestión de complementos y filtros de coincidencia automatizados."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "AI Embeddings", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M21.3 11.2a4 4 0 0 0-1-3.6 4.1 4.1 0 0 0-3.3-1.6c-.3 0-.6.1-.9.2a4 4 0 0 0-5.7-2.6 4.1 4.1 0 0 0-2.4 2.8 4 4 0 0 0-4 1.8A4.1 4.1 0 0 0 3 11.8a4 4 0 0 0 1 3.6 4.1 4.1 0 0 0 3.3 1.6h.9a4 4 0 0 0 5.7 2.6 4.1 4.1 0 0 0 2.4-2.8 4 4 0 0 0 4-1.8 4.1 4.1 0 0 0 1-3.6zm-8.8 8.1c-.8 0-1.6-.2-2.3-.7l1-.6a1.2 1.2 0 0 1 1.7 0l.9.9v.4zm4-1.8l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.6-1 1 .6a1.2 1.2 0 0 1 0 1.7l.3 1zm1.7-4l-1-.6a1.2 1.2 0 0 1-.6-1.6v-1.2l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.3 1.1zm-3.6-7.8l-1 .6a1.2 1.2 0 0 1-1.7 0l-.9-.9v-.4c.8 0 1.6.2 2.3.7zm-4 1.8l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.6 1-1-.6a1.2 1.2 0 0 1 0-1.7l-.3-1zm-1.7 4l1 .6a1.2 1.2 0 0 1 .6 1.6v1.2l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.3-1.1zM8.5 12a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0z'/></svg>" }
        ]
      },
      {
        logo: "https://www.intervue.io/favicon.ico",
        role: "Ingeniero de Desarrollo de Software Interno",
        company: "Intervue.io",
        companyUrl: "https://intervue.io",
        date: "Abr 2024 → Dic 2024",
        location: "Bengaluru, India",
        bullets: [
          "<strong>Migración de Infraestructura de Video</strong>: Migré la infraestructura de video de Twilio a LiveKit, reduciendo los costos en $2,000 al mes (un 65% de reducción) mientras se gestionan más de 200 entrevistas técnicas en vivo diarias con menor latencia.",
          "<strong>Evaluación por IA</strong>: Construí y optimicé funciones de pila completa en el flujo de trabajo de evaluación de entrevistas con IA, reduciendo el ciclo de desarrollo en un 35%.",
          "<strong>Optimización de Entrenamiento ML</strong>: Reconstruí los pipelines de entrenamiento de ML internos, reduciendo el tiempo de entrenamiento del modelo de 3 días a solo 8 horas."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      },
      {
        logo: "S",
        role: "Ingeniero de Software Interno",
        company: "Simco Consultancy",
        date: "Ene 2024 → Mar 2024",
        location: "Calcuta, India",
        bullets: [
          "<strong>Optimización de Latencia</strong>: Diagnostiqué y resolví cuellos de botella de latencia de API en Render, mejorando los tiempos de respuesta en un 30% en los flujos de usuario principales.",
          "<strong>Automatización de Informes</strong>: Automatizé los flujos de trabajo de informes de clientes utilizando Google Apps Script y App Sheets, ahorrando más de 20 horas semanales y reduciendo el tiempo de generación de informes en un 40%.",
          "<strong>Scrapers de Competencia</strong>: Creé scrapers headless con Puppeteer.js para extraer y analizar datos de mercado de la competencia."
        ],
        tags: [
          { name: "Apps Script", icon: "https://cdn.simpleicons.org/google/7eb8f7" },
          { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      }
    ],
    sideBusiness: {
      title: "Barakah Travels",
      fleetLabel: "Propietario de Force Traveller de 26 Asientos",
      fleetSub: "Activo de Flota Operado y Gestionado Personalmente",
      fleetBadge: "Flota Propia",
      url: "https://barakahtravels.in",
      urlText: "barakahtravels.in ↗",
      tagline: "Logística de viajes de larga distancia · Calcuta, India (2023 → 2024)",
      verifiedLabel: "Verificar Sitio Web ↗",
      pitch: "No empecé con la idea de una startup. Empecé con una agencia de viajes.<br/><br/>Al dirigir Barakah Travels en Calcuta, compré personalmente una Force Traveller de 26 asientos y gestioné cientos de viajes de larga distancia: Digha, Mandarmani, Gangasagar. Y cada reserva era un caos. Los clientes no tenían forma de comparar precios. Los operadores cotizaban lo que querían. No había responsabilidad si un vehículo se averiaba. Sin confianza ni transparencia, solo llamadas telefónicas y suerte.<br/><br/>Tras 9 meses viviendo dentro de ese caos, rastreando reservas reales, precios reales y quejas reales, acumulé suficientes datos y frustración como para saber exactamente qué se debía construir. Eso se convirtió en Rahigo.",
      bullets: [
        "<strong>Optimización de Rutas</strong>: Desplegué páginas de destino SEO para búsquedas de rutas de alta intención, en vivo en <a href='https://www.barakahtravels.in/sitemap.xml' target='_blank' class='sliding-link font-medium'>sitemap.xml ↗</a>",
        "<strong>Validación de Demanda</strong>: Realicé un seguimiento de la intención de reserva orgánica en todas las rutas para validar la demanda real antes de construir nada",
        "<strong>Mapeo de Suministro</strong>: Incorporé a más de 40 operadores de flotas y mapeé 9 meses de datos de precios regionales, ahora la base del algoritmo de subastas de Rahigo"
      ],
      trafficTitle: "Panel de Tráfico e Intención de Ruta",
      trafficSubtitle: "Vista previa interactiva de las páginas de destino de mapeo de intención de SEO creadas para capturar tráfico orgánico:",
      routes: [
        {
          name: "Calcuta ↔ Digha",
          type: "Ruta Costera",
          stat: "2.4k/mes búsquedas orgánicas",
          badge: "Demanda Validada",
          metric: "94% Puntuación Intención",
          insight: "Capturó viajeros de larga distancia que buscaban reservas grupales inmediatas de autobuses de fin de semana."
        },
        {
          name: "Calcuta ↔ Mandarmani",
          type: "Ruta de Resort",
          stat: "1.8k/mes búsquedas orgánicas",
          badge: "Red de Operadores",
          metric: "42 flotas mapeadas",
          insight: "Mapeó con éxito los precios de los operadores locales y los umbrales de comisión de reserva."
        },
        {
          name: "Calcuta ↔ Gangasagar",
          type: "Ruta de Peregrinación",
          stat: "3.2k/mes pico estacional",
          badge: "Tesis de Precios",
          metric: "Datos base de temporada alta",
          insight: "Analizó los precios dinámicos de las vacaciones para establecer la base de subasta inversa de Rahigo."
        }
      ]
    },
    projects: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo",
        desc: "Marketplace de alquiler grupal por subasta inversa, en Android y web",
        url: "https://rahigo.in",
        urlText: "rahigo.in ↗",
        caseStudyUrl: "/projects/rahigo"
      },
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo Blog",
        desc: "CMS Headless usando Hashnode + Next.js ISR, sitemap personalizado y SEO",
        url: "https://rahigo.in/blog",
        urlText: "rahigo.in/blog ↗",
        caseStudyUrl: "/projects/travel-crm"
      },
      {
        logo: "OS",
        name: "Open source",
        desc: "Proyectos paralelos y experimentos en GitHub",
        url: "https://github.com/kraggy09",
        urlText: "github.com/kraggy09 ↗",
        caseStudyUrl: null
      }
    ],
    stack: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Zustand", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3zm-4.5-2.5c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm-11-3.5C4.67 8 4 8.67 4 9.5c0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm13 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5z'/></svg>" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
      { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
      { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/7eb8f7" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    contact: "Abierto a roles remotos full-stack en equipos enfocados en productos.<br/>Contáctame en <a href='mailto:kaifshaikh2013.sk@gmail.com' class='sliding-link'>kaifshaikh2013.sk@gmail.com</a> o en <a href='https://linkedin.com/in/mkaifshaikh' target='_blank' class='sliding-link'>LinkedIn</a>."
  },
  fr: {
    name: "Kaif Shaikh",
    headline: "Ingénieur full-stack et fondateur créant <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a> — un marketplace de location de véhicules de groupe en Inde. Basé à Calcutta.",
    bio: "Je conçois des produits axés sur le backend de bout en bout, de l'architecture à la production. Actuellement concentré sur le go-to-market de Rahigo tout en étant ouvert aux rôles de développeur full-stack à distance au sein d'équipes axées sur le produit.",
    labels: {
      work: "Expérience Professionnelle",
      sideBusiness: "Activité Secondaire / Catalyseur",
      projects: "Projets Principaux",
      stack: "Technologies",
      contact: "Me Contacter"
    },
    work: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        role: "Co-fondateur & Ingénieur Full-stack",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "Jan 2025 → Présent",
        location: "rahigo.in · Calcutta, Inde",
        bullets: [
          "<strong>Marché Bilateral</strong>: Développement de A à Z d'une place de marché biface : une application client pour publier des demandes de trajet et une application partenaire pour soumettre des devis en direct. Les deux sont publiées sur le Google Play Store.",
          "<strong>Enchères en Temps Réel</strong>: Conception d'un système d'enchères en temps réel basé sur les WebSockets, permettant à plusieurs opérateurs de recevoir simultanément les demandes et de se concurrencer par devis interposés.",
          "<strong>Masquage de Numéro</strong>: Intégration du masquage de numéros via Exotel : conducteurs et passagers s'appellent directement sans voir les vrais numéros avant le jour du départ.",
          "<strong>Photos de Sécurité</strong>: Mise en place d'un système de vérification des photos de véhicules avec expiration automatique à 6 mois, bloquant les devis des partenaires non conformes.",
          "<strong>Garantie de Remplacement</strong>: Modélisation d'une garantie de remplacement en cas de panne : si un véhicule fait défaut le jour J, le système réattribue automatiquement la réservation en urgence."
        ],
        tags: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ]
      },
      {
        logo: "https://www.myhaveit.io/HaveitLogo.svg",
        role: "Ingénieur Full Stack Fondateur",
        company: "Haveit",
        companyUrl: "https://www.myhaveit.io",
        date: "Déc 2024 → Déc 2025",
        location: "À distance / Calcutta",
        bullets: [
          "<strong>Architecture & Lancement</strong>: Seul ingénieur à avoir architecturé et lancé l'intégralité de la plateforme : marketplace d'événementiel reliant clients, salles, traiteurs et 5+ catégories de services avec Node.js, Express, Redis, MongoDB et React.",
          "<strong>Recommandation par IA</strong>: Développement d'un moteur de recommandation de prestataires par IA reposant sur des plongements vectoriels (embeddings) et un classement dynamique basé sur le budget client.",
          "<strong>Panneaux de Prestataires</strong>: Création de tableaux de bord prestataires avec grilles tarifaires en temps réel, gestion d'options additionnelles et filtres de recherche automatisés."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "AI Embeddings", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M21.3 11.2a4 4 0 0 0-1-3.6 4.1 4.1 0 0 0-3.3-1.6c-.3 0-.6.1-.9.2a4 4 0 0 0-5.7-2.6 4.1 4.1 0 0 0-2.4 2.8 4 4 0 0 0-4 1.8A4.1 4.1 0 0 0 3 11.8a4 4 0 0 0 1 3.6 4.1 4.1 0 0 0 3.3 1.6h.9a4 4 0 0 0 5.7 2.6 4.1 4.1 0 0 0 2.4-2.8 4 4 0 0 0 4-1.8 4.1 4.1 0 0 0 1-3.6zm-8.8 8.1c-.8 0-1.6-.2-2.3-.7l1-.6a1.2 1.2 0 0 1 1.7 0l.9.9v.4zm4-1.8l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.6-1 1 .6a1.2 1.2 0 0 1 0 1.7l.3 1zm1.7-4l-1-.6a1.2 1.2 0 0 1-.6-1.6v-1.2l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.3 1.1zm-3.6-7.8l-1 .6a1.2 1.2 0 0 1-1.7 0l-.9-.9v-.4c.8 0 1.6.2 2.3.7zm-4 1.8l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.6 1-1-.6a1.2 1.2 0 0 1 0-1.7l-.3-1zm-1.7 4l1 .6a1.2 1.2 0 0 1 .6 1.6v1.2l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.3-1.1zM8.5 12a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0z'/></svg>" }
        ]
      },
      {
        logo: "https://www.intervue.io/favicon.ico",
        role: "Stagiaire Ingénieur en Développement Logiciel",
        company: "Intervue.io",
        companyUrl: "https://intervue.io",
        date: "Avr 2024 → Déc 2024",
        location: "Bengaluru, Inde",
        bullets: [
          "<strong>Migration d'Infrastructure Vidéo</strong>: Migration de l'infrastructure vidéo de Twilio vers LiveKit, réduisant les coûts de 2 000 $/mois (65 % d'économie) tout en assurant 200+ entretiens techniques par jour à faible latence.",
          "<strong>Évaluation par IA</strong>: Développement et optimisation de fonctionnalités full-stack sur le parcours d'évaluation par IA, raccourcissant le cycle de développement de 35 %.",
          "<strong>Pipeline ML Accéléré</strong>: Reconstruction des pipelines internes d'entraînement ML, ramenant le temps d'entraînement des modèles de 3 jours à 8 heures."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      },
      {
        logo: "S",
        role: "Stagiaire Ingénieur Logiciel",
        company: "Simco Consultancy",
        date: "Jan 2024 → Mar 2024",
        location: "Calcutta, Inde",
        bullets: [
          "<strong>Résolution de Latence API</strong>: Diagnostic et résolution de goulots d'étranglement de latence API sur Render, améliorant de 30 % les temps de réponse sur les principaux parcours utilisateurs.",
          "<strong>Automatisation de Rapports</strong>: Automatisation des rapports clients avec Google Apps Script et App Sheets, économisant 20+ heures de travail hebdomadaire et accélérant la génération des rapports de 40 %.",
          "<strong>Moissonnage Puppeteer</strong>: Déploiement de scripts Puppeteer headless pour collecter et analyser les données du marché concurrentiel."
        ],
        tags: [
          { name: "Apps Script", icon: "https://cdn.simpleicons.org/google/7eb8f7" },
          { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      }
    ],
    sideBusiness: {
      title: "Barakah Travels",
      fleetLabel: "Propriétaire Force Traveller 26 places",
      fleetSub: "Actif de flotte géré et exploité personnellement",
      fleetBadge: "Flotte Propre",
      url: "https://barakahtravels.in",
      urlText: "barakahtravels.in ↗",
      tagline: "Logistique de Transport de Passagers · Calcutta, Inde (2023 → 2024)",
      verifiedLabel: "Vérifier le Site Web ↗",
      pitch: "Je n'ai pas commencé par une idée de startup. J'ai commencé par une agence de voyage.<br/><br/>En dirigeant Barakah Travels à Calcutta, j'ai personnellement acheté un Force Traveller de 26 places et géré des centaines de trajets longue distance — Digha, Mandarmani, Gangasagar. Et chaque réservation était un désastre. Les clients n'avaient aucun moyen de comparer les prix. Les transporteurs fixaient leurs tarifs à la tête du client. Aucune responsabilité en cas de panne de véhicule. Pas de confiance, pas de transparence, juste des appels téléphoniques et de la chance.<br/><br/>Après 9 mois à vivre dans ce chaos — à suivre les réservations réelles, les prix réels et les plaintes réelles — j'avais assez de données et de frustration pour savoir exactement ce qui devait être construit. C'est devenu Rahigo.",
      bullets: [
        "<strong>Optimisation des Itinéraires</strong>: Déploiement de landing pages SEO pour les recherches d'itinéraires à forte intention d'achat — live sur <a href='https://www.barakahtravels.in/sitemap.xml' target='_blank' class='sliding-link font-medium'>sitemap.xml ↗</a>",
        "<strong>Validation de Demande</strong>: Analyse de l'intention de réservation organique sur les itinéraires pour valider la demande réelle avant de développer quoi que ce soit",
        "<strong>Modélisation de l'Offre</strong>: Intégration de 40+ exploitants de flottes et cartographie de 9 mois de données de tarification régionale — aujourd'hui la base de l'algorithme d'enchères de Rahigo"
      ],
      trafficTitle: "Tableau de Bord des Intentions de Trajet",
      trafficSubtitle: "Aperçu interactif des pages de destination SEO créées pour capturer le trafic organique :",
      routes: [
        {
          name: "Calcutta ↔ Digha",
          type: "Itinéraire Côtier",
          stat: "2.4k/mois recherchés",
          badge: "Demande Validée",
          metric: "Intention à 94%",
          insight: "Ciblage des voyageurs recherchant des réservations de bus de groupe immédiates pour le week-end."
        },
        {
          name: "Calcutta ↔ Mandarmani",
          type: "Itinéraire Station",
          stat: "1.8k/mois recherchés",
          badge: "Réseau Opérateurs",
          metric: "42 flottes mappées",
          insight: "Cartographie réussie des tarifs des opérateurs locaux et des commissions de réservation."
        },
        {
          name: "Calcutta ↔ Gangasagar",
          type: "Itinéraire Pèlerinage",
          stat: "3.2k/mois pic saisonnier",
          badge: "Thèse Tarification",
          metric: "Données de base pic",
          insight: "Analyse des hausses de prix de vacances pour modéliser le système d'enchères inversées de Rahigo."
        }
      ]
    },
    projects: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo",
        desc: "Enchères inversées pour la location de véhicules - live sur Android & web",
        url: "https://rahigo.in",
        urlText: "rahigo.in ↗",
        caseStudyUrl: "/projects/rahigo"
      },
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo Blog",
        desc: "Headless CMS via Hashnode + Next.js ISR, plan du site et SEO optimisés",
        url: "https://rahigo.in/blog",
        urlText: "rahigo.in/blog ↗",
        caseStudyUrl: "/projects/travel-crm"
      },
      {
        logo: "OS",
        name: "Open source",
        desc: "Projets personnels et expérimentations sur GitHub",
        url: "https://github.com/kraggy09",
        urlText: "github.com/kraggy09 ↗",
        caseStudyUrl: null
      }
    ],
    stack: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Zustand", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3zm-4.5-2.5c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm-11-3.5C4.67 8 4 8.67 4 9.5c0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm13 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5z'/></svg>" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
      { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
      { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/7eb8f7" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    contact: "Ouvert aux offres full-stack à distance dans des équipes axées sur le produit.<br/>Contactez-moi sur <a href='mailto:kaifshaikh2013.sk@gmail.com' class='sliding-link'>kaifshaikh2013.sk@gmail.com</a> ou sur <a href='https://linkedin.com/in/mkaifshaikh' target='_blank' class='sliding-link'>LinkedIn</a>."
  },
  ja: {
    name: "Kaif Shaikh",
    headline: "フルスタックエンジニア兼創業者。インドで団体車両レンタルマーケットプレイス <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a> を構築中。コルカタを拠点に活動。",
    bio: "アーキテクチャ設計から本番運用まで、バックエンド主体のプロダクトをエンドツーエンドで開発しています。現在はRahigoの市場参入に注力しており、プロダクト重視のチームでのフルスタックのリモートポジションも探しています。",
    labels: {
      work: "職務経歴",
      sideBusiness: "サイドビジネス / 起業の契機",
      projects: "主なプロジェクト",
      stack: "技術スタック",
      contact: "お問い合わせ"
    },
    work: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        role: "共同創業者 兼 フルスタックエンジニア",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "2025年1月 → 現在",
        location: "rahigo.in · コルカタ、インド",
        bullets: [
          "<strong>2面型マーケットプレイスの構築</strong>: 顧客用の旅行要件投稿アプリと、検証済みバス会社がライブ見積もりを提案するパートナーアプリからなる2面型マーケットプレイスを完全新規構築。両アプリともGoogle Playストアにデプロイ完了。",
          "<strong>リアルタイム入札システム</strong>: WebSocketsを採用したリアルタイム入札システムを設計。複数のバス運行会社が旅行要求を同時に受信し、顧客が確定するまで価格を競い合う仕組みを構築。",
          "<strong>電話番号マスキング</strong>: Exotelを用いた電話番号マスキングを実装。出発当日まで運行会社と乗客の双方が実際の電話番号を知ることなく、安全に通話できるインフラを構築。",
          "<strong>車両画像の検証システム</strong>: 車両画像の自動6ヶ月期限切れ検証システムを導入。運行会社が期限切れの実車画像を登録している場合、新規の入札提案への参加をシステム側で自動ブロック。",
          "<strong>故障時緊急代替手配</strong>: 故障時緊急手配の保証フローを設計。旅行当日に車両トラブルが発生した場合、システムが即座に検知し緊急代替バスの手配処理をトリガーする仕組みを構築。"
        ],
        tags: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ]
      },
      {
        logo: "https://www.myhaveit.io/HaveitLogo.svg",
        role: "創業フルスタックエンジニア",
        company: "Haveit",
        companyUrl: "https://www.myhaveit.io",
        date: "2024年12月 → 2025年12月",
        location: "リモート / コルカタ",
        bullets: [
          "<strong>アーキテクチャ設計とローンチ</strong>: 唯一のエンジニアとして、Node.js, Express, Redis, MongoDB, Reactを用いたイベント計画プラットフォーム（式場、ケータリング、その他5以上のカテゴリ）を設計・ローンチ。",
          "<strong>AIによる推薦機能</strong>: ベクトル埋め込み（embeddings）とカスタムランキングアルゴリズムを使用したAIベンダー推薦エンジンを構築し、予算に応じた最適な提案を動的に実行。",
          "<strong>ベンダーコントロールセンター</strong>: リアルタイム価格表、オプションのアドオン管理、自動マッチングフィルターを完備したベンダー専用ダッシュボードを実装。"
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "AI Embeddings", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M21.3 11.2a4 4 0 0 0-1-3.6 4.1 4.1 0 0 0-3.3-1.6c-.3 0-.6.1-.9.2a4 4 0 0 0-5.7-2.6 4.1 4.1 0 0 0-2.4 2.8 4 4 0 0 0-4 1.8A4.1 4.1 0 0 0 3 11.8a4 4 0 0 0 1 3.6 4.1 4.1 0 0 0 3.3 1.6h.9a4 4 0 0 0 5.7 2.6 4.1 4.1 0 0 0 2.4-2.8 4 4 0 0 0 4-1.8 4.1 4.1 0 0 0 1-3.6zm-8.8 8.1c-.8 0-1.6-.2-2.3-.7l1-.6a1.2 1.2 0 0 1 1.7 0l.9.9v.4zm4-1.8l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.6-1 1 .6a1.2 1.2 0 0 1 0 1.7l.3 1zm1.7-4l-1-.6a1.2 1.2 0 0 1-.6-1.6v-1.2l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.3 1.1zm-3.6-7.8l-1 .6a1.2 1.2 0 0 1-1.7 0l-.9-.9v-.4c.8 0 1.6.2 2.3.7zm-4 1.8l1.3.8a1.2 1.2 0 0 1 .6 1.5l-.6 1-1-.6a1.2 1.2 0 0 1 0-1.7l-.3-1zm-1.7 4l1 .6a1.2 1.2 0 0 1 .6 1.6v1.2l-1.3-.8a1.2 1.2 0 0 1-.6-1.5l.3-1.1zM8.5 12a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0z'/></svg>" }
        ]
      },
      {
        logo: "https://www.intervue.io/favicon.ico",
        role: "ソフトウェア開発エンジニア（インターン）",
        company: "Intervue.io",
        companyUrl: "https://intervue.io",
        date: "2024年4月 → 2024年12月",
        location: "ベンガルール、インド",
        bullets: [
          "<strong>ビデオ配信インフラ移行</strong>: ビデオ通信インフラをTwilioからLiveKitへ移行。1日200回以上の実ライブ面接で、低遅延接続を維持したまま通信コストを月額2,000ドル（65%）削減。",
          "<strong>AI面接システム設計</strong>: AI面接評価ワークフローにおけるフルスタック機能の実装とパフォーマンス最適化を主導し、新機能開発リードタイムを35%切削。",
          "<strong>MLパイプライン最適化</strong>: 機械学習のデータパイプラインを再設計し、モデルの学習時間を従来の3日間から8時間へ大幅に削減。"
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      },
      {
        logo: "S",
        role: "ソフトウェアエンジニア（インターン）",
        company: "Simco Consultancy",
        date: "2024年1月 → 2024年3月",
        location: "コルカタ、インド",
        bullets: [
          "<strong>API遅延の特定と改善</strong>: Render上で稼働するAPIのレイテンシボトルネックを特定・解消し、主要ユーザーフローのレスポンス時間を30%改善。",
          "<strong>業務プロセスの自動化</strong>: Google Apps Script and App Sheetsを用いてクライアント向けレポート作成フローを自動化し、毎週20時間以上の工数削減およびレポート生成時間を40%短縮。",
          "<strong>競合市場データの分析</strong>: ヘッドレスPuppeteerスクレイパーを構築し、競合他社の市場データ自動抽出と競合分析を実施。"
        ],
        tags: [
          { name: "Apps Script", icon: "https://cdn.simpleicons.org/google/7eb8f7" },
          { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ]
      }
    ],
    sideBusiness: {
      title: "Barakah Travels",
      fleetLabel: "26人乗り Force Traveller 自社保有",
      fleetSub: "自社で直接運行・管理した実車アセット",
      fleetBadge: "自社保有車両",
      url: "https://barakahtravels.in",
      urlText: "barakahtravels.in ↗",
      tagline: "郊外旅行ロジスティクス運営 · コルカタ、インド (2023年 → 2024年)",
      verifiedLabel: "サイトを開いて検証する ↗",
      pitch: "私は最初からスタートアップを起業しようとしたのではありません。旅行代理店の運営から始めました。<br/><br/>コルカタで旅行代理店「Barakah Travels」を運営する中、私は自ら26人乗りの「Force Traveller」車両を購入して運行し、ディガ、マンダルマニ、Gangasagarなどの郊外向け旅行予約を個人で数百件も直接担当しました。しかし、当時はすべての予約プロセスが崩壊していました。顧客にはバスの価格を比較する手段がなく、運行会社は気分で運賃を提示し、走行中に車両が故障しても責任を追及する仕組みがありませんでした。信頼も透明性もなく、電話と幸運だけに頼る取引でした。<br/><br/>その混乱の真ん中で9ヶ月間、実際の予約データ、実際の価格、実際のクレームと向き合い続けた結果、市場に何が作られるべきかを定義する十分なデータと強い問題意識が蓄積されました。これがのちに「Rahigo」の創業へと繋がったのです。",
      bullets: [
        "<strong>ルート最適化</strong>：検索インテントの高いルートに特化したSEOランディングページ群を構築 — <a href='https://www.barakahtravels.in/sitemap.xml' target='_blank' class='sliding-link font-medium'>sitemap.xml ↗</a> から本番確認可能",
        "<strong>需要インテント検証</strong>：プロダクトを作る前に、各路線のオーガニックな予約需要の流入経路を追跡して真の需要を綿密に検証",
        "<strong>供給データマッピング</strong>：40社以上のバス運行会社を網羅し、9ヶ月間にわたる地域運賃データを収集 — 現在のRahigoのリアルタイム入札アルゴリズムの基礎データを定義"
      ],
      trafficTitle: "ルート意図＆トラフィックダッシュボード",
      trafficSubtitle: "オーガニックトラフィック獲得のために展開したSEO意図マッピングLP of インタラクティブ表示：",
      routes: [
        {
          name: "コルカタ ↔ ディガ",
          type: "ビーチルート",
          stat: "2,400回/月 検索流入",
          badge: "検証済みの状態",
          metric: "購買意図 94%",
          insight: "週末のグループ観光バス即時予約を探している高インテント層を的確にキャッチ。"
        },
        {
          name: "コルカタ ↔ マンダルマニ",
          type: "沿岸リゾートルート",
          stat: "1,800回/月 検索流入",
          badge: "運行会社網",
          metric: "42の運行社マップ済",
          insight: "地元のバス運行会社の価格水準と、最適な予約手数料率を正確に算出。"
        },
        {
          name: "コルカタ ↔ GangaSagar",
          type: "聖地巡礼ルート",
          stat: "3,200回/月 季節急増",
          badge: "価格設計の基礎",
          metric: "繁忙期の基準データ",
          insight: "大型連休のダイナミックプライシングデータを収集し、Rahigoの逆オークション開始価格を定義。"
        }
      ]
    },
    projects: [
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo",
        desc: "団体車両の逆オークション型マーケットプレイス — Androidおよびウェブで稼働中",
        url: "https://rahigo.in",
        urlText: "rahigo.in ↗",
        caseStudyUrl: "/projects/rahigo"
      },
      {
        logo: "https://www.rahigo.in/logo.webp",
        name: "Rahigo Blog",
        desc: "Hashnode + Next.js ISRを使用したヘッドレスCMS、カスタムサイトマップとSEO",
        url: "https://rahigo.in/blog",
        urlText: "rahigo.in/blog ↗",
        caseStudyUrl: "/projects/travel-crm"
      },
      {
        logo: "OS",
        name: "オープンソース",
        desc: "GitHubでのサイドプロジェクトおよび実験",
        url: "https://github.com/kraggy09",
        urlText: "github.com/kraggy09 ↗",
        caseStudyUrl: null
      }
    ],
    stack: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Zustand", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237eb8f7'><path d='M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 3.5s3-1.5 3-3.5c0-1.66-1.34-3-3-3zm-4.5-2.5c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm-11-3.5C4.67 8 4 8.67 4 9.5c0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5zm13 0c-.83 0-1.5.67-1.5 1.5 0 1.1 1 2 1.5 2s1.5-.9 1.5-2c0-.83-.67-1.5-1.5-1.5z'/></svg>" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/7eb8f7" },
      { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
      { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/7eb8f7" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ],
    contact: "プロダクト指向のチームでのフルスタックのリモートポジションを探しています。<br/>ご連絡は <a href='mailto:kaifshaikh2013.sk@gmail.com' class='sliding-link'>kaifshaikh2013.sk@gmail.com</a> または <a href='https://linkedin.com/in/mkaifshaikh' target='_blank' class='sliding-link'>LinkedIn</a> まで。"
  }
};

export default async function Home() {
  const cookieStore = await cookies();
  const language = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";
  const t = customTranslations[language] || customTranslations.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Kaif Shaikh",
      "jobTitle": "Full Stack Engineer & Founder",
      "url": "https://www.kaifsk.com",
      "image": "https://www.kaifsk.com/og-image.png",
      "sameAs": [
        "https://github.com/kraggy09",
        "https://linkedin.com/in/mkaifshaikh",
        "mailto:hello@rahigo.in"
      ],
      "knowsAbout": [
        "Full Stack Development",
        "SaaS Development",
        "Marketplace Engineering",
        "Node.js",
        "React Native",
        "TypeScript",
        "AWS",
        "WebSockets"
      ],
      "description": "Kaif Shaikh is a full-stack engineer and founder building Rahigo Mobility — a group vehicle rental marketplace in India.",
      "worksFor": {
        "@type": "Organization",
        "name": "Rahigo Mobility"
      }
    }
  };

  return (
    <main className="max-w-[680px] mx-auto px-6 py-12 md:py-16 premium-glow-container font-sans text-[#e8eaf0] bg-transparent animate-fade-in-up">
      {/* JSON-LD Structured Data for SEO */}
      <script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Header Section ─── */}
      <header className="mb-8">
        <p className="text-[15px] font-medium text-[#8892a4] mb-5 tracking-wide">{t.name}</p>
        <h1
          className="text-[22px] font-light leading-[1.5] text-[#e8eaf0] mb-4"
          dangerouslySetInnerHTML={{ __html: t.headline }}
        />
        <p className="text-[15px] text-[#8892a4] leading-[1.75] mb-6">{t.bio}</p>

        {/* Links row */}
        <nav className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
          <a href="https://github.com/kraggy09" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://cdn.simpleicons.org/github/7eb8f7" alt="" /> GitHub
          </a>
          <a href="https://linkedin.com/in/mkaifshaikh" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="#7eb8f7" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg> LinkedIn
          </a>
          <a href="mailto:kaifshaikh2013.sk@gmail.com" className="social-link">
            <img src="https://cdn.simpleicons.org/gmail/7eb8f7" alt="" /> kaifshaikh2013.sk@gmail.com
          </a>
          <a href="https://rahigo.in" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://cdn.simpleicons.org/googlechrome/7eb8f7" alt="" /> rahigo.in
          </a>
        </nav>
      </header>

      {/* ─── Stack Section (Climbed Up!) ─── */}
      <section id="stack" className="mb-14 scroll-mt-24">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#808ca3] mb-4">{t.labels.stack}</p>
        <div className="flex flex-wrap gap-2">
          {t.stack.map((skill, index) => (
            <span key={index} className="tag-badge px-4 py-2 bg-white/[0.015] text-[#8892a4] border-white/5 rounded-lg shadow-sm hover:scale-[1.02]">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-4.5 h-4.5"
                style={skill.invert ? { filter: "invert(1)" } : {}}
              />
              <span className="font-mono text-[13px]">{skill.name}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── Work Section ─── */}
      <section id="work" className="scroll-mt-24">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#808ca3] mb-6">{t.labels.work}</p>

        <div className="space-y-6">
          {t.work.map((job, index) => (
            <div key={index} className="job-card group">
              <div className="flex items-center gap-3.5 mb-1.5">
                {job.logo ? (
                  <div className="w-[24px] h-[24px] rounded-[5px] bg-[#0e0e10] border border-white/5 flex items-center justify-center font-mono text-[10px] font-bold text-[#8892a4] shrink-0 shadow-inner group-hover:border-[#7eb8f7]/30 transition-all overflow-hidden">
                    {job.logo.startsWith("http") ? (
                      <img src={job.logo} alt={job.company} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <span className="group-hover:text-[#7eb8f7] transition-colors">{job.logo}</span>
                    )}
                  </div>
                ) : (
                  <div className="w-[24px] h-[24px] rounded-[5px] bg-[#0e0e10] border border-white/5 shrink-0" />
                )}
                <span className="text-[15px] font-medium text-[#e8eaf0] flex-grow group-hover:text-[#7eb8f7] transition-colors">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                      {job.role} — {job.company}
                    </a>
                  ) : (
                    <span>{job.role} — {job.company}</span>
                  )}
                </span>
                <span className="text-[12px] text-[#808ca3] font-mono whitespace-nowrap hidden sm:inline">{job.date}</span>
              </div>

              <div className="text-[13px] text-[#808ca3] mb-3.5 pl-[38px] flex items-center justify-between">
                <span>{job.location}</span>
                <span className="text-[12px] font-mono sm:hidden">{job.date}</span>
              </div>

              {/* Bullet Points with exact resume info */}
              {job.bullets && job.bullets.length > 0 && (
                <ul className="mb-4 pl-[8px] sm:pl-[38px] space-y-2.5 text-[13.5px] text-[#8892a4] font-light leading-[1.7]">
                  {job.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="relative flex items-start gap-3 group/li">
                      <span className="material-symbols-outlined !text-[12px] text-[#7eb8f7]/60 shrink-0 mt-[6px] group-hover/li:text-[#7eb8f7] transition-colors font-semibold">
                        arrow_forward
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies badge row */}
              {job.tags && job.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pl-[38px]">
                  {job.tags.map((tag: any, idx) => (
                    <span key={idx} className="tag-badge">
                      <img
                        src={tag.icon}
                        alt={tag.name}
                        style={tag.invert ? { filter: "invert(1)" } : {}}
                      />
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Interactive Telemetry Fun Sandbox Section ─── */}
      <section className="mt-16">
        <FunSection currentLang={language} />
      </section>

      {/* ─── Dedicated Side Business Section (Catalyst for Rahigo) ─── */}
      <section id="side-business" className="mt-16 scroll-mt-24 pt-10 border-t border-white/5">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#808ca3] mb-6">{t.labels.sideBusiness}</p>

        <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-[#7eb8f7]/10 transition-all duration-300 relative overflow-hidden group">
          {/* Subtle glowing halo inside the card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7eb8f7]/5 blur-2xl rounded-full group-hover:bg-[#7eb8f7]/10 transition-colors pointer-events-none"></div>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Special dedicated logo box */}
              <div className="w-[32px] h-[32px] rounded-lg bg-[#7eb8f7]/10 border border-[#7eb8f7]/20 flex items-center justify-center font-mono text-[13px] font-bold text-[#7eb8f7] shrink-0">
                BT
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-[#e8eaf0] group-hover:text-[#7eb8f7] transition-colors">{t.sideBusiness.title}</h3>
                <p className="text-[11px] text-[#808ca3] font-mono tracking-tight">{t.sideBusiness.tagline}</p>
              </div>
            </div>

            {/* Pulse verifying link button */}
            <a
              href={t.sideBusiness.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-mono text-[#7eb8f7] bg-[#7eb8f7]/5 border border-[#7eb8f7]/15 hover:bg-[#7eb8f7]/15 transition-all shadow-md group/btn shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.sideBusiness.verifiedLabel}
            </a>
          </div>

          <p
            className="text-[14px] text-[#8892a4] leading-[1.8] font-light mb-5"
            dangerouslySetInnerHTML={{ __html: t.sideBusiness.pitch }}
          />

          {/* Visual Force Traveller highlight bar */}
          <div className="mt-2 mb-6 px-4 py-3 rounded-xl bg-white/[0.01] border-l-2 border-[#d97706]/40 border-y border-r border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-3">
              <span className="text-[20px] shrink-0">🚌</span>
              <div>
                <p className="text-[12.5px] font-mono text-[#e8eaf0] tracking-wide font-medium">{t.sideBusiness.fleetLabel}</p>
                <p className="text-[10px] text-[#808ca3] uppercase tracking-[0.05em] font-medium">{t.sideBusiness.fleetSub}</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#f59e0b] bg-[#d97706]/10 px-2.5 py-1 rounded-[5px] border border-[#d97706]/20 uppercase tracking-wider shrink-0 font-semibold text-center sm:text-left self-start sm:self-auto">
              {t.sideBusiness.fleetBadge}
            </span>
          </div>

          {/* Sitemap Verification Bullet Points */}
          {t.sideBusiness.bullets && t.sideBusiness.bullets.length > 0 && (
            <ul className="mb-6 pl-[8px] sm:pl-[38px] space-y-3 text-[13.5px] text-[#8892a4] font-light leading-[1.7]">
              {t.sideBusiness.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="relative flex items-start gap-3.5 group/li">
                  <span className="material-symbols-outlined !text-[14px] text-[#7eb8f7] shrink-0 mt-[4px] group-hover/li:translate-x-0.5 transition-transform duration-300">
                    chevron_right
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </li>
              ))}
            </ul>
          )}

          {/* Interactive Routes Sub-Section */}
          <div className="pt-6 border-t border-white/5">
            <h4 className="text-[12px] font-medium text-[#e8eaf0] mb-1.5">{t.sideBusiness.trafficTitle}</h4>
            <p className="text-[11.5px] text-[#808ca3] mb-4 leading-normal">{t.sideBusiness.trafficSubtitle}</p>

            {/* Call the visual interactive client element */}
            <BarakahInteractive routes={t.sideBusiness.routes} />
          </div>
        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="mt-16 scroll-mt-24 pt-10 border-t border-white/5">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#808ca3] mb-6">{t.labels.projects}</p>

        <div className="border-t border-white/5 divide-y divide-white/5">
          {t.projects.map((proj, index) => (
            <div key={index} className="project-item group">
              <div className="flex items-start gap-3.5 max-w-[75%]">
                <div className="w-[24px] h-[24px] rounded-[5px] bg-[#0e0e10] border border-white/5 flex items-center justify-center font-mono text-[9px] font-bold text-[#7eb8f7] shrink-0 mt-0.5 shadow-md overflow-hidden">
                  {proj.logo.startsWith("http") ? (
                    <img src={proj.logo} alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <span>{proj.logo}</span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-medium text-[#e8eaf0] group-hover:text-[#7eb8f7] transition-colors">{proj.name}</span>
                    {proj.caseStudyUrl && (
                      <Link
                        href={proj.caseStudyUrl}
                        className="text-[10px] uppercase font-mono tracking-widest text-[#808ca3] hover:text-[#7eb8f7] transition-colors bg-white/5 px-2 py-0.5 rounded-[4px]"
                      >
                        case study
                      </Link>
                    )}
                  </div>
                  <p className="text-[13px] text-[#808ca3] mt-1.5 font-light">{proj.desc}</p>
                </div>
              </div>

              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[#808ca3] hover:text-[#7eb8f7] transition-all font-mono whitespace-nowrap"
              >
                {proj.urlText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="mt-16 pt-10 border-t border-white/5 scroll-mt-24">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#808ca3] mb-6">{t.labels.contact}</p>
        <p
          className="text-[15px] text-[#8892a4] leading-[1.9] font-light"
          dangerouslySetInnerHTML={{ __html: t.contact }}
        />
      </section>
    </main>
  );
}
