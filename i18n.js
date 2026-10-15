// English / Arabic toggle.
// Any element with data-i18n="key" gets its text swapped from the dictionary below.
// To edit copy, change it here (both languages), not in the HTML.

const STRINGS = {
  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "lang.toggle": "عربي",

    "intro.status": "Open to Senior Product Designer roles",
    "intro.title": "Yehia Mourad, senior product designer. <span>AI-SaaS, B2B platforms and design systems, in Arabic and English.</span>",
    "intro.text": "8+ years designing digital products, the last 5 on complex B2B and B2B2C platforms. Right now I turn AI model capabilities into workflows people can actually use. Based in Cairo.",

    "p1.title": "POS redesign",
    "p1.text": "A UX audit of an Arabic point-of-sale system, and a prototype that fixes all 14 findings",
    "p1.kind": "B2B · RTL",
    "p2.title": "TwentyToo",
    "p2.text": "A B2B AI-SaaS platform and a 96-component design system",
    "p2.kind": "AI-SaaS · Design system",
    "p3.title": "Reach Link",
    "p3.text": "A two-sided marketplace for influencers and brands",
    "p3.kind": "B2B2C · Marketplace",
    "p4.title": "Kuwait Airlines",
    "p4.text": "Operational workflows, redesigned to cut task time by 20%",
    "p4.kind": "Enterprise",
    "soon": "Soon",

    "about.label": "About",
    "about.p1": "I lead product design end to end, from discovery and information architecture to prototypes, design systems and handoff. <span>I work closely with product, engineering and data teams to turn messy requirements into products that feel simple.</span>",
    "about.p2": "These days I focus on AI-SaaS, and I use agentic workflows with Claude and Figma MCP in my own process. <span>Much of my work ships in Arabic, so RTL isn't an afterthought for me. It's the default.</span>",
    "fact1.v": "8+ years", "fact1.k": "Experience",
    "fact2.v": "AI-SaaS, B2B, B2B2C", "fact2.k": "Focus",
    "fact3.v": "Arabic & English", "fact3.k": "Languages",

    "contact.title": "Hiring a product designer? Let's talk.",
    "contact.email": "Email",
    "contact.resume": "Resume",
    "footer": "© 2026 Yehia Mourad",

    "cs.back": "All work",
    "cs.title": "Fixing a cashier screen, one finding at a time",
    "cs.lead": "A UX audit of an Arabic point-of-sale system for furniture retail, followed by a working prototype that applies every finding.",
    "cs.f1.k": "Role", "cs.f1.v": "Product designer",
    "cs.f2.k": "Type", "cs.f2.v": "UX audit + prototype",
    "cs.f3.k": "Platform", "cs.f3.v": "Desktop POS, RTL",
    "cs.f4.k": "Year", "cs.f4.v": "2026",

    "cs.s1": "Context",
    "cs.s1.p": "[Who uses this screen, where, and under what pressure. One short paragraph about the product and the cashiers.]",
    "cs.s2": "The problem",
    "cs.s2.p": "[What was going wrong on the existing screens. Lead with the moment that hurts a cashier most.]",
    "cs.s3": "What I found",
    "cs.s3.p": "I audited two core screens and logged 14 findings across usability, hierarchy, accessibility and consistency. The biggest ones:",
    "cs.k1.t": "Touch targets", "cs.k1.d": "[Which controls were too small, and why it matters at a busy till]",
    "cs.k2.t": "Invoice hierarchy", "cs.k2.d": "[Why the total got lost, and how moving it first helped]",
    "cs.k3.t": "Pay vs. Suspend", "cs.k3.d": "[Two actions that looked equal but aren't]",
    "cs.k4.t": "RTL cart layout", "cs.k4.d": "[Where the cart sits and why]",
    "cs.s4": "Key decisions",
    "cs.s4.p": "[Two or three decisions, each with the option you rejected and why. This is the part hiring managers read most closely.]",
    "cs.cap1": "[Before / after: invoice panel]",
    "cs.s5": "Outcome",
    "cs.s5.p": "[What changed. Only claim results you can back up. If it's a concept, say so plainly.]",
    "cs.s6": "What I'd do next",
    "cs.s6.p": "[One honest paragraph: what you'd test with real cashiers, and what you're unsure about.]",
    "cs.next.k": "Next project",
    "cs.next.t": "TwentyToo"
  },

  ar: {
    "nav.work": "الأعمال",
    "nav.about": "عني",
    "nav.contact": "تواصل",
    "lang.toggle": "English",

    "intro.status": "متاح لوظائف مصمم منتجات أول",
    "intro.title": "يحيى مراد، مصمم منتجات أول. <span>منصات AI-SaaS وB2B وأنظمة تصميم، بالعربي والإنجليزي.</span>",
    "intro.text": "أكتر من 8 سنين في تصميم المنتجات الرقمية، آخر 5 منهم على منصات B2B وB2B2C معقدة. حاليًا بحوّل قدرات نماذج الذكاء الاصطناعي لخطوات شغل الناس تقدر تستخدمها فعلًا. مقيم في القاهرة.",

    "p1.title": "إعادة تصميم نقطة البيع",
    "p1.text": "تدقيق تجربة استخدام لنظام نقاط بيع عربي، ونموذج أولي يعالج الـ14 ملاحظة كلها",
    "p1.kind": "B2B · RTL",
    "p2.title": "TwentyToo",
    "p2.text": "منصة AI-SaaS لقطاع الأعمال ونظام تصميم من 96 مكوّن",
    "p2.kind": "AI-SaaS · نظام تصميم",
    "p3.title": "Reach Link",
    "p3.text": "سوق بين المؤثرين والبراندات من الطرفين",
    "p3.kind": "B2B2C · سوق",
    "p4.title": "الخطوط الجوية الكويتية",
    "p4.text": "إعادة تصميم خطوات التشغيل وتقليل وقت إنجاز المهام 20%",
    "p4.kind": "أنظمة مؤسسات",
    "soon": "قريبًا",

    "about.label": "عني",
    "about.p1": "بقود تصميم المنتج من أوله لآخره، من الاستكشاف وهيكلة المعلومات لحد النماذج الأولية وأنظمة التصميم والتسليم للمطورين. <span>بشتغل جنب فرق المنتج والهندسة والبيانات عشان أحوّل المتطلبات المعقدة لمنتجات بسيطة في استخدامها.</span>",
    "about.p2": "اليومين دول تركيزي على AI-SaaS، وبستخدم workflows ذكية مع Claude و Figma MCP في شغلي. <span>جزء كبير من شغلي بيطلع بالعربي، فالـRTL عندي مش إضافة في الآخر، هو الأساس.</span>",
    "fact1.v": "+8 سنوات", "fact1.k": "الخبرة",
    "fact2.v": "AI-SaaS و B2B و B2B2C", "fact2.k": "التركيز",
    "fact3.v": "عربي وإنجليزي", "fact3.k": "اللغات",

    "contact.title": "محتاج مصمم منتجات؟ خلينا نتكلم.",
    "contact.email": "إيميل",
    "contact.resume": "السيرة الذاتية",
    "footer": "© 2026 يحيى مراد",

    "cs.back": "كل الأعمال",
    "cs.title": "إصلاح شاشة الكاشير، ملاحظة ورا ملاحظة",
    "cs.lead": "تدقيق تجربة استخدام لنظام نقاط بيع عربي لمحلات الأثاث، وبعده نموذج أولي شغال بيطبق كل الملاحظات.",
    "cs.f1.k": "الدور", "cs.f1.v": "مصمم منتجات",
    "cs.f2.k": "النوع", "cs.f2.v": "تدقيق + نموذج أولي",
    "cs.f3.k": "المنصة", "cs.f3.v": "نقطة بيع ديسكتوب، RTL",
    "cs.f4.k": "السنة", "cs.f4.v": "2026",

    "cs.s1": "السياق",
    "cs.s1.p": "[مين بيستخدم الشاشة دي، فين، وتحت أي ضغط. فقرة قصيرة عن المنتج والكاشيرز.]",
    "cs.s2": "المشكلة",
    "cs.s2.p": "[إيه اللي كان غلط في الشاشات الحالية. ابدأ باللحظة اللي بتتعب الكاشير أكتر حاجة.]",
    "cs.s3": "اللي لقيته",
    "cs.s3.p": "دققت شاشتين أساسيتين وسجلت 14 ملاحظة في سهولة الاستخدام والتسلسل البصري وإمكانية الوصول والاتساق. أهمهم:",
    "cs.k1.t": "مساحات اللمس", "cs.k1.d": "[أي عناصر كانت صغيرة، وليه ده مهم عند كاشير زحمة]",
    "cs.k2.t": "تسلسل الفاتورة", "cs.k2.d": "[ليه الإجمالي كان ضايع، وإزاي نقله لفوق ساعد]",
    "cs.k3.t": "الدفع مقابل التعليق", "cs.k3.d": "[زرارين شكلهم متساوي بس وزنهم مش متساوي]",
    "cs.k4.t": "مكان السلة في RTL", "cs.k4.d": "[السلة فين وليه]",
    "cs.s4": "القرارات الأساسية",
    "cs.s4.p": "[قرارين أو تلاتة، كل واحد معاه البديل اللي رفضته وليه. ده الجزء اللي مديري التوظيف بيقروه بتركيز.]",
    "cs.cap1": "[قبل / بعد: لوحة الفاتورة]",
    "cs.s5": "النتيجة",
    "cs.s5.p": "[إيه اللي اتغير. متقولش نتايج مش قادر تثبتها. لو ده كونسبت، قول كده بوضوح.]",
    "cs.s6": "الخطوة الجاية",
    "cs.s6.p": "[فقرة صريحة: هتختبر إيه مع كاشيرز حقيقيين، وإيه اللي لسه مش متأكد منه.]",
    "cs.next.k": "المشروع التالي",
    "cs.next.t": "TwentyToo"
  }
};

function setLang(lang) {
  const dict = STRINGS[lang] || STRINGS.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function savedLang() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored) return stored;
  } catch (e) {}
  return (navigator.language || "").startsWith("ar") ? "ar" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(savedLang());
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(document.documentElement.lang === "ar" ? "en" : "ar");
    });
  });
});
