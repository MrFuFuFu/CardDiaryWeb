document.addEventListener('DOMContentLoaded', changeLanguege);

function changeLanguege() {

    // Current lng
    const isChinese = document.querySelector('#lng-switch').classList.contains('cn');

    // Detect Location
    const userLang = navigator.language || navigator.userLanguage; 

    if(userLang == "zh-CN" && !isChinese) {
        switchToChinese();
    }


    // Language params

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const lng = getParameterByName('lng');

    if(lng === 'cn' && !isChinese) {
        switchToChinese()
    } else if(lng === 'en' && isChinese) {
        switchToEnglish()
    } else {
        init();
    }
}

function init() {

    const isChinese = document.querySelector('#lng-switch').classList.contains('cn');

    // Pricing plans
    pricing(isChinese);

    // Reviews
    reviewsMobile(isChinese);

    // Hamburger menu
    menu();

    // Chinese to english

    const changeButtons = document.querySelectorAll('#lng-switch');
    changeButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            if(btn.classList.contains('en')) {
                changeButtons.forEach(btn2 => { 
                    btn2.classList.remove('en');
                    btn2.classList.add('chi');
                });
                switchToChinese()
            } else {
                changeButtons.forEach(btn2 => { 
                    btn2.classList.add('en');
                    btn2.classList.remove('chi');
                });
                switchToEnglish();
            };
        });
    });

    // SmoothScroll 

    const navbars = document.querySelectorAll('nav');

    let height;

    const scroll = new SmoothScroll('a[href*="#"]', {
        // Smooth Scoll Options

        // Speed & Duration
        speed: 500,// Integer. Amount of time in milliseconds it should take to scroll 1000px

        offset: function (anchor, toggle) {
            let height;

            navbars.forEach(n => {
                if(n.clientHeight !== 0) {
                    height = n.clientHeight
                }
            })

            // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            // This example is a function, but you could do something as simple as `offset: 25`
            return height

        },
    });
}

function pricing(isChinese) {
    const buttons = document.querySelectorAll('#pricing .container #pricing-content #time-span .time');
    const price = document.querySelector('#pricing .container #pricing-content #plans .plan#pro table tr#price-time td#price');
    const time = document.querySelector('#pricing .container #pricing-content #plans .plan#pro table tr#price-time td#time');


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('#pricing .container #pricing-content #time-span .time.active').classList.remove('active');
            button.classList.add('active');
            changePrices(button.id);
        });
    });

    function changePrices(planTime) {
        if(planTime === '1-month') {
            if(!isChinese) {
                price.textContent = prices.month;
                time.textContent = pricesTime[0];
            } else {
                price.textContent = pricesChinese.month;
                time.textContent = pricesTimeChinese[0];
            }
        } else if(planTime === '1-year') {
            if(!isChinese) {
                price.textContent = prices.year;
                time.textContent = pricesTime[1];
            } else {
                price.textContent = pricesChinese.year;
                time.textContent = pricesTimeChinese[1];
            }
        } else if(planTime === 'lifetime') {
            if(!isChinese) {
                price.textContent = prices.lifetime;
                time.textContent = pricesTime[2];
            } else {
                price.textContent = pricesChinese.lifetime;
                time.textContent = pricesTimeChinese[2];
            }
        }
    }

    // Pricing Mobile View All features

    const viewMoreLinks = document.querySelectorAll('#pricing .container #pricing-content #plans .plan table tr.view-more');

    viewMoreLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            if(e.target.classList.contains('view-more-link') || e.target.parentElement.classList.contains('angle-wrapper')) {
                const angle = e.target.parentElement.parentElement.querySelector('img');
                if(!angle.classList.contains('active')) {
                    angle.classList.add('active')
                    const features = angle.parentElement.parentElement.parentElement.parentElement.querySelectorAll('tr.include');
                    for(let i = 0; i < features.length; i++) {
                        features[i].classList.add('show');
                        // Delay between each feature in milliseconds
                        await sleep(10);
                    }
                } else {
                    angle.classList.remove('active')
                    const features = angle.parentElement.parentElement.parentElement.parentElement.querySelectorAll('tr.include');
                    for(let i = 0; i < features.length; i++) {
                        features[i].classList.remove('show');
                        // Delay between each feature in milliseconds
                        await sleep(10);
                    }
                }
            }
        });
    });

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
}

function reviewsMobile(isChinese) {

    // Reviews Mobile

    const text = document.querySelector('#reviews-mobile .container .reviews-content p.review-text');
    const logo = document.querySelector('#reviews-mobile .container .reviews-content .person .logo');
    const name = document.querySelector('#reviews-mobile .container .reviews-content .person .name');

    document.querySelectorAll('#reviews-mobile .container .reviews-content #reviews-select div').forEach(select => {
        select.addEventListener('click', () => {
            document.querySelector('#reviews-mobile .container .reviews-content #reviews-select div.active').classList.remove('active');
            select.classList.add('active');
            const id = parseInt(select.id);
            if(isChinese) {
                text.textContent = reviews.chinese[id].text;
                logo.textContent = reviews.chinese[id].logo;
                name.textContent = reviews.chinese[id].name;
                logo.style.backgroundColor = reviews.chinese[id].logoBg;
            } else {
                text.textContent = reviews.english[id].text;
                logo.textContent = reviews.english[id].logo;
                name.textContent = reviews.english[id].name;
                logo.style.backgroundColor = reviews.english[id].logoBg;
            }
        });
    });

}

function menu() {

    // Hamburger Menu

    const hamburger = document.querySelector('#nav-mobile #hamburger');
    const div1 = document.querySelector('#nav-mobile #hamburger div:first-child');
    const div2 = document.querySelector('#nav-mobile #hamburger div:nth-child(2)');
    const div3 = document.querySelector('#nav-mobile #hamburger div:last-child');
    const links = document.querySelector('#nav-mobile #links');

    hamburger.addEventListener('click', (e) => {
        if(div2.classList.contains('active')) {
            div1.classList.remove('active');
            div2.classList.remove('active');
            div3.classList.remove('active');
            links.classList.remove('active');
        } else {
            div1.classList.add('active')
            div2.classList.add('active')
            div3.classList.add('active')
            links.classList.add('active');
        };
    });

    links.addEventListener('click', e => {
        if( e.target.constructor.name == 'HTMLAnchorElement' ) {
            div1.classList.remove('active');
            div2.classList.remove('active');
            div3.classList.remove('active');
            links.classList.remove('active');
        }
    })
}

function switchToEnglish() {
    document.querySelector('body').innerHTML = englishVersion;
    AOS.refreshHard();
    try {
        scroll.destroy();
    } catch(err) {}
    init();
}

function switchToChinese() {
    document.querySelector('body').innerHTML = chineseVersion;
    AOS.refreshHard();
    try {
        scroll.destroy();
    } catch(err) {}
    init();
}