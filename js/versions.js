// Variables

const reviews = {
    english: [
        {
            text: "\“I love this app so much. I downloaded almost every journal app, this one was by far the best one for me. It’s super simple and aesthetically pleasing.\”",
            logo: "K",
            name: "Kilo_reley",
            logoBg: "#219653"
        },
        {
            text: "\“The interface is simple and beautiful. It’s a low commitment way to keep memories that you will cherish later on. They give many ways to backup entries so they don’t get lost.\”",
            logo: "M",
            name: "MJRecht",
            logoBg: "#F2C94C"
        },
        {
            text: "\“This is by far one of the best journalling apps in the market and I am fully satisfied with all the simplicity & elegance that it features, most especially its minimalist design.\”",
            logo: "B",
            name: "Blanche25",
            logoBg: "#2D9CDB"
        },
    ],
    chinese: [
        {
            text: "\“简单的几个步骤，记录下一天的喜怒哀乐。让记忆随着时光的沉淀酿成美酒，闲暇之时打开《卡片日记》一一品尝吧。\”",
            logo: "A",
            name: "App Store",
            logoBg: "#219653"
        },
        {
            text: "\“很幸运能在想写点东西的时候，遇到这款软件\”",
            logo: "秋",
            name: "秋风不扫叶",
            logoBg: "#F2C94C"
        },
        {
            text: "\“超级喜欢这种清新简单的风格，看着以前写过的东西特别舒服。对于比较懒的我每天写几行还是可以坚持的。\”",
            logo: "彼",
            name: "彼方流年",
            logoBg: "#2D9CDB"
        },
    ]

};

const prices = {
        month: '$0.99',
        year: '$7.99',
        lifetime: '$12.99'
};

const pricesChinese = {
    month: '¥7.00',
    year: '¥63',
    lifetime: '¥88'
};

const pricesTime = [
    '1 Month',
    '1 Year',
    'Lifetime'
]

const pricesTimeChinese = [
    '每月',
    '每年',
    '永久'
]

// Change translation here:
const chinese = {
    links : {
        features: '功能',
        pricing: '价格',
        blog: '帮助',
        download: '下载'
    },
    landing: {
        title: '在你的卡片中写下每一天',
        description: '卡片日记为你提供了一个写下思考，感受，发现，探索，记忆和美梦的完美栖息地。',
        average: '4.9',
        numReviews: '47,000 多个App Store评论'
    },
    intro1: {
        title: '倾听自己的心声',
        description: '我们生活在一个信息过载的时代，太多的碎片和噪音让我们很去倾听自己的心声。'
    },
    intro2: {
        title: '记录你的生活点滴',
        description: '写下日记的同时，放慢你的脚步，安静的去聆听内心的呼唤。'
    },
    intro3: {
        title: '让你的每一天都充满意义',
        description : {
            companyName: '卡片日记',
            text: '记录每一天的喜怒哀乐，让记忆随着时光的沉淀酿成美酒。'
        }
    },
    features: {
        title: '主要功能',
        description: '凭借着卡片日记简洁，恰到好处的各种功能，让你在书写日记的过程中，轻松快乐，条理清晰，保护你的隐私的同时又允许你随时随地访问你的日记。',
        list: [
            {
                title: '留下你的回忆',
                items: [
                    '照片和视频',
                    '富文本格式/多种字体'
                ]
            },
            {
                title: '温馨和私密',
                items: [
                    '用户私有云存储',
                    'Face ID / 数字密码'
                ]
            },
            {
                title: '记录你的心情',
                items: [
                    '统计/照片库',
                    '心情/标签/位置/喜爱'
                ]
            },
            {
                title: '一刻也不会失去',
                items: [
                    '云端自动同步（我云端/谷歌驱动器',
                    '导出为PDF / TXT / ZIP文件'
                ]
            }
        ]
    },
    pricing: {
        title: '价格',
        description: '卡片日记的大多数功能均可免费使用，升级到高级版享受更多高级功能并让你的日记体验更加出色',
        buttons: {
            month: '每月',
            year: '每年',
            lifetime: '永久'
        },
        plansNames: {
            free: {
                title: '免费版',
                description: '使用大部分功能！',
                price: '¥0',
                monthly: ''
            },
            pro: {
                title: '高级版',
                description: '解锁所有功能!',
                price: '¥7',
                monthly: '每月'
            }
        },
        features: [
            '照片',
            '视频',
            '天气',
            '地点',
            '标签',
            '提醒',
            '统计',
            '照片库',
            '指纹锁 / Face ID',
            '云自动同步',
            '富文本',
            '多种字体',
            '心情',
            '喜爱',
            '夜间模式',
            '密码锁',
            '更多照片和视频',
            '导出为PDF / TXT / ZIP'
        ],
        viewMore: '查看所有'
    },
    getStarted: {
        title: '免费下载使用',
        description: '卡片日记适用于 Android，iPhone 和 iPad.'
    },
    reviews: [
        {
            text: '\“简单的几个步骤，记录下一天的喜怒哀乐。让记忆随着时光的沉淀酿成美酒，闲暇之时打开《卡片日记》一一品尝吧。\”',
            logo: 'A',
            name: 'App Store'
        },
        {
            text: '\“很幸运能在想写点东西的时候，遇到这款软件\”',
            logo: '秋',
            name: '秋风不扫叶'
        },
        {
            text: '\“超级喜欢这种清新简单的风格，看着以前写过的东西特别舒服。对于比较懒的我每天写几行还是可以坚持的。\”',
            logo: '彼',
            name: '彼方流年'
        }
    ],
    footer: {
        description: '在你的卡片中写下每一天',
        links: {
            terms: '条款',
            privacy: '隐私',
            press: '媒体',
            copyright: '© Rhythmical Studio'
        }
    },
    imgAlts: {
        check: '校验',
        fiveStars: '星星',
        logo: '商标'
    }
}

