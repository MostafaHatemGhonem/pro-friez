// ==========================================================================
// Translation Dictionary
// ==========================================================================
const translations = {
    ar: {
        "nav-about": "عن برو فرايز",
        "nav-products": "منتجاتنا",
        "nav-calculator": "حاسبة الطلب",
        "nav-why-us": "لماذا نحن",
        "nav-contact": "اتصل بنا",
        "nav-order-now": "اطلب الآن",
        "hero-badge": "بطاطس مقرمشة ذهبية فاخرة ✨",
        "hero-title-1": "المعيار الذهبي للـ",
        "hero-title-2": "بوم فريت المثالي",
        "hero-subtitle-text": "نحن في برو فرايز (Pro Friez) نورد أجود أنواع البطاطس نصف المقلية والمجمدة بمقاسات 7 مم، 10 مم، 12 مم، والقطع الريفية (شتنك) للفنادق، المطاعم، السوبرماركت والمنازل.",
        "hero-btn-calc": "احسب طلبك الآن",
        "hero-btn-products": "تصفح المقاسات",
        "stat-natural": "طبيعية وبدون إضافات",
        "stat-oil": "امتصاص أقل للزيت",
        "stat-delivery": "توصيل سريع ومبرد",
        "badge-crispy-title": "قرمشة تدوم",
        "badge-crispy-desc": "تقنيات تجفيف متطورة",
        "badge-wholesale-title": "أسعار جملة",
        "badge-wholesale-desc": "للمطاعم والمحلات",
        "about-tag": "من نحن",
        "about-title": "شركاء النجاح لكل مطبخ ومطعم",
        "about-desc": "سواء كنت تمتلك مطعماً شهيراً، محلاً لبيع المواد الغذائية، أو تبحث عن الجودة الفاخرة لعائلتك في المنزل، برو فرايز هي خيارك الأول.",
        "about-card1-title": "المطاعم والفنادق",
        "about-card1-desc": "نوفر كميات تجارية بانتظام وثبات كامل في الجودة والمقاس، مما يضمن رضا زبائنك وهدر أقل في مطبخك.",
        "about-card2-title": "المحلات والسوبرماركت",
        "about-card2-desc": "تعبئة وتغليف احترافي ومحكم يحافظ على سلامة وتجميد البطاطس ويجذب المستهلك على الرفوف.",
        "about-card3-title": "المنازل والمستهلكين",
        "about-card3-desc": "استمتع ببطاطس المطاعم الفاخرة في منزلك. سهلة التحضير، سريعة، وبطعم مقرمش لا يقاوم.",
        "products-tag": "مقاساتنا وقصاتنا",
        "products-title": "اختر القصة المثالية لأطباقك",
        "products-desc": "نوفر أربعة مقاسات مدروسة بدقة لتناسب مختلف الاستخدامات وطرق التقديم.",
        "prod-7mm-title": "بوم فريت 7 مم (Shoestring)",
        "prod-7mm-sub": "الرفيعة والأكثر قرمشة",
        "prod-7mm-desc": "مثالية لمطاعم الوجبات السريعة والبرجر. تقلى بسرعة فائقة وتمنحك قرمشة رهيبة تدوم طويلاً.",
        "feat-crisp": "قرمشة مضاعفة",
        "feat-fast": "قلي سريع جداً",
        "prod-10mm-title": "بوم فريت 10 مم (Classic)",
        "prod-10mm-sub": "المعيار الكلاسيكي الذهبي",
        "prod-10mm-desc": "الحجم الكلاسيكي المفضل للجميع. يجمع بين قلب هبّار وطري وقشرة خارجية مقرمشة. ممتاز للكافيهات والعائلات.",
        "feat-standard": "الحجم المعتمد عالمياً",
        "feat-inside": "قلب طري وغني",
        "prod-12mm-title": "بوم فريت 12 مم (Steakhouse)",
        "prod-12mm-sub": "العريضة والمليئة بالنكهة",
        "prod-12mm-desc": "قصة سميكة فاخرة، مثالية للتقديم مع شرائح الستيك والأطباق الرئيسية. تحتفظ بالحرارة لفترات طويلة وتكفي لإشباع كبير.",
        "feat-heat": "حفظ ممتاز للحرارة",
        "feat-yield": "إشباع ووزن ممتاز",
        "prod-shtunk-title": "بطاطس شتنك (Rustic Wedges)",
        "prod-shtunk-sub": "القصة الريفية العريضة بالقشر",
        "prod-shtunk-desc": "قطع عريضة ومتموجة ذات طابع منزلي ريفي. رائعة ومميزة جداً مع التتبيل بالبهارات والأعشاب، وتقديمها كطبق جانبي فاخر.",
        "feat-peel": "تأتي بالقشرة الطبيعية لذوق مميز",
        "feat-spicy": "رائعة مع التتبيل والخبز بالفرن",
        "calc-tag": "احسب التكلفة",
        "calc-title": "حاسبة الطلبات التفاعلية",
        "calc-desc": "اختر المقاسات والكميات التي ترغب بها، وتعرف على السعر التقريبي فوراً قبل إرسال طلبك.",
        "calc-subtitle": "قائمة الأسعار القياسية:",
        "calc-package-1": "عبوة 1 كجم",
        "calc-package-25": "عبوة 2.5 كجم",
        "calc-bulk-tip": "💡 هل تبحث عن طلبية كبيرة أو أسعار جملة للمطاعم والموزعين؟ تواصل معنا عبر الواتساب مباشرة للتفاوض على الخصم المتاح!",
        "qty-1kg": "عبوة 1 كجم (60 ج.م)",
        "qty-25kg": "عبوة 2.5 كجم (145 ج.م)",
        "summary-title": "ملخص الطلب المبدئي",
        "summary-empty-msg": "لم تقم بإضافة أي منتجات بعد. قم بزيادة الكميات لعرض الفاتورة.",
        "summary-total-weight": "الوزن الإجمالي:",
        "summary-subtotal": "السعر الإجمالي (قبل الخصم):",
        "buyer-type-label": "نوع المشتري:",
        "buyer-opt-consumer": "مستهلك منزلي",
        "buyer-opt-restaurant": "مطعم / كافيه",
        "buyer-opt-shop": "محل / سوبرماركت",
        "send-whatsapp": "تأكيد الطلب والتفاوض عبر الواتساب",
        "whatsapp-note": "* سيتم نقلك إلى واتساب لإرسال رسالة منسقة بطلبك للتفاوض على الخصومات والتوصيل.",
        "why-tag": "مميزاتنا",
        "why-title": "لماذا يفضل الطهاة وأصحاب المطاعم برو فرايز؟",
        "why-desc": "نحن نهتم بالتفاصيل الدقيقة لنمنحك بطاطس مثالية من المزرعة وحتى المقلاة.",
        "why-title1": "أفضل ثمار البطاطس",
        "why-desc1": "نستخدم حصرياً بطاطس عالية المادة الجافة (High Solid Content) لضمان قلب كريمي وقشرة مقرمشة.",
        "why-title2": "امتصاص أقل للزيت",
        "why-desc2": "بفضل تقنية القلي التمهيدي السريع والتجفيف الحراري، تستهلك بطاطسنا زيت أقل بنسبة تصل إلى 20%.",
        "why-title3": "تجميد فوري سريع IQF",
        "why-desc3": "نجمد البطاطس بشكل فردي وصادم لضمان عدم تكتلها داخل العبوات والاحتفاظ بكامل طعمها الطازج.",
        "why-title4": "خدمة توريد مستدامة",
        "why-desc4": "لا داعي للقلق بشأن انقطاع المخزون. نلتزم بجداول توريد دقيقة بسيارات مجهزة ومبردة.",
        "contact-tag": "تواصل معنا",
        "contact-title": "جاهزون لتلبية طلباتك في أي وقت",
        "contact-desc": "راسلنا للاستفسار عن أسعار الكميات الكبيرة وعروض الشراكة الدائمة للمطاعم وموزعي الجملة.",
        "contact-info-title": "معلومات الاتصال",
        "contact-info-desc": "يسعدنا اتصالك بنا أو زيارتنا في أي وقت لمناقشة شراكات العمل.",
        "contact-phone": "الهاتف والواتساب",
        "contact-email": "البريد الإلكتروني",
        "contact-location": "الموقع",
        "contact-loc-val": "جمهورية مصر العربية، القاهرة / الجيزة",
        "form-name": "الاسم الكريم",
        "form-phone": "رقم الهاتف",
        "form-email": "البريد الإلكتروني (اختياري)",
        "form-message": "الرسالة أو الاستفسار",
        "form-send": "إرسال الاستفسار",
        "footer-about": "المورد الرئيسي للبطاطس نصف المقلية الفاخرة المجهزة خصيصاً للمطاعم الكبرى، الفنادق، وموزعي التجزئة والمنازل. قرمشة لا مثيل لها وطعم طبيعي 100%.",
        "footer-links-title": "روابط سريعة",
        "footer-prod-title": "منتجاتنا",
        "footer-rights": "جميع الحقوق محفوظة لشركة برو فرايز © 2026",
        "flip-hint-front": "المس أو مرر لرؤية الظهر 🔄",
        "flip-hint-back": "المس أو مرر لرؤية الوجه 🔄"
    },
    en: {
        "nav-about": "About Us",
        "nav-products": "Our Cuts",
        "nav-calculator": "Order Calculator",
        "nav-why-us": "Why Choose Us",
        "nav-contact": "Contact",
        "nav-order-now": "Order Now",
        "hero-badge": "Premium Crispy Golden Fries ✨",
        "hero-title-1": "The Golden Standard of",
        "hero-title-2": "Perfect Pommes Frites",
        "hero-subtitle-text": "Pro Friez supplies high-quality, pre-fried frozen potatoes in 7mm, 10mm, 12mm, and rustic wedges (Shtunk) to hotels, restaurants, supermarkets, and homes.",
        "hero-btn-calc": "Calculate Your Order",
        "hero-btn-products": "Browse Cuts",
        "stat-natural": "100% Natural, No Additives",
        "stat-oil": "Less Oil Absorption",
        "stat-delivery": "Fast, Cold Delivery",
        "badge-crispy-title": "Long-Lasting Crunch",
        "badge-crispy-desc": "Advanced drying tech",
        "badge-wholesale-title": "Wholesale Rates",
        "badge-wholesale-desc": "For restaurants & shops",
        "about-tag": "Who We Are",
        "about-title": "Your Trusted Culinary Partner",
        "about-desc": "Whether you own a busy restaurant, retail grocery store, or are looking for premium quality french fries for your family, Pro Friez is your top choice.",
        "about-card1-title": "Restaurants & Hotels",
        "about-card1-desc": "We supply bulk orders reliably with consistent size and quality, ensuring customer satisfaction and lower kitchen waste.",
        "about-card2-title": "Shops & Supermarkets",
        "about-card2-desc": "Professional, secure, and appealing retail packaging that maintains freezing temperatures on the shelves.",
        "about-card3-title": "Homes & Consumers",
        "about-card3-desc": "Enjoy premium restaurant-quality fries in your home. Quick and easy to prepare, with an irresistible taste.",
        "products-tag": "Our Cuts & Sizes",
        "products-title": "Choose the Perfect Cut for Your Dishes",
        "products-desc": "We offer four carefully selected sizes to suit different culinary styles and plating styles.",
        "prod-7mm-title": "7mm Pommes Frites (Shoestring)",
        "prod-7mm-sub": "Thin and Extra Crispy",
        "prod-7mm-desc": "Ideal for fast food diners and burger joints. Fries extremely fast and keeps a delicious long-lasting crunch.",
        "feat-crisp": "Double Crispiness",
        "feat-fast": "Super Fast Frying",
        "prod-10mm-title": "10mm Pommes Frites (Classic)",
        "prod-10mm-sub": "The Golden Standard",
        "prod-10mm-desc": "The most popular classic cut. Golden crispy outside with a soft, fluffy potato heart. Perfect for cafes and home freezers.",
        "feat-standard": "Globally approved size",
        "feat-inside": "Soft, rich potato interior",
        "prod-12mm-title": "12mm Pommes Frites (Steakhouse)",
        "prod-12mm-sub": "Thick & Flavourful",
        "prod-12mm-desc": "Thick premium cut, perfect for steak side dishes and high-end restaurant mains. Keeps heat longer and yields high satisfaction.",
        "feat-heat": "Excellent heat retention",
        "feat-yield": "Great plate coverage and weight",
        "prod-shtunk-title": "Shtunk Potatoes (Rustic Wedges)",
        "prod-shtunk-sub": "Thick Skin-On Wedges",
        "prod-shtunk-desc": "Rustic-style, skin-on wedges. Excellent for seasoning with herbs, spices, and baking or deep frying for gourmet sides.",
        "feat-peel": "Skin-on cut for authentic texture",
        "feat-spicy": "Perfect for baking & seasoning",
        "calc-tag": "Get an Estimate",
        "calc-title": "Interactive Order Calculator",
        "calc-desc": "Select the cuts and quantity you need to instantly estimate your order cost before contacting us.",
        "calc-subtitle": "Standard Price List:",
        "calc-package-1": "1 Kg Package",
        "calc-package-25": "2.5 Kg Package",
        "calc-bulk-tip": "💡 Looking for large bulk or business pricing? Message us directly on WhatsApp to negotiate a custom discount!",
        "qty-1kg": "1 Kg bag (60 EGP)",
        "qty-25kg": "2.5 Kg bag (145 EGP)",
        "summary-title": "Order Draft Summary",
        "summary-empty-msg": "No items added yet. Adjust quantities to view your draft receipt.",
        "summary-total-weight": "Total Weight:",
        "summary-subtotal": "Total Price (Standard):",
        "buyer-type-label": "Buyer Category:",
        "buyer-opt-consumer": "Home / Consumer",
        "buyer-opt-restaurant": "Restaurant / Cafe",
        "buyer-opt-shop": "Shop / Supermarket",
        "send-whatsapp": "Confirm Order & Discuss Discount",
        "whatsapp-note": "* This will redirect you to WhatsApp with a pre-formatted message to finalize order and discounts.",
        "why-tag": "Our Key Advantages",
        "why-title": "Why Chefs and Owners Prefer Pro Friez",
        "why-desc": "We focus on tiny details to deliver the perfect fries from the farm straight to your fryer.",
        "why-title1": "Selected Premium Potatoes",
        "why-desc1": "We use high solid-content potato crops to ensure a fluffy interior and crisp outer layer.",
        "why-title2": "Lower Oil Intake",
        "why-desc2": "Our pre-frying and drying technology makes our fries absorb up to 20% less oil during preparation.",
        "why-title3": "IQF Flash Freezing",
        "why-desc3": "Individually Quick Frozen (IQF) to ensure fries don't stick together, preserving texture and taste.",
        "why-title4": "Reliable Cold Chain Supply",
        "why-desc4": "Never run out of stock. We maintain a reliable delivery schedule using freezer-equipped trucks.",
        "contact-tag": "Get In Touch",
        "contact-title": "Ready to Support Your Kitchen",
        "contact-desc": "Write to us for wholesale price queries, partnership contracts, or home delivery inquiries.",
        "contact-info-title": "Contact Details",
        "contact-info-desc": "We are happy to answer your calls or host you for business talks.",
        "contact-phone": "Phone & WhatsApp",
        "contact-email": "Email Address",
        "contact-location": "Location",
        "contact-loc-val": "Greater Cairo, Egypt",
        "form-name": "Your Name",
        "form-phone": "Phone Number",
        "form-email": "Email Address (Optional)",
        "form-message": "Your Inquiry",
        "form-send": "Send Message",
        "footer-about": "The ultimate supplier of premium, crispy pre-fried frozen fries. Custom-prepared for high-end restaurants, shops, and homes. 100% natural.",
        "footer-links-title": "Quick Links",
        "footer-prod-title": "Our Cuts",
        "footer-rights": "All Rights Reserved to Pro Friez © 2026",
        "flip-hint-front": "Tap or hover to view back 🔄",
        "flip-hint-back": "Tap or hover to view front 🔄"
    }
};

