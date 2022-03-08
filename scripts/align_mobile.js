const b = document.body
const about_me = document.getElementById("about")
const projects = document.getElementsByClassName("main__grid");
const project = document.getElementsByClassName("main__project")

function align_website_small_screen() {
    
    if(window.innerWidth < 700) { 
        applyMobileAlign();
    } else if(window.innerWidth >= 700) {
        applyNormalAlign();
    }
    
    if(window.innerWidth < 955) {
        applySmallWindow();
    } else {
        applyNormalWindow();
    }

}

function applyMobileAlign() {
    about_me.style.paddingLeft = '3px';
    about_me.style.paddingRight = '3px';

    projects[0].style.display = 'block';
    for( i = 0; i < project.length; i++) {
        project[i].style.marginTop = '1em';
    }
}

function applyNormalAlign() {
    about_me.style.paddingLeft = '100px';
    about_me.style.paddingRight = '100px';

    projects[0].style.display = 'grid';
    for( i = 0; i < project.length; i++) {
        project[i].style.marginTop = '0';
    }
}

function applySmallWindow() {
    b.style.marginLeft = 0;
    b.style.marginRight = 0;
}

function applyNormalWindow() {
    b.style.marginLeft = '17%';
    b.style.marginRight = '17%';
}