const chineseVersion = `<nav id="nav-mobile" data-nav-mobile>
        <div>
            <div id="nav-wrapper">
                <div id="nav-content">
                    <div id="logo-mobile">
                        <a href="#landing">
                            <img src="img/logo.png" alt="Card Diary Logo">
                        </a>
                    </div>
                    <div id="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div id="links">
                    <ul id="links-wrapper">
                        <li>
                            <a href="#features">${chinese.links.features}</a>
                        </li>
                        <li>
                            <a href="#pricing">${chinese.links.pricing}</a>
                        </li>
                        <li>
                            <a href="https://carddiary.me/help">${chinese.links.blog}</a>
                        </li>
                        <li id="lng">
                            <p id="lng-switch" class="cn"><span>中</span>/<span>EN</span></p>
                        </li>
                        <div id="link-arrow"></div>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <nav id="nav" data-nav>
        <div class="container-wi">
            <div id="nav-content">
                <div id="logo">
                    <a href="#landing">
                            <img src="img/logo.png" alt="Card Diary Logo">
                    </a>
                </div>
                <ul id="links">
                    <li>
                        <a href="#features">${chinese.links.features}</a>
                    </li>
                    <li>
                        <a href="#pricing">${chinese.links.pricing}</a>
                    </li>
                    <li>
                        <a href="https://carddiary.me/help">${chinese.links.blog}</a>
                    </li>
                    <li id="lng">
                        <p id="lng-switch" class="cn"><span>中</span>/<span>EN</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section id="landing">
        <div class="container">
            <div id="header-content">
                <div class="card">
                    <h1 id="main-header" data-aos="fade-right">${chinese.landing.title}</h1>
                    <p id="header-lead" data-aos="fade-down">${chinese.landing.description}</p>
                    <div class="apple-google fade">
                        <!-- Link to app store here -->
                        <a href="https://apps.apple.com/app/id1295506659" target="_blank">
                            <img src="img/app-store.png" alt="Card Diary on the app store">
                        </a>
                        <!-- Link to google play here -->
                        <a href="https://play.google.com/store/apps/details?id=com.card.carddiary" target="_blank">
                            <img src="img/google-play.png" alt="Card Diary on ku an">
                        </a>
                    </div>
                    <div id="rating" class="fade">
                        <img src="img/stars.png" alt="5 star rating">
                        <p id="average">${chinese.landing.average}</p>
                        <p>${chinese.landing.numReviews}</p>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <img src="img/header-image.png" alt="Day on a card">
                </div>
            </div>
        </div>
    </section>
    <section id="rewards">
        <div class="container-nr">
            <div id="rewards-content" class="fade">
                <div>
                    <a href="https://apps.apple.com/story/id1433996215" target="_blank">
                        <img src="img/1.png" alt="App of the day">
                    </a>
                </div>
                <div>
                    <a href="https://www.producthunt.com/posts/card-diary" target="_blank">
                        <img src="img/2.png" alt="Product Hunt Featured">
                    </a>
                </div>
                <div>
                    <a href="https://www.behance.net/gallery/59120015/Card-Diary-iOS-App" target="_blank">
                        <img src="img/3.png" alt="Behance Featured">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="intro">
        <div class="container">
            <div class="intro-content">
                <div class="card" data-aos="fade-right">
                    <img src="img/4.png" alt="Listen to your heart">
                </div>
                <div class="card">
                    <h2>${chinese.intro1.title}</h2>
                    <p class="intro-lead">${chinese.intro1.description}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="intro">
        <div class="container">
            <div class="intro-content">
                <div class="card">
                    <h2>${chinese.intro2.title}</h2>
                    <p class="intro-lead">${chinese.intro2.description}</p>
                </div>
                <div class="card" data-aos="fade-left">
                    <img src="img/5.png" alt="Capture your life story">
                </div>
            </div>
        </div>
    </section>
    <section class="intro" id="last">
        <div class="container">
            <div class="intro-content">
                <div class="card" data-aos="fade-right">
                    <img src="img/6.png" alt="Make your day meaningful">
                </div>
                <div class="card">
                    <h2>${chinese.intro3.title}</h2>
                    <p class="intro-lead">
                        <span>${chinese.intro3.description.companyName}</span>
                        ${chinese.intro3.description.text}</p>
                </div>
            </div>
        </div>
    </section>
    <section id="features">
        <div class="container">
            <div id="features-content">
                <h2>${chinese.features.title}</h2>
                <p id="features-lead">${chinese.features.description}</p>
                <div id="features-cards">
                    <div class="card-wrapper">
                        <div class="card">
                            <h3>${chinese.features.list[0].title}</h3>
                            <ul>
                                <li>${chinese.features.list[0].items[0]}</li>
                                <li>${chinese.features.list[0].items[1]}</li>
                            </ul>
                        </div>
                        <div class="card">
                            <h3>${chinese.features.list[1].title}</h3>
                            <ul>
                                <li>${chinese.features.list[1].items[0]}</li>
                                <li>${chinese.features.list[1].items[1]}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-wrapper"> 
                        <div class="card">
                            <h3>${chinese.features.list[2].title}</h3>
                            <ul>
                                <li>${chinese.features.list[2].items[0]}</li>
                                <li>${chinese.features.list[2].items[1]}</li>
                            </ul>
                        </div>
                        <div class="card">
                            <h3>${chinese.features.list[3].title}</h3>
                            <ul>
                                <li>${chinese.features.list[3].items[0]}</li>
                                <li>${chinese.features.list[3].items[1]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="pricing">
        <div class="container">
            <div id="pricing-content">
                <h2>${chinese.pricing.title}</h2>
                <p id="pricing-lead">${chinese.pricing.description}</p>
                <div id="time-span">
                    <button class="time active" id="1-month">${chinese.pricing.buttons.month}</button>
                    <button class="time" id="1-year">${chinese.pricing.buttons.year}</button>
                    <button class="time" id="lifetime">${chinese.pricing.buttons.lifetime}</button>
                </div>
                <div id="plans">
                    <div class="plan" data-aos="fade-right" id="free">
                        <table>
                            <tr>
                                <th>
                                    <h3>${chinese.pricing.plansNames.free.title}</h3>
                                    <p>${chinese.pricing.plansNames.free.description}</p>
                                </th>
                            </tr>
                            <tr id=price-time>
                                <td id="price">${chinese.pricing.plansNames.free.price}</td>
                                <td id="time">${chinese.pricing.plansNames.free.monthly}</td>
                            </tr>
                            <tr class="view-more">
                                <td><p class="view-more-link">${chinese.pricing.viewMore}</p></td>
                                <td>
                                    <div class="angle-wrapper">
                                        <img src="img/angle-down.png" alt="arrow down">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-1.png" alt="${chinese.pricing.features[0]}" class="icon">
                                        <p>${chinese.pricing.features[0]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-2.png" alt="${chinese.pricing.features[1]}" class="icon">
                                        <p>${chinese.pricing.features[1]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-3.png" alt="${chinese.pricing.features[2]}" class="icon">
                                        <p>${chinese.pricing.features[2]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-4.png" alt="${chinese.pricing.features[3]}" class="icon">
                                        <p>${chinese.pricing.features[3]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-5.png" alt="${chinese.pricing.features[4]}" class="icon">
                                        <p>${chinese.pricing.features[4]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-6.png" alt="${chinese.pricing.features[5]}" class="icon">
                                        <p>${chinese.pricing.features[5]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-7.png" alt="${chinese.pricing.features[6]}" class="icon">
                                        <p>${chinese.pricing.features[6]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-8.png" alt="${chinese.pricing.features[7]}" class="icon">
                                        <p>${chinese.pricing.features[7]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-9.png" alt="${chinese.pricing.features[8]}" class="icon">
                                        <p>${chinese.pricing.features[8]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-10.png" alt="${chinese.pricing.features[9]}" class="icon">
                                        <p>${chinese.pricing.features[9]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-11.png" alt="${chinese.pricing.features[10]}" class="icon">
                                        <p>${chinese.pricing.features[10]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-12.png" alt="${chinese.pricing.features[11]}" class="icon">
                                        <p>${chinese.pricing.features[11]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-13.png" alt="${chinese.pricing.features[12]}" class="icon">
                                        <p>${chinese.pricing.features[12]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-14.png" alt="${chinese.pricing.features[13]}" class="icon">
                                        <p>${chinese.pricing.features[13]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-15.png" alt="${chinese.pricing.features[14]}" class="icon">
                                        <p>${chinese.pricing.features[14]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-16.png" alt="${chinese.pricing.features[15]}" class="icon">
                                        <p>${chinese.pricing.features[15]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-17.png" alt="${chinese.pricing.features[16]}" class="icon">
                                        <p>${chinese.pricing.features[16]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-18.png" alt="${chinese.pricing.features[17]}" class="icon">
                                        <p>${chinese.pricing.features[17]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="plan" data-aos="fade-left" id="pro">
                        <table>
                            <tr>
                                <th>
                                    <h3>${chinese.pricing.plansNames.pro.title}</h3>
                                    <p>${chinese.pricing.plansNames.pro.description}</p>
                                </th>
                                <th>
                                    <img src="img/7.png" alt="${chinese.pricing.plansNames.pro.title}">
                                </th>
                            </tr>
                            <tr id=price-time>
                                <td id="price">${chinese.pricing.plansNames.pro.price}</td>
                                <td id="time">${chinese.pricing.plansNames.pro.monthly}</td>
                            </tr>
                            <tr class="view-more">
                                <td><p class="view-more-link">${chinese.pricing.viewMore}</p></td>
                                <td>
                                    <div class="angle-wrapper">
                                        <img src="img/angle-down.png" alt="arrow down">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-1.png" alt="${chinese.pricing.features[0]}" class="icon">
                                        <p>${chinese.pricing.features[0]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-2.png" alt="${chinese.pricing.features[1]}" class="icon">
                                        <p>${chinese.pricing.features[1]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-3.png" alt="${chinese.pricing.features[2]}" class="icon">
                                        <p>${chinese.pricing.features[2]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-4.png" alt="${chinese.pricing.features[3]}" class="icon">
                                        <p>${chinese.pricing.features[3]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-5.png" alt="${chinese.pricing.features[4]}" class="icon">
                                        <p>${chinese.pricing.features[4]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-6.png" alt="${chinese.pricing.features[5]}" class="icon">
                                        <p>${chinese.pricing.features[5]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-7.png" alt="${chinese.pricing.features[6]}" class="icon">
                                        <p>${chinese.pricing.features[6]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-8.png" alt="${chinese.pricing.features[7]}" class="icon">
                                        <p>${chinese.pricing.features[7]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-9.png" alt="${chinese.pricing.features[8]}" class="icon">
                                        <p>${chinese.pricing.features[8]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-10.png" alt="${chinese.pricing.features[9]}" class="icon">
                                        <p>${chinese.pricing.features[9]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-11.png" alt="${chinese.pricing.features[10]}" class="icon">
                                        <p>${chinese.pricing.features[10]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-12.png" alt="${chinese.pricing.features[11]}" class="icon">
                                        <p>${chinese.pricing.features[11]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-13.png" alt="${chinese.pricing.features[12]}" class="icon">
                                        <p>${chinese.pricing.features[12]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-14.png" alt="${chinese.pricing.features[13]}" class="icon">
                                        <p>${chinese.pricing.features[13]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-15.png" alt="${chinese.pricing.features[14]}" class="icon">
                                        <p>${chinese.pricing.features[14]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-16.png" alt="${chinese.pricing.features[15]}" class="icon">
                                        <p>${chinese.pricing.features[15]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-17.png" alt="${chinese.pricing.features[16]}" class="icon">
                                        <p>${chinese.pricing.features[16]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-18.png" alt="${chinese.pricing.features[17]}" class="icon">
                                        <p>${chinese.pricing.features[17]}</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="${chinese.imgAlts.check}" class="icon">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="start">
        <div class="container">
            <div id="start-content">
                <h2>${chinese.getStarted.title}</h2>
                <p id="start-lead">${chinese.getStarted.description}</p>
                <div class="apple-google" class="fade">
                        <!-- Link to app store here -->
                        <a href="https://apps.apple.com/app/id1295506659" target="_blank">
                            <img src="img/app-store.png" alt="Card Diary on the app store">
                        </a>
                        <!-- Link to google play here -->
                        <a href="https://play.google.com/store/apps/details?id=com.card.carddiary" target="_blank">
                            <img src="img/google-play.png" alt="Card Diary on google play">
                        </a>
                </div>
            </div>
        </div>
    </section>
    <section id="reviews">
        <div class="container">
            <div class="reviews-content">
                <div class="card">
                    <img src="img/stars-2.png" alt="${chinese.imgAlts.fiveStars}">
                    <p class="review-text">${chinese.reviews[0].text}</p>
                    <div class="person">
                        <div class="logo">${chinese.reviews[0].logo}</div>
                        <div class="name"><p>${chinese.reviews[0].name}</p></div>
                    </div>
                </div>
                <div class="card">
                    <img src="img/stars-2.png" alt="${chinese.imgAlts.fiveStars}">
                    <p class="review-text">${chinese.reviews[1].text}</p>
                    <div class="person">
                        <div class="logo">${chinese.reviews[1].logo}</div>
                        <div class="name"><p>${chinese.reviews[1].name}</p></div>
                    </div>
                </div>
                <div class="card">
                    <img src="img/stars-2.png" alt="${chinese.imgAlts.fiveStars}">
                    <p class="review-text">${chinese.reviews[2].text}</p>
                    <div class="person">
                        <div class="logo">${chinese.reviews[2].logo}</div>
                        <div class="name"><p>${chinese.reviews[2].name}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="reviews-mobile">
         <div class="container">
            <div class="reviews-content">
                <div class="card">
                    <img src="img/stars-2.png" alt="${chinese.imgAlts.fiveStars}">
                    <p class="review-text">${chinese.reviews[0].text}</p>
                    <div class="person">
                        <div class="logo">${chinese.reviews[0].logo}</div>
                        <div class="name"><p>${chinese.reviews[0].name}</p></div>
                    </div>
                    <div id="reviews-select">
                        <div class="active" id="0"></div>
                        <div id="1"></div>
                        <div id="2"></div>
                    </div>
                </div>
            </div>
         </div>
    </section>
    <footer id="footer">
        <div class="container">
            <div id="footer-content">
                <div style="width: 200px;">
                    <img src="img/logo-2.png" alt="${chinese.imgAlts.logo}">
                    <p>${chinese.footer.description}</p>
                </div>
                <div id="links" style="color: #ddd;">
                    <a href="https://carddiary.me/TermsOfUses.html">${chinese.footer.links.terms}</a>
                    |&nbsp;&nbsp;&nbsp; <a href="https://carddiary.me/Privacy%20Policy.html">${chinese.footer.links.privacy}</a>
                    |&nbsp;&nbsp;&nbsp; <a target="_blank" href="http://www.beian.miit.gov.cn">${chinese.footer.links.copyright}</a>
                </div>
            </div>
        </div>
    </footer>`