// State variables
let currentLang = localStorage.getItem("pro_friez_lang") || "ar";
const whatsappNumber = "201096708977";

// Pricing Rules
const priceRules = {
    "1k": 60,      // 1kg bag = 60 EGP
    "25k": 145     // 2.5kg bag = 145 EGP
};

const productLabels = {
    ar: {
        "7mm": "بوم فريت 7 مم (Shoestring)",
        "10mm": "بوم فريت 10 مم (Classic)",
        "12mm": "بوم فريت 12 مم (Steakhouse)",
        "shtunk": "بطاطس شتنك (Rustic Wedges)"
    },
    en: {
        "7mm": "7mm Pommes Frites (Shoestring)",
        "10mm": "10mm Pommes Frites (Classic)",
        "12mm": "12mm Pommes Frites (Steakhouse)",
        "shtunk": "Shtunk Potatoes (Rustic Wedges)"
    }
};

// ==========================================================================
// Language Switching Logic
// ==========================================================================
function updateLanguageUI() {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const toggleBtn = document.getElementById("lang-toggle");
    const langText = toggleBtn.querySelector(".lang-text");

    // Remove old lang classes
    bodyEl.classList.remove("lang-ar", "lang-en");
    bodyEl.classList.add(`lang-${currentLang}`);

    if (currentLang === "ar") {
        htmlEl.setAttribute("lang", "ar");
        htmlEl.setAttribute("dir", "rtl");
        langText.textContent = "English";
    } else {
        htmlEl.setAttribute("lang", "en");
        htmlEl.setAttribute("dir", "ltr");
        langText.textContent = "العربية";
    }

    // Translate all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update form placeholders
    const nameInput = document.getElementById("form-name");
    const phoneInput = document.getElementById("form-phone");
    const emailInput = document.getElementById("form-email");
    const messageInput = document.getElementById("form-message");

    if (currentLang === "ar") {
        if (nameInput) nameInput.placeholder = "أحمد محمد";
        if (phoneInput) phoneInput.placeholder = "01xxxxxxxxx";
        if (emailInput) emailInput.placeholder = "name@example.com";
        if (messageInput) messageInput.placeholder = "أنا صاحب مطعم وأريد الاستفسار عن توريد طن أسبوعياً من مقاس 10 مم...";
    } else {
        if (nameInput) nameInput.placeholder = "John Doe";
        if (phoneInput) phoneInput.placeholder = "01xxxxxxxxx";
        if (emailInput) emailInput.placeholder = "name@example.com";
        if (messageInput) messageInput.placeholder = "I own a restaurant and want to inquire about weekly supply of 10mm fries...";
    }

    // Refresh dynamic calculator elements
    calculateOrder();
}

