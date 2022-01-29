

function align_website_small_screen() {
    var b = document.getElementById("body");
    if(window.innerWidth < 955) {
        b.style.marginLeft = 0;
        b.style.marginRight = 0;
    } else {
        b.style.marginLeft = '17%';
        b.style.marginRight = '17%';
    }

    setTimeout('align_website_small_screen()', 1)
}


