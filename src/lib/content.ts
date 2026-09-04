export type Lang = "en" | "de";

const en = {
  langLabel: "DE",
  langAria: "Auf Deutsch wechseln",
  announcement: {
    text: "Free live webinar: AI without fear, 30 September, 10:30 CEST",
    cta: "Save your spot",
    href: "https://humint.kit.com/351adfadd9",
    secondaryCta: "Prefer to start right away? View the compact self-paced course",
    secondaryHref: "https://humint.gumroad.com/l/ogjbl",
    ariaLabel: "Announcement",
    closeAria: "Close announcement",
  },
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#work", label: "Work" },
      { href: "#contact", label: "Contact" },
    ],
    tagline: "Human intelligence. AI powered.",
    cta: "Let's talk",
    gumroad: { href: "https://humint.gumroad.com/l/ogjbl", label: "Self-paced course" },
  },
  hero: {
    eyebrow: "AI consulting · Berlin",
    headline: "Strategy, build,",
    headlineItalic: "& the human side.",
    intro:
      "Independent advisory and fractional product leadership for teams that need strategy, implementation, and the bridge between them.",
    availability:
      "Available for EU and remote engagements in English, German, and Dutch.",
    ctaPrimary: "Book an intro call",
    gumroad: "Compact self-paced course: Set up your first workflow",
  },
  credibility: [
    "Hands on AI systems",
    "Product and implementation",
    "GDPR and EU AI Act aware",
    "Efficient, right sized models",
  ],
  about: {
    eyebrow: "About",
    p1: "Before I managed the tools, I used them. As an online stylist with my own customer portfolio, I knew what the job actually demanded. Then I became the Product Manager building the platform for people doing that same work.",
    p2: "I now work as an AI consultant and product leader, helping small businesses and founders build systems that reduce manual work without sidelining their people. That includes choosing the right model for the job, not the biggest one, so the systems I build stay efficient on cost, on compute, and on energy.",
    p3a: "No AI for the sake of it.",
    p3b: "Just systems that reduce manual work and free people up to do what only humans can do.",
    p4: "Based in Berlin. Working in Dutch (native), English (C2), and German (C1).",
    portraitAlt: "Portrait of Dina Bosma Buczynska",
  },
  belief: {
    eyebrow: "What I believe",
    line1: "AI should make your people",
    word: "faster,",
    line3: "not fewer.",
    body: "I build AI systems that reduce the repetitive, low value work that slows teams down, so people can focus on judgment, relationships, and the work that moves the business.",
    body2: "Not automation for its own sake. Systems that make your team more capable than they were before.",
    body3: "Built responsibly: fair, transparent, and proportionate.",
  },
  services: {
    eyebrow: "What I do",
    title: "Services.",
    items: [
      {
        title: "Workflow audit.",
        desc: "Most teams know something is slowing them down. They do not always know what. I map how work actually moves through your team, find where coordination overhead is hiding, and put a number on what it is costing you. The output is a clear picture of where automation or process change would have the most impact, before you spend anything on building. That includes spotting redundant steps that waste time and compute.",
      },
      {
        title: "AI workflow integration.",
        desc: "You have repetitive work eating up your team's time. I connect agents, automations, and pipelines to how your team really works, not how a demo assumes they do.",
      },
      {
        title: "AI product strategy and roadmapping.",
        desc: "You know AI should be part of your product but you are not sure where to start or what to build first. I help you cut through the noise and decide what moves the needle, including what should stay with humans and what should not be automated at all.",
      },
      {
        title: "Build or buy analysis.",
        desc: "There are a hundred tools promising to solve your problem. I give you an honest comparison with no vendor allegiance and no resale fees. Where it matters, I also weigh energy use, cost, and how the tool treats your data.",
      },
      {
        title: "Practical AI compliance support.",
        desc: "GDPR and the EU AI Act feel overwhelming. I translate them into clear steps your team can follow, without the legalese. That includes human oversight, risk classification, and documentation that holds up under review.",
      },
      {
        title: "Fractional product leadership.",
        desc: "You need someone who can work alongside your team, not just hand over a slide deck. I embed part time and help you ship.",
      },
    ],
  },
  who: {
    eyebrow: "Engagements",
    title: "Who I work with.",
    intro:
      "I work best with founders, small teams, and SMEs across Europe who want to use AI in a way that still feels human. I focus especially on the DACH market, where many small businesses run on repetitive operational work that could be handled more efficiently.",
    listIntro: "That includes:",
    bullets: [
      "Small and growing service businesses in the DACH region, such as construction companies, real estate agents, law offices, tax consultancies, and craft businesses, where repetitive operational work eats up time each week.",
      "Founders and startups building their first AI layer, without a dedicated tech team to make it happen.",
      "Retail and e commerce teams, especially in fashion and lifestyle, sitting on data they are not yet using.",
    ],
    closing:
      "If you have identified a problem and need someone who can both think it through and build something real, that is where I come in.",
    fitHeading: "When it tends to fit.",
    fit1: "Usually your team has spotted an AI opportunity but has not turned it into a real build yet. You have tested a few tools, but nothing has stuck operationally, and the project is stalled somewhere between idea, implementation, and adoption.",
    fit2: "At that point you need hands on help, not another slide deck.",
  },
  testimonials: {
    eyebrow: "What colleagues say",
    title: "In their words.",
    quotes: [
      {
        quote:
          "Dina is a professional, motivated, and capable Product Owner who bridges the gap between business needs and technical execution effortlessly.",
        name: "Biniam Asnake Kefale",
        role: "Engineering Lead",
      },
      {
        quote:
          "Her ability to take initiative and drive projects forward with focus and reliability has made a real impact on our team.",
        name: "Diana Pulnar",
        role: "VP Product",
      },
      {
        quote:
          "Dina brings a rare combination of dedication, professionalism, warmth, and humor, making her not only effective but also a joy to collaborate with.",
        name: "Malin Finne",
        role: "CCO & Former COO",
      },
    ],
  },
  cases: {
    eyebrow: "Selected work",
    title: "Case studies.",
    complianceLabel: "Compliance & buyer readiness.",
    complianceBody:
      "Delivered with full compliance documentation: GDPR data protection impact assessment, EU AI Act compliance pack ready for stakeholder review, and a standalone ROI model. Everything a buyer needs before saying yes.",
    roiNote:
      "Based on a 15–20% member save rate in a modelled scenario.",
    viewProject: "View project on GitHub ↗",
    deckLabel: "Pitch deck.",
    deckName: "Spottr. Smart Member Retention.",
    deckDownload: "Download deck ↓",
    items: [
      {
        client: "Outfittery",
        title: "AI Powered Stylist Platform and Automation.",
        role: "Product Manager, AI and platform initiatives",
        body: "The online stylist team was spending a significant part of every working day on coordination that should have been handled by the system. Matching customers to stylists, routing work, chasing status. I defined the problem with operations, scoped the fix with engineering, and shipped iteratively into live workflows without disrupting the team mid shift. From there I led product for a wider set of AI systems: automated outfit curation with a structured AB testing program against human stylists, and a feedback system that unified four disconnected internal tools and platform into one stylist facing view with AI generated summaries.",
        deliverables: [
          "Reduced manual coordination workload by 80% through automated assignment of customers to stylists",
          "Increased throughput from 29 to 34 orders per day through AI assisted decision support, keeping stylists in control of every customer facing call",
          "Targeted 80%+ preview acceptance rate for AI generated outfit previews across a structured menswear and womenswear testing program",
          "Unified four fragmented feedback sources into a single stylist facing view, closing a gap where customer input was getting lost before reaching decision makers",
        ],
        metrics: [
          { value: "+17%", label: "efficiency (29 → 34 orders/day)" },
          { value: "−80%", label: "manual coordination workload" },
        ],
        tags: [] as string[],
      },
      {
        client: "Spottr / Capstone Project",
        title: "AI Member Retention for Boutique Fitness Studios.",
        role: "End to end AI consultant engagement",
        body: "Structured as a real consulting engagement from day one. Identified churn as the core commercial problem for boutique fitness studios, built and validated a working MVP, and packaged the result with the documentation a buyer needs before saying yes to any AI system.",
        deliverables: [
          "Working churn prediction model at 92.5% accuracy with automated weekly coach briefings via n8n",
          "GDPR data protection impact assessment covering wearable and member data",
          "EU AI Act compliance pack and standalone ROI model included as standard",
        ],
        metrics: [
          { value: "+/− €11,520", label: "revenue saved per year" },
          { value: "+/− 284%", label: "ROI" },
        ],
        tags: ["Python", "scikit-learn", "LangChain", "n8n", "GDPR", "EU AI Act"],
        link: "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Final_Project_DinaBB",
      },
    ],
  },
  projects: {
    eyebrow: "Also",
    title: "Selected builds.",
    labels: {
      what: "What.",
      how: "How it was built.",
      outcomes: "Outcomes.",
      learned: "What I learned.",
      github: "GitHub ↗",
      medium: "Read post ↗",
    },
    items: [
      {
        title: "n8n Automation Workflows.",
        desc: "Production workflows built across multiple projects: scheduled research pipelines, survey triggers, weekly email briefings, and Slack and Notion integrations. Built for real operational use, not demos.",
        tags: ["n8n", "Automation", "APIs", "Webhooks"],
        github: "https://github.com/dlbosma-hue/bootcamp_env",
        details: {
          what: "A collection of production n8n workflows built across the bootcamp. Not demo workflows: these run on schedules, handle errors, and integrate with real tools.",
          how: "Workflows include: four Monday morning media audit triggers (NPR, NYT, Guardian, Al Jazeera) posting to Notion and Slack; weekly Spottr coach briefing emails with churn risk summaries; survey response triggers; and webhook based integrations for data flow across systems.",
          outcomes:
            "Operational workflows running in real deployments. The Spottr briefings and media audit pipelines are live.",
          learned:
            "Automation breaks at boundaries: API rate limits, malformed responses, empty result sets. Good workflow design handles the unhappy path, not just the happy one.",
        },
      },
      {
        title: "LangGraph Agent.",
        desc: "A ReAct agent connected to multiple live data sources simultaneously, handling tool selection and sequencing in real time. Built to show what orchestration looks like when it has to work in practice, not just in a notebook.",
        tags: ["LangGraph", "LangChain", "FastAPI", "LangSmith", "Python"],
        github:
          "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/project_3_media_agent",
        medium:
          "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
        details: {
          what: "An AI agent that audits news articles for representation gaps across gender, race, disability, and other marginalised groups. It analyses bylines, source diversity, framing language, and subject portrayal, then generates a structured report.",
          how: "Built with LangGraph ReAct loop, giving the agent access to RSS feeds, NewsAPI, Wikipedia, and a Pinecone RAG store. Deployed as a FastAPI service on Railway. Four n8n workflows run Monday mornings, pulling from NPR, NYT, The Guardian, and Al Jazeera and posting results to Notion and Slack.",
          outcomes:
            "Live production deployment on Railway. Monitored end to end via LangSmith. Written up in a Medium post covering what went wrong during the build.",
          learned:
            "Agents fail in interesting ways when tools return unexpected formats. LangSmith traces made debugging tractable in a way that print statements never could.",
        },
      },
      {
        title: "AI Content Creator.",
        desc: "A structured content generation tool built around deliberate prompt design. Give it a topic and an audience, and it produces formatted content across multiple formats. Useful for small teams without a dedicated content function.",
        tags: ["Gradio", "OpenAI API", "Prompt Engineering", "Python"],
        github:
          "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/ai-content-creator",
        details: {
          what: "A content generation tool with a Gradio interface. Give it a topic, a target audience, and a tone, and it produces structured content, social posts, summaries, outlines, tailored to the brief. The focus is on how prompt architecture drives output quality.",
          how: "Built with a layered prompting approach: a system prompt sets voice and constraints, a structured user prompt encodes the brief, and chain of thought formatting guides the model toward consistent, usable output. Gradio provides the interface, making it usable without touching code. OpenAI API powers generation.",
          outcomes:
            "Demonstrates that prompt engineering is a design discipline, not a workaround. Small structural changes to the prompt produce measurable differences in output consistency and format compliance.",
          learned:
            "The interface shapes how people prompt. A well designed Gradio UI with clear input fields leads to better prompts and better outputs, the UX and the prompt design are inseparable.",
        },
      },
    ],
  },
  how: {
    eyebrow: "How I work",
    title: "A clear engagement.",
    steps: [
      {
        title: "Find the coordination tax.",
        desc: "Before anything gets built, I look at how work actually moves. Where are people doing what a process should be doing? Where is information getting lost between handoffs? Most operational drag hides in the gaps between tools and between people, not in the tools themselves.",
      },
      {
        title: "Decide what is worth fixing.",
        desc: "Not every inefficiency is worth automating. I help you separate the high cost, high frequency problems from the ones that feel annoying but do not move the needle. Honest trade offs, no vendor allegiance, no solution looking for a problem. We keep humans in the loop where judgment matters.",
      },
      {
        title: "Build something that works in practice.",
        desc: "A working slice, not a slide deck. Agents, automations, pipelines, or product features, scoped to deliver value early and designed around how your team actually works, not how a demo assumes they do.",
      },
      {
        title: "Hand it over so it sticks.",
        desc: "Most AI projects fail at adoption, not at build. I make sure the system is usable without me: documented, compliant, accessible, and understood by the people who will run it. Because a system your team does not use is just expensive infrastructure.",
      },
    ],
  },
  credentials: {
    eyebrow: "Credentials",
    title: "Background and certifications.",
    experienceHeading: "Experience.",
    certificationsHeading: "Certifications.",
    experience: [
      {
        title: "Product Manager, internal tools and platform.",
        org: "Outfittery",
        year: "4 yrs",
        detail:
          "Shipped internal AI assisted and operational tools used daily by online stylists and operations teams.",
      },
    ],
    certifications: [
      {
        title: "AI Consulting & Integration.",
        org: "IronHack",
        year: "2026",
        detail:
          "Intensive programme covering agents, RAG, ML, automation, GDPR and EU AI Act, responsible AI principles, and green AI considerations, delivered through a full client style capstone.",
      },
      {
        title: "Microsoft Certified: AI 900 Azure AI Fundamentals.",
        org: "Microsoft",
        year: "",
        detail:
          "Foundational certification in AI workloads, responsible AI, and Azure AI services.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk.",
    intro:
      "Based in Berlin. Available for consulting, workshops, and fractional product leadership across Europe.",
    availability: "Currently available for Q4 and 2027 engagements.",
    pricing:
      "Most projects start with a scoping conversation or a one day workshop. From there, engagements are shaped around what actually makes sense for your team and situation. Happy to talk through what that could look like.",
    values:
      "I work with EU values in mind: privacy first, human oversight, proportionate technology, and respect for the people affected by the system.",
  },
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending…",
    success: "Thanks, I'll be in touch shortly.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Network error. Please try again.",
  },
  footer: {
    brand: "HUMINT - Human intelligence. AI powered.",
    meta: "Dina Bosma Buczynska · Berlin · EN / DE / NL",
    impressum: "Impressum",
  },
};

