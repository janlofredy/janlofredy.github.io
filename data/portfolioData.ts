export interface Project {
    id: string
    title: string
    subtitle: string
    domain: string
    role: string
    description: string
    architectureHighlights: string[]
    techStack: string[]
    liveUrl?: string
    githubUrl?: string
    previewImage?: string
    isOpenPose?: boolean
    isSimulation?: boolean
    badge?: string
}

export interface SkillCategory {
    category: string
    description: string
    skills: string[]
}

export interface ExperienceItem {
    role: string
    company: string
    period: string
    duration?: string
    location: string
    highlights: string[]
    technologies: string[]
}

export const portfolioData = {
    personal: {
        name: "Jose Janlofre Dy",
        preferredName: "Janlofre",
        headline: "Software Developer | Application Architect | Bug Hunter",
        location: "Caraga, Philippines",
        email: "dy@janlofre.com",
        phone: "09127051862",
        canonicalUrl: "https://janlofre.com",
        buyMeACoffeeUrl: "https://buymeacoffee.com/janlofredyx",
        bio: "Full Stack Software Engineer and Application Architect with over 6 years of experience leading teams, modeling database architectures, and engineering custom enterprise platforms across government, healthcare, and fintech domains.",
        stats: [
            { value: "6+", label: "Years Experience" },
            { value: "5+", label: "Enterprise Systems Delivered" },
            { value: "1st", label: "Regional ICT Congress Champion" },
            { value: "100%", label: "Engineering Depth, 0% Fluff" },
        ],
    },

    socials: [
        { name: "GitHub", url: "https://github.com/janlofredy", handle: "@janlofredy" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/janlofre-dy/", handle: "janlofre-dy" },
        { name: "Twitter / X", url: "https://twitter.com/janlofredy", handle: "@janlofredy" },
        { name: "Facebook", url: "https://www.facebook.com/janlofredy", handle: "janlofredy" },
        { name: "Instagram", url: "https://instagram.com/janlofredy", handle: "@janlofredy" },
    ],

    skillCategories: [
        {
            category: "Backend & Systems",
            description: "Distributed architectures, microservices, and server-side runtimes",
            skills: [
                "PHP (Laravel, CodeIgniter)",
                "Python (Flask)",
                "Node.js / Express",
                "RESTful APIs & Webhooks",
                "Livewire Server Components",
                "Java / C / C#",
            ],
        },
        {
            category: "Databases & Storage",
            description: "Relational data modeling, schema integrity, and cloud persistence",
            skills: [
                "MySQL & MariaDB",
                "PostgreSQL",
                "Database Design & Normalization",
                "Eloquent ORM",
                "Firebase (Auth, Firestore, Storage)",
                "SQLite",
            ],
        },
        {
            category: "Frontend Logic & Web",
            description: "Client-side state management, reactive view engines, and PWA capabilities",
            skills: [
                "Nuxt.js (Nuxt 3)",
                "Vue.js (Vue 2 & 3)",
                "TypeScript & Modern JavaScript",
                "Tailwind CSS",
                "Alpine.js",
                "React.js",
                "Pinia State Management",
            ],
        },
        {
            category: "Graphics, AI & Optimization",
            description: "High-performance graphics pipelines, computer vision, and algorithm efficiency",
            skills: [
                "Three.js (WebGL)",
                "Computer Vision (OpenPose)",
                "Hidden Markov Models (HMM)",
                "PointerLockControls Physics Loop",
                "Algorithm Optimization",
                "Git & GitHub Actions CI/CD",
            ],
        },
    ] as SkillCategory[],

    projects: [
        {
            id: "ap-training",
            title: "Arizona Provider Training (AP Training)",
            subtitle: "Enterprise Healthcare Training, LMS & B2B E-Commerce Platform",
            domain: "Enterprise LMS / Healthcare Compliance",
            role: "Collaborator",
            description:
                "Comprehensive full-stack enterprise learning platform enabling healthcare workers and care agencies across Arizona to book, complete, and track state-mandated certifications. Built on the TALL stack with complex multi-location scheduling and B2B corporate agency accounts.",
            architectureHighlights: [
                "Engineered a reactive course catalog using Laravel Livewire for debounce searching and real-time cart state synchronization without full page reloads.",
                "Architected a unified scheduling pipeline handling three simultaneous delivery channels: self-paced online modules, real-time synchronized Zoom classes, and on-premise physical classroom bookings across multiple AZ facilities.",
                "Constructed an enterprise B2B Agency portal with bulk roster seat purchasing, employee compliance monitoring, and automated verified certificate generation.",
            ],
            techStack: ["Laravel", "Livewire 3", "Alpine.js", "Tailwind CSS", "MySQL", "Eloquent ORM", "Zoom API"],
            liveUrl: "https://ap.training/",
            badge: "Enterprise Production",
            previewImage: "/images/projects/ap-training.webp",
        },
        {
            id: "lowermydti",
            title: "LowerMyDTI",
            subtitle: "Fintech Debt-to-Income Optimization & Financial Advisory Platform",
            domain: "Fintech / Custom Software",
            role: "Collaborator",
            description:
                "Custom fintech platform offering consumer debt analysis, debt-to-income optimization, and structured payment workflows. Combines a fast Nuxt frontend with distributed microservices, automated payment handling, and enterprise security layers.",
            architectureHighlights: [
                "Engineered full-stack integration with PayPal Live API for transactional processing and subscription lifecycle management.",
                "Integrated Firebase Auth & Cloud Storage alongside custom REST microservices for secure token verification and financial document uploads.",
                "Implemented Google reCAPTCHA Enterprise bot mitigation and Google Places address verification to maintain zero-fraud ingestion.",
            ],
            techStack: ["Nuxt.js", "Vue.js", "REST Microservices", "PayPal API", "Firebase Auth", "reCAPTCHA Enterprise", "Google Maps API"],
            liveUrl: "https://lowermydti.com/",
            badge: "Fintech Platform",
            previewImage: "https://lowermydti.com/images/lmd-login-logo.png",
        },
        {
            id: "chrms-butuan",
            title: "City Human Resource Management System (CHRMS)",
            subtitle: "Government Enterprise Municipal HRIS & Workforce Infrastructure",
            domain: "Public Sector / Government Enterprise",
            role: "Collaborator",
            description:
                "Enterprise municipal human resource and records management infrastructure built for the City Government of Butuan, centralizing employee lifecycles, service records, and leave auditing across municipal offices.",
            architectureHighlights: [
                "Engineered granular Role-Based Access Control (RBAC) supporting multi-tier municipal administrative divisions and department clearances.",
                "Modeled high-integrity relational database schemas for service record histories, automated leave credit accrual, and immutable audit trails.",
                "Ensured high availability and strict public sector data protection standards for internal municipal government staff.",
            ],
            techStack: ["PHP", "MySQL", "Relational Database Design", "RBAC", "Enterprise Intranet", "Audit Logging"],
            liveUrl: "https://chrms.butuan.gov.ph/",
            badge: "Municipal Government",
            previewImage: "/images/projects/chrms.webp",
        },
        {
            id: "the-library",
            title: "The Journal Library",
            subtitle: "Progressive Web App & Skeuomorphic Interactive Archival System",
            domain: "PWA / Digital Archival",
            role: "Personal Project",
            description:
                "A digital library and journal application engineered as an offline-first Progressive Web App, featuring local state persistence and a custom skeuomorphic tactile rendering interface for book collections.",
            architectureHighlights: [
                "Built an offline-first PWA caching strategy with service workers, manifest metadata, and local data synchronization.",
                "Engineered an interactive skeuomorphic UI rendering engine replicating physical book spines and tactile paper reading experience.",
                "Designed low-latency client state management ensuring fluid transitions and persistent reading markers across browser sessions.",
            ],
            techStack: ["Vue.js", "TypeScript", "PWA / Service Workers", "Local Storage", "CSS Architecture"],
            liveUrl: "https://janlofre.com/TheLibrary",
            badge: "Interactive PWA",
            previewImage: "/images/projects/the-library.webp",
        },
        {
            id: "threejs-sim",
            title: "Real-Time 3D Movement Engine",
            subtitle: "Interactive In-Browser WebGL Physics & Navigation Simulation",
            domain: "WebGL / Real-Time 3D",
            role: "Personal Project",
            description:
                "In-browser 3D movement test built with Three.js and Vue 3. Features first-person PointerLock controls, double-tap fly mode mechanics, 6-axis keyboard tracking, and dynamic aspect-ratio rendering.",
            architectureHighlights: [
                "Implemented 60fps WebGL requestAnimationFrame render loop with procedural ambient/hemisphere lighting and fog attenuation.",
                "Engineered high-frequency keyboard state polling (`WASD + Space + Shift`) with double-press space detection for flight mode toggling.",
                "Integrated PointerLockControls with dynamic canvas resize recalculation to preserve aspect ratio across viewports.",
            ],
            techStack: ["Three.js", "WebGL", "Vue 3", "PointerLockControls", "Animation Loop"],
            liveUrl: "/practice/threedy",
            badge: "Playable WebGL",
            isSimulation: true,
        },
        {
            id: "aslt",
            title: "American Sign Language Translator (ASLT)",
            subtitle: "Computer Vision Gesture Translation Pipeline (Research Thesis)",
            domain: "Computer Vision / Pattern Recognition",
            role: "Thesis Researcher",
            description:
                "Computer science research thesis developing an automated continuous sign language translator. Leverages deep learning keypoint extraction to capture multi-joint skeletal coordinates and probabilistic sequential modeling to translate gesture streams into human-readable text.",
            architectureHighlights: [
                "Extracted real-time body, hand, and facial landmark coordinates from video input using the OpenPose deep learning architecture.",
                "Implemented Hidden Markov Models (HMM) to classify temporal sequence states and handle rate variability in hand gestures.",
                "Benchmarked recognition accuracy and latency trade-offs for continuous multi-frame sign translation.",
            ],
            techStack: ["Python", "OpenPose", "Hidden Markov Models (HMM)", "Computer Vision", "NumPy"],
            badge: "CS Thesis Research",
            isOpenPose: true,
            previewImage: "https://raw.githubusercontent.com/CMU-Perceptual-Computing-Lab/openpose/master/.github/media/pose_face_hands.gif",
        },
    ] as Project[],

    experience: [
        {
            role: "Senior Web Developer",
            company: "City Government of Butuan",
            period: "May 2026 – Present",
            location: "Butuan, Philippines",
            highlights: [
                "Leading architectural design and technical maintenance for municipal enterprise systems, including the City Human Resource Management System (CHRMS / HRIS).",
                "Establishing strict data compliance, role-based security boundaries, and high-availability database replication for civil government operations.",
            ],
            technologies: ["PHP", "MySQL", "Enterprise Architecture", "RBAC", "Security Audit"],
        },
        {
            role: "Software Development Manager",
            company: "Engtech Global Solutions Inc.",
            period: "Jan 2024 – Feb 2026",
            duration: "2 yrs 2 mos",
            location: "Butuan, Philippines",
            highlights: [
                "Directed cross-functional software engineering teams in delivering complex custom web applications and enterprise portals for global clients.",
                "Defined coding standards, automated code review workflows, and sprint architectures, maintaining high release velocity and software quality.",
            ],
            technologies: ["Team Leadership", "Software Architecture", "CI/CD", "Code Quality", "Agile"],
        },
        {
            role: "Web Application Architect",
            company: "Engtech Global Solutions Inc.",
            period: "Aug 2022 – Jan 2024",
            duration: "1 yr 6 mos",
            location: "Butuan, Philippines",
            highlights: [
                "Designed system architectures, relational database schemas, and microservice/API communication protocols for bespoke client software.",
                "Conducted technical feasibility studies, database query optimization, and performance profiling for high-traffic applications.",
            ],
            technologies: ["System Design", "Database Modeling", "API Contracts", "Performance Tuning"],
        },
        {
            role: "Full-stack Developer",
            company: "myBizNiche",
            period: "Dec 2022 – Jan 2024",
            duration: "1 yr 2 mos",
            location: "Remote / Global",
            highlights: [
                "Engineered scalable production web applications leveraging Nuxt.js and Laravel for diverse client industries.",
                "Delivered complex third-party API integrations (payment processors, cloud storage, transactional notifications) with resilient fallback logic.",
            ],
            technologies: ["Nuxt.js", "Laravel", "REST APIs", "PayPal Integration", "Tailwind CSS"],
        },
        {
            role: "Senior Software Developer",
            company: "Engtech Global Solutions Inc.",
            period: "Jul 2021 – Aug 2022",
            duration: "1 yr 2 mos",
            location: "Butuan, Philippines",
            highlights: [
                "Spearheaded backend logic implementation, relational schema migrations, and complex business logic pipelines.",
                "Mentored junior developers on software design patterns, debugging methodologies, and automated testing.",
            ],
            technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs"],
        },
        {
            role: "Instructor (Computer Science)",
            company: "ACLC College of Butuan",
            period: "Apr 2020 – Jun 2023",
            duration: "3 yrs 3 mos",
            location: "Butuan, Philippines",
            highlights: [
                "Instructed undergraduate computer science students in algorithms, data structures, database design, and software engineering principles.",
                "Coached competitive programming students in algorithmic problem solving and regional programming contests.",
            ],
            technologies: ["Data Structures", "Algorithms", "Database Design", "Software Engineering", "C/C++"],
        },
        {
            role: "Junior Software Developer & Intern",
            company: "Engtech Global Solutions Inc.",
            period: "Jun 2018 – Jul 2021",
            duration: "3 yrs 1 mo",
            location: "Butuan, Philippines",
            highlights: [
                "Developed full-stack web features, database queries, and responsive frontends across multiple commercial client web apps.",
            ],
            technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
        },
    ] as ExperienceItem[],

    education: {
        degree: "Bachelor of Science in Computer Science (BS CS)",
        institution: "ACLC College of Butuan",
        period: "July 2015 – June 2019",
        achievements: [
            "Regional Programming Champion — 1st Place, Caraga Regional ICT Congress Programming Challenge",
            "Codersguild Competition Champion",
            "Undergraduate Thesis: American Sign Language Translator (ASLT) utilizing OpenPose and Hidden Markov Models",
        ],
    },
}
