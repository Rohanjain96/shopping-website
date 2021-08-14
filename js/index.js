
console.log("javascript added");
const sidebars = document.getElementById("side-bars");
const leftbutton = document.getElementById("left-slider-btn");
const rightbutton = document.getElementById("right-slider-btn");
const items = document.getElementById("slider-items").children.length;
const slider = document.getElementById("slider");
let responsiveslider = [
    { left: 1, right: 4 },
    { left: 1, right: 3 },
    { left: 1, right: 2 },
    { left: 1, right: 2 },
];
function hamburgermenu() {
    sidebars.style.left = '0';
}
function clshamburgermenu() {
    sidebars.style.left = '-250px';
}

function rightclicked() {
    leftbutton.style.visibility = 'visible';
    if (window.outerWidth >= 1201) {
        if (responsiveslider[0].left <= 3 && responsiveslider[0].right <= items) {
            responsiveslider[0].left += 1;
            responsiveslider[0].right += 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[0].left; i <= responsiveslider[0].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[0].left == 3 && responsiveslider[0].right == items) {
                rightbutton.style.visibility = 'hidden';
                return;
            }
        }
    }
    else if (window.outerWidth >= 901 && window.outerWidth <= 1200) {
        if (responsiveslider[1].left <= 4 && responsiveslider[1].right <= items) {
            responsiveslider[1].left += 1;
            responsiveslider[1].right += 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[1].left; i <= responsiveslider[1].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[1].left == 4 && responsiveslider[1].right == items) {
                rightbutton.style.visibility = 'hidden';
                return;
            }
        }
    }
    else if (window.outerWidth >= 601 && window.outerWidth <= 900) {
        if (responsiveslider[2].left <= 5 && responsiveslider[2].right <= items) {
            responsiveslider[2].left += 1;
            responsiveslider[2].right += 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[2].left; i <= responsiveslider[2].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[2].left == 5 && responsiveslider[2].right == items) {
                rightbutton.style.visibility = 'hidden';
                return;
            }
        }
    }


}
function leftclicked() {
    if (window.outerWidth >= 1201) {

        if (responsiveslider[0].left >= 1 && responsiveslider[0].right >= 4) {
            responsiveslider[0].left -= 1;
            responsiveslider[0].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[0].left; i <= responsiveslider[0].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[0].left == 1 && responsiveslider[0].right == 4) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[0].left >= 2 && responsiveslider[0].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
    else if (window.outerWidth >= 901 && window.outerWidth <= 1200) {

        if (responsiveslider[1].left >= 1 && responsiveslider[1].right >= 3) {
            responsiveslider[1].left -= 1;
            responsiveslider[1].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[1].left; i <= responsiveslider[1].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[1].left == 1 && responsiveslider[1].right == 3) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[1].left >= 2 && responsiveslider[1].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
    else if (window.outerWidth >= 681 && window.outerWidth <= 900) {

        if (responsiveslider[2].left >= 1 && responsiveslider[2].right >= 2) {
            responsiveslider[2].left -= 1;
            responsiveslider[2].right -= 1;
            for (let i = 1; i <= items; i++) {
                document.getElementById(`item-${i}`).style.display = 'none';
            }

            for (let i = responsiveslider[2].left; i <= responsiveslider[2].right; i++) {
                document.getElementById(`item-${i}`).style.display = 'block';
            }
            if (responsiveslider[2].left == 1 && responsiveslider[2].right == 2) {
                leftbutton.style.visibility = 'hidden';
                return;
            }
            if (responsiveslider[2].left >= 2 && responsiveslider[2].right <= 7) {
                rightbutton.style.visibility = 'visible';
            }
        }
    }
}

function addtocart(e) {
    console.log(e);
    console.log(e.children[2].children[0]);
}