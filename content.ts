import { ContentData, Language } from './types';

export const translations: Record<Language, ContentData> = {
  fr: {
    nav: {
      home: "Accueil",
      howItWorks: "Notre Méthode",
      features: "Technologie IA",
      industries: "Secteurs",
      contact: "Demande Urgente",
    },
    hero: {
      title: "Votre Production ne Devrait Jamais S'Arrêter.",
      subtitle: "Sourcing mondial de composants critiques par IA & Maintenance d'élite sur site au Maroc. Réactivité absolue sous 24h.",
      cta: "Lancer un Diagnostic Express",
      trust: "Partenaire stratégique de 500+ industriels au Maroc",
    },
    problems: {
      badge: "Enjeux Critiques",
      title: "Zéro Arrêt",
      items: [
        { title: "Obsolescence Critique", desc: "Vos machines historiques à l'arrêt faute de pièces ? Nous trouvons l'introuvable là où les fournisseurs locaux échouent." },
        { title: "Hémorragie Financière", desc: "Chaque minute d'arrêt grignote vos marges. Nous transformons des délais de plusieurs semaines en quelques jours." },
        { title: "Labyrinthe Logistique", desc: "Douanes, import, fret express : nous absorbons la complexité pour livrer directement sur votre ligne de production." },
        { title: "Déficit d'Expertise Pointue", desc: "Accédez à des ingénieurs certifiés OEM capables de maîtriser vos systèmes propriétaires les plus complexes." },
      ],
    },
    process: {
      title: "Protocole de Récupération Accéléré",
      steps: [
        { title: "Scan & Identification", desc: "Envoyez une photo. Nos algorithmes de vision identifient instantanément les spécifications exactes.", time: "Flash < 1h" },
        { title: "Sourcing Global IA", desc: "Notre IA interroge en temps réel 50+ stocks mondiaux cachés (Europe, Asie, USA).", time: "Immédiat" },
        { title: "Offre & Logistique", desc: "Proposition ferme incluant pièce, fret express et dédouanement prioritaire.", time: "< 12 Heures" },
        { title: "Installation Certifiée", desc: "Réception sur site et calibration par nos experts pour une reprise immédiate.", time: "J+2 Garanti" },
      ],
    },
    ai: {
      title: "L'Intelligence Artificielle : Votre Avantage Injuste",
      subtitle: "Une puissance technologique au service de votre continuité opérationnelle",
      features: [
        { title: "Reconnaissance Visuelle Avancée", desc: "Identification de composants usés avec une précision de 99.9% via Computer Vision, éliminant tout risque d'erreur de commande." },
        { title: "Radar de Marché Mondial", desc: "Nous détectons les stocks 'invisibles' et les surplus d'inventaire mondiaux avant même qu'ils ne soient listés publiquement." },
        { title: "Maintenance Prédictive", desc: "Analyse post-intervention pour anticiper les futures défaillances et constituer votre stock stratégique de sécurité." },
      ],
    },
    trust: {
      title: "Standard de Performance Industrielle",
      pillars: [
        { title: "Certification OEM", desc: "Ingénieurs formés directement par les constructeurs (Siemens, Bosch, ABB)." },
        { title: "Stock Caché (Shadow Inventory)", desc: "Accès exclusif à des réseaux de pièces de rechange non listés sur le marché ouvert." },
        { title: "Corridor Douanier", desc: "Procédures d'importation accélérées pour réduire les délais de transit de 70%." },
        { title: "Garantie Totale", desc: "Couverture complète : pièce, main-d'œuvre et performance post-installation." },
        { title: "Task Force 24/7", desc: "Équipes d'intervention d'urgence mobilisables jour et nuit, 365 jours par an." },
        { title: "Traçabilité Live", desc: "Suivi en temps réel de votre composant, de l'entrepôt source jusqu'à votre machine." },
      ],
    },
    industries: {
      title: "Expertise Sectorielle de Précision",
      subtitle: "Des solutions calibrées pour les exigences critiques de votre industrie",
      list: [
        { name: "Automobile", example: "Robotique d'assemblage & Automates PLC" },
        { name: "Agroalimentaire", example: "Chaînes de stérilisation & Conditionnement" },
        { name: "Textile", example: "Filature haute vitesse & Tissage technique" },
        { name: "Chimie & Pétro", example: "Vannes haute pression & Pompes de dosage" },
        { name: "Mines & Carrières", example: "Concasseurs géants & Systèmes d'extraction" },
        { name: "Énergie", example: "Turbines, Générateurs & Gestion réseau" },
        { name: "Pharma", example: "Salles blanches & Processus aseptiques" },
        { name: "Métallurgie", example: "Hauts fourneaux & Laminoirs de précision" },
      ],
    },
    security: {
      title: "Sécurité & Fiabilité Blindées",
      features: [
        { title: "Paiement Sécurisé", desc: "Fonds bloqués sous séquestre jusqu'à validation technique de la pièce." },
        { title: "Confidentialité Absolue", desc: "NDA stricts pour protéger vos secrets industriels et schémas techniques." },
        { title: "Traçabilité Certifiée", desc: "Certificats d'Origine (CoO) et documentation constructeur pour chaque pièce." },
        { title: "Assurance Risque Zéro", desc: "Couverture intégrale contre la casse, le vol et les dommages durant le transit." },
      ],
    },
    contact: {
      title: "Urgence ? Réactivez Votre Ligne de Production.",
      subtitle: "Ne perdez plus une seconde. Chargez une photo, recevez une solution chiffrée. Reprise d'activité imminente.",
      form: {
        name: "Nom du Responsable",
        email: "Email Professionnel",
        company: "Société / Usine",
        message: "Description de la Panne / Référence Pièce",
        file: "Photo de la pièce / Plaque signalétique",
        submit: "Générer la Demande Prioritaire",
        success: "Votre email est prêt. Veuillez valider l'envoi pour activer la cellule de crise.",
      },
    },
    footer: {
      about: "NextIndustri réinvente la maintenance industrielle par la puissance de l'IA et une logistique d'élite.",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      howItWorks: "Methodology",
      features: "AI Technology",
      industries: "Sectors",
      contact: "Urgent Request",
    },
    hero: {
      title: "Your Production Should Never Stop.",
      subtitle: "AI-powered global sourcing for critical components & Elite on-site maintenance in Morocco. Absolute responsiveness within 24h.",
      cta: "Start Express Diagnosis",
      trust: "Strategic partner to 500+ industrial leaders in Morocco",
    },
    problems: {
      badge: "Critical Risks",
      title: "Zero Downtime",
      items: [
        { title: "Critical Obsolescence", desc: "Legacy machines idle due to missing parts? We find the 'unfindable' where local suppliers fail." },
        { title: "Financial Hemorrhage", desc: "Every minute of stoppage eats your margins. We turn weeks of delay into days." },
        { title: "Logistical Labyrinth", desc: "Customs, imports, express freight: we absorb the complexity to deliver directly to your production line." },
        { title: "Expertise Gap", desc: "Access OEM-certified engineers capable of mastering your most complex proprietary systems." },
      ],
    },
    process: {
      title: "Accelerated Recovery Protocol",
      steps: [
        { title: "Scan & ID", desc: "Upload a photo. Our vision algorithms instantly identify exact specifications.", time: "Flash < 1h" },
        { title: "AI Global Sourcing", desc: "Our AI queries 50+ hidden global inventories (Europe, Asia, USA) in real-time.", time: "Immediate" },
        { title: "Offer & Logistics", desc: "Firm proposal including part, express freight, and priority customs clearance.", time: "< 12 Hours" },
        { title: "Certified Installation", desc: "On-site reception and calibration by our experts for immediate restart.", time: "Day+2 Guaranteed" },
      ],
    },
    ai: {
      title: "Artificial Intelligence: Your Unfair Advantage",
      subtitle: "Technological power dedicated to your operational continuity",
      features: [
        { title: "Advanced Visual Recognition", desc: "99.9% accurate identification of worn parts via Computer Vision, eliminating ordering errors." },
        { title: "Global Market Radar", desc: "We detect 'invisible' stock and global inventory surpluses before they are publicly listed." },
        { title: "Predictive Maintenance", desc: "Post-intervention analysis to anticipate future failures and build your strategic safety stock." },
      ],
    },
    trust: {
      title: "Industrial Performance Standard",
      pillars: [
        { title: "OEM Certification", desc: "Engineers trained directly by manufacturers (Siemens, Bosch, ABB)." },
        { title: "Shadow Inventory Access", desc: "Exclusive access to spare parts networks unlisted on the open market." },
        { title: "Customs Corridor", desc: "Accelerated import procedures reducing transit times by 70%." },
        { title: "Total Warranty", desc: "Comprehensive coverage: part, labor, and post-installation performance." },
        { title: "24/7 Task Force", desc: "Emergency intervention teams deployable day and night, 365 days a year." },
        { title: "Live Traceability", desc: "Real-time tracking of your component, from source warehouse to your machine." },
      ],
    },
    industries: {
      title: "Precision Sector Expertise",
      subtitle: "Solutions calibrated for your industry's critical requirements",
      list: [
        { name: "Automotive", example: "Assembly Robotics & PLC Automation" },
        { name: "Food & Beverage", example: "Sterilization Lines & Packaging" },
        { name: "Textile", example: "High-Speed Spinning & Technical Weaving" },
        { name: "Chemical & Petro", example: "High-Pressure Valves & Dosing Pumps" },
        { name: "Mining", example: "Giant Crushers & Extraction Systems" },
        { name: "Energy", example: "Turbines, Generators & Grid Management" },
        { name: "Pharma", example: "Clean Rooms & Aseptic Processes" },
        { name: "Metallurgy", example: "Blast Furnaces & Precision Rolling Mills" },
      ],
    },
    security: {
      title: "Ironclad Security & Reliability",
      features: [
        { title: "Secure Payment", desc: "Funds held in escrow until technical validation of the part." },
        { title: "Absolute Confidentiality", desc: "Strict NDAs to protect your industrial secrets and technical schematics." },
        { title: "Certified Traceability", desc: "Certificates of Origin (CoO) and manufacturer documentation for every part." },
        { title: "Zero Risk Insurance", desc: "Full coverage against breakage, theft, and damage during transit." },
      ],
    },
    contact: {
      title: "Emergency? Reactivate Your Production Line.",
      subtitle: "Don't waste another second. Upload a photo, receive a quoted solution. Imminent activity resumption.",
      form: {
        name: "Manager Name",
        email: "Professional Email",
        company: "Company / Factory",
        message: "Fault Description / Part Reference",
        file: "Part Photo / Nameplate",
        submit: "Generate Priority Request",
        success: "Your email draft is ready. Please send the email to activate the crisis cell.",
      },
    },
    footer: {
      about: "NextIndustri reinvents industrial maintenance through the power of AI and elite logistics.",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      howItWorks: "منهجيتنا",
      features: "تكنولوجيا الذكاء",
      industries: "القطاعات",
      contact: "طلب عاجل",
    },
    hero: {
      title: "إنتاجك لا يجب أن يتوقف أبداً.",
      subtitle: "توريد عالمي للمكونات الحرجة بالذكاء الاصطناعي وصيانة نخبوية في الموقع بالمغرب. استجابة مطلقة خلال 24 ساعة.",
      cta: "ابدأ التشخيص السريع",
      trust: "شريك استراتيجي لأكثر من 500 منشأة صناعية بالمغرب",
    },
    problems: {
      badge: "مخاطر حرجة",
      title: "لا توقف",
      items: [
        { title: "تقادم حرج للمعدات", desc: "آلاتك متوقفة بسبب قطع غيار مفقودة؟ نجد 'المستحيل' حيث يفشل الموردون المحليون." },
        { title: "نزيف مالي مستمر", desc: "كل دقيقة توقف تلتهم هوامش ربحك. نحول أسابيع الانتظار إلى أيام معدودة." },
        { title: "متاهة لوجستية", desc: "جمارك، استيراد، شحن سريع: نتحمل عنك التعقيدات لنسلم القطعة مباشرة إلى خط الإنتاج." },
        { title: "فجوة الخبرة التقنية", desc: "تواصل مع مهندسين معتمدين دولياً قادرين على التعامل مع أعقد الأنظمة الخاصة." },
      ],
    },
    process: {
      title: "بروتوكول الاستعادة المتسارع",
      steps: [
        { title: "مسح وتحديد الهوية", desc: "أرسل صورة. خوارزميات الرؤية لدينا تحدد المواصفات الدقيقة فورياً.", time: "فوري < 1 ساعة" },
        { title: "توريد عالمي ذكي", desc: "يستعلم نظامنا 50+ مخزوناً عالمياً خفياً (أوروبا، آسيا، أمريكا) في الوقت الفعلي.", time: "مباشر" },
        { title: "عرض ولوجستيات", desc: "عرض نهائي يشمل القطعة، الشحن السريع والتخليص الجمركي ذي الأولوية.", time: "< 12 ساعة" },
        { title: "تركيب معتمد", desc: "استلام في الموقع ومعايرة من قبل خبرائنا لاستئناف العمل فوراً.", time: "يوم + 2 مضمون" },
      ],
    },
    ai: {
      title: "الذكاء الاصطناعي: ميزتك التنافسية",
      subtitle: "قوة تكنولوجية مسخرة لاستمرارية عملياتك التشغيلية",
      features: [
        { title: "تعرف بصري متقدم", desc: "تحديد القطع التالفة بدقة 99.9% عبر الرؤية الحاسوبية، مما يلغي أخطاء الطلب." },
        { title: "رادار السوق العالمي", desc: "نكتشف المخزونات 'غير المرئية' وفوارض المخزون العالمي قبل إدراجها علنياً." },
        { title: "صيانة تنبؤية", desc: "تحليل ما بعد التدخل لتوقع الأعطال المستقبلية وبناء مخزون الأمان الاستراتيجي الخاص بك." },
      ],
    },
    trust: {
      title: "معيار الأداء الصناعي",
      pillars: [
        { title: "اعتماد المصنعين (OEM)", desc: "مهندسون مدربون مباشرة من قبل المصنعين (سيمنز، بوش، إيه بي بي)." },
        { title: "وصول للمخزون الخفي", desc: "وصول حصري لشبكات قطع الغيار غير المدرجة في السوق المفتوحة." },
        { title: "ممر جمركي سريع", desc: "إجراءات استيراد مسرعة تقلل أوقات العبور بنسبة 70%." },
        { title: "ضمان شامل", desc: "تغطية كاملة: القطعة، اليد العاملة، والأداء ما بعد التركيب." },
        { title: "قوة تدخل 24/7", desc: "فرق طوارئ جاهزة للتدخل ليلاً ونهاراً، 365 يوماً في السنة." },
        { title: "تتبع حي", desc: "تتبع فوري لقطعتك، من مستودع المصدر حتى وصولها لآلتك." },
      ],
    },
    industries: {
      title: "خبرة قطاعية دقيقة",
      subtitle: "حلول معايرة خصيصاً للمتطلبات الحرجة لصناعتك",
      list: [
        { name: "السيارات", example: "روبوتات التجميع وأتمتة PLC" },
        { name: "الأغذية والمشروبات", example: "خطوط التعقيم والتغليف" },
        { name: "النسيج", example: "الغزل عالي السرعة والنسيج التقني" },
        { name: "الكيماويات والبترول", example: "صمامات الضغط العالي ومضخات الجرعات" },
        { name: "التعدين والمحاجر", example: "الكسارات العملاقة وأنظمة الاستخراج" },
        { name: "الطاقة", example: "التوربينات، المولدات وإدارة الشبكة" },
        { name: "الأدوية", example: "الغرف النظيفة والعمليات المعقمة" },
        { name: "المعادن", example: "الأفران العالية ومصانع الدرفلة الدقيقة" },
      ],
    },
    security: {
      title: "أمان وموثوقية مدرعة",
      features: [
        { title: "دفع آمن", desc: "تجميد الأموال في حساب ضمان حتى المصادقة التقنية على القطعة." },
        { title: "سرية مطلقة", desc: "اتفاقيات عدم إفشاء صارمة لحماية أسرارك الصناعية ومخططاتك التقنية." },
        { title: "تتبع معتمد", desc: "شهادات المنشأ (CoO) ووثائق المصنع لكل قطعة." },
        { title: "تأمين خالي من المخاطر", desc: "تغطية شاملة ضد الكسر، السرقة، والأضرار أثناء النقل." },
      ],
    },
    contact: {
      title: "حالة طوارئ؟ أعد تشغيل خط الإنتاج.",
      subtitle: "لا تضيع ثانية أخرى. ارفع صورة، احصل على حل مسعر. استئناف النشاط وشيك.",
      form: {
        name: "اسم المسؤول",
        email: "البريد المهني",
        company: "الشركة / المصنع",
        message: "وصف العطل / مرجع القطعة",
        file: "صورة القطعة / لوحة البيانات",
        submit: "توليد طلب ذو أولوية",
        success: "مسودة بريدك الإلكتروني جاهزة. يرجى إرسال البريد لتفعيل خلية الأزمة.",
      },
    },
    footer: {
      about: "NextIndustri réinvente la maintenance industrielle par la puissance de l'IA et une logistique d'élite.",
      rights: "Tous droits réservés.",
    },
  },
};