const sidebarToggle = document.querySelector(`.sidebar__toggle`);
const page = document.querySelector(`.page`);
const sidebar = document.querySelector(`.sidebar`);
const footer = document.querySelector(`.page-footer`);
const page_inner = document.querySelector(`.page__inner`);
const main = document.querySelector(`.main`);
const mainPageLink = document.querySelector('.main_page');
const mapDiv = document.createElement(`div`);
const navigationLinks = document.querySelector(`.sidebar__navigation-links`)
// AIzaSyAX9zQl4odqngDgGcEubPRUfj3OwviN7FY
const startTime = new Date(0, 0, 0);

sidebarToggle.addEventListener(`click`, hiddenSidebar);
function hiddenSidebar(){
    page.classList.toggle(`page_sidebar_on`);
    sidebar.classList.toggle(`sidebar_hidden`);
    footer.classList.toggle(`page-footer-sidebar-off`);
}

window.addEventListener('DOMContentLoaded', () => {hiddenSidebarResize(), showStartingMap()});
window.addEventListener(`resize`, hiddenSidebarResize);
function hiddenSidebarResize(){
if (document.documentElement.clientWidth <= 830) {
    sidebar.classList.add(`sidebar_hidden`);
    footer.classList.add(`page-footer-sidebar-off`);
} else {
sidebar.classList.remove(`sidebar_hidden`);
}
}

function add0(value) {
    value < 10
    ? value = `0${value}`
    : value = `${value}`
    return value;
}

function plusOne(value) {
    value = value++;
    return value;
} 

function makeTime() {
const date = new Date();
const clock = {
    selectors: {
        hours: document.querySelector(`.hours`),
        minutes: document.querySelector(`.minutes`),
        seconds: document.querySelector(`.seconds`),
        day: document.querySelector(`.day`),
        month: document.querySelector(`.month`),
        year: document.querySelector(`.year`),
    },
    getHours: date.getHours(),
    getMinutes: date.getMinutes(),
    getSeconds: date.getSeconds(),
    getDay: date.getDate(),
    getMonth: date.getMonth() + 1,
    getYear: date.getFullYear(),
}
this.timer = {
            selectors: {
                timer_hours: document.querySelector(`.timer_hours`),
                timer_minutes: document.querySelector(`.timer_minutes`),
                timer_seconds: document.querySelector(`.timer_seconds`),
            },
            getTimerHours: startTime.getHours(),
            getTimerMinutes: startTime.getMinutes(),
            getTimerSeconds: startTime.getSeconds(),
        }

    if (start) {
        clock.selectors.hours.innerHTML = `${add0(clock.getHours)}`;
        clock.selectors.minutes.innerHTML = `: ${add0(clock.getMinutes)}`;
        clock.selectors.seconds.innerHTML = `: ${add0(clock.getSeconds)}`;
        clock.selectors.day.innerHTML = `${add0(clock.getDay)}`;
        clock.selectors.month.innerHTML = `.${clock.getMonth}`;
        clock.selectors.year.innerHTML = `.${clock.getYear}`;
        // timer.selectors.timer_hours.innerHTML = `${add0(timer.getTimerHours)}`;
        // timer.selectors.timer_minutes.innerHTML = `: ${add0(timer.getTimerMinutes)}`;
        // timer.selectors.timer_seconds.innerHTML = `: ${add0(timer.getTimerSeconds)}`;
        start = false;
    }
    if (clock.getSeconds == 00) {
        clock.selectors.minutes.innerHTML = `: ${add0(clock.getMinutes)}`;
    }
    if (clock.getMinutes == 00) {
        clock.selectors.hours.innerHTML = `${add0(clock.getHours)}`;
    }
    clock.selectors.seconds.innerHTML = `: ${add0(clock.getSeconds)}`;
    // doTimer();
}
setInterval(makeTime,  1000, start = true);

    // function doTimer(){
    // // let timerSecond = setInterval(plusOne(timer.getTimerSeconds), 1000);
    //     let timerSecond = setInterval(plusOne(timer.getTimerSeconds), 1000);
    // timer.selectors.timer_seconds.innerHTML = `: ${add0(timerSecond)}`;
    
    // // let timerMinutes = plusOne(timer.getTimerMinutes);

    // // console.log(timerSecond)
    // // if (timerSecond > 59){
    // //     clearInterval(timerSecond)
    // //             // console.log(timerSecond)
    // //             timer.selectors.timer_seconds.innerHTML = `: ${add0(timerSecond)}`;
    // //     // console.log(timerSecond)
    // //     console.log(add0(plusOne(timerMinutes)))
    // //     timer.selectors.timer_minutes.innerHTML = `: ${add0(plusOne(timer.getTimerMinutes))}`;
    // // }
    // }


function showStartingMap() {
    main.classList.add(`display-none`);
    mapDiv.classList.add(`map-container`);
    page_inner.appendChild(mapDiv)
    
function initMap() {
  let map = new google.maps.Map(mapDiv, {
    center: { lat: 48.47, lng: 35.010 },
    zoom: 10,
  });
}
initMap()
}

mainPageLink.addEventListener('click', showMainPage);
function showMainPage(){
    main.classList.toggle(`display-none`);
    mapDiv.classList.toggle(`display-none`);
}





