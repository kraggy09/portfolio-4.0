import { cookies } from "next/headers";
import { Language } from "@/context/i18n/dictionary";
import Link from "next/link";
import HeaderStatus from "@/components/HeaderStatus";

// Complete Redesigned Multilingual Translation Object for the portfolio
const customTranslations = {
  en: {
    name: "Kaif Shaikh",
    headline: "Full-stack engineer based in Kolkata. I build things end-to-end and ship them — from a blank architecture doc to production.",
    bio: "Currently building <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a>, a group vehicle rental marketplace born out of 1 year of actually running a travel agency and seeing every broken part of the industry up close. Open to remote full-stack roles at product-focused teams.",
    cookingSince: "Cooking since 2021 👨‍🍳",
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
          "<strong>Two-Sided Marketplace</strong>: Built two production React Native apps — a customer app to post trip requirements and a partner app for verified operators to submit competing quotes — alongside a Next.js web platform with SSG route pages targeting high-intent search traffic.",
          "<strong>Real-Time Bidding Engine</strong>: Designed a WebSocket system where a shared room is created per trip request, allocating operators and the customer together so quotes appear live against a dynamically calculated reference price.",
          "<strong>AWS Infrastructure</strong>: Deployed on AWS with a CI/CD pipeline, Lambda functions and SQS queues for async processing, and S3 for vehicle photo and document storage.",
          "<strong>Verification & Trust Layer</strong>: Enforced automated 6-month vehicle photo expiry blocking outdated operators from quoting. Integrated Exotel for phone number masking — neither party sees the other's real number until departure day.",
          "<strong>Notifications & Failover</strong>: Alerting operators the moment a matching request is posted, with a breakdown replacement flow that automatically reassigns bookings if a vehicle fails on trip day."
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
          "<strong>Architecture & Launch</strong>: Sole founding engineer who architected and launched the full platform — an event planning marketplace connecting customers with venues, caterers, and 5+ vendor categories, built on Node.js, Express, Redis, MongoDB, and Next.js.",
          "<strong>AI Recommendation Pipeline</strong>: Built end-to-end AI vendor matching using LangGraph, LangChain, and vector embeddings with a React Flow–based visual editor to create and manage AI flows — cutting deployment time significantly.",
          "<strong>Partner Onboarding</strong>: Redesigned the complete partner registration flow, reducing onboarding time from an hour to under 5 minutes.",
          "<strong>Infrastructure & Performance</strong>: Migrated cloud storage to Backblaze achieving 5x cost reduction, optimised media assets cutting load times by 60%, and re-architected frontend with Next.js delivering 50% faster page loads.",
          "<strong>Team Leadership</strong>: Led a team of 4 engineers across frontend, backend, AI, and deployment workflows."
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
          "<strong>Video Infrastructure Migration</strong>: Migrated video infrastructure from Twilio to LiveKit, cutting costs by $2,000/month (65% reduction) while handling 200+ daily live interviews with lower latency.",
          "<strong>Conversational AI Interviews</strong>: Built and optimised AI interview flows using ElevenLabs, Deepgram, and OpenAI — ensuring secure, low-latency audio pipelines across the full assessment workflow.",
          "<strong>Prompt Flow Graph Editor</strong>: Built an interactive drag-and-drop editor to visualise and manipulate AI prompt pipelines — supporting node/edge creation, editing, and real-time cost estimation per node, replacing manual configuration.",
          "<strong>Full-Stack Feature Development</strong>: Contributed across the stack — live coding environments, cheating detection, profile-to-domain mapping, interview cancellation flows, and pricing workflows that improved user engagement and reduced drop-offs."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
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
      tagline: "Co-owner & Operator · Kolkata, India · 2023 – Present",
      verifiedLabel: "Verify Website ↗",
      pitch: "I didn't start with a startup idea — I started with a travel agency. Personally co-owned a 26-seater Force Traveller and ran hundreds of outstation trips across Digha, Mandarmani, and Gangasagar. Every booking was a mess. Customers had no way to compare prices. Operators quoted whatever they felt like. No accountability if a vehicle broke down. Just phone calls and luck.<br/><br/>After 1 year of living inside that chaos — tracking real bookings, real prices, real complaints — I had enough data and enough frustration to know exactly what needed to be built. That became Rahigo.",
      bullets: [
        "<strong>Fleet & Operations</strong>: Personally managed trip logistics, vendor coordination, and customer handling across 100+ outstation bookings.",
        "<strong>Supply Network</strong>: Onboarded 40+ fleet operators and mapped 1 year of regional pricing data — now the foundation of Rahigo's dynamic bidding algorithm.",
        "<strong>Demand Validation</strong>: Built SEO landing pages for high-intent route searches capturing 2.4k organic visits/month, validating real market demand before writing a single line of product code."
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
        logo: "IS",
        name: "InvoSync",
        desc: "Production billing and inventory system deployed for a retail client. Handles real-time stock sync across terminals, global barcode scanning, multi-tab billing with 30k+ SKUs in memory, and dynamic wholesale/retail pricing brackets. Built on React 19, Zustand, Socket.io, Node.js.",
        url: "https://www.loom.com/share/539a545e751d4a079abc1d726ab7a256",
        urlText: "Watch Demo ↗",
        caseStudyUrl: "/projects/invosync"
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
    headline: "कोलकाता में स्थित फुल-स्टैक इंजीनियर। मैं चीजों को एंड-टू-एंड बनाता हूँ और उन्हें शिप करता हूँ — एक खाली आर्किटेक्चर दस्तावेज़ से लेकर उत्पादन तक।",
    bio: "वर्तमान में मैं <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a> का निर्माण कर रहा हूँ, जो एक ग्रुप व्हीकल रेंटल मार्केटप्लेस है। यह 1 साल तक वास्तव में एक ट्रैवल एजेंसी चलाने और उद्योग के हर टूटे हुए हिस्से को करीब से देखने से पैदा हुआ है। प्रोडक्ट-केंद्रित टीमों में रिमोट फुल-स्टैक भूमिकाओं के लिए उपलब्ध हूँ।",
    cookingSince: "2021 से कुकिंग 👨‍🍳",
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
        role: "फुल-स्टैक इंजीनियर",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "जनवरी २०२५ → वर्तमान",
        location: "rahigo.in · कोलकाता, भारत",
        bullets: [
          "<strong>दो-तरफा मार्केटप्लेस</strong>: दो प्रोडक्शन रिएक्ट नेटिव ऐप्स बनाए — यात्रा आवश्यकताओं को पोस्ट करने के लिए एक ग्राहक ऐप और सत्यापित ऑपरेटरों द्वारा प्रतिस्पर्धी कोट्स जमा करने के लिए एक पार्टनर ऐप — साथ ही उच्च-इरादे वाले खोज ट्रैफ़िक को लक्षित करने वाले SSG रूट पेजों के साथ एक Next.js वेब प्लेटफ़ॉर्म।",
          "<strong>रीयल-टाइम बिडिंग इंजन</strong>: एक वेबसॉकेट सिस्टम डिज़ाइन किया जहां प्रति यात्रा अनुरोध एक साझा कमरा बनाया जाता है, जिसमें ऑपरेटरों और ग्राहक को एक साथ रखा जाता है ताकि कोट्स एक गतिशील रूप से गणना किए गए संदर्भ मूल्य के खिलाफ लाइव दिखाई दें।",
          "<strong>AWS इन्फ्रास्ट्रक्चर</strong>: CI/CD पाइपलाइन के साथ AWS पर तैनात किया गया, एसिंक प्रोसेसिंग के लिए लैम्ब्डा फ़ंक्शंस और SQS कतारें, और वाहन फोटो और दस्तावेज़ भंडारण के लिए S3 का उपयोग किया गया।",
          "<strong>सत्यापन और ट्रस्ट लेयर</strong>: स्वचालित 6-महीने की वाहन फोटो समाप्ति लागू की जो ऑपरेटरों को पुराने असेट्स पर बोली लगाने से रोकती है। फोन नंबर मास्किंग के लिए Exotel को एकीकृत किया — प्रस्थान के दिन तक कोई भी पक्ष दूसरे का असली नंबर नहीं देख सकता।",
          "<strong>सूचनाएं और फेलओवर</strong>: मैचिंग अनुरोध पोस्ट होते ही ऑपरेटरों को अलर्ट करना, एक ब्रेकडाउन रिप्लेसमेंट फ्लो के साथ जो यात्रा के दिन वाहन विफल होने पर बुकिंग को स्वचालित रूप से पुनर्वितरित करता है।"
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
          "<strong>आर्किटेक्चर और लॉन्च</strong>: एकमात्र संस्थापक इंजीनियर जिसने पूरे प्लेटफॉर्म को आर्किटेक्ट और लॉन्च किया — इवेंट प्लानिंग मार्केटप्लेस जो ग्राहकों को वेन्यू, कैटरर्स और 5+ श्रेणियों से जोड़ता है। इसे Node.js, Express, Redis, MongoDB और Next.js पर बनाया गया है।",
          "<strong>एआई अनुशंसा पाइपलाइन</strong>: LangGraph, LangChain और वेक्टर एम्बेडिंग का उपयोग करके एंड-टू-एंड AI विक्रेता मिलान का निर्माण किया, जिसमें AI प्रवाह बनाने और प्रबंधित करने के लिए React Flow-आधारित विज़ुअल एडिटर शामिल है — जिससे तैनाती समय काफी कम हो गया।",
          "<strong>पार्टनर ऑनबोर्डिंग</strong>: संपूर्ण पार्टनर पंजीकरण प्रवाह को फिर से डिज़ाइन किया, जिससे ऑनबोर्डिंग समय एक घंटे से घटकर 5 मिनट से भी कम हो गया।",
          "<strong>इन्फ्रास्ट्रक्चर और प्रदर्शन</strong>: क्लाउड स्टोरेज को Backblaze में स्थानांतरित किया, जिससे 5 गुना लागत में कमी आई, मीडिया परिसंपत्तियों को अनुकूलित करके लोड समय को 60% कम किया, और Next.js के साथ फ्रंटएंड को फिर से तैयार करके 50% तेज़ पेज लोड प्रदान किया।",
          "<strong>टीम नेतृत्व</strong>: फ्रंटएंड, बैकएंड, एआई और परिनियोजन वर्कफ़्लो में 4 इंजीनियरों की टीम का नेतृत्व किया।"
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
          "<strong>वीडियो इन्फ्रास्ट्रक्चर माइग्रेशन</strong>: वीडियो इन्फ्रास्ट्रक्चर को Twilio से LiveKit में स्थानांतरित किया, जिससे कम विलंबता (lower latency) के साथ 200+ दैनिक लाइव साक्षात्कारों को संभालते हुए लागत में $2,000/माह (65% की कमी) की कटौती हुई।",
          "<strong>संवादी AI साक्षात्कार</strong>: ElevenLabs, Deepgram और OpenAI का उपयोग करके AI साक्षात्कार प्रवाह का निर्माण और अनुकूलन किया — पूरे मूल्यांकन वर्कफ़्लो में सुरक्षित, कम-विलंबता वाले ऑडियो पाइपलाइनों को सुनिश्चित किया।",
          "<strong>प्रॉम्प्ट फ्लो ग्राफ एडिटर</strong>: AI प्रॉम्प्ट पाइपलाइनों को विज़ुअलाइज़ और हेरफेर करने के लिए एक इंटरैक्टिव ड्रैग-एंड-ड्रॉप एडिटर बनाया — नोड/एज निर्माण, संपादन और प्रति नोड रीयल-टाइम लागत अनुमान का समर्थन करना, मैन्युअल कॉन्फ़िगरेशन को बदलना।",
          "<strong>फुल-स्टैक फ़ीचर डेवलपमेंट</strong>: पूरे स्टैक में योगदान दिया — लाइव कोडिंग वातावरण, धोखाधड़ी का पता लगाना, प्रोफ़ाइल-टू-डोमेन मैपिंग, साक्षात्कार रद्दीकरण प्रवाह और मूल्य निर्धारण वर्कफ़्लो जिसने उपयोगकर्ता जुड़ाव में सुधार किया और ड्रॉप-ऑफ को कम किया।"
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
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
      tagline: "सह-स्वामी और संचालक · कोलकाता, भारत · २०२३ – वर्तमान",
      verifiedLabel: "वेबसाइट सत्यापित करें ↗",
      pitch: "मैंने एक स्टार्टअप विचार के साथ शुरुआत नहीं की थी — मैंने एक ट्रैवल एजेंसी के साथ शुरुआत की थी। व्यक्तिगत रूप से एक २६-सीटर फोर्स ट्रैवलर का सह-स्वामित्व लिया और दीघा, मंदारमनी और गंगासागर में सैकड़ों आउटस्टेशन यात्राएं चलाईं। हर बुकिंग एक गड़बड़ थी। ग्राहकों के पास कीमतों की तुलना करने का कोई तरीका नहीं था। ऑपरेटर जो मन में आता था, वह भाव बताते थे। यदि कोई वाहन खराब हो जाता था तो कोई जवाबदेही नहीं थी। बस फोन कॉल और किस्मत।<br/><br/>उस अराजकता के भीतर 1 साल रहने के बाद — वास्तविक बुकिंग, वास्तविक कीमतों और वास्तविक शिकायतों को ट्रैक करने के बाद — मेरे पास यह जानने के लिए पर्याप्त डेटा और पर्याप्त हताशा थी कि वास्तव में क्या बनाया जाना चाहिए। वह राहिगो (Rahigo) बना।",
      bullets: [
        "<strong>बेड़ा और संचालन</strong>: व्यक्तिगत रूप से 100+ आउटस्टेशन बुकिंगों में यात्रा रसद (trip logistics), विक्रेता समन्वय और ग्राहक हैंडलिंग का प्रबंधन किया।",
        "<strong>आपूर्ति नेटवर्क</strong>: 40+ बेड़े ऑपरेटरों को ऑनबोर्ड किया और 1 साल के क्षेत्रीय मूल्य निर्धारण डेटा को मैप किया — जो अब राहिगो के गतिशील बोली एल्गोरिदम की नींव है।",
        "<strong>मांग सत्यापन</strong>: उत्पाद कोड की एक भी पंक्ति लिखने से पहले वास्तविक बाजार मांग को सत्यापित करते हुए, प्रति माह 2.4k ऑर्गेनिक विज़िट प्राप्त करने वाले उच्च-इरादे वाले मार्ग खोजों के लिए SEO लैंडिंग पृष्ठ बनाए।"
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
        logo: "IS",
        name: "InvoSync",
        desc: "एक रिटेल क्लाइंट के लिए तैनात प्रोडक्शन बिलिंग और इन्वेंट्री सिस्टम। यह टर्मिनलों में रीयल-टाइम स्टॉक सिंक, ग्लोबल बारकोड स्कैनिंग, मेमोरी में 30k+ SKU के साथ मल्टी-टैब बिलिंग और डायनेमिक थोक/खुदरा मूल्य निर्धारण को संभालता है। React 19, Zustand, Socket.io, Node.js पर निर्मित।",
        url: "https://www.loom.com/share/539a545e751d4a079abc1d726ab7a256",
        urlText: "डेमो देखें ↗",
        caseStudyUrl: "/projects/invosync"
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
    headline: "Ingeniero full-stack con sede en Calcuta. Construyo cosas de extremo a extremo y las entrego, desde un documento de arquitectura en blanco hasta producción.",
    bio: "Actualmente construyendo <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a>, un marketplace de alquiler de vehículos grupales nacido de 1 año de dirigir realmente una agencia de viajes y ver de cerca cada parte rota de la industria. Abierto a roles remotos full-stack en equipos enfocados en producto.",
    cookingSince: "Cocinando desde 2021 👨‍🍳",
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
        role: "Ingeniero Full-stack",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "Ene 2025 → Presente",
        location: "rahigo.in · Calcuta, India",
        bullets: [
          "<strong>Mercado Bilateral</strong>: Creé dos aplicaciones de producción en React Native (una aplicación de cliente para publicar requisitos de viaje y una aplicación de socio para que los operadores verificados envíen cotizaciones competitivas) junto con una plataforma web en Next.js con páginas de ruta basadas en SSG orientadas al tráfico de búsqueda de alta intención.",
          "<strong>Motor de Pujas en Tiempo Real</strong>: Diseñé un sistema de WebSockets donde se crea una sala compartida por solicitud de viaje, asignando a los operadores y al cliente juntos para que las cotizaciones aparezcan en vivo contra un precio de referencia calculado dinámicamente.",
          "<strong>Infraestructura AWS</strong>: Desplegado en AWS con una tubería de CI/CD, funciones Lambda y colas SQS para procesamiento asíncrono, y S3 para almacenamiento de fotos de vehículos y documentos.",
          "<strong>Capa de Verificación y Confianza</strong>: Se impuso el vencimiento automático de fotos de vehículos de 6 meses, bloqueando a los operadores desactualizados de cotizar. Integración de Exotel para el enmascaramiento de números de teléfono: ninguna de las partes ve el número real de la otra hasta el día de la salida.",
          "<strong>Notificaciones y Failover</strong>: Alerta a los operadores en el momento en que se publica una solicitud coincidente, con un flujo de reemplazo por avería que reasigna automáticamente las reservas si un vehículo falla el día del viaje."
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
          "<strong>Arquitectura y Lanzamiento</strong>: Único ingeniero fundador que diseñó y lanzó la plataforma completa: un marketplace de planificación de eventos que conecta a clientes con locales, catering y más de 5 categorías de proveedores, construido sobre Node.js, Express, Redis, MongoDB y Next.js.",
          "<strong>Canalización de Recomendación por IA</strong>: Creé un sistema de emparejamiento de proveedores de IA de extremo a extremo utilizando LangGraph, LangChain e incrustaciones vectoriales con un editor visual basado en React Flow para crear y administrar flujos de IA, reduciendo significativamente el tiempo de despliegue.",
          "<strong>Onboarding de Socios</strong>: Rediseñé por completo el flujo de registro de socios, reduciendo el tiempo de incorporación de una hora a menos de 5 minutos.",
          "<strong>Infraestructura y Rendimiento</strong>: Migré el almacenamiento en la nube a Backblaze logrando una reducción de costos de 5 veces, optimicé los recursos multimedia reduciendo los tiempos de carga en un 60% y reestructuré el frontend con Next.js logrando cargas de página un 50% más rápidas.",
          "<strong>Liderazgo de Equipo</strong>: Lideré un equipo de 4 ingenieros en los flujos de trabajo de frontend, backend, IA y despliegue."
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
          "<strong>Migración de Infraestructura de Video</strong>: Migré la infraestructura de video de Twilio a LiveKit, reduciendo los costos en $2,000/mes (reducción del 65%) mientras se manejan más de 200 entrevistas en vivo diarias con menor latencia.",
          "<strong>Entrevistas de IA Conversacional</strong>: Construí y optimicé flujos de entrevistas de IA utilizando ElevenLabs, Deepgram y OpenAI, garantizando canalizaciones de audio seguras y de baja latencia en todo el flujo de trabajo de evaluación.",
          "<strong>Editor de Gráficos de Flujo de Prompts</strong>: Desarrollé un editor interactivo de arrastrar y soltar para visualizar y manipular canalizaciones de prompts de IA, que admite la creación y edición de nodos/bordes y la estimación de costos en tiempo real por nodo, reemplazando la configuración manual.",
          "<strong>Desarrollo de Funciones Full-Stack</strong>: Contribuí en todo el stack: entornos de codificación en vivo, detección de trampas, mapeo de perfil a dominio, flujos de cancelación de entrevistas y flujos de trabajo de precios que mejoraron la retención de usuarios y redujeron los abandonos."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
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
      tagline: "Copropietario y Operador · Calcuta, India · 2023 – Presente",
      verifiedLabel: "Verificar Sitio Web ↗",
      pitch: "No empecé con la idea de una startup, empecé con una agencia de viajes. Copropietario personal de una Force Traveller de 26 asientos y realicé cientos de viajes de larga distancia en Digha, Mandarmani y Gangasagar. Cada reserva era un caos. Los clientes no tenían forma de comparar precios. Los operadores cotizaban lo que querían. No había responsabilidad si un vehículo se averiaba. Solo llamadas telefónicas y suerte.<br/><br/>Tras 1 año viviendo dentro de ese caos (rastreando reservas reales, precios reales y quejas reales), acumulé suficientes datos y frustración como para saber exactamente qué se debía construir. Eso se convirtió en Rahigo.",
      bullets: [
        "<strong>Flota y Operaciones</strong>: Gestioné personalmente la logística de viajes, la coordinación de proveedores y la atención al cliente en más de 100 reservas de larga distancia.",
        "<strong>Red de Suministro</strong>: Incorporé a más de 40 operadores de flotas y mapeé 1 año de datos de precios regionales, ahora la base del algoritmo de subasta dinámica de Rahigo.",
        "<strong>Validación de Demanda</strong>: Creé páginas de destino de SEO para búsquedas de rutas de alta intención que capturaron 2.4k visitas orgánicas al mes, validando la demanda real del mercado antes de escribir una sola línea de código del producto."
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
        logo: "IS",
        name: "InvoSync",
        desc: "Sistema de facturación e inventario en producción implementado para un cliente minorista. Maneja sincronización de stock en tiempo real entre terminales, escaneo global de códigos de barras, facturación de múltiples pestañas con más de 30k SKU en memoria y rangos dinámicos de precios mayoristas/minoristas. Construido sobre React 19, Zustand, Socket.io, Node.js.",
        url: "https://www.loom.com/share/539a545e751d4a079abc1d726ab7a256",
        urlText: "Ver Demo ↗",
        caseStudyUrl: "/projects/invosync"
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
    headline: "Ingénieur full-stack basé à Calcutta. Je conçois des projets de bout en bout et les déploie — d'un document d'architecture vierge jusqu'à la mise en production.",
    bio: "Je construis actuellement <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a>, un marketplace de location de véhicules de groupe né de 1 an passé à diriger une agence de voyages et à observer de près tous les dysfonctionnements du secteur. Disponible pour des opportunités de développeur full-stack à distance au sein d'équipes axées sur le produit.",
    cookingSince: "En cuisine depuis 2021 👨‍🍳",
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
        role: "Ingénieur Full-stack",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "Jan 2025 → Présent",
        location: "rahigo.in · Calcutta, Inde",
        bullets: [
          "<strong>Marché Bilatéral</strong>: Développement de deux applications React Native en production — une application client pour publier les besoins de trajet et une application partenaire pour que les opérateurs vérifiés soumettent des devis compétitifs — ainsi qu'une plateforme web Next.js avec des pages d'itinéraires basées sur le SSG ciblant le trafic de recherche à forte intention d'achat.",
          "<strong>Moteur d'Enchères en Temps Réel</strong>: Conception d'un système WebSocket où un salon partagé est créé par demande de trajet, réunissant les opérateurs et le client pour que les devis s'affichent en direct par rapport à un prix de référence calculé dynamiquement.",
          "<strong>Infrastructure AWS</strong>: Déploiement sur AWS avec un pipeline de CI/CD, des fonctions Lambda et des files d'attente SQS pour le traitement asynchrone, et S3 pour le stockage des photos de véhicules et des documents.",
          "<strong>Couche de Vérification et de Confiance</strong>: Application de l'expiration automatique des photos de véhicules de 6 mois, empêchant les opérateurs obsolètes de faire des offres. Intégration d'Exotel pour le masquage des numéros de téléphone — aucune des deux parties ne voit le vrai numéro de l'autre avant le jour du départ.",
          "<strong>Notifications et Failover</strong>: Alerte des opérateurs dès qu'une demande correspondante est publiée, avec un flux de remplacement en cas de panne qui réassigne automatiquement les réservations si un véhicule fait défaut le jour du trajet."
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
          "<strong>Architecture & Launch</strong>: Unique ingénieur fondateur ayant conçu et lancé l'intégralité de la plateforme — une place de marché d'événementiel reliant clients, salles, traiteurs et 5+ catégories de prestataires, avec Node.js, Express, Redis, MongoDB et Next.js.",
          "<strong>Pipeline de Recommandation par IA</strong>: Conception d'un système de mise en relation de prestataires par IA de bout en bout avec LangGraph, LangChain et des plongements vectoriels, complété par un éditeur visuel basé sur React Flow pour créer et gérer les flux d'IA — réduisant considérablement le temps de déploiement.",
          "<strong>Onboarding de Partenaires</strong>: Refonte complète du parcours d'inscription des partenaires, ramenant le temps d'intégration d'une heure à moins de 5 minutes.",
          "<strong>Infrastructure & Performance</strong>: Migration du stockage cloud vers Backblaze permettant une réduction des coûts par 5, optimisation des ressources médias réduisant le temps de chargement de 60 %, et restructuration du frontend avec Next.js pour des pages 50 % plus rapides à charger.",
          "<strong>Team Leadership</strong>: Direction d'une équipe de 4 ingénieurs travaillant sur le frontend, le backend, l'IA et les processus de déploiement."
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
          "<strong>Migration de l'Infrastructure Vidéo</strong>: Migration de l'infrastructure vidéo de Twilio vers LiveKit, réduisant les coûts de 2 000 $/mois (réduction de 65 %) tout en gérant plus de 200 entretiens en direct par jour avec une latence réduite.",
          "<strong>Entretiens d'IA Conversationnelle</strong>: Création et optimisation des flux d'entretiens d'IA à l'aide d'ElevenLabs, Deepgram et OpenAI — garantissant des pipelines audio sécurisés et à faible latence sur l'ensemble du flux de travail d'évaluation.",
          "<strong>Éditeur de Graphe de Flux de Prompts</strong>: Développement d'un éditeur interactif en glisser-déposer pour visualiser et manipuler les pipelines de prompts d'IA — prenant en charge la création/édition de nœuds et de liaisons, et l'estimation des coûts en temps réel par nœud, remplaçant la configuration manuelle.",
          "<strong>Développement de Fonctionnalités Full-Stack</strong>: Contribution sur l'ensemble de la stack — environnements de codage en direct, détection de triche, mappage profil-domaine, flux d'annulation d'entretien et workflows de tarification qui ont amélioré l'engagement utilisateur et réduit les abandons."
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
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
      tagline: "Copropriétaire & Exploitant · Calcutta, Inde · 2023 – Présent",
      verifiedLabel: "Vérifier le Site Web ↗",
      pitch: "Je n'ai pas commencé avec une idée de startup — j'ai commencé avec une agence de voyage. Copropriétaire d'un Force Traveller de 26 places, j'ai géré des centaines de trajets longue distance vers Digha, Mandarmani et Gangasagar. Chaque réservation était un désastre. Les clients n'avaient aucun moyen de comparer les prix. Les transporteurs fixaient leurs tarifs à la tête du client. Aucune responsabilité en cas de panne. Juste des appels et de la chance.<br/><br/>Après 1 an à vivre dans ce chaos — à suivre les réservations réelles, les prix réels et les plaintes réelles — j'avais accumulé assez de données et de frustration pour savoir exactement ce qui devait être construit. C'est devenu Rahigo.",
      bullets: [
        "<strong>Flotte & Opérations</strong>: Gestion personnelle de la logistique des trajets, de la coordination des prestataires et de la relation client sur plus de 100 réservations longue distance.",
        "<strong>Réseau d'Offre</strong>: Intégration de 40+ exploitant de flottes et cartographie de 1 an de données tarifaires régionales — aujourd'hui la base de l'algorithme d'enchères dynamiques de Rahigo.",
        "<strong>Validation de Demande</strong>: Création de landing pages SEO pour les recherches d'itinéraires à forte intention, capturant 2,4k visites organiques par mois pour valider la demande réelle avant d'écrire la moindre ligne de code."
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
        logo: "IS",
        name: "InvoSync",
        desc: "Système de facturation et d'inventaire en production déployé pour un client de vente au détail. Gère la synchronisation des stocks en temps réel entre les terminaux, la lecture globale des codes-barres, la facturation multi-onglets avec plus de 30 000 SKU en mémoire et des grilles tarifaires dynamiques de gros/détail. Conçu avec React 19, Zustand, Socket.io, Node.js.",
        url: "https://www.loom.com/share/539a545e751d4a079abc1d726ab7a256",
        urlText: "Voir la Démo ↗",
        caseStudyUrl: "/projects/invosync"
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
    headline: "コルカタを拠点とするフルスタックエンジニア。白紙のアーキテクチャ設計書から本番デプロイまで、プロダクトをエンドツーエンドで自立して開発・ローンチします。",
    bio: "現在は、団体車両レンタルマーケットプレイスである <a href='https://rahigo.in' target='_blank' class='sliding-link font-medium'>Rahigo</a> を開発中。実際に1年間旅行代理店を運営し、業界のあらゆる課題や非効率を間近で見てきた経験から誕生しました。プロダクト重視のチームでのフルスタックのリモートポジションを探しています。",
    cookingSince: "2021年からクッキング中 👨‍🍳",
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
        role: "フルスタックエンジニア",
        company: "Rahigo Mobility",
        companyUrl: "https://rahigo.in",
        date: "2025年1月 → 現在",
        location: "rahigo.in · コルカタ、インド",
        bullets: [
          "<strong>2面型マーケットプレイス</strong>: 顧客用の旅行要件投稿アプリと、検証済み運行会社が競合見積もりを提出するパートナーアプリの2つの本番React Nativeアプリを開発。同時に、高インテントな検索トラフィックをターゲットにしたSSGルートページを備えたNext.jsウェブプラットフォームを構築。",
          "<strong>リアルタイム入札エンジン</strong>: 旅行リクエストごとに共有ルームを作成し、運行会社と顧客を割り当てて見積もりが動的に計算された基準価格に対してリアルタイムで表示されるWebSocketシステムを設計。",
          "<strong>AWSインフラ</strong>: CI/CDパイプラインを備えたAWSにデプロイ。非同期処理用のLambda関数とSQSキュー、および車両写真や文書の保管にS3を採用。",
          "<strong>検証および信頼レイヤー</strong>: 車両画像の自動6ヶ月期限切れ検証システムを強制し、古い車両での入札を自動ブロック。Exotelを用いた電話番号マスキングを統合し、出発当日まで双方の実際の電話番号を非表示に。",
          "<strong>通知および代替手配</strong>: マッチングするリクエストが投稿された瞬間に運行会社に通知し、旅行当日に車両トラブルが発生した場合に自動で予約を再割り当てする故障代替フローを構築。"
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
          "<strong>設計およびローンチ</strong>: 唯一の創業者兼エンジニアとしてプラットフォーム全体を設計・ローンチ。Node.js, Express, Redis, MongoDB, Next.jsを採用し、顧客と式場, ケータリング, および5つ以上のカテゴリの運行業者を結ぶイベント計画マーケットプレイスを構築。",
          "<strong>AI推薦パイプライン</strong>: LangGraph, LangChain, ベクトル埋め込みを用いたエンドツーエンドのAIベンダーマッチングを構築。React Flowベースのビジュアルエディタを実装してAIフローの作成・管理を可能にし、開発・デプロイ期間を大幅に短縮。",
          "<strong>パートナーオンボーディング</strong>: パートナー企業の登録フローを全面的に再設計し、オンボーディングにかかる時間を従来の1時間から5分未満へ短縮。",
          "<strong>インフラとパフォーマンス</strong>: クラウドストレージをBackblazeへ移行し、保管コストを5分の1に削減。メディアアセットを最適化してロード時間を60%削減し、Next.jsでフロントエンドを再構築することでページ表示速度を50%向上。",
          "<strong>チームリーダーシップ</strong>: フロントエンド、バックエンド、AI、デプロイワークフローにわたる4名のエンジニアチームを牽引。"
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
          "<strong>ビデオインフラの移行</strong>: ビデオインフラをTwilioからLiveKitへ移行し、より低遅延で1日あたり200回以上のライブ面接を処理しながら、コストを月額2,000ドル（65%削減）削減。",
          "<strong>対話型AI面接</strong>: ElevenLabs、Deepgram、OpenAIを活用してAI面接フローを構築・最適化し、評価ワークフロー全体で安全かつ低遅延なオーディオパイプラインを確保。",
          "<strong>プロンプトフロー・グラフエディタ</strong>: AIプロンプトパイプラインを可視化・操作するためのインタラクティブなドラッグ＆ドロップエディタを構築。手動設定に代わり、ノードやエッジの作成・編集、およびノードごとのリアルタイムなコスト見積もりをサポート。",
          "<strong>フルスタック機能開発</strong>: ライブコーディング環境、不正検知、プロファイルからドメインへのマッピング、面接キャンセル処理、価格設定フローなど、スタック全体にわたる開発に貢献し、ユーザーエンゲージメントの向上と離脱率の低下を実現。"
        ],
        tags: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "LiveKit WebRTC", icon: "https://cdn.simpleicons.org/webrtc/7eb8f7" },
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
      tagline: "共同経営者 兼 運行管理者 · コルカタ、インド · 2023年 – 現在",
      verifiedLabel: "サイトを開いて検証する ↗",
      pitch: "私は最初からスタートアップを起業しようとしたのではありません。旅行代理店の運営から始めました。個人で26人乗りの「Force Traveller」車両を共同所有し、ディガ、マンダルマニ、Gangasagarなどの郊外ルートで何百回もの旅行を運行しました。しかし、当時はすべての予約プロセスが崩壊していました。顧客には価格を比較する手段がなく、運行会社は気分で運賃を提示し、走行中に車両が故障しても責任を追及する仕組みがありませんでした。電話と幸運だけに頼る取引でした。<br/><br/>その混乱の真ん中で1年間、実際の予約データ、実際の価格、実際のクレームと向き合い続けた結果、市場に何が作られるべきかを定義する十分なデータと強い問題意識が蓄積されました。これがのちに「Rahigo」の創業へと繋がったのです。",
      bullets: [
        "<strong>運行＆オペレーション</strong>: 100件以上の郊外旅行予約において、運行ロジスティクス、運行会社コーディネート、および顧客対応を直接統括。",
        "<strong>供給ネットワーク</strong>: 40社以上のバス運行会社を網羅し、1年間にわたる地域運賃データを収集 — 現在のRahigoのリアルタイム動的入札アルゴリズムの基礎データを定義。",
        "<strong>需要検証</strong>: 検索インテントの高いルートに特化したSEOランディングページ群を構築し、月間2,400件のオーガニック流入を獲得。プロダクトコードを1行も書く前に、真の市場需要を綿密に検証。"
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
        logo: "IS",
        name: "InvoSync",
        desc: "小売クライアント向けに導入された本番用請求・在庫管理システム。端末間のリアルタイム在庫同期、グローバルバーコードスキャン、メモリ内30k+ SKUのマルチタブ請求、および動的な卸売/小売価格設定ブラケットを処理します。React 19、Zustand、Socket.io、Node.jsで構築。",
        url: "https://www.loom.com/share/539a545e751d4a079abc1d726ab7a256",
        urlText: "デモを見る ↗",
        caseStudyUrl: "/projects/invosync"
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
    <main className="max-w-[680px] mx-auto px-6 py-12 md:py-16 premium-glow-container font-sans text-text bg-transparent animate-fade-in-up">
      {/* JSON-LD Structured Data for SEO */}
      <script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Header Section ─── */}
      <header className="mb-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20">
              {/* Glowing aura around avatar */}
              <div className="absolute inset-0 bg-accent/15 blur-lg rounded-2xl animate-pulse"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHW1OmdZ0oFLw/profile-displayphoto-shrink_400_400/B56ZbYjuIQGgAg-/0/1747389965554?e=1781740800&v=beta&t=WTICIQxDegERXq_1RB6E8bka0SATJcVqoPxLtYmCOOg"
                alt={t.name}
                className="w-full h-full rounded-2xl border-2 border-accent/20 relative z-10 object-cover shadow-2xl hover:border-accent/40 transition-colors duration-300"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {/* Sleek light-blue verification rosette checkmark exactly like Twitter/LinkedIn */}
                <h2 className="text-[26px] sm:text-[30px] font-bold tracking-tight text-text leading-none">
                  {t.name}
                </h2>
                <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 filter drop-shadow-[0_0_8px_rgba(126,184,247,0.35)]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.941.1-1.356.275C14.77 2.57 13.5 1.7 12 1.7s-2.77.87-3.416 2.085c-.415-.175-.876-.275-1.356-.275C5.128 3.51 3.42 5.29 3.42 7.5c0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .941-.1 1.356-.275C9.23 21.43 10.5 22.3 12 22.3s2.77-.87 3.416-2.085c.415.175.876.275 1.356.275 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z" fill="#7eb8f7" />
                  <path d="M9.78 16.67l-3.3-3.3 1.41-1.42 1.89 1.89 5.56-5.56 1.41 1.41-6.97 6.98z" fill="#000000" stroke="#000000" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-0.5">
                <p className="text-[12px] sm:text-[13px] font-mono text-dim uppercase tracking-widest font-medium">
                  {"Full Stack Developer"}
                </p>
                {t.cookingSince && (
                  <>
                    <span className="text-dim/40 text-[10px] hidden sm:inline">•</span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-mono font-medium text-accent bg-accent/5 border border-accent/15">
                      {t.cookingSince}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <HeaderStatus />
        </div>

        <h1
          className="text-[22px] font-light leading-[1.5] text-text mb-4"
          dangerouslySetInnerHTML={{ __html: t.headline }}
        />
        <p className="text-[15px] text-muted leading-[1.75] mb-6" dangerouslySetInnerHTML={{ __html: t.bio }} />

        {/* Links row */}
        <nav className="flex flex-wrap gap-x-5 gap-y-3 mt-4 items-center">
          <a
            href="https://drive.google.com/file/d/1ZVP2XaCL7j4u41tUt7wmhNYjl2a1s0Pw/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-medium text-accent bg-accent/5 border border-accent/15 hover:bg-accent/15 transition-all shadow-md group animate-pulse-slow"
          >
            <span className="material-symbols-outlined !text-[13px] group-hover:translate-y-0.5 transition-transform">description</span>
            Resume / CV
          </a>
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
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-dim mb-4">{t.labels.stack}</p>
        <div className="flex flex-wrap gap-2">
          {t.stack.map((skill, index) => (
            <span key={index} className="tag-badge px-4 py-2 bg-tag-bg text-muted border-tag-border rounded-lg shadow-sm hover:scale-[1.02]">
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
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-dim mb-6">{t.labels.work}</p>

        <div className="space-y-6">
          {t.work.map((job, index) => (
            <div key={index} className="job-card group">
              <div className="flex items-center gap-3.5 mb-1.5">
                {job.logo ? (
                  <div className="w-[24px] h-[24px] rounded-[5px] bg-bg3 border border-border flex items-center justify-center font-mono text-[10px] font-bold text-muted shrink-0 shadow-inner group-hover:border-accent/30 transition-all overflow-hidden">
                    {job.logo.startsWith("http") ? (
                      <img src={job.logo} alt={job.company} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <span className="group-hover:text-accent transition-colors">{job.logo}</span>
                    )}
                  </div>
                ) : (
                  <div className="w-[24px] h-[24px] rounded-[5px] bg-bg3 border border-border shrink-0" />
                )}
                <span className="text-[15px] font-medium text-text flex-grow group-hover:text-accent transition-colors">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                      {job.role} — {job.company}
                    </a>
                  ) : (
                    <span>{job.role} — {job.company}</span>
                  )}
                </span>
                <span className="text-[12px] text-dim font-mono whitespace-nowrap hidden sm:inline">{job.date}</span>
              </div>

              <div className="text-[13px] text-dim mb-3.5 pl-[38px] flex items-center justify-between">
                <span>{job.location}</span>
                <span className="text-[12px] font-mono sm:hidden">{job.date}</span>
              </div>

              {/* Bullet Points with exact resume info */}
              {job.bullets && job.bullets.length > 0 && (
                <ul className="mb-4 pl-[8px] sm:pl-[38px] space-y-2.5 text-[13.5px] text-muted font-light leading-[1.7]">
                  {job.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="relative flex items-start gap-3 group/li">
                      <span className="material-symbols-outlined !text-[12px] text-accent/60 shrink-0 mt-[6px] group-hover/li:text-accent transition-colors font-semibold">
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



      {/* ─── Dedicated Side Business Section (Catalyst for Rahigo) ─── */}
      <section id="side-business" className="mt-16 scroll-mt-24 pt-10 border-t border-border">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-dim mb-6">{t.labels.sideBusiness}</p>

        <div className="p-6 rounded-2xl bg-tag-bg border border-border hover:border-accent/10 transition-all duration-300 relative overflow-hidden group">
          {/* Subtle glowing halo inside the card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full group-hover:bg-accent/10 transition-colors pointer-events-none"></div>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Special dedicated logo box */}
              <div className="w-[32px] h-[32px] rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-[13px] font-bold text-accent shrink-0">
                BT
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-text group-hover:text-accent transition-colors">{t.sideBusiness.title}</h3>
                <p className="text-[11px] text-dim font-mono tracking-tight">{t.sideBusiness.tagline}</p>
              </div>
            </div>

            {/* Pulse verifying link button */}
            <a
              href={t.sideBusiness.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-dim hover:text-accent transition-all font-mono whitespace-nowrap self-center"
            >
              {t.sideBusiness.urlText}
            </a>
          </div>

          <p
            className="text-[14px] text-muted leading-[1.8] font-light mb-5"
            dangerouslySetInnerHTML={{ __html: t.sideBusiness.pitch }}
          />

          {/* Visual Force Traveller highlight bar */}
          <div className="mt-2 mb-6 px-4 py-3 rounded-xl bg-tag-bg/50 border-l-2 border-[#d97706]/40 border-y border-r border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-3">
              <span className="text-[20px] shrink-0">🚌</span>
              <div>
                <p className="text-[12.5px] font-mono text-text tracking-wide font-medium">{t.sideBusiness.fleetLabel}</p>
                <p className="text-[10px] text-dim uppercase tracking-[0.05em] font-medium">{t.sideBusiness.fleetSub}</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#f59e0b] bg-[#d97706]/10 px-2.5 py-1 rounded-[5px] border border-[#d97706]/20 uppercase tracking-wider shrink-0 font-semibold text-center sm:text-left self-start sm:self-auto">
              {t.sideBusiness.fleetBadge}
            </span>
          </div>

          {/* Sitemap Verification Bullet Points */}
          {t.sideBusiness.bullets && t.sideBusiness.bullets.length > 0 && (
            <ul className="mb-6 pl-[8px] sm:pl-[38px] space-y-3 text-[13.5px] text-muted font-light leading-[1.7]">
              {t.sideBusiness.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="relative flex items-start gap-3.5 group/li">
                  <span className="material-symbols-outlined !text-[14px] text-accent shrink-0 mt-[4px] group-hover/li:translate-x-0.5 transition-transform duration-300">
                    chevron_right
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="mt-16 scroll-mt-24 pt-10 border-t border-border">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-dim mb-6">{t.labels.projects}</p>

        <div className="border-t border-border divide-y divide-border">
          {t.projects.map((proj, index) => (
            <div key={index} className="project-item group">
              <div className="flex items-start gap-3.5 max-w-[75%]">
                <div className="w-[24px] h-[24px] rounded-[5px] bg-bg3 border border-border flex items-center justify-center font-mono text-[9px] font-bold text-accent shrink-0 mt-0.5 shadow-md overflow-hidden">
                  {proj.logo.startsWith("http") ? (
                    <img src={proj.logo} alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <span>{proj.logo}</span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-medium text-text group-hover:text-accent transition-colors">{proj.name}</span>
                    {proj.caseStudyUrl && (
                      <Link
                        href={proj.caseStudyUrl}
                        className="text-[10px] uppercase font-mono tracking-widest text-dim hover:text-accent transition-colors bg-tag-bg px-2 py-0.5 rounded-[4px]"
                      >
                        case study
                      </Link>
                    )}
                  </div>
                  <p className="text-[13px] text-dim mt-1.5 font-light">{proj.desc}</p>
                </div>
              </div>

              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-dim hover:text-accent transition-all font-mono whitespace-nowrap"
              >
                {proj.urlText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="mt-16 pt-10 border-t border-border scroll-mt-24">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-dim mb-6">{t.labels.contact}</p>
        <p
          className="text-[15px] text-muted leading-[1.9] font-light"
          dangerouslySetInnerHTML={{ __html: t.contact }}
        />
      </section>
    </main>
  );
}