// Toggle language
document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("pro_friez_lang", currentLang);
    updateLanguageUI();
});

// ==========================================================================
// Mobile Nav Menu Toggle
// ==========================================================================
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const isOpen = navMenu.classList.contains("open");
        mobileNavToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Close mobile menu when nav link clicked
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            mobileNavToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

// Active navigation highlight on scroll
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 200;
    
    document.querySelectorAll("section").forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
            const id = section.getAttribute("id");
            document.querySelectorAll(".nav-menu a").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
    
    // Add box shadow to header on scroll
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "var(--shadow-md)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ==========================================================================
// Order Calculator Logic
// ==========================================================================
const quantities = {
    "7mm": { "1k": 0, "25k": 0 },
    "10mm": { "1k": 0, "25k": 0 },
    "12mm": { "1k": 0, "25k": 0 },
    "shtunk": { "1k": 0, "25k": 0 }
};

// Quantity adjustment click handlers
document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const prod = e.target.getAttribute("data-prod");
        const size = e.target.getAttribute("data-size");
        const isPlus = e.target.classList.contains("plus");
        const inputId = `qty-${prod}-${size}`;
        const input = document.getElementById(inputId);
        
        let val = parseInt(input.value) || 0;
        if (isPlus) {
            val += 1;
        } else if (val > 0) {
            val -= 1;
        }
        
        input.value = val;
        quantities[prod][size] = val;
        calculateOrder();
    });
});