const de: typeof en = {
  langLabel: "EN",
  langAria: "Switch to English",
  announcement: {
    text: "Kostenloses Live-Webinar: KI ohne Angst, 30. September, 10:30 Uhr",
    cta: "Platz sichern",
    href: "https://humint.kit.com/351adfadd9",
    secondaryCta: "Lieber sofort starten? Zum kompakten Selbstlernkurs",
    secondaryHref: "https://humint.gumroad.com/l/ogjbl",
    ariaLabel: "Ankündigung",
    closeAria: "Ankündigung schließen",
  },
  nav: {
    links: [
      { href: "#about", label: "Über mich" },
      { href: "#services", label: "Leistungen" },
      { href: "#work", label: "Projekte" },
      { href: "#contact", label: "Kontakt" },
    ],
    tagline: "Menschliche Intelligenz. KI-gestützt.",
    cta: "Gespräch buchen",
    gumroad: { href: "https://humint.gumroad.com/l/ogjbl", label: "Selbstlernkurs" },
  },
  hero: {
    eyebrow: "KI-Beratung · Berlin",
    headline: "Strategie, Umsetzung",
    headlineItalic: "& der menschliche Faktor.",
    intro:
      "Unabhängige Beratung und Product Leadership auf Zeit für Teams, die Strategie, Umsetzung und die Brücke dazwischen brauchen.",
    availability:
      "Verfügbar für Projekte in der EU und remote, auf Englisch, Deutsch und Niederländisch.",
    ctaPrimary: "Kennenlerngespräch buchen",
    gumroad: "Kompakter Selbstlernkurs: Ersten Workflow selbst einrichten",
  },
  credibility: [
    "KI-Systeme in der Praxis",
    "Produkt und Umsetzung",
    "DSGVO und EU AI Act im Blick",
    "Effiziente, passgenaue Modelle",
  ],
  about: {
    eyebrow: "Über mich",
    p1: "Bevor ich die Tools gemanagt habe, habe ich sie selbst benutzt. Als Online-Stylistin mit eigenem Kundenportfolio wusste ich, was der Job wirklich verlangt. Danach war ich die Produktmanagerin, die die Plattform für genau diese Arbeit gebaut hat.",
    p2: "Heute arbeite ich als KI-Beraterin und Product Lead und helfe kleinen Unternehmen und Gründer:innen, Systeme zu bauen, die manuelle Arbeit reduzieren, ohne die Menschen außen vor zu lassen. Dazu gehört, das passende Modell für die Aufgabe zu wählen und nicht das größte, damit die Systeme bei Kosten, Rechenleistung und Energieverbrauch effizient bleiben.",
    p3a: "Keine KI um der KI willen.",
    p3b: "Nur Systeme, die manuelle Arbeit reduzieren und Menschen den Raum geben für das, was nur Menschen können.",
    p4: "Ansässig in Berlin. Ich arbeite auf Niederländisch (Muttersprache), Englisch (C2) und Deutsch (C1).",
    portraitAlt: "Porträt von Dina Bosma Buczynska",
  },
  belief: {
    eyebrow: "Meine Überzeugungen",
    line1: "KI soll Ihr Team",
    word: "schneller machen,",
    line3: "nicht kleiner.",
    body: "Ich baue KI-Systeme, die die repetitive Arbeit mit geringem Wert reduzieren, die Teams ausbremst, damit Menschen sich auf Urteilsvermögen, Beziehungen und die Arbeit konzentrieren können, die das Geschäft voranbringt.",
    body2: "Keine Automatisierung um ihrer selbst willen. Systeme, die Ihr Team leistungsfähiger machen als zuvor.",
    body3: "Verantwortungsvoll gebaut: fair, transparent und angemessen.",
  },
  services: {
    eyebrow: "Was ich mache",
    title: "Leistungen.",
    items: [
      {
        title: "Workflow-Analyse.",
        desc: "Die meisten Teams spüren, dass etwas sie ausbremst. Nur nicht immer, was genau. Ich zeichne nach, wie Arbeit wirklich durch Ihr Team läuft, finde die versteckten Koordinationskosten und beziffere, was sie Sie kosten. Das Ergebnis ist ein klares Bild davon, wo Automatisierung oder Prozessänderungen den größten Effekt hätten, bevor Sie Geld in den Aufbau stecken. Dazu gehört auch das Erkennen redundanter Schritte, die Zeit und Rechenleistung verschwenden.",
      },
      {
        title: "Integration von KI in Arbeitsabläufe.",
        desc: "Repetitive Arbeit frisst die Zeit Ihres Teams. Ich verbinde Agenten, Automatisierungen und Pipelines mit der Art, wie Ihr Team wirklich arbeitet, und nicht so, wie eine Demo es annimmt.",
      },
      {
        title: "KI-Produktstrategie und Roadmap.",
        desc: "Sie wissen, dass KI Teil Ihres Produkts sein sollte, aber nicht, wo Sie anfangen oder was zuerst entstehen soll. Ich helfe Ihnen, den Lärm zu filtern und zu entscheiden, was wirklich etwas bewegt, inklusive dem, was bei Menschen bleiben sollte und was gar nicht automatisiert werden sollte.",
      },
      {
        title: "Make-or-Buy-Analyse.",
        desc: "Hundert Tools versprechen, Ihr Problem zu lösen. Ich liefere einen ehrlichen Vergleich, ohne Anbieterbindung und ohne Provisionen. Wo es relevant ist, bewerte ich auch Energieverbrauch, Kosten und den Umgang mit Ihren Daten.",
      },
      {
        title: "Praktische Unterstützung bei KI-Compliance.",
        desc: "DSGVO und EU AI Act wirken überwältigend. Ich übersetze sie in klare Schritte, denen Ihr Team folgen kann, ganz ohne Juristendeutsch. Dazu gehören menschliche Aufsicht, Risikoklassifizierung und Dokumentation, die einer Prüfung standhält.",
      },
      {
        title: "Product Leadership auf Zeit.",
        desc: "Sie brauchen jemanden, der mit Ihrem Team arbeitet und nicht nur eine Präsentation übergibt. Ich begleite Ihr Team teilzeitbasiert und helfe beim Liefern.",
      },
    ],
  },
  who: {
    eyebrow: "Zusammenarbeit",
    title: "Mit wem ich arbeite.",
    intro:
      "Am besten funktioniert die Zusammenarbeit mit Gründer:innen, kleinen Teams und KMU in ganz Europa, die KI so nutzen wollen, dass es menschlich bleibt. Ich fokussiere mich besonders auf den DACH-Raum, wo viele kleine Unternehmen von repetitiver operativer Arbeit leben, die effizienter ablaufen könnte.",
    listIntro: "Dazu gehören:",
    bullets: [
      "Kleine und wachsende Dienstleistungsunternehmen im DACH-Raum, zum Beispiel Bauunternehmen, Makler, Kanzleien, Steuerberater und Handwerksbetriebe, bei denen repetitive operative Arbeit jede Woche Zeit frisst.",
      "Gründer:innen und Startups, die ihre erste KI-Ebene aufbauen, ohne eigenes Tech-Team im Rücken.",
      "Teams aus Retail und E-Commerce, besonders in Fashion und Lifestyle, die auf Daten sitzen, die sie noch nicht nutzen.",
    ],
    closing:
      "Wenn Sie ein Problem erkannt haben und jemanden brauchen, der es durchdenkt und auch wirklich etwas baut, dann komme ich ins Spiel.",
    fitHeading: "Wann es meistens passt.",
    fit1: "Meist hat Ihr Team eine KI-Chance erkannt, aber noch nichts Echtes daraus gebaut. Ein paar Tools wurden getestet, operativ ist nichts geblieben, und das Projekt steckt irgendwo zwischen Idee, Umsetzung und Akzeptanz fest.",
    fit2: "An diesem Punkt brauchen Sie praktische Hilfe, keine weitere Präsentation.",
  },
  testimonials: {
    eyebrow: "Was Kolleginnen und Kollegen sagen",
    title: "Stimmen aus der Zusammenarbeit.",
    quotes: [
      {
        quote:
          "Dina ist eine professionelle, motivierte und starke Product Ownerin, die mühelos die Lücke zwischen Geschäftsanforderungen und technischer Umsetzung schließt.",
        name: "Biniam Asnake Kefale",
        role: "Engineering Lead",
      },
      {
        quote:
          "Ihre Fähigkeit, Initiative zu ergreifen und Projekte fokussiert und verlässlich voranzutreiben, hat unser Team spürbar geprägt.",
        name: "Diana Pulnar",
        role: "VP Product",
      },
      {
        quote:
          "Dina vereint auf seltene Weise Einsatz, Professionalität, Wärme und Humor. Das macht sie nicht nur wirksam, sondern auch zu einer Freude in der Zusammenarbeit.",
        name: "Malin Finne",
        role: "CCO & ehemalige COO",
      },
    ],
  },
  cases: {
    eyebrow: "Ausgewählte Arbeiten",
    title: "Fallstudien.",
    complianceLabel: "Compliance und Kaufbereitschaft.",
    complianceBody:
      "Geliefert mit vollständiger Compliance-Dokumentation: DSGVO-Datenschutz-Folgenabschätzung, EU-AI-Act-Compliance-Paket bereit für die Prüfung durch Stakeholder und ein eigenständiges ROI-Modell. Alles, was ein Käufer braucht, bevor er zusagt.",
    roiNote:
      "Basierend auf einer Mitglieder-Save-Rate von 15–20% in einem modellierten Szenario.",
    viewProject: "Projekt ansehen in GitHub ↗",
    deckLabel: "Pitch-Deck.",
    deckName: "Spottr. Smart Member Retention.",
    deckDownload: "Deck herunterladen ↓",
    items: [
      {
        client: "Outfittery",
        title: "KI-gestützte Stylist-Plattform und Automatisierung.",
        role: "Produktmanagerin, KI und Plattforminitiativen",
        body: "Das Online-Stylist-Team verbrachte einen erheblichen Teil jedes Arbeitstags mit Koordination, die das System hätte übernehmen sollen. Kundinnen und Kunden den Stylistinnen zuordnen, Arbeit verteilen, Status nachhalten. Ich habe das Problem gemeinsam mit dem operativen Team definiert, die Lösung mit der Entwicklung zugeschnitten und iterativ in laufende Abläufe ausgeliefert, ohne das Team mitten in der Schicht zu stören. Danach habe ich das Produkt für eine ganze Reihe von KI-Systemen verantwortet: automatisierte Outfit-Zusammenstellung mit einem strukturierten A/B-Testprogramm gegen menschliche Stylistinnen sowie ein Feedback-System, das vier getrennte interne Tools und Plattformen in einer einzigen Ansicht mit KI-generierten Zusammenfassungen zusammengeführt hat.",
        deliverables: [
          "80% weniger manuelle Koordinationsarbeit durch automatisierte Zuordnung von Kundinnen und Kunden zu Stylistinnen",
          "Steigerung von 17% bis 20% pro Tag durch KI-gestützte Entscheidungshilfe, wobei die Stylistinnen jede kundennahe Entscheidung behalten",
          "Zielwert von über 80% Akzeptanz für KI-generierte Outfit-Vorschläge in einem strukturierten Testprogramm für Herren und Damenmode",
          "Vier verstreute Feedbackquellen in einer einzigen Ansicht gebündelt und damit die Lücke geschlossen, in der Kundenfeedback verloren ging, bevor es Entscheider erreichte",
        ],
        metrics: [
          { value: "+17%", label: "Effizienz" },
          { value: "−80%", label: "manuelle Koordinationsarbeit" },
        ],
        tags: [] as string[],
      },
      {
        client: "Spottr / Abschlussprojekt",
        title: "KI-gestützte Mitgliederbindung für Boutique-Fitnessstudios.",
        role: "Durchgängiges KI-Beratungsprojekt",
        body: "Von Tag eins als echtes Beratungsprojekt aufgesetzt. Abwanderung als zentrales kommerzielles Problem von Boutique-Fitnessstudios identifiziert, ein funktionierendes MVP gebaut und validiert und das Ergebnis mit genau der Dokumentation verpackt, die ein Käufer braucht, bevor er zu einem KI-System Ja sagt.",
        deliverables: [
          "Funktionierendes Modell zur Abwanderungsprognose mit 92,5% Genauigkeit und automatisierten wöchentlichen Coach-Briefings über n8n",
          "DSGVO-Datenschutz-Folgenabschätzung für Wearable und Mitgliederdaten",
          "EU-AI-Act-Compliance-Paket und eigenständiges ROI-Modell standardmäßig enthalten",
        ],
        metrics: [
          { value: "+/− 11.520 €", label: "Einsparung pro Jahr" },
          { value: "+/− 284%", label: "ROI" },
        ],
        tags: ["Python", "scikit-learn", "LangChain", "n8n", "DSGVO", "EU AI Act"],
        link: "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/Final_Project_DinaBB",
      },
    ],
  },
  projects: {
    eyebrow: "Außerdem",
    title: "Ausgewählte Builds.",
    labels: {
      what: "Was.",
      how: "Wie es gebaut wurde.",
      outcomes: "Ergebnisse.",
      learned: "Was ich gelernt habe.",
      github: "GitHub ↗",
      medium: "Beitrag lesen ↗",
    },
    items: [
      {
        title: "n8n-Automatisierungs-Workflows.",
        desc: "Produktive Workflows aus mehreren Projekten: geplante Recherche-Pipelines, Umfrage-Trigger, wöchentliche E-Mail-Briefings sowie Slack- und Notion-Integrationen. Gebaut für den echten Betrieb, nicht für Demos.",
        tags: ["n8n", "Automatisierung", "APIs", "Webhooks"],
        github: "https://github.com/dlbosma-hue/bootcamp_env",
        details: {
          what: "Eine Sammlung produktiver n8n-Workflows aus dem Bootcamp. Keine Demo-Workflows: Sie laufen nach Zeitplan, behandeln Fehler und binden echte Tools ein.",
          how: "Dazu gehören: vier Medien-Audit Trigger am Montagmorgen (NPR, NYT, Guardian, Al Jazeera), die in Notion und Slack posten; wöchentliche Spottr Coach-Briefing-E-Mails mit Abwanderungsrisiken; Trigger für Umfrageantworten; und Webhook-basierte Integrationen für den Datenfluss über Systeme hinweg.",
          outcomes:
            "Operative Workflows im echten Einsatz. Die Spottr Briefings und die Medien-Audit Pipelines laufen live.",
          learned:
            "Automatisierung bricht an den Rändern: API-Limits, fehlerhafte Antworten, leere Ergebnismengen. Gutes Workflow-Design behandelt auch den unglücklichen Pfad, nicht nur den glücklichen.",
        },
      },
      {
        title: "LangGraph Agent.",
        desc: "Ein ReAct-Agent, der gleichzeitig mit mehreren Live-Datenquellen verbunden ist und Toolauswahl und Reihenfolge in Echtzeit steuert. Gebaut, um zu zeigen, wie Orchestrierung aussieht, wenn sie in der Praxis funktionieren muss und nicht nur im Notebook.",
        tags: ["LangGraph", "LangChain", "FastAPI", "LangSmith", "Python"],
        github:
          "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/project_3_media_agent",
        medium:
          "https://medium.com/@dinaleonidovnabosma/i-built-an-ai-agent-that-audits-media-diversity-heres-what-actually-went-wrong-4b38790a6e3f",
        details: {
          what: "Ein KI-Agent, der Nachrichtenartikel auf Repräsentationslücken bei Geschlecht, Herkunft, Behinderung und weiteren marginalisierten Gruppen prüft. Er analysiert Autorenzeilen, Quellenvielfalt, Sprache und Darstellung und erzeugt daraus einen strukturierten Bericht.",
          how: "Gebaut mit einer LangGraph ReAct-Schleife, die dem Agenten Zugriff auf RSS-Feeds, NewsAPI, Wikipedia und einen Pinecone-RAG-Speicher gibt. Als FastAPI-Service auf Railway deployt. Vier n8n-Workflows laufen montags früh, ziehen Inhalte von NPR, NYT, The Guardian und Al Jazeera und posten die Ergebnisse in Notion und Slack.",
          outcomes:
            "Produktives Deployment auf Railway. Durchgängig über LangSmith überwacht. Dokumentiert in einem Medium-Beitrag darüber, was beim Bauen schiefging.",
          learned:
            "Agenten scheitern auf interessante Weise, wenn Tools unerwartete Formate zurückgeben. LangSmith-Traces haben das Debuggen handhabbar gemacht, wie es Print-Statements nie könnten.",
        },
      },
      {
        title: "AI Content Creator.",
        desc: "Ein strukturiertes Tool zur Inhaltserstellung, gebaut rund um bewusstes Prompt-Design. Thema und Zielgruppe rein, formatierte Inhalte in mehreren Formaten raus. Nützlich für kleine Teams ohne eigene Content Funktion.",
        tags: ["Gradio", "OpenAI API", "Prompt Engineering", "Python"],
        github:
          "https://github.com/dlbosma-hue/bootcamp_env/tree/main/Projects/ai-content-creator",
        details: {
          what: "Ein Tool zur Inhaltserstellung mit Gradio-Oberfläche. Thema, Zielgruppe und Tonalität rein, strukturierte Inhalte raus: Social Posts, Zusammenfassungen, Gliederungen, passend zum Briefing. Der Fokus liegt darauf, wie Prompt-Architektur die Qualität bestimmt.",
          how: "Gebaut mit einem mehrschichtigen Prompt-Ansatz: Ein System-Prompt setzt Stimme und Grenzen, ein strukturierter User-Prompt kodiert das Briefing, und Chain-of-Thought-Formatierung führt das Modell zu konsistenter, nutzbarer Ausgabe. Gradio liefert die Oberfläche, sodass es ohne Code nutzbar ist. Die OpenAI API übernimmt die Generierung.",
          outcomes:
            "Zeigt, dass Prompt Engineering eine Designdisziplin ist und kein Workaround. Kleine strukturelle Änderungen am Prompt erzeugen messbare Unterschiede in Konsistenz und Formattreue.",
          learned:
            "Die Oberfläche prägt, wie Menschen prompten. Eine gut gestaltete Gradio-Oberfläche mit klaren Feldern führt zu besseren Prompts und besseren Ergebnissen. UX und Prompt-Design sind untrennbar.",
        },
      },
    ],
  },
  how: {
    eyebrow: "Wie ich arbeite",
    title: "Ein klarer Ablauf.",
    steps: [
      {
        title: "Die Koordinationskosten finden.",
        desc: "Bevor irgendetwas gebaut wird, schaue ich mir an, wie Arbeit tatsächlich fließt. Wo machen Menschen das, was ein Prozess machen sollte? Wo gehen Informationen zwischen Übergaben verloren? Der meiste operative Ballast versteckt sich in den Lücken zwischen Tools und zwischen Menschen, nicht in den Tools selbst.",
      },
      {
        title: "Entscheiden, was sich zu lösen lohnt.",
        desc: "Nicht jede Ineffizienz lohnt die Automatisierung. Ich helfe Ihnen, die teuren und häufigen Probleme von denen zu trennen, die nur nerven, aber nichts bewegen. Ehrliche Abwägungen, keine Anbieterbindung, keine Lösung auf der Suche nach einem Problem. Dort, wo Urteilsvermögen zählt, bleiben Menschen in der Schleife.",
      },
      {
        title: "Etwas bauen, das in der Praxis funktioniert.",
        desc: "Ein funktionierender Ausschnitt, keine Präsentation. Agenten, Automatisierungen, Pipelines oder Produktfunktionen, zugeschnitten auf frühen Nutzen und gebaut rund um die Art, wie Ihr Team wirklich arbeitet.",
      },
      {
        title: "So übergeben, dass es bleibt.",
        desc: "Die meisten KI-Projekte scheitern an der Akzeptanz, nicht am Bauen. Ich sorge dafür, dass das System ohne mich nutzbar ist: dokumentiert, compliant, zugänglich und verstanden von den Menschen, die es betreiben. Denn ein System, das Ihr Team nicht nutzt, ist nur teure Infrastruktur.",
      },
    ],
  },
  credentials: {
    eyebrow: "Qualifikationen",
    title: "Werdegang und Zertifizierungen.",
    experienceHeading: "Erfahrung.",
    certificationsHeading: "Zertifizierungen.",
    experience: [
      {
        title: "Produktmanagerin, interne Tools und Plattform.",
        org: "Outfittery",
        year: "4 Jahre",
        detail:
          "Interne KI-gestützte und operative Tools ausgeliefert, die täglich von Online-Stylistinnen und operativen Teams genutzt wurden.",
      },
    ],
    certifications: [
      {
        title: "AI Consulting & Integration.",
        org: "IronHack",
        year: "2026",
        detail:
          "Intensivprogramm zu Agenten, RAG, Machine Learning, Automatisierung, DSGVO und EU AI Act, verantwortungsvoller KI und ressourcenschonendem KI-Einsatz, abgeschlossen mit einem vollwertigen Abschlussprojekt im Kundenformat.",
      },
      {
        title: "Microsoft Certified: AI 900 Azure AI Fundamentals.",
        org: "Microsoft",
        year: "",
        detail:
          "Grundlagenzertifizierung zu KI-Workloads, verantwortungsvoller KI und Azure-AI-Diensten.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen wir.",
    intro:
      "Ansässig in Berlin. Verfügbar für Beratung, Workshops und Product Leadership auf Zeit in ganz Europa.",
    availability: "Aktuell verfügbar für Projekte im vierten Quartal und 2027.",
    pricing:
      "Die meisten Projekte starten mit einem Scoping-Gespräch oder einem eintägigen Workshop. Danach wird die Zusammenarbeit so zugeschnitten, wie es für Ihr Team und Ihre Situation wirklich sinnvoll ist. Gerne bespreche ich mit Ihnen, wie das aussehen könnte.",
    values:
      "Ich arbeite mit europäischen Werten im Blick: Datenschutz, menschliche Aufsicht, angemessene Technologie und Respekt gegenüber den Menschen, die vom System betroffen sind.",
  },
  form: {
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Senden",
    sending: "Wird gesendet…",
    success: "Danke, ich melde mich in Kürze.",
    genericError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    networkError: "Netzwerkfehler. Bitte versuchen Sie es erneut.",
  },
  footer: {
    brand: "HUMINT · Menschliche Intelligenz. KI-gestützt.",
    meta: "Dina Bosma Buczynska · Berlin · EN / DE / NL",
    impressum: "Impressum",
  },
};

export type Content = typeof en;

export const content: Record<Lang, Content> = { en, de };
