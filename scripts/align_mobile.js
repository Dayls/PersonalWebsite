const b = document.body
const about_me = document.getElementById("about")
const projects = document.getElementById("projects");
const project = document.getElementsByClassName("project")

function align_website_small_screen() {
    
    if(window.innerWidth < 955) {
        b.style.marginLeft = 0;
        b.style.marginRight = 0;
    } else {
        b.style.marginLeft = '17%';
        b.style.marginRight = '17%';
    }

    // check if the page runs on mobile device
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        about_me.style.paddingLeft = '3px';
        about_me.style.paddingRight = '3px';

        projects.style.display = 'block';
        for( i = 0; i < project.length; i++) {
            project[i].style.marginTop = '1em';
        }
    }

    setTimeout('align_website_small_screen()', 1);
}