const englishVersion = `
<nav id="nav-mobile" data-nav-mobile>
        <div>
            <div id="nav-wrapper">
                <div id="nav-content">
                    <div id="logo-mobile">
                        <a href="#landing">
                            <img src="img/logo.png" alt="Card Diary Logo">
                        </a>
                    </div>
                    <div id="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div id="links">
                    <ul id="links-wrapper">
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="https://carddiary.me/help">Help</a>
                        </li>
                        <li id="lng">
                                <p id="lng-switch" class="en"><span>中</span>/<span>EN</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <nav id="nav" data-nav>
        <div class="container-wi">
            <div id="nav-content">
                <div id="logo">
                    <a href="#landing">
                            <img src="img/logo.png" alt="Card Diary Logo">
                        </a>
                </div>
                <ul id="links">
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="https://carddiary.me/help">Help</a>
                    </li>
                    <li id="lng">
                        <p id="lng-switch" class="en"><span>中</span>/<span>EN</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section id="landing">
        <div class="container">
            <div id="header-content">
                <div class="card">
                    <h1 id="main-header" data-aos="fade-right">Write your day on a card</h1>
                    <p id="header-lead" data-aos="fade-down">Write your memory on your card. Love, happy, joy, sometimes... sad or painful. You can fill in all your feelings.</p>
                    <div class="apple-google fade">
                        <!-- Link to app store here -->
                        <a href="https://apps.apple.com/us/app/card-diary-memories-journal/id1295506659" target="_blank">
                            <img src="img/app-store.png" alt="Card Diary on the app store">
                        </a>
                        <!-- Link to google play here -->
                        <a href="https://play.google.com/store/apps/details?id=com.card.carddiary" target="_blank">
                            <img src="img/google-play.png" alt="Card Diary on google play">
                        </a>
                    </div>
                    <div id="rating" class="fade">
                        <img src="img/stars.png" alt="5 star rating">
                        <p id="average">4.9</p>
                        <p>22,000+ App store reviews</p>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <img src="img/header-image.png" alt="Day on a card">
                </div>
            </div>
        </div>
    </section>
    <section id="rewards">
        <div class="container-nr">
            <div id="rewards-content" class="fade">
                <div>
                    <a href="https://apps.apple.com/story/id1433996215" target="_blank">
                        <img src="img/1.png" alt="App of the day">
                    </a>
                </div>
                <div>
                    <a href="https://www.producthunt.com/posts/card-diary" target="_blank">
                        <img src="img/2.png" alt="Product Hunt Featured">
                    </a>
                </div>
                <div>
                    <a href="https://www.behance.net/gallery/59120015/Card-Diary-iOS-App" target="_blank">
                        <img src="img/3.png" alt="Behance Featured">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="intro">
        <div class="container">
            <div class="intro-content">
                <div class="card" data-aos="fade-right">
                    <img src="img/4.png" alt="Listen to your heart">
                </div>
                <div class="card">
                    <h2>Listen to your heart</h2>
                    <p class="intro-lead">The age we're living in is overloaded with information. Sometimes it gets so noisy it's hard to hear your own voice.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="intro">
        <div class="container">
            <div class="intro-content">
                <div class="card">
                    <h2>Capture your life story</h2>
                    <p class="intro-lead">Journaling is all about taking a break, turning your attention inwards and listening to what is going on in your mind.</p>
                </div>
                <div class="card" data-aos="fade-left">
                    <img src="img/5.png" alt="Capture your life story">
                </div>
            </div>
        </div>
    </section>
    <section class="intro" id="last">
        <div class="container">
            <div class="intro-content">
                <div class="card" data-aos="fade-right">
                    <img src="img/6.png" alt="Make your day meaningful">
                </div>
                <div class="card">
                    <h2>Make your day meaningful</h2>
                    <p class="intro-lead">
                        <span>Card Diary</span>
                        is a perfect place for you to think, feel, discover, remember, and dream. </p>
                </div>
            </div>
        </div>
    </section>
    <section id="features">
        <div class="container">
            <div id="features-content">
                <h2>Essential Features</h2>
                <p id="features-lead">With various intuitive functions, Card Diary customizes your writing process, organizes your entries, secures your privacy, and allows you to access your data anytime, anywhere.</p>
                <div id="features-cards">
                    <div class="card-wrapper">
                        <div class="card">
                            <h3>Enrich Your Memory</h3>
                            <ul>
                                <li>Photos and Video in Diary</li>
                                <li>Rich Text Format / Multiple fonts</li>
                            </ul>
                        </div>
                        <div class="card">
                            <h3>Feel Warm and Private</h3>
                            <ul>
                                <li>Feel Warm and Private</li>
                                <li>Face ID / Password Lock</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-wrapper"> 
                        <div class="card">
                            <h3>Record Your Moods</h3>
                            <ul>
                                <li>Statistics / Photo Gallery</li>
                                <li>Emotions / Tags / Locations / Favorites</li>
                            </ul>
                        </div>
                        <div class="card">
                            <h3>Never Lose a Moment</h3>
                            <ul>
                                <li>Cloud Auto Sync (iCloud / Google Drive)</li>
                                <li>Export as PDF/TXT/ZIP file</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="pricing">
        <div class="container">
            <div id="pricing-content">
                <h2>Pricing</h2>
                <p id="pricing-lead">Most features in Card Diary are free to use. Upgrade to the Pro plan to enjoy more advanced features and unlock extra happiness!</p>
                <div id="time-span">
                    <button class="time active" id="1-month">1 Month</button>
                    <button class="time" id="1-year">1 Year</button>
                    <button class="time" id="lifetime">Lifetime</button>
                </div>
                <div id="plans">
                    <div class="plan" data-aos="fade-right" id="free">
                        <table>
                            <tr>
                                <th>
                                    <h3>Free plan</h3>
                                    <p>Enjoy most features!</p>
                                </th>
                            </tr>
                            <tr id=price-time>
                                <td id="price">$0</td>
                            </tr>
                            <tr class="view-more">
                                <td><p class="view-more-link">View All Features</p></td>
                                <td>
                                    <div class="angle-wrapper">
                                        <img src="img/angle-down.png" alt="arrow down">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-1.png" alt="Photos" class="icon">
                                        <p>Photos</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-2.png" alt="Video" class="icon">
                                        <p>Video</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-3.png" alt="Weather" class="icon">
                                        <p>Weather</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-4.png" alt="Locations" class="icon">
                                        <p>Locations</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-5.png" alt="Tags" class="icon">
                                        <p>Tags</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-6.png" alt="Reminder" class="icon">
                                        <p>Reminder</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-7.png" alt="Statistics" class="icon">
                                        <p>Statistics</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-8.png" alt="Photos Gallery" class="icon">
                                        <p>Photos Gallery</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-9.png" alt="Face ID" class="icon">
                                        <p>Face ID / Fingerprint</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-10.png" alt="Claud Auto Sync" class="icon">
                                        <p>Claud Auto Sync</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-11.png" alt="Righ Text Format" class="icon">
                                        <p>Righ Text Format</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-12.png" alt="Multiple Fonts" class="icon">
                                        <p>Multiple Fonts</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-13.png" alt="Emotions" class="icon">
                                        <p>Emotions</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-14.png" alt="Favorites" class="icon">
                                        <p>Favorites</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-15.png" alt="Dark Mode" class="icon">
                                        <p>Dark Mode</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-16.png" alt="Password Lock" class="icon">
                                        <p>Password Lock</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-17.png" alt="More Photos & Videos" class="icon">
                                        <p>More Photos & Videos</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include disabled">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-18.png" alt="Export as PDF/TXT/ZIP" class="icon">
                                        <p>Export as PDF/TXT/ZIP</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="plan" data-aos="fade-left" id="pro">
                        <table>
                            <tr>
                                <th>
                                    <h3>Pro plan</h3>
                                    <p>Unlock all features!</p>
                                </th>
                                <th>
                                    <img src="img/7.png" alt="Pro plan">
                                </th>
                            </tr>
                            <tr id=price-time>
                                <td id="price">$0.99</td>
                                <td id="time">Monthly</td>
                            </tr>
                            <tr class="view-more">
                                <td><p class="view-more-link">View All Features</p></td>
                                <td>
                                    <div class="angle-wrapper">
                                        <img src="img/angle-down.png" alt="arrow down">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-1.png" alt="Photos" class="icon">
                                        <p>Photos</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-2.png" alt="Video" class="icon">
                                        <p>Video</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-3.png" alt="Weather" class="icon">
                                        <p>Weather</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-4.png" alt="Locations" class="icon">
                                        <p>Locations</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-5.png" alt="Tags" class="icon">
                                        <p>Tags</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-6.png" alt="Reminder" class="icon">
                                        <p>Reminder</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-7.png" alt="Statistics" class="icon">
                                        <p>Statistics</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-8.png" alt="Photos Gallery" class="icon">
                                        <p>Photos Gallery</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-9.png" alt="Face ID" class="icon">
                                        <p>Face ID</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-10.png" alt="Claud Auto Sync" class="icon">
                                        <p>Claud Auto Sync</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-11.png" alt="Righ Text Format" class="icon">
                                        <p>Righ Text Format</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-12.png" alt="Multiple Fonts" class="icon">
                                        <p>Multiple Fonts</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-13.png" alt="Emotions" class="icon">
                                        <p>Emotions</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-14.png" alt="Favorites" class="icon">
                                        <p>Favorites</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-15.png" alt="Dark Mode" class="icon">
                                        <p>Dark Mode</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-16.png" alt="Password Lock" class="icon">
                                        <p>Password Lock</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-17.png" alt="More Photos & Videos" class="icon">
                                        <p>More Photos & Videos</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                            <tr class="include">
                                <td>
                                    <div class="icon-text-wrapper">
                                        <img src="img/i-18.png" alt="Export as PDF/TXT/ZIP" class="icon">
                                        <p>Export as PDF/TXT/ZIP</p>
                                    </div>
                                </td>
                                <td class="check">
                                    <div class="check-wrapper">
                                        <img src="img/check.png" alt="Check" class="icon">
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="start">
        <div class="container">
            <div id="start-content">
                <h2>Get Started For Free!</h2>
                <p id="start-lead">Card Diary is available for Android, iPhone and iPad.</p>
                <div class="apple-google" class="fade">
                        <!-- Link to app store here -->
                        <a href="https://apps.apple.com/us/app/card-diary-memories-journal/id1295506659" target="_blank">
                            <img src="img/app-store.png" alt="Card Diary on the app store">
                        </a>
                        <!-- Link to google play here -->
                        <a href="https://play.google.com/store/apps/details?id=com.card.carddiary" target="_blank">
                            <img src="img/google-play.png" alt="Card Diary on google play">
                        </a>
                </div>
            </div>
        </div>
    </section>
    <section id="reviews">
        <div class="container">
            <div class="reviews-content">
                <div class="card">
                    <img src="img/stars-2.png" alt="5 Stars">
                    <p class="review-text">“I love this app so much. I downloaded almost every journal app, this one was by far the best one for me. It’s super simple and aesthetically pleasing.”</p>
                    <div class="person">
                        <div class="logo">K</div>
                        <div class="name"><p>Kilo_reley</p></div>
                    </div>
                </div>
                <div class="card">
                    <img src="img/stars-2.png" alt="5 Stars">
                    <p class="review-text">“The interface is simple and beautiful. It’s a low commitment way to keep memories that you will cherish later on. They give many ways to backup entries so they don’t get lost.”</p>
                    <div class="person">
                        <div class="logo">M</div>
                        <div class="name"><p>MJRecht</p></div>
                    </div>
                </div>
                <div class="card">
                    <img src="img/stars-2.png" alt="5 Stars">
                    <p class="review-text">“This is by far one of the best journalling apps in the market and I am fully satisfied with all the simplicity & elegance that it features, most especially its minimalist design.”</p>
                    <div class="person">
                        <div class="logo">B</div>
                        <div class="name"><p>Blanche25</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="reviews-mobile">
         <div class="container">
            <div class="reviews-content">
                <div class="card">
                    <img src="img/stars-2.png" alt="5 Stars">
                    <p class="review-text">“I love this app so much. I downloaded almost every journal app, this one was by far the best one for me. It’s super simple and aesthetically pleasing.”</p>
                    <div class="person">
                        <div class="logo">K</div>
                        <div class="name"><p>Kilo_reley</p></div>
                    </div>
                    <div id="reviews-select">
                        <div class="active" id="0"></div>
                        <div id="1"></div>
                        <div id="2"></div>
                    </div>
                </div>
            </div>
         </div>
    </section>
    <footer id="footer">
        <div class="container">
            <div id="footer-content">
                <div style="width: 200px;">
                    <img src="img/logo-2.png" alt="Logo"/>
                    <p>Write your day on a card.</p>
                </div>
                <div id="links" style="color: #ddd;">
                    <a href="https://carddiary.me/TermsOfUses.html">Terms</a>
                    |&nbsp;&nbsp;&nbsp; <a href="https://carddiary.me/Privacy%20Policy.html">Privacy</a>
                    <p>|&nbsp;&nbsp;&nbsp; © Rhythmical Studio</p>
                </div>
            </div>
        </div>
    </footer>
    <script>
        AOS.init({
            duration: 500
        });
    </script>
    <script src="js/versions.js"></script>
    <script src="js/app.js"></script>
`