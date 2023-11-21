"use strict";
let reward = document.querySelectorAll(`.btn`);
let li = document.querySelectorAll(`li`);
let bacblack = document.querySelector(`.bacblack`);
let paBookmark = document.querySelector(`.paBookmark`);
let Bookmark = document.querySelector(`.Bookmark`);
let Bookmarked = document.querySelector(`.Bookmarked`);
let done = document.querySelector(`.done`);
let hamburger = document.querySelector(`.hamburger`);
let logo = document.querySelector(`.logo`);
let menu = document.querySelector(`.menu`);
let backed = document.querySelector(`.backed`);
let total = document.querySelector(`.total`);
let days = document.querySelector(`.days`);
let left = document.querySelectorAll(`.left `);
let leftP = document.querySelectorAll(`p.left span`);
let progress = document.querySelector(`.progress`);
let one = backed.innerHTML.match(/\d+/gi).join(``);
let back = document.querySelector(`.back`);
let backThisInput = document.querySelectorAll(`.backThisB input `);
let exit = document.querySelector(`.exit`);
exit.addEventListener(`click`, () => {
    backHidden();
    bacblackHidden();
});
progress.style.width = `${(+backed.innerHTML.match(/\d+/gi).join(``) / 100000) * 100}%`;
reward.forEach((btn, i) => {
    if (btn.innerHTML == `Got it!`) {
        btn.addEventListener(`click`, () => {
            bacblackHidden();
            done.classList.remove(`flex`);
            done.classList.add(`hidden`);
        });
    }
    if (btn.innerHTML == `Select Reward`) {
        btn.addEventListener(`click`, () => {
            let three = backed.innerHTML.match(/\d+/gi).join(``);
            let two = total.innerHTML.match(/\d+/gi).join(``);
            if (btn.classList.contains(`$25`)) {
                backed.innerHTML = `$${(+three + 25).toLocaleString()}`;
                total.innerHTML = (+two + 1).toLocaleString();
                +left[0].innerHTML > 0 ? (left[0].innerHTML = `${+left[0].innerHTML - 1}`) : null;
            }
            if (btn.classList.contains(`$75`)) {
                backed.innerHTML = `$${(+three + 75).toLocaleString()}`;
                +left[1].innerHTML > 0 ? (left[1].innerHTML = `${+left[1].innerHTML - 1}`) : null;
            }
            progress.style.width = `${(+backed.innerHTML.match(/\d+/gi).join(``) / 100000) * 100}%`;
            bacblack.classList.add(`block`);
            done.classList.add(`flex`);
            bacblack.classList.remove(`hidden`);
            done.classList.remove(`hidden`);
        });
    }
    // Back this project
    if (btn.innerHTML == `Back this project`) {
        btn.addEventListener(`click`, () => {
            back.classList.add(`flex`);
            back.classList.remove(`hidden`);
            bacblack.classList.add(`block`);
            bacblack.classList.remove(`hidden`);
            back.classList.add(`z-[40]`);
        });
    }
    if (btn.innerHTML == `Continue`) {
        btn.addEventListener(`click`, () => {
            backHidden();
            done.classList.add(`flex`);
            done.classList.remove(`hidden`);
            bacblack.classList.add(`block`);
            bacblack.classList.remove(`hidden`);
            let three = backed.innerHTML.match(/\d+/gi).join(``);
            let two = total.innerHTML.match(/\d+/gi).join(``);
            if (i == 5) {
                backed.innerHTML = `$${(+three + +backThisInput[0].value).toLocaleString()}`;
                total.innerHTML = (+two + 1).toLocaleString();
                +leftP[0].innerHTML > 0 ? (leftP[0].innerHTML = `${+leftP[0].innerHTML - 1}`) : null;
            }
            if (i == 6) {
                backed.innerHTML = `$${(+three + +backThisInput[1].value).toLocaleString()}`;
                +leftP[1].innerHTML > 0 ? (leftP[1].innerHTML = `${+leftP[1].innerHTML - 1}`) : null;
            }
            progress.style.width = `${(+backed.innerHTML.match(/\d+/gi).join(``) / 100000) * 100}%`;
        });
    }
});
hamburger.addEventListener(`click`, () => {
    //   hide
    if (menu.classList.contains(`h-0`)) {
        hamburgerup();
        hamburger.src = `./images/icon-close-menu.svg`;
        menu.classList.remove(`h-0`);
        menu.classList.remove(`w-0`);
        menu.classList.add(`h-[200px]`);
        menu.classList.add(`w-[300px]`);
        bacblack.classList.remove(`hidden`);
        bacblack.classList.add(`block`);
    }
    else {
        hamburgerdown();
        hamburger.src = `./images/icon-hamburger.svg`;
        menu.classList.add(`h-0`);
        menu.classList.add(`w-0`);
        menu.classList.remove(`h-[200px]`);
        menu.classList.remove(`w-[300px]`);
        bacblackHidden();
    }
    li.forEach((e) => {
        e.addEventListener(`click`, () => {
            hamburger.src = `./images/icon-hamburger.svg`;
            menu.classList.add(`h-0`);
            menu.classList.add(`w-0`);
            menu.classList.remove(`h-[200px]`);
            menu.classList.remove(`w-[300px]`);
            bacblackHidden();
        });
    });
});
paBookmark.addEventListener(`click`, () => {
    if (innerWidth > 500) {
        if (!paBookmark.classList.contains(`clicked`)) {
            Bookmark.style.cssText = `filter: invert(64%) sepia(9%) saturate(2527%) hue-rotate(127deg) brightness(94%) contrast(94%);`;
            Bookmarked.classList.add(`w-[100px]`);
            paBookmark.classList.add(`clicked`);
            Bookmark.classList.remove(`w-0`);
        }
        else {
            Bookmark.style.cssText = ``;
            paBookmark.classList.remove(`clicked`);
            Bookmarked.classList.remove(`w-[100px]`);
            Bookmarked.classList.add(`w-0`);
        }
    }
    else {
        if (!paBookmark.classList.contains(`clicked`)) {
            paBookmark.classList.add(`clicked`);
            Bookmark.style.cssText = `filter: invert(64%) sepia(9%) saturate(2527%) hue-rotate(127deg) brightness(94%) contrast(94%);`;
        }
        else {
            paBookmark.classList.remove(`clicked`);
            Bookmark.style.cssText = ``;
        }
    }
});
let Bamboo = document.querySelector(`#Bamboo`);
Bamboo.addEventListener(`click`, () => { });
let backThisB = document.querySelectorAll(`.backThisB`);
let LAB = document.querySelectorAll(`.Label`);
let LABSpan = document.querySelectorAll(`.LABSpan`);
LAB.forEach((e, i) => {
    e.addEventListener(`click`, () => {
        LABSpan.forEach((el) => {
            el.classList.remove(`bg-Moderate_cyan`);
        });
        backThisB.forEach((el) => {
            el.classList.remove(`h-20`);
            el.classList.add(`h-0`);
            el.classList.remove(`h-[115px]`);
            el.classList.remove(`border-t`);
        });
        backThisB[i].classList.remove(`h-0`);
        LABSpan[i].classList.add(`bg-Moderate_cyan`);
        backThisB[i].classList.add(`h-[115px]`);
        if (!(i == 0)) {
            backThisB[i].classList.add(`border-t`);
        }
        if (innerWidth > 750) {
            backThisB[i].classList.add(`h-20`);
        }
        else {
            backThisB[i].classList.add(`h-[115px]`);
        }
    });
});
function backHidden() {
    back.classList.add(`hidden`);
    back.classList.remove(`flex`);
}
function bacblackHidden() {
    bacblack.classList.add(`hidden`);
    bacblack.classList.remove(`flex`);
}
function hamburgerdown() {
    logo.classList.add(`z-10`);
    logo.classList.remove(`z-20`);
    hamburger.classList.add(`z-10`);
    hamburger.classList.remove(`z-20`);
}
function hamburgerup() {
    logo.classList.add(`z-20`);
    logo.classList.remove(`z-10`);
    hamburger.classList.add(`z-20`);
    hamburger.classList.remove(`z-10`);
}
