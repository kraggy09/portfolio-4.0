export const translations = {
    en: {
        nav: {
            work: "Work",
            about: "About",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
            cta: "Book my cal"
        },
        hero: {
            tag: "Full Stack Developer",
            title: "Building digital tools that",
            titleAccent: "make your life easier.",
            description: "Hi, I'm Kaif. I help teams turn complex ideas into smooth, high-performance web apps and AI systems that feel like magic.",
            cta: "See My Work",
            availability: "OPEN FOR NEW PROJECTS"
        },
        about: {
            title: "About Me",
            content: "Building things has always been my way of understanding the world. I don't just write code; I look for the 'why' behind every feature to make sure we’re building something that truly matters. I’m a firm believer that technology should be a quiet helper, not a source of frustration. When I’m away from my keyboard, I’m usually either hunting for the best street food in Kolkata or tinkering with a DIY project at home."
        },
        banner: {
            tag: "SYSTEM_INTERCEPT: READY",
            prompt: "Access the engineering core via neural link.",
            cta: "OPEN AGENT PAGE"
        },
        work: {
            title: "Expertise &",
            titleAccent: "Focus Areas",
            saas: {
                title: "End-to-End Development",
                description: "Designing production-ready platforms where the complex logic stays hidden, leaving only a smooth experience for your users."
            },
            aiWeights: {
                title: "Intelligent Automation",
                description: "Putting AI to work for you by building custom workflows that handle the heavy lifting so you don't have to.",
                workflow: {
                    step1: { title: "Analyze", description: "Finding patterns in the noise" },
                    step2: { title: "Reason", description: "Thinking through the best path" },
                    step3: { title: "Execute", description: "Delivering a finished product" }
                }
            },
            frontend: {
                title: "User Experience",
                description: "Interfaces that don't just look good, but feel fast and easy to navigate."
            },
            backend: {
                title: "Backend & Systems",
                description: "Robust & Secure",
                tag: "ROBUST & SECURE"
            }
        },
        experience: {
            title: "Professional",
            titleAccent: "Experience",
            viewMore: "View Full History",
            haveit: {
                role: "Founding Full Stack Engineer",
                company: "Haveit",
                date: "Dec 2024 - Dec 2025",
                location: "Remote",
                description: "Architected and built Haveit 2.0 event planning platform from scratch. Developed AI recommendation engine with embeddings-based retrieval."
            },
            intervue: {
                role: "SDE Intern",
                company: "Intervue.io",
                date: "Apr 2024 - Dec 2024",
                location: "Bengaluru",
                description: "Led migration from Twilio to LiveKit Cloud, reducing costs by 65%. Engineered and optimized full-stack features."
            },
            simco: {
                role: "Software Engineer Intern",
                company: "Simco Consultancy",
                date: "Jan 2024 - Mar 2024",
                location: "Kolkata",
                description: "Automated workflows and enhanced web application features. Reduced report generation time by 40%."
            }
        },
        projects: {
            title: "Some things",
            titleAccent: "I've built",
            receptionist: {
                tag: "AI Prototype",
                type: "NLP",
                title: "AI Receptionist",
                description: "An intelligent virtual assistant that actually listens. It uses sentiment analysis to route customer calls to the right person, ensuring priority issues get handled first.",
                id: "ai-receptionist",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "OpenAI", "WebRTC", "Tailwind CSS"],
                features: [
                    { title: "Sentiment Analysis", description: "Real-time tone detection to prioritize urgent customer needs." },
                    { title: "Smart Routing", description: "Automatically transfers calls to the most qualified agent based on intent." },
                    { title: "Voice-to-Text", description: "Instant transcription of calls for better record-keeping and analysis." }
                ],
                gallery: ["/projects/receptionist-1.png", "/projects/receptionist-2.png", "/projects/receptionist-3.png"],
                challenge: "High-volume call centers often struggle with long wait times and misrouted calls, leading to customer frustration and operational inefficiency.",
                solution: "Developed a voice-AI system using OpenAI's Whisper and GPT-4 to analyze caller intent and sentiment in real-time. The system routes calls dynamically based on urgency.",
                results: "Priority issues are now addressed 3x faster, and customer satisfaction scores for initial triage increased significantly."
            },
            rahigo: {
                tag: "Marketplace",
                type: "Mobility",
                title: "Rahigo",
                description: "A better way to book professional transport. I built this multi-vendor marketplace to handle complex bidding and real-time partner routing, making it easy for users to find the best ride without the usual back-and-forth.",
                id: "rahigo",
                loom: "https://www.loom.com/embed/539a545e751d4a079abc1d726ab7a256",
                technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
                features: [
                    { title: "Multi-Vendor Bidding", description: "Allows multiple partners to bid on a single trip request for the best price." },
                    { title: "Real-time Routing", description: "Advanced algorithms to match passengers with the nearest available professional driver." },
                    { title: "Partner Dashboard", description: "Comprehensive management tools for transport vendors to track earnings and fleets." }
                ],
                gallery: ["/projects/rahigo-1.png", "/projects/rahigo-2.png", "/projects/rahigo-3.png"],
                challenge: "Building a trust-based marketplace for professional transport required a delicate balance between partner flexibility and passenger reliability.",
                solution: "I engineered a custom bidding engine that allows vetted partners to compete in real-time, coupled with a smart routing algorithm for the best match.",
                results: "Reduced booking turnaround time by 60% and increased partner engagement. The platform now handles hundreds of trips monthly."
            },
            travel: {
                tag: "Automation",
                type: "SaaS",
                title: "Travel CRM",
                description: "Helping travel agencies grow without the paperwork. This platform automates everything from trip estimation to WhatsApp bookings, so agents can focus on the trip, not the admin.",
                id: "travel-crm",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
                features: [
                    { title: "Automated Estimation", description: "Generates professional trip quotes in seconds based on real-time data." },
                    { title: "WhatsApp Integration", description: "Send itineraries and booking confirmations directly to clients via WhatsApp." },
                    { title: "Lead Tracking", description: "Centralized dashboard to manage and convert travel inquiries efficiently." }
                ],
                gallery: ["/projects/travel-1.png", "/projects/travel-2.png", "/projects/travel-3.png"],
                challenge: "Travel agencies were drowning in manual paperwork and disjointed communication channels, leading to slow response times.",
                solution: "Implemented an automated estimation engine and WhatsApp integration, creating a single source of truth for itineraries and bookings.",
                results: "Agents saved an average of 15 hours per week on administrative tasks, and WhatsApp conversion rates improved by 40%."
            },
            invosync: {
                tag: "Enterprise SaaS",
                type: "Real-time Billing",
                title: "InvoSync",
                description: "A high-concurrency, real-time data synchronization engine for enterprise billing. Engineered for sub-second latency and absolute data integrity using a distributed event-driven architecture.",
                id: "invosync",
                loom: "",
                technologies: ["Next.js 15", "React 19", "Node.js", "Redis", "MongoDB", "Socket.io", "Zustand"],
                features: [
                    { title: "Distributed State Sync", description: "Seamless real-time updates across multiple server nodes and client instances via Redis Pub/Sub." },
                    { title: "Atomic Invoicing", description: "Multi-document MongoDB transactions ensuring absolute consistency in stock levels and financial records." },
                    { title: "Optimized Inventory", description: "Version-controlled stock updates that handle multi-user collisions gracefully." },
                    { title: "Performant Search", description: "Server-side Projection-based search capable of handling 30,000+ products with <100ms latency." }
                ],
                gallery: ["/projects/invosync.png", "/projects/invosync-1.png", "/projects/invosync-2.png", "/projects/invosync-3.png"],
                challenge: "Standard WebSockets fail at scale, and billing errors in high-volume retail are expensive. Managing state across multiple concurrent tabs without lag or data corruption is a significant engineering hurdle.",
                solution: "Implemented Socket.io Redis Adapter for distributed messaging, Mongoose Transactions for atomic operations, and Zustand with shallow selectors for high-frequency state management.",
                results: "Achieved sub-100ms sync latency, ensured zero financial data errors during stress testing, and improved billing throughput by 60% compared to legacy systems."
            },
            caseStudyNav: {
                overview: "Overview",
                challenge: "The Challenge",
                solution: "The Solution",
                features: "Core Features",
                gallery: "Media Gallery",
                results: "Results & Impact",
                tech: "Tech Stack",
                backToProjects: "Back to Projects"
            },
            liveDemo: "Live Demo",
            github: "Github Source",
            caseStudy: "Case Study"
        },
        cta: {
            title: "Ready to bring your",
            titleAccent: "next idea to life?",
            description: "I’m always open to hearing about new projects. Whether you have a clear plan or just a rough sketch, let’s talk and see how I can help.",
            button: "Send me a message"
        },
        footer: {
            copyright: "© 2026 KAIF SHAIKH",
            status: "Available for Projects",
            location: "Kolkata, India"
        }
    },
    hi: {
        nav: {
            work: "काम",
            about: "बारे में",
            projects: "प्रोजेक्ट्स",
            experience: "अनुभव",
            contact: "संपर्क",
            cta: "मेरी कॉल बुक करें"
        },
        hero: {
            tag: "फुल स्टैक डेवलपर और एआई सिस्टम बिल्डर",
            title: "स्केलेबल",
            titleAccent: "इंटेलिजेंट सिस्टम बनाना",
            description: "जटिल आवश्यकताओं को उच्च-प्रदर्शन, उत्पादन-तैयार अनुप्रयोगों में बदलना। प्रदर्शन और विकास के लिए अनुकूलित {saas} और {marketplaces} में विशेषज्ञता।",
            cta: "मेरा काम देखें",
            availability: "प्रोजेक्ट्स के लिए उपलब्ध"
        },
        about: {
            title: "मेरे बारे में",
            content: "चीजें बनाना हमेशा से दुनिया को समझने का मेरा तरीका रहा है। मैं सिर्फ कोड नहीं लिखता; मैं हर फीचर के पीछे 'क्यों' को देखता हूं ताकि यह सुनिश्चित हो सके कि हम वास्तव में मायने रखने वाली चीज बना रहे हैं।"
        },
        banner: {
            tag: "SYSTEM_INTERCEPT: तैयार है",
            prompt: "न्यूरल लिंक के माध्यम से इंजीनियरिंग कोर तक पहुँचें।",
            cta: "एजेंट पेज खोलें"
        },
        work: {
            title: "विशेषज्ञता और",
            titleAccent: "फोकस क्षेत्र",
            saas: {
                title: "स्केलेबल SaaS और मार्केटप्लेस",
                description: "जटिल बुकिंग लॉजिक, बिडिंग इंजन और वेंडर मैनेजमेंट सिस्टम के साथ प्रोडक्शन-तैयार प्लेटफॉर्म डिजाइन करना।"
            },
            aiWeights: {
                title: "एआई एकीकृत वर्कफ्लो",
                description: "रेवेन्यू-अलाइन्ड ऑटोमation और मैचिंग सिस्टम बनाने के लिए प्रॉम्प्ट इंजीनियरिंग और मॉडल ऑर्केस्ट्रेशन का लाभ उठाना।",
                workflow: {
                    step1: { title: "विश्लेषण", description: "मार्केट सिग्नल और पैटर्न पहचान" },
                    step2: { title: "तर्क", description: "मल्टी-एजेंट लॉजिक ऑर्केस्ट्रेशन" },
                    step3: { title: "निष्पादन", description: "उत्पादन-तैयार आउटपुट वितरण" }
                }
            },
            frontend: {
                title: "फ्रंटएंड आर्किटेक्चर",
                description: "Next.js और Tailwind CSS के साथ SEO-अनुकूलित, प्रदर्शन-केंद्रित इंटरफेस।",
            },
            backend: {
                title: "बैकएंड और सिस्टम",
                description: "मजबूत और सुरक्षित",
                tag: "मजबूत और सुरक्षित"
            }
        },
        experience: {
            title: "व्यावसायिक",
            titleAccent: "अनुभव",
            viewMore: "पूरा इतिहास देखें",
            haveit: {
                role: "Founding Full Stack Engineer",
                company: "Haveit",
                date: "Dec 2024 - Dec 2025",
                location: "Remote",
                description: "Architected and built Haveit 2.0 event planning platform from scratch. Developed AI recommendation engine with embeddings-based retrieval."
            },
            intervue: {
                role: "SDE Intern",
                company: "Intervue.io",
                date: "Apr 2024 - Dec 2024",
                location: "Bengaluru",
                description: "Led migration from Twilio to LiveKit Cloud, reducing costs by 65%. Engineered and optimized full-stack features."
            },
            simco: {
                role: "Software Engineer Intern",
                company: "Simco Consultancy",
                date: "Jan 2024 - Mar 2024",
                location: "Kolkata",
                description: "Automated workflows and enhanced web application features. Reduced report generation time by 40%."
            }
        },
        projects: {
            title: "चयनित",
            titleAccent: "एआई प्रोजेक्ट्स",
            receptionist: {
                tag: "एआई सिस्टम",
                type: "NLP",
                title: "AI रिसेप्शनिस्ट: इंटेलिजेंट कॉल रूटिंग",
                description: "एक एआई-पावर्ड वर्चुअल रिसेप्शनिस्ट जो इरादे और भावना के आधार पर ग्राहकों की कॉल को समझदारी से रूट करता है।",
                id: "ai-receptionist",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "OpenAI", "WebRTC", "Tailwind CSS"],
                features: [
                    { title: "भावना विश्लेषण", description: "तत्काल ग्राहक आवश्यकताओं को प्राथमिकता देने के लिए रीयल-टाइम टोन डिटेक्शन।" },
                    { title: "स्मार्ट रूटिंग", description: "इरादे के आधार पर कॉल को स्वचालित रूप से सबसे योग्य एजेंट को स्थानांतरित करता है।" },
                    { title: "वॉयस-टू-टेक्स्ट", description: "बेहतर रिकॉर्ड-कीपिंग और विश्लेषण के लिए कॉल का तत्काल ट्रांसक्रिप्शन।" }
                ],
                gallery: ["/projects/receptionist-1.png", "/projects/receptionist-2.png", "/projects/receptionist-3.png"],
                challenge: "उच्च-मात्रा वाले कॉल सेंटरों को अक्सर लंबे इंतजार और गलत कॉल रूटिंग का सामना करना पड़ता है, जिससे ग्राहक निराशा होती है और परिचालन अक्षमता होती है।",
                solution: "रीयल-टाइम में कॉल करने वाले के इरादे और भावना का विश्लेषण करने के लिए OpenAI's Whisper और GPT-4 का उपयोग करके एक आवाज-एआई प्रणाली विकसित की।",
                results: "प्राथमिकता वाले मुद्दों को अब 3 गुना तेजी से हल किया जाता है, और ग्राहकों की संतुष्टि स्कोर में काफी वृद्धि हुई है।"
            },
            rahigo: {
                tag: "मार्केटप्लेस",
                type: "फुल स्टैक",
                title: "Rahigo: वाहन बुकिंग मार्केटप्लेस",
                description: "कस्टम ऑफर बिडिंग इंजन, पार्टनर ऑनबोर्डिंग वर्कफ़्लो और स्वचालित ऑफर तुलना लॉजिक के साथ एक मल्टी-वेंडर वाहन बुकिंग प्लेटफ़ॉर्म।",
                id: "rahigo",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
                features: [
                    { title: "मल्टी-वेंडर बिडिंग", description: "सर्वोत्तम मूल्य के लिए कई भागीदारों को एक ही यात्रा अनुरोध पर बोली लगाने की अनुमति देता है।" },
                    { title: "रीयल-टाइम रूटिंग", description: "यात्रियों को निकटतम उपलब्ध पेशेवर ड्राइवर के साथ मिलाने के लिए उन्नत एल्गोरिदम।" },
                    { title: "पार्टनर डैशबोर्ड", description: "परिवहन विक्रेताओं के लिए कमाई और बेड़े को ट्रैक करने के लिए व्यापक प्रबंधन उपकरण।" }
                ],
                gallery: ["/projects/rahigo-1.png", "/projects/rahigo-2.png", "/projects/rahigo-3.png"],
                challenge: "पेशेवर परिवहन के लिए विश्वास-आधारित बाज़ार बनाने के लिए पार्टनर लचीलेपन और यात्री विश्वसनीयता के बीच एक नाजुक संतुलन की आवश्यकता थी।",
                solution: "मैंने एक कस्टम बिडिंग इंजन तैयार किया है जो सत्यापित भागीदारों को रीयल-टाइम में प्रतिस्पर्धा करने की अनुमति देता है, साथ ही सर्वोत्तम मिलान के लिए एक स्मार्ट रूटिंग एल्गोरिदम भी।",
                results: "बुकिंग टर्नअराउंड समय में 60% की कमी आई और पार्टनर जुड़ाव में वृद्धि हुई। प्लेटफॉर्म अब मासिक रूप से सैकड़ों यात्राएं संभालता है।"
            },
            travel: {
                tag: "SaaS",
                type: "ऑटोमेशन",
                title: "ट्रैवल CRM और बुकिंग प्लेटफॉर्म",
                description: "एक कस्टम CRM के साथ एकीकृत SEO-संचालित ट्रैवल प्लेटफॉर्म। इसमें डायनेमिक ट्रिप एस्टीमेटर और व्हाट्सएप बुकिंग ऑटोमation शामिल हैं।",
                id: "travel-crm",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
                features: [
                    { title: "स्वचालित अनुमान", description: "रीयल-टाइम डेटा के आधार पर सेकंडों में पेशेवर यात्रा उद्धरण तैयार करता है।" },
                    { title: "व्हाट्सएप एकीकरण", description: "व्हाट्सएप के माध्यम से सीधे ग्राहकों को यात्रा कार्यक्रम और बुकिंग पुष्टिकरण भेजें।" },
                    { title: "लीड ट्रैकिंग", description: "यात्रा पूछताछ को कुशलतापूर्वक प्रबंधित और परिवर्तित करने के लिए केंद्रीकृत डैशबोर्ड।" }
                ],
                gallery: ["/projects/travel-1.png", "/projects/travel-2.png", "/projects/travel-3.png"],
                challenge: "ट्रैवल एजेंसियां मैनुअल कागजी कार्रवाई और बिखरे हुए संचार चैनलों में डूबी हुई थीं, जिससे प्रतिक्रिया समय धीमा हो गया था।",
                solution: "एक स्वचालित अनुमान इंजन और व्हाट्सएप एकीकरण लागू किया, जिससे यात्रा कार्यक्रमों और बुकिंग के लिए सच्चाई का एक स्रोत बना।",
                results: "एजेंटों ने प्रशासनिक कार्यों पर प्रति सप्ताह औसतन 15 घंटे बचाए, और व्हाट्सएप रूपांतरण दरों में 40% सुधार हुआ।"
            },
            invosync: {
                tag: "एंटरप्राइज SaaS",
                type: "रीयल-टाइम बिलिंग",
                title: "InvoSync",
                description: "एंटरप्राइज बिलिंग के लिए एक हाई-कनकरेंसी, रीयल-टाइम डेटा सिंक्रोनाइज़ेशन इंजन। इसे वितरित इवेंट-ड्रिवन आर्किटेक्चर का उपयोग करके सब-सेकंड लेटेंसी और पूर्ण डेटा अखंडता के लिए इंजीनियर किया गया है।",
                id: "invosync",
                loom: "",
                technologies: ["Next.js 15", "React 19", "Node.js", "Redis", "MongoDB", "Socket.io", "Zustand"],
                features: [
                    { title: "वितरित स्टेट सिंक", description: "Redis Pub/Sub के माध्यम से कई सर्वर नोड्स और क्लाइंट इंस्टेंस में निर्बाध रीयल-टाइम अपडेट।" },
                    { title: "एटॉमिक इनवॉयसिंग", description: "मल्टी-डॉक्यूमेंट MongoDB ट्रांजेक्शन स्टॉक स्तरों और वित्तीय रिकॉर्ड में पूर्ण स्थिरता सुनिश्चित करते हैं।" },
                    { title: "अनुकूलित इन्वेंट्री", description: "वर्जन-नियंत्रित स्टॉक अपडेट जो मल्टी-यूजर टकरावों को शालीनता से संभालते हैं।" },
                    { title: "प्रदर्शनकारी खोज", description: "सर्वर-साइड प्रोजेक्शन-आधारित खोज जो <100ms लेटेंसी के साथ 30,000+ उत्पादों को संभालने में सक्षम है।" }
                ],
                gallery: ["/projects/invosync.png", "/projects/invosync-1.png", "/projects/invosync-2.png", "/projects/invosync-3.png"],
                challenge: "मानक वेबसॉकेट स्केल पर विफल हो जाते हैं, और उच्च-मात्रा वाले रिटेल में बिलिंग त्रुटियां महंगी होती हैं। लैग या डेटा भ्रष्टाचार के बिना कई समवर्ती टैब में स्टेट प्रबंधित करना एक महत्वपूर्ण इंजीनियरिंग बाधा है।",
                solution: "वितरित मैसेजिंग के लिए Socket.io Redis एडेप्टर, एटॉमिक ऑपरेशंस के लिए Mongoose ट्रांजेक्शन, और हाई-फ्रीक्वेंसी स्टेट मैनेजमेंट के लिए Zustand का कार्यान्वयन किया गया।",
                results: "सब-100ms सिंक लेटेंसी हासिल की, तनाव परीक्षण के दौरान शून्य वित्तीय डेटा त्रुटि सुनिश्चित की, और लीगेसी सिस्टम की तुलना में बिलिंग थ्रूपुट में 60% सुधार किया।"
            },
            caseStudyNav: {
                overview: "अवलोकन",
                challenge: "चुनौती",
                solution: "समाधान",
                features: "प्रमुख विशेषताएं",
                gallery: "मीडिया गैलरी",
                results: "परिणाम और प्रभाव",
                tech: "टेक स्टैक",
                backToProjects: "प्रोजेक्ट्स पर वापस"
            },
            liveDemo: "लाइव डेमो",
            github: "गिटहब सोर्स",
            caseStudy: "केस स्टडी"
        },
        cta: {
            title: "अपने अगले इंटेलिजेंट वेंचर को",
            titleAccent: "स्केल करने के लिए तैयार हैं?",
            description: "मैं हमेशा नए प्रोजेक्ट्स के बारे में सुनने के लिए तैयार हूं। चाहे आपके पास एक स्पष्ट योजना हो या सिर्फ एक मोटा खाका, आइए बात करते हैं और देखते हैं कि मैं कैसे मदद कर सकता हूं।",
            button: "मेरी कॉल बुक करें"
        },
        footer: {
            copyright: "© 2024 कैफ़ शेख",
            status: "प्रोजेक्ट्स के लिए उपलब्ध",
            location: "कोलकाता, भारत"
        }
    },
    es: {
        nav: {
            work: "Trabajo",
            about: "Sobre mí",
            projects: "Proyectos",
            experience: "Experiencia",
            contact: "Contacto",
            cta: "Reserva mi llamada"
        },
        hero: {
            tag: "Desarrollador Full Stack y Creador de Sistemas de IA",
            title: "Construyendo Sistemas",
            titleAccent: "Inteligentes Escalables",
            description: "Transformando requisitos complejos en aplicaciones de alto rendimiento listas para producción. Especializado en {saas} y {marketplaces} integrados con IA, optimizados para el rendimiento y el crecimiento.",
            cta: "VER MI TRABAJO",
            availability: "DISPONIBLE PARA PROYECTOS"
        },
        about: {
            title: "Sobre Mí",
            content: "Construir cosas siempre ha sido mi forma de entender el mundo. No solo escribo código; busco el 'por qué' detrás de cada función para asegurarme de que estamos construyendo algo que realmente importe."
        },
        banner: {
            tag: "INTERCEPCIÓN_SISTEMA: LISTO",
            prompt: "Acceda al núcleo de ingeniería a través de enlace neural.",
            cta: "ABRIR PÁGINA DE AGENTE"
        },
        work: {
            title: "Experiencia y",
            titleAccent: "Áreas de Enfoque",
            saas: {
                title: "SaaS y Marketplaces Escalables",
                description: "Diseño de plataformas listas para producción con lógica de reserva compleja, motores de pujas y sistemas de gestión de proveedores."
            },
            aiWeights: {
                title: "Flujos de Trabajo Integrados con IA",
                description: "Aprovechamiento de la ingeniería de prompts y la orquestación de modelos para crear sistemas de automatización y emparejamiento alineados con los ingresos.",
                workflow: {
                    step1: { title: "Analizar", description: "Señales de mercado y reconocimiento de patrones" },
                    step2: { title: "Razonar", description: "Orquestación de lógica multi-agente" },
                    step3: { title: "Ejecutar", description: "Entrega de resultados listos para producción" }
                }
            },
            frontend: {
                title: "Arquitectura Frontend",
                description: "Interfaces centradas en el rendimiento y optimizadas para SEO con Next.js y Tailwind CSS."
            },
            backend: {
                title: "Backend y Sistemas",
                description: "Robusto y Seguro",
                tag: "ROBUSTO Y SEGURO"
            }
        },
        experience: {
            title: "Experiencia",
            titleAccent: "Profesional",
            viewMore: "Ver Historial Completo",
            haveit: {
                role: "Founding Full Stack Engineer",
                company: "Haveit",
                date: "Dec 2024 - Dec 2025",
                location: "Remote",
                description: "Architected and built Haveit 2.0 event planning platform from scratch. Developed AI recommendation engine with embeddings-based retrieval."
            },
            intervue: {
                role: "SDE Intern",
                company: "Intervue.io",
                date: "Apr 2024 - Dec 2024",
                location: "Bengaluru",
                description: "Led migration from Twilio to LiveKit Cloud, reducing costs by 65%. Engineered and optimized full-stack features."
            },
            simco: {
                role: "Software Engineer Intern",
                company: "Simco Consultancy",
                date: "Jan 2024 - Mar 2024",
                location: "Kolkata",
                description: "Automated workflows and enhanced web application features. Reduced report generation time by 40%."
            }
        },
        projects: {
            title: "Proyectos de",
            titleAccent: "IA Seleccionados",
            receptionist: {
                tag: "Sistemas de IA",
                type: "NLP",
                title: "Recepcionista de IA: Enrutamiento de Llamadas Inteligente",
                description: "Una recepcionista virtual impulsada por IA que enruta de manera inteligente las llamadas de los clientes según la intención y el sentimiento.",
                id: "ai-receptionist",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "OpenAI", "WebRTC", "Tailwind CSS"],
                features: [
                    { title: "Análisis de Sentimiento", description: "Detección de tono en tiempo real para priorizar las necesidades urgentes del cliente." },
                    { title: "Enrutamiento Inteligente", description: "Transfiere automáticamente las llamadas al agente más calificado según la intención." },
                    { title: "Voz a Texto", description: "Transcripción instantánea de llamadas para un mejor registro y análisis." }
                ],
                gallery: ["/projects/receptionist-1.png", "/projects/receptionist-2.png", "/projects/receptionist-3.png"],
                challenge: "Los centros de llamadas de alto volumen a menudo luchan con largos tiempos de espera y llamadas mal dirigidas, lo que genera frustración en el cliente.",
                solution: "Desarrollé un sistema de IA de voz utilizando Whisper y GPT-4 de OpenAI para analizar la intención y el sentimiento del llamador en tiempo real.",
                results: "Los problemas prioritarios se abordan ahora 3 veces más rápido y la satisfacción del cliente ha aumentado significativamente."
            },
            rahigo: {
                tag: "Marketplace",
                type: "Full Stack",
                title: "Rahigo: Marketplace de Reserva de Vehículos",
                description: "Una plataforma de reserva de vehículos multi-proveedor con un motor de pujas de ofertas personalizado y flujos de trabajo de incorporación de socios.",
                id: "rahigo",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
                features: [
                    { title: "Pujas Multi-Proveedor", description: "Permite que múltiples socios pujen por una sola solicitud de viaje para obtener el mejor precio." },
                    { title: "Enrutamiento en Tiempo Real", description: "Algoritmos avanzados para emparejar pasajeros con el conductor profesional disponible más cercano." },
                    { title: "Panel de Socios", description: "Herramientas de gestión integrales para que los proveedores de transporte realicen un seguimiento de las ganancias y las flotas." }
                ],
                gallery: ["/projects/rahigo-1.png", "/projects/rahigo-2.png", "/projects/rahigo-3.png"],
                challenge: "Construir un mercado basado en la confianza para el transporte profesional requería un equilibrio delicado entre la flexibilidad del socio y la confiabilidad del pasajero.",
                solution: "Diseñé un motor de pujas personalizado que permite a los socios verificados competir en tiempo real, junto con un algoritmo de enrutamiento inteligente.",
                results: "Reducción del tiempo de respuesta de reserva en un 60% y aumento del compromiso de los socios. La plataforma ahora gestiona cientos de viajes mensualmente."
            },
            travel: {
                tag: "SaaS",
                type: "Automatización",
                title: "CRM de Viajes y Plataforma de Reservas",
                description: "Una plataforma de viajes impulsada por SEO integrada con un CRM personalizado. Incluye un estimador de viajes dinámico y automatización de reservas por WhatsApp.",
                id: "travel-crm",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
                features: [
                    { title: "Estimación Automatizada", description: "Genera presupuestos de viajes profesionales en segundos basados en datos en tiempo real." },
                    { title: "Integración de WhatsApp", description: "Envíe itinerarios y confirmaciones de reserva directamente a los clientes a través de WhatsApp." },
                    { title: "Seguimiento de Clientes Potenciales", description: "Panel centralizado para gestionar y convertir consultas de viajes de manera eficiente." }
                ],
                gallery: ["/projects/travel-1.png", "/projects/travel-2.png", "/projects/travel-3.png"],
                challenge: "Las agencias de viajes estaban saturadas de papeleo manual y canales de comunicación inconexos, lo que provocaba tiempos de respuesta lentos.",
                solution: "Se implementó un motor de estimación automatizado e integración con WhatsApp, creando una única fuente de verdad para itinerarios y reservas.",
                results: "Los agentes ahorraron un promedio de 15 horas por semana en tareas administrativas y las tasas de conversión de WhatsApp mejoraron en un 40%."
            },
            invosync: {
                tag: "SaaS Empresarial",
                type: "Facturación en tiempo real",
                title: "InvoSync",
                description: "Un motor de sincronización de datos en tiempo real de alta concurrencia para facturación empresarial. Diseñado para una latencia inferior al segundo y una integridad de datos absoluta utilizando una arquitectura distribuida impulsada por eventos.",
                id: "invosync",
                loom: "",
                technologies: ["Next.js 15", "React 19", "Node.js", "Redis", "MongoDB", "Socket.io", "Zustand"],
                features: [
                    { title: "Sincronización de estado distribuida", description: "Actualizaciones en tiempo real sin interrupciones en múltiples nodos de servidor e instancias de cliente a través de Redis Pub/Sub." },
                    { title: "Facturación atómica", description: "Transacciones de MongoDB multiobjeto que garantizan una coherencia absoluta en los niveles de stock y los registros financieros." },
                    { title: "Inventario optimizado", description: "Actualizaciones de stock controladas por versiones que gestionan las colisiones multiusuario con elegancia." },
                    { title: "Búsqueda de alto rendimiento", description: "Búsqueda basada en proyecciones en el lado del servidor capaz de manejar más de 30.000 productos con una latencia de <100 ms." }
                ],
                gallery: ["/projects/invosync.png", "/projects/invosync-1.png", "/projects/invosync-2.png", "/projects/invosync-3.png"],
                challenge: "Los WebSockets estándar fallan a escala y los errores de facturación en el comercio minorista de alto volumen son costosos. Gestionar el estado en múltiples pestañas simultáneas sin retrasos ni corrupción de datos es un obstáculo de ingeniería significativo.",
                solution: "Se implementó el adaptador Redis de Socket.io para la mensajería distribuida, transacciones de Mongoose para operaciones atómicas y Zustand con selectores superficiales para la gestión de estado de alta frecuencia.",
                results: "Se logró una latencia de sincronización inferior a 100 ms, se garantizaron cero errores de datos financieros durante las pruebas de estrés y se mejoró el rendimiento de facturación en un 60% en comparación con los sistemas heredados."
            },
            caseStudyNav: {
                overview: "Visión General",
                challenge: "El Desafío",
                solution: "La Solución",
                features: "Características",
                gallery: "Galería de Medios",
                results: "Resultados e Impacto",
                tech: "Tecnologías",
                backToProjects: "Volver a Proyectos"
            },
            liveDemo: "DEMO EN VIVO",
            github: "CÓDIGO GITHUB",
            caseStudy: "ESTUDIO DE CASO"
        },
        cta: {
            title: "¿Listo para escalar tu próxima",
            titleAccent: "Aventura Inteligente?",
            description: "Siempre estoy abierto a escuchar sobre nuevos proyectos. Ya sea que tengas un plan claro o solo una idea aproximada, hablemos y veamos cómo puedo ayudarte.",
            button: "Reserva mi llamada"
        },
        footer: {
            copyright: "© 2024 KAIF SHAIKH",
            status: "Disponible para Proyectos",
            location: "Kolkata, India"
        }
    },
    fr: {
        nav: {
            work: "Projets",
            about: "À propos",
            projects: "Réalisations",
            experience: "Expérience",
            contact: "Contact",
            cta: "Réserver un appel"
        },
        hero: {
            tag: "Développeur Full Stack & Constructeur de Systèmes IA",
            title: "Bâtir des Systèmes",
            titleAccent: "Intelligents Évolutifs",
            description: "Transformer des exigences complexes en applications performantes prêtes pour la production. Spécialisé dans les {saas} et les {marketplaces} optimisés pour la croissance.",
            cta: "VOIR MES PROJETS",
            availability: "DISPONIBLE POUR PROJETS"
        },
        about: {
            title: "À Propos",
            content: "Construire des choses a toujours été ma façon de comprendre le monde. Je ne me contente pas d'écrire du code ; je cherche le 'pourquoi' derrière chaque fonctionnalité pour m'assurer que nous construisons quelque chose qui compte vraiment."
        },
        banner: {
            tag: "INTERCEPTION_SYSTÈME : PRÊT",
            prompt: "Accédez au cœur de l'ingénierie via liaison neurale.",
            cta: "OUVRIR LA PAGE AGENT"
        },
        work: {
            title: "Expertise &",
            titleAccent: "Domaines de Focus",
            saas: {
                title: "SaaS Évolutifs & Marketplaces",
                description: "Conception de plateformes avec logique de réservation complexe, moteurs d'enchères et gestion de fournisseurs."
            },
            aiWeights: {
                title: "Workflows Intégrés par l'IA",
                description: "Utilisation de l'ingénierie de prompts et de l'orchestration de modèles pour bâtir des automatisations alignées sur les revenus.",
                workflow: {
                    step1: { title: "Analyser", description: "Signaux du marché et reconnaissance de formes" },
                    step2: { title: "Raisonner", description: "Orchestration logique multi-agents" },
                    step3: { title: "Exécuter", description: "Livraison de résultats prêts pour la production" }
                }
            },
            frontend: {
                title: "Architecture Frontend",
                description: "Interfaces optimisées pour le SEO et la performance avec Next.js et Tailwind CSS."
            },
            backend: {
                title: "Backend & Systèmes",
                description: "Robuste & Sécurisé",
                tag: "ROBUSTE & SÉCURISÉ"
            }
        },
        experience: {
            title: "Expérience",
            titleAccent: "Professionnelle",
            viewMore: "Voir l'Historique Complet",
            haveit: {
                role: "Founding Full Stack Engineer",
                company: "Haveit",
                date: "Dec 2024 - Dec 2025",
                location: "Remote",
                description: "Architected and built Haveit 2.0 event planning platform from scratch. Developed AI recommendation engine with embeddings-based retrieval."
            },
            intervue: {
                role: "SDE Intern",
                company: "Intervue.io",
                date: "Apr 2024 - Dec 2024",
                location: "Bengaluru",
                description: "Led migration from Twilio to LiveKit Cloud, reducing costs by 65%. Engineered and optimized full-stack features."
            },
            simco: {
                role: "Software Engineer Intern",
                company: "Simco Consultancy",
                date: "Jan 2024 - Mar 2024",
                location: "Kolkata",
                description: "Automated workflows and enhanced web application features. Reduced report generation time by 40%."
            }
        },
        projects: {
            title: "Projets",
            titleAccent: "IA Sélectionnés",
            receptionist: {
                tag: "Systèmes IA",
                type: "NLP",
                title: "Réceptionniste IA : Routage Intelligent d'Appels",
                description: "Réceptionniste virtuelle routant intelligemment les appels selon l'intention et le sentiment.",
                id: "ai-receptionist",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "OpenAI", "WebRTC", "Tailwind CSS"],
                features: [
                    { title: "Analyse de Sentiment", description: "Détection du ton en temps réel pour prioriser les besoins urgents des clients." },
                    { title: "Routage Intelligent", description: "Transfère automatiquement les appels vers l'agent le plus qualifié en fonction de l'intention." },
                    { title: "Voix vers Texte", description: "Transcription instantanée des appels pour un meilleur suivi et une meilleure analyse." }
                ],
                gallery: ["/projects/receptionist-1.png", "/projects/receptionist-2.png", "/projects/receptionist-3.png"],
                challenge: "Les centres d'appels à gros volume souffrent souvent de longs temps d'attente et d'appels mal acheminés, ce qui entraîne la frustration des clients.",
                solution: "Développement d'un système d'IA vocale utilisant Whisper et GPT-4 d'OpenAI pour analyser l'intention et le sentiment de l'appelant en temps réel.",
                results: "Les problèmes prioritaires sont désormais traités 3 fois plus vite, et le score de satisfaction client a augmenté de manière significative."
            },
            rahigo: {
                tag: "Marketplace",
                type: "Full Stack",
                title: "Rahigo : Marketplace de Réservation de Véhicules",
                description: "Plateforme multi-vendeurs avec moteur d'enchères personnalisé et workflows d'intégration de partenaires.",
                id: "rahigo",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
                features: [
                    { title: "Enchères Multi-Vendeurs", description: "Permet à plusieurs partenaires d'enchérir sur une seule demande de voyage pour obtenir le meilleur prix." },
                    { title: "Routage en Temps Réel", description: "Algorithmes avancés pour faire correspondre les passagers avec le conducteur professionnel disponible le plus proche." },
                    { title: "Tableau de Bord Partenaire", description: "Outils de gestion complets pour les vendeurs de transport pour suivre les revenus et les flottes." }
                ],
                gallery: ["/projects/rahigo-1.png", "/projects/rahigo-2.png", "/projects/rahigo-3.png"],
                challenge: "Bâtir une place de marché basée sur la confiance pour le transport professionnel a nécessité un équilibre délicat entre la flexibilité des partenaires et la fiabilité des passagers.",
                solution: "J'ai conçu un moteur d'enchères personnalisé qui permet aux partenaires vérifiés de concourir en temps réel, couplé à un algorithme de routage intelligent.",
                results: "Réduction du délai de réservation de 60 % et augmentation de l'engagement des partenaires. La plateforme gère désormais des centaines de trajets par mois."
            },
            travel: {
                tag: "SaaS",
                type: "Automatisation",
                title: "Plateforme de Réservation & CRM Voyage",
                description: "Plateforme SEO-driven avec CRM personnalisé, estimateur de voyage dynamique et automatisation WhatsApp.",
                id: "travel-crm",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
                features: [
                    { title: "Estimation Automatisée", description: "Génère des devis de voyage professionnels en quelques secondes basés sur des données en temps réel." },
                    { title: "Intégration WhatsApp", description: "Envoyez des itinéraires et des confirmations de réservation directement aux clients via WhatsApp." },
                    { title: "Suivi des Prospects", description: "Tableau de bord centralisé pour gérer et convertir efficacement les demandes de voyage." }
                ],
                gallery: ["/projects/travel-1.png", "/projects/travel-2.png", "/projects/travel-3.png"],
                challenge: "Les agences de voyages étaient noyées sous la paperasse manuelle et les canaux de communication décousus, ce qui entraînait des temps de réponse lents.",
                solution: "Mise en œuvre d'un moteur d'estimation automatisé et d'une intégration WhatsApp, créant une source unique de vérité pour les itinéraires et les réservations.",
                results: "Les agents ont économisé en moyenne 15 heures par semaine sur les tâches administratives, et les taux de conversion WhatsApp ont progressé de 40 %."
            },
            invosync: {
                tag: "SaaS d'Entreprise",
                type: "Facturation en temps réel",
                title: "InvoSync",
                description: "Un moteur de synchronisation de données en temps réel à haute concurrence pour la facturation d'entreprise. Conçu pour une latence inférieure à la seconde et une intégrité absolue des données à l'aide d'une architecture distribuée pilotée par événements.",
                id: "invosync",
                loom: "",
                technologies: ["Next.js 15", "React 19", "Node.js", "Redis", "MongoDB", "Socket.io", "Zustand"],
                features: [
                    { title: "Sync d'état distribuée", description: "Mises à jour fluides en temps réel sur plusieurs nœuds de serveur et instances de client via Redis Pub/Sub." },
                    { title: "Facturation atomique", description: "Transactions MongoDB multi-documents assurant une cohérence absolue des niveaux de stock et des dossiers financiers." },
                    { title: "Inventaire optimisé", description: "Mises à jour de stock contrôlées par version gérant élégamment les collisions multi-utilisateurs." },
                    { title: "Recherche performante", description: "Recherche basée sur la projection côté serveur capable de gérer plus de 30 000 produits avec une latence <100ms." }
                ],
                gallery: ["/projects/invosync.png", "/projects/invosync-1.png", "/projects/invosync-2.png", "/projects/invosync-3.png"],
                challenge: "Les WebSockets standard échouent à grande échelle, et les erreurs de facturation dans le commerce de détail à gros volume sont coûteuses. Gérer l'état sur plusieurs onglets simultanés sans décalage ni corruption de données est un défi technique majeur.",
                solution: "Implémentation de Socket.io Redis Adapter pour la messagerie distribuée, des transactions Mongoose pour les opérations atomiques et de Zustand avec des sélecteurs superficiels pour la gestion d'état à haute fréquence.",
                results: "Atteinte d'une latence de synchronisation inférieure à 100ms, garantie de zéro erreur de données financières lors des tests de stress et amélioration du débit de facturation de 60 % par rapport aux systèmes hérités."
            },
            caseStudyNav: {
                overview: "Aperçu",
                challenge: "Le Défi",
                solution: "La Solution",
                features: "Fonctionnalités",
                gallery: "Galerie Média",
                results: "Résultats & Impact",
                tech: "Tech Stack",
                backToProjects: "Retour aux Projets"
            },
            liveDemo: "DÉMO LIVE",
            github: "SOURCE GITHUB",
            caseStudy: "ÉTUDE DE CAS"
        },
        cta: {
            title: "Prêt à propulser votre prochain",
            titleAccent: "Projet Intelligent ?",
            description: "Je suis toujours ouvert à l'écoute de nouveaux projets. Que vous ayez un plan clair ou juste une ébauche, parlons-en et voyons comment je peux vous aider.",
            button: "Réserver un appel"
        },
        footer: {
            copyright: "© 2024 KAIF SHAIKH",
            status: "Disponible pour Projets",
            location: "Kolkata, Inde"
        }
    },
    ja: {
        nav: {
            work: "実績",
            about: "私について",
            projects: "プロジェクト",
            experience: "経歴",
            contact: "お問い合わせ",
            cta: "予約する"
        },
        hero: {
            tag: "フルスタック・エンジニア & AIシステム構築",
            title: "スケーラブルな",
            titleAccent: "インテリジェント・システム",
            description: "複雑な要件を、パフォーマンスと成長に最適化された高性能な本番用アプリケーションへと変換します。{saas}や{marketplaces}を専門としています。",
            cta: "実績を見る",
            availability: "プロジェクト受付中"
        },
        about: {
            title: "私について",
            content: "モノを作ることは、私にとって常に世界を理解するための手段でした。単にコードを書くのではなく、すべての機能の背後にある「なぜ」を探求し、本当に価値のあるものを構築することを目指しています。"
        },
        banner: {
            tag: "システムインターセプト: 準備完了",
            prompt: "ニューラル・リンクを介してエンジニアリング・コアにアクセス。",
            cta: "エージェント・ページを開く"
        },
        work: {
            title: "専門知識と",
            titleAccent: "フォーカス分野",
            saas: {
                title: "スケーラブルなSaaS & マーケットプレイス",
                description: "複雑な予約ロジック、入札エンジン、ベンダー管理システムを備えたプラットフォームを構築します。"
            },
            aiWeights: {
                title: "AI統合ワークフロー",
                description: "プロンプト・エンジニアリングとモデルのオーケストレーションを活用し、収益に直結する自動化システムを構築します。",
                workflow: {
                    step1: { title: "分析", description: "市場シグナルとパターン認識" },
                    step2: { title: "推論", description: "マルチエージェント論理オーケストレーション" },
                    step3: { title: "実行", description: "本番用出力の提供" }
                }
            },
            frontend: {
                title: "フロントエンド・アーキテクチャ",
                description: "Next.jsとTailwind CSSを使用した、SEO最適化済みでパフォーマンス重視のインターフェース。"
            },
            backend: {
                title: "バックエンド & システム",
                description: "堅牢で安全なシステム",
                tag: "堅牢 & 安全"
            }
        },
        experience: {
            title: "職務",
            titleAccent: "経歴",
            viewMore: "全履歴を見る",
            haveit: {
                role: "Founding Full Stack Engineer",
                company: "Haveit",
                date: "Dec 2024 - Dec 2025",
                location: "Remote",
                description: "Architected and built Haveit 2.0 event planning platform from scratch. Developed AI recommendation engine with embeddings-based retrieval."
            },
            intervue: {
                role: "SDE Intern",
                company: "Intervue.io",
                date: "Apr 2024 - Dec 2024",
                location: "Bengaluru",
                description: "Led migration from Twilio to LiveKit Cloud, reducing costs by 65%. Engineered and optimized full-stack features."
            },
            simco: {
                role: "Software Engineer Intern",
                company: "Simco Consultancy",
                date: "Jan 2024 - Mar 2024",
                location: "Kolkata",
                description: "Automated workflows and enhanced web application features. Reduced report generation time by 40%."
            }
        },
        projects: {
            title: "厳選された",
            titleAccent: "AIプロジェクト",
            receptionist: {
                tag: "AIシステム",
                type: "NLP",
                title: "AI受付嬢: インテリジェント・コールルーティング",
                description: "意図と感情に基づいて顧客の電話をインテリジェントに転送するAIバーチャル受付。",
                id: "ai-receptionist",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "OpenAI", "WebRTC", "Tailwind CSS"],
                features: [
                    { title: "感情分析", description: "緊急の顧客ニーズを優先するためのリアルタイムのトーン検出。" },
                    { title: "スマートルーティング", description: "意図に基づいて、最も資格のあるエージェントに自動的に通話を転送します。" },
                    { title: "音声文字変換", description: "記録保持と分析を向上させるための通話の即時文字起こし。" }
                ],
                gallery: ["/projects/receptionist-1.png", "/projects/receptionist-2.png", "/projects/receptionist-3.png"],
                challenge: "大量のコールセンターでは、待ち時間が長く、通話が誤って転送されることが多く、顧客の不満と業務効率の低下を招いていました。",
                solution: "OpenAIのWhisperとGPT-4を使用して、発信者の意図と感情をリアルタイムで分析する音声AIシステムを開発しました。",
                results: "優先事項が3倍速く解決されるようになり、初期段階の顧客満足度スコアが大幅に向上しました。"
            },
            rahigo: {
                tag: "マーケットプレイス",
                type: "フルスタック",
                title: "Rahigo: 車両予約マーケットプレイス",
                description: "カスタム入札エンジン、パートナー向けオンボーディング、自動価格比較ロジックを備えたマルチベンダー・プラットフォーム。",
                id: "rahigo",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
                features: [
                    { title: "マルチベンダー入札", description: "複数のパートナーが1つの旅行リクエストに対して最良の価格で入札できるようにします。" },
                    { title: "リアルタイムルーティング", description: "乗客を最も近くの利用可能なプロのドライバーと一致させるための高度なアルゴリズム。" },
                    { title: "パートナーダッシュボード", description: "輸送ベンダーが収益と車両を追跡するための包括的な管理ツール。" }
                ],
                gallery: ["/projects/rahigo-1.png", "/projects/rahigo-2.png", "/projects/rahigo-3.png"],
                challenge: "プロの輸送のための信頼ベースのマーケットプレイスを構築するには、パートナーの柔軟性と乗客の信頼性の間の微妙なバランスが必要でした。",
                solution: "検証済みのパートナーがリアルタイムで競合できるカスタム入札エンジンと、最適なマッチングのためのスマートルーティングアルゴリズムを設計しました。",
                results: "予約のターンアラウンドタイムを60%短縮し、パートナーのエンゲージメントを高めました。現在、プラットフォームは毎月数百の旅行を処理しています。"
            },
            travel: {
                tag: "SaaS",
                type: "自動化",
                title: "旅行CRM & 予約プラットフォーム",
                description: "カスタムCRMと統合された、SEO重視の旅行プラットフォーム。見積もり機能やWhatsApp予約自動化を搭載。",
                id: "travel-crm",
                loom: "https://www.loom.com/embed/placeholder",
                technologies: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
                features: [
                    { title: "自動見積もり", description: "リアルタイムデータに基づいてプロの旅行見積もりを数秒で生成します。" },
                    { title: "WhatsApp統合", description: "WhatsAppを介してクライアントに旅程と予約確認を直接送信します。" },
                    { title: "リード追跡", description: "旅行の問い合わせを効率的に管理および変換するための集中型ダッシュボード。" }
                ],
                gallery: ["/projects/travel-1.png", "/projects/travel-2.png", "/projects/travel-3.png"],
                challenge: "旅行代理店は手作業の事務処理やバラバラな通信チャネルに忙殺され、対応の遅れを招いていました。",
                solution: "自動見積もりエンジンとWhatsApp統合を導入し、旅程と予約のための唯一の情報源を作成しました。",
                results: "エージェントは事務作業で週平均15時間を節約し、WhatsAppのコンバージョン率は40%向上しました。"
            },
            invosync: {
                tag: "エンタープライズSaaS",
                type: "リアルタイム請求",
                title: "InvoSync",
                description: "企業向け請求処理用の高並列・リアルタイム・データ同期エンジン。分散イベント駆動型アーキテクチャを使用して、1秒未満のレイテンシと絶対的なデータ整合性を実現するように設計されています。",
                id: "invosync",
                loom: "",
                technologies: ["Next.js 15", "React 19", "Node.js", "Redis", "MongoDB", "Socket.io", "Zustand"],
                features: [
                    { title: "分散状態同期", description: "Redis Pub/Subを介して、複数のサーバーノードとクライアントインスタンス間でシームレスなリアルタイム更新を実現します。" },
                    { title: "アトミックな請求処理", description: "マルチドキュメントMongoDBトランザクションにより、在庫レベルと財務記録の絶対的な一貫性を保証します。" },
                    { title: "最適化された在庫管理", description: "マルチユーザーの衝突を適切に処理する、バージョン管理された在庫更新システム。" },
                    { title: "高性能な検索", description: "<100msのレイテンシで30,000件以上の商品を処理可能な、サーバーサイドのプロジェクションベース検索。" }
                ],
                gallery: ["/projects/invosync.png", "/projects/invosync-1.png", "/projects/invosync-2.png", "/projects/invosync-3.png"],
                challenge: "標準的なWebSocketはスケール時に失敗し、大量の小売における請求エラーは多大な損失を招きます。ラグやデータの破損なしに、複数の同時タブで状態を管理することは、エンジニアリング上の大きな課題です。",
                solution: "分散メッセージングのためのSocket.io Redisアダプター、アトミックな操作のためのMongooseトランザクション、および高頻度な状態管理のためのZustandを実装しました。",
                results: "100ms未満の同期レイテンシを達成し、ストレステスト中に財務データの誤りをゼロに抑え、従来のシステムと比較して請求処理能力を60%向上させました。"
            },
            caseStudyNav: {
                overview: "概要",
                challenge: "課題",
                solution: "解決策",
                features: "機能",
                gallery: "メディアギャラリー",
                results: "成果と影響",
                tech: "テックスケック",
                backToProjects: "プロジェクトに戻る"
            },
            liveDemo: "ライブデモ",
            github: "GITHUBソース",
            caseStudy: "ケーススタディ"
        },
        cta: {
            title: "次のインテリジェントな",
            titleAccent: "挑戦を始めませんか？",
            description: "新しいプロジェクトについてのお話を楽しみにしています。明確な計画がある場合も、まだアイデアの段階である場合も、どのようにお手伝いできるか、まずはお話ししましょう。",
            button: "予約する"
        },
        footer: {
            copyright: "© 2024 KAIF SHAIKH",
            status: "プロジェクト受付中",
            location: "インド、コルカタ"
        }
    }
};

export type Language = keyof typeof translations;
export type TranslationDict = typeof translations.en;