// Quantity input direct change handlers
document.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("input", (e) => {
        const prod = e.target.getAttribute("data-prod");
        const size = e.target.getAttribute("data-size");
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 0) {
            val = 0;
        }
        e.target.value = val;
        quantities[prod][size] = val;
        calculateOrder();
    });
});

// Buyer type change
document.getElementById("buyer-type").addEventListener("change", () => {
    calculateOrder();
});

// Core order calculator and summary renderer
function calculateOrder() {
    const summaryEmpty = document.getElementById("summary-empty");
    const summaryContent = document.getElementById("summary-content");
    const summaryItemsDiv = document.getElementById("summary-items");
    const totalWeightSpan = document.getElementById("total-weight");
    const subtotalPriceSpan = document.getElementById("subtotal-price");
    
    let totalWeight = 0;
    let totalPrice = 0;
    let hasItems = false;
    
    summaryItemsDiv.innerHTML = "";
    
    // Check all products
    for (const [prodKey, sizes] of Object.entries(quantities)) {
        const qty1 = sizes["1k"];
        const qty25 = sizes["25k"];
        
        if (qty1 > 0 || qty25 > 0) {
            hasItems = true;
            const productName = productLabels[currentLang][prodKey];
            
            // Subtotals
            const weight = (qty1 * 1.0) + (qty25 * 2.5);
            const price = (qty1 * priceRules["1k"]) + (qty25 * priceRules["25k"]);
            
            totalWeight += weight;
            totalPrice += price;
            
            // Build dynamic UI row
            const itemRow = document.createElement("div");
            itemRow.className = "summary-item-row";
            
            let detailsText = "";
            if (currentLang === "ar") {
                const parts = [];
                if (qty1 > 0) parts.push(`${qty1} عبوة 1كجم`);
                if (qty25 > 0) parts.push(`${qty25} عبوة 2.5كجم`);
                detailsText = parts.join(" و ");
            } else {
                const parts = [];
                if (qty1 > 0) parts.push(`${qty1} x 1kg`);
                if (qty25 > 0) parts.push(`${qty25} x 2.5kg`);
                detailsText = parts.join(" & ");
            }
            
            itemRow.innerHTML = `
                <div>
                    <div class="summary-item-name">${productName}</div>
                    <div class="summary-item-details">${detailsText}</div>
                </div>
                <div class="summary-item-price">${price} EGP</div>
            `;
            summaryItemsDiv.appendChild(itemRow);
        }
    }
    
    // Toggle cart empty message or summary content
    if (hasItems) {
        summaryEmpty.classList.add("hidden");
        summaryContent.classList.remove("hidden");
        
        totalWeightSpan.textContent = `${totalWeight.toFixed(1)} ${currentLang === 'ar' ? 'كجم' : 'Kg'}`;
        subtotalPriceSpan.textContent = `${totalPrice} EGP`;
    } else {
        summaryEmpty.classList.remove("hidden");
        summaryContent.classList.add("hidden");
    }
}

