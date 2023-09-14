const trans = {
    en: {
        personal: 'personal',
        Business: 'Business',
        vodavon: 'vodavon Egypt',
        lang: 'عربي',
        shop: 'shop',
        services: 'services',
        promotions: 'promotions',
        Shokran: ' Shokran Loyalty Program',
        Shokranp: "Get points and convert them into money with Shokran program",
        more: ' know more',
        never: 'Never lose your balance',
        neverp: 'Retrieve your balance if you made the transaction by mistake.',
        Manage: 'Manage Account',
        Shop: 'Shop',
        Store: 'Store Locator',
        Contact: 'Contact Us',
        About: 'About vodafone',
        TV: 'TV Commercials',
        releases: 'News & press releases',
        Careers: 'Careers',
        Products: 'Products and services',
        Broadband: 'Broadband',
        Help: 'Help',
        FAQ: "Services FAQ's",
        Call: 'Call us',





    },
    ar: {
        personal: 'افراد',
        Business: 'شركات',
        vodavon: ' فودافون مصر',
        lang: 'English',
        shop: 'تسوق',
        services: 'الخدمات',
        promotions: 'العروض',
        Shokran: 'برنامج شكراً للمكافأت',
        Shokranp: 'حول نقاطك لفلوس مع برنامج شكراً للمكافأت ',
        more: 'المزيد',
        never: 'رصيدك لو راح منك هيرجعلك',
        neverp: 'تقدر ترجع رصيدك لو اشتركت في خدمة أو نظام بالغلط',
        Manage: ' اداره الحساب',
        Shop: 'تسوق',
        Store: 'الفروع',
        Contact: 'اتصل بنا ',
        About: 'عن فودافون',
        TV: 'الإعلانات',
        releases: ' النشرات الصحفية',
        Careers: 'وظائف خالية',
        Products: ' خدمات ڤودافون',
        Broadband: 'انترنت',
        Help: 'المساعدة',
        FAQ: "الأسئلة الشائعة",
        Call: 'كلمنا',




    },

}
console.log("English".length);

const LangSelect = document.getElementById("lang");
var setlang = LangSelect.getAttribute("value")


LangSelect.addEventListener("click", function () {
    let langsel = LangSelect.textContent;
    let lang = langsel.length;
    // lang == 53 ||
    // 
    if (lang == 7) {

        LangSelect.setAttribute("value", "en")
        setlang = LangSelect.getAttribute("value")

        // console.log(setlang);
        const elements = document.querySelectorAll("[data-tr]");
        console.log(elements);
        elements.forEach((element) => {
            const translationkey = element.getAttribute("data-tr");
            element.textContent = trans[setlang][translationkey];
            document.dir = "ltr";
        });


    }

    //     }
    else {
        LangSelect.setAttribute("value", "ar")
        setlang = LangSelect.getAttribute("value")

        console.log(setlang);
        const elements = document.querySelectorAll("[data-tr]");
        console.log(elements);
        elements.forEach((element) => {
            const translationkey = element.getAttribute("data-tr");
            element.textContent = trans[setlang][translationkey];
            document.dir = "rtl"
        });


    }

    localStorage.setItem('lang', setlang);
    let lastname = localStorage.getItem('lang');
    console.log(lastname);


});







