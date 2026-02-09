import { Project } from "./types";

export const translations = {
  ar: {
    navbar: {
      items: [
        { label: 'الرئيسية', href: '#hero' },
        { label: 'رؤيتي', href: '#about' },
        { label: 'منهجيتي', href: '#methodology' },
        { label: 'خدماتي', href: '#services' },
        { label: 'أعمالي', href: '#portfolio' },
      ],
      cta: 'تواصل معي',
      name: 'عمر طاهر علي',
    },
    hero: {
      badge: 'إدارة مشاريع • ابتكار • ذكاء اصطناعي',
      rolePrefix: 'مدير مشاريع تقنية',
      roleSuffix: ' ومُمكن للذكاء الاصطناعي',
      subtext: 'حلقة وصل بين أهداف الأعمال والحلول التقنية. أشرف على تنفيذ المشاريع الرقمية بدقة، وأوظف أدوات الذكاء الاصطناعي لضمان سرعة الإنجاز ورفع الجودة.',
      cta: 'تواصل معي',
      cert1: 'ماجستير إدارة أعمال تنفيذي (EMBA)',
      cert2: 'مُحترف إدارة مشاريع (PMP®)',
      nodes: [
        'إدارة المشاريع',
        'استشارات الأعمال',
        'التحول الرقمي',
        'أدوات الذكاء الاصطناعي'
      ]
    },
    quote: {
      text: 'أؤمن بأن الذكاء الاصطناعي هو المحرك الجديد لكفاءة المشاريع ونجاحها.'
    },
    about: {
      badge: 'الرؤية والمسار',
      title: 'سد الفجوة بين',
      subtitle: 'لغة الأعمال والتقنية',
      body: 'مشكلة معظم المشاريع التقنية ليست في الكود، بل في غياب الفهم التجاري. دوري هو ضمان أن الحلول التقنية تخدم أهداف المنشأة بوضوح وفعالية.',
      imgBadgeTitle: 'التركيز على',
      imgBadgeValue: 'نتائج الأعمال',
      features: [
        { label: "فهم احتياجات الأعمال", desc: "التقنية وسيلة لتحقيق الأهداف وليست غاية." },
        { label: "قيادة استباقية", desc: "توقع المخاطر ومعالجتها مبكراً." },
        { label: "ابتكار واقعي", desc: "حلول ذكية قابلة للتطبيق بعيداً عن التعقيد." },
      ]
    },
    methodology: {
      title: 'منهجيتي في العمل',
      subtitle: 'عملية مدروسة تمزج بين الانضباط والتكنولوجيا',
      steps: [
        { title: 'التحليل والوضوح', desc: 'فهم عميق للمتطلبات.', step: '01' },
        { title: 'التخطيط المرن', desc: 'تجزئة المشروع إلى مهام قابلة للتنفيذ.', step: '02' },
        { title: 'التنفيذ المعزز بالذكاء الاصطناعي', desc: 'دمج قدرات الذكاء الاصطناعي لاختصار الوقت.', step: '03' },
        { title: 'التسليم والتحسين', desc: 'إطلاق المنتج ومراقبة الأداء.', step: '04' }
      ]
    },
    services: {
      title: 'خدماتي وحلولي',
      subtitle: 'قيادة تقنية شاملة من التخطيط وحتى التنفيذ الفعلي.',
      ctaLabel: 'اطلب الخدمة الآن',
      defaultWhatsappMessage: 'السلام عليكم، أريد الاستفسار عن خدماتك التقنية.',
      items: [
        {
          title: 'قيادة المشاريع التقنية',
          desc: 'إدارة فرق التطوير وضمان تسليم المشاريع المعقدة في وقتها المحدد وفق معايير PMP.',
          whatsappMessage: 'السلام عليكم، أريد الاستفسار عن خدمة "قيادة المشاريع التقنية".'
        },
        {
          title: 'تطوير المنصات والهوية الرقمية',
          desc: 'بناء حلول برمجية متكاملة ومنصات قابلة للتوسع، ويشمل ذلك المدونات الشخصية الاحترافية لتعزيز هويتك الرقمية.',
          whatsappMessage: 'السلام عليكم، أريد الاستفسار عن خدمة "تطوير المنصات والهوية الرقمية".'
        },
        {
          title: 'استشارات بناء المنتجات',
          desc: 'تحويل الأفكار إلى منتجات أولية (MVP) جاهزة للسوق بكفاءة عالية وتركيز على القيمة.',
          whatsappMessage: 'السلام عليكم، أريد الاستفسار عن خدمة "استشارات بناء المنتجات (MVP)".'
        }
      ]
    },
    techStack: {
      title: 'أدوات أعتمد عليها'
    },
    portfolio: {
      title: 'أعمالي ومشاريعي',
      projects: [
        {
          id: 'easypay',
          title: 'إيزي باي (Easypay)',
          role: 'استراتيجية ونمو',
          description: 'الحل الأمثل لأتمتة أنظمة المبيعات.',
          tags: ['Fintech', 'استراتيجية', 'تطوير أعمال'],
          imageUrl: "https://easypay.sa/wp-content/uploads/2024/09/EasyPay-Logo-01.png",
          link: "https://easypay.sa",
          highlight: true,
        },
        {
          id: 'webdoor',
          title: 'ويب دور (Webdoor)',
          role: 'مؤسس مشارك',
          description: 'منصة تساعدك في إنشاء الموقع الإلكتروني الخاص بك بدون خبير تقني.',
          tags: ['SaaS', 'إدارة منتجات', 'نمو'],
          imageUrl: 'https://drive.google.com/thumbnail?id=1E6NAEDvHN67RpHZKMnGDm6eGdU3bZdss&sz=w500',
          link: "https://webdoor.site",
          highlight: true,
        }
      ],
      cta: {
        title: 'هل لديك مشروع طموح؟',
        sub: 'لا تكتفِ بالتنفيذ التقليدي. دعنا ندمج دقة إدارة المشاريع مع قوة الذكاء الاصطناعي.',
        button: 'تواصل معي الآن',
        visit: 'زيارة'
      }
    },
    footer: {
      rights: 'جميع الحقوق محفوظة 2026 عمر طاهر علي.'
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'اختر الطريقة المناسبة لك'
    }
  },
  en: {
    navbar: {
      items: [
        { label: 'Home', href: '#hero' },
        { label: 'My Vision', href: '#about' },
        { label: 'Methodology', href: '#methodology' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#portfolio' },
      ],
      cta: "Let's Talk",
      name: 'Umar Ali',
    },
    hero: {
      badge: 'Project Management • Innovation • AI',
      rolePrefix: 'Tech Project Manager',
      roleSuffix: ' & AI Enabler',
      subtext: 'Bridging the gap between business goals and technical execution. I lead digital projects with precision and leverage AI to ensure speed and quality.',
      cta: "Let's Talk",
      cert1: 'Executive MBA - Quantic',
      cert2: 'Project Management Professional (PMP)®',
      nodes: [
        'Project Management',
        'Business Consulting',
        'Digital Transformation',
        'AI Tools'
      ]
    },
    quote: {
      text: 'I believe AI is the new engine for project efficiency and success.'
    },
    about: {
      badge: 'Vision & Path',
      title: 'Bridging Business',
      subtitle: '& Tech',
      body: "The issue with most tech projects isn't the code, it's the lack of business context. My role is ensuring every line of code serves a clear ROI and operational goal.",
      imgBadgeTitle: 'Focus On',
      imgBadgeValue: 'Business ROI',
      features: [
        { label: "Business-First Approach", desc: "Technology is a vehicle, not the destination." },
        { label: "Proactive Leadership", desc: "Anticipating risks before they become issues." },
        { label: "Pragmatic Innovation", desc: "Smart, implementable solutions over complexity." },
      ]
    },
    methodology: {
      title: 'My Workflow',
      subtitle: 'A process blending discipline with technology',
      steps: [
        { title: 'Analysis & Clarity', desc: 'Deep understanding of requirements.', step: '01' },
        { title: 'Agile Planning', desc: 'Breaking down projects into Sprints.', step: '02' },
        { title: 'AI-Augmented Execution', desc: 'Leveraging AI to cut time.', step: '03' },
        { title: 'Delivery & Optimization', desc: 'Launch and performance monitoring.', step: '04' }
      ]
    },
    services: {
      title: 'Services & Solutions',
      subtitle: 'Comprehensive technical leadership from strategy to execution.',
      ctaLabel: 'Inquire Now',
      defaultWhatsappMessage: 'Hello, I would like to inquire about your technical services.',
      items: [
        {
          title: 'Technical Project Leadership',
          desc: 'Leading dev teams and ensuring delivery of complex projects on time using PMP & Agile standards.',
          whatsappMessage: 'Hello, I would like to inquire about "Technical Project Leadership".'
        },
        {
          title: 'Custom Software & Platforms',
          desc: 'Engineering robust software solutions and scalable platforms, including professional personal blogs to elevate your digital branding.',
          whatsappMessage: 'Hello, I would like to inquire about "Custom Software & Platforms".'
        },
        {
          title: 'Product Strategy & MVP',
          desc: "Taking you from 'Idea' to 'Market-Ready MVP' efficiently, focusing on business value.",
          whatsappMessage: 'Hello, I would like to inquire about "Product Strategy & MVP Consulting".'
        }
      ]
    },
    techStack: {
      title: 'Tools I Rely On'
    },
    portfolio: {
      title: 'My Projects',
      projects: [
        {
          id: 'easypay',
          title: 'Easypay',
          role: 'Strategy & Growth',
          description: 'The optimal solution to automate sales systems.',
          tags: ['Fintech', 'Strategy', 'BizDev'],
          imageUrl: "https://easypay.sa/wp-content/uploads/2024/09/EasyPay-Logo-01.png",
          link: "https://easypay.sa",
          highlight: true,
        },
        {
          id: 'webdoor',
          title: 'Webdoor',
          role: 'Co-Founder',
          description: 'A platform helping you build your own website without tech expertise.',
          tags: ['SaaS', 'Product Mgmt', 'Growth'],
          imageUrl: 'https://drive.google.com/thumbnail?id=1E6NAEDvHN67RpHZKMnGDm6eGdU3bZdss&sz=w500',
          link: "https://webdoor.site",
          highlight: true,
        }
      ],
      cta: {
        title: 'Ready to elevate your project?',
        sub: "Don't settle for traditional execution. Let's merge PM precision with AI power.",
        button: 'Discuss Your Project',
        visit: 'Visit'
      }
    },
    footer: {
      rights: '© 2026 Umar Ali. All Rights Reserved.'
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Choose your preferred method'
    }
  }
};