// WhatsApp redirect builder
document.getElementById("send-whatsapp-btn").addEventListener("click", () => {
    const buyerType = document.getElementById("buyer-type").value;
    
    let totalWeight = 0;
    let totalPrice = 0;
    let orderLines = [];
    
    for (const [prodKey, sizes] of Object.entries(quantities)) {
        const qty1 = sizes["1k"];
        const qty25 = sizes["25k"];
        
        if (qty1 > 0 || qty25 > 0) {
            const productName = productLabels[currentLang][prodKey];
            const weight = (qty1 * 1.0) + (qty25 * 2.5);
            const price = (qty1 * priceRules["1k"]) + (qty25 * priceRules["25k"]);
            
            totalWeight += weight;
            totalPrice += price;
            
            let desc = "";
            if (qty1 > 0 && qty25 > 0) {
                desc = `${qty1}x(1kg) & ${qty25}x(2.5kg)`;
            } else if (qty1 > 0) {
                desc = `${qty1}x(1kg)`;
            } else {
                desc = `${qty25}x(2.5kg)`;
            }
            orderLines.push(`• *${productName}*: ${desc} [${weight} Kg]`);
        }
    }
    
    // Translate client category name
    let buyerLabel = buyerType;
    if (buyerType === "consumer") {
        buyerLabel = currentLang === "ar" ? "مستهلك منزلي" : "Home Consumer";
    } else if (buyerType === "restaurant") {
        buyerLabel = currentLang === "ar" ? "مطعم / كافيه" : "Restaurant / Cafe";
    } else if (buyerType === "shop") {
        buyerLabel = currentLang === "ar" ? "محل / سوبرماركت" : "Shop / Supermarket";
    }

    // Construct the text message
    let messageText = "";
    if (currentLang === "ar") {
        messageText = `مرحباً برو فرايز! 👋\n`;
        messageText += `أود الاستفسار عن طلب بطاطس وطلب تسعيرة مخصصة:\n\n`;
        messageText += `*تفاصيل الطلب:*\n`;
        messageText += orderLines.join("\n") + `\n\n`;
        messageText += `*الوزن الإجمالي:* ${totalWeight.toFixed(1)} كجم\n`;
        messageText += `*القيمة المبدئية للطلب:* ${totalPrice} ج.م\n`;
        messageText += `*نوع المشتري:* ${buyerLabel}\n\n`;
        
        if (totalWeight >= 10 || buyerType !== "consumer") {
            messageText += `⚠️ *أرغب في الحصول على خصم للجملة/الكميات التجارية. يرجى إرسال تفاصيل الخصم المتاح وطرق الدفع والتوصيل.*`;
        } else {
            messageText += `يرجى تأكيد إمكانية التوصيل وطرق الدفع. شكراً لكم!`;
        }
    } else {
        messageText = `Hello Pro Friez! 👋\n`;
        messageText += `I'd like to check details/place a custom order request:\n\n`;
        messageText += `*Order Details:*\n`;
        messageText += orderLines.join("\n") + `\n\n`;
        messageText += `*Total Weight:* ${totalWeight.toFixed(1)} Kg\n`;
        messageText += `*Estimated Subtotal:* ${totalPrice} EGP\n`;
        messageText += `*Buyer Type:* ${buyerLabel}\n\n`;
        
        if (totalWeight >= 10 || buyerType !== "consumer") {
            messageText += `⚠️ *I would like to request a wholesale / bulk discount for this order. Please advise on available discounts and delivery scheduling.*`;
        } else {
            messageText += `Please confirm delivery availability and payment terms. Thank you!`;
        }
    }
    
    // Open Whatsapp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
});

// ==========================================================================
// Contact Form Handler
// ==========================================================================
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("form-name").value;
    const phone = document.getElementById("form-phone").value;
    const email = document.getElementById("form-email").value;
    const msg = document.getElementById("form-message").value;
    
    // Construct text for custom inquiry via Whatsapp (very popular in local commerce)
    let inquiryText = "";
    if (currentLang === "ar") {
        inquiryText = `مرحباً برو فرايز! 👋\n`;
        inquiryText += `لدى استفسار من خلال الموقع الإلكتروني:\n\n`;
        inquiryText += `*الاسم:* ${name}\n`;
        inquiryText += `*الهاتف:* ${phone}\n`;
        if (email) inquiryText += `*البريد الإلكتروني:* ${email}\n`;
        inquiryText += `\n*الرسالة:*\n${msg}`;
    } else {
        inquiryText = `Hello Pro Friez! 👋\n`;
        inquiryText += `I have a general inquiry from your website:\n\n`;
        inquiryText += `*Name:* ${name}\n`;
        inquiryText += `*Phone:* ${phone}\n`;
        if (email) inquiryText += `*Email:* ${email}\n`;
        inquiryText += `\n*Message:*\n${msg}`;
    }
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryText)}`;
    window.open(whatsappUrl, "_blank");
});

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    updateLanguageUI();
    
    // Toggle 3D card flipping on click (for mobile/tablet tap)
    const packagingCard = document.querySelector(".packaging-card-3d");
    if (packagingCard) {
        packagingCard.addEventListener("click", () => {
            packagingCard.classList.toggle("flipped");
        });
    }
});
