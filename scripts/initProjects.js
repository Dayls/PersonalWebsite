const json =
    [
        {
            "page": "https://github.com/danilmoh/AsteroidsGame/blob/main/README.md",
            "image": "portfolio/asteroids_game/img.gif",
            "description_en": "Asteroids - 2D game made with JavaFX library.",
            "description_ru": "Asteroids - 2D игра, сделанная с JavaFX GUI"
        },
        {
            "page": "https://github.com/danilmoh/Advent-of-Code",
            "image": "https://i.imgur.com/uT3G7xx.png",
            "description_en": "Participated in the Advent Of Code 2021",
            "description_ru": "Участие в Advent Of Code 2021"
        },
        {
            "page": "https://github.com/danilmoh/Discord-to-Telegram",
            "image": "",
            "description_en": "Program that forwards messages from Discord to Telegram",
            "description_ru": "Программа, пересылающая сообщения из Discord в Telegram"
        }
    ]


async function initProjects() {
    var projects = document.getElementsByClassName('main__grid')[0];
    json.forEach(project => {
        var newProject = document.createElement('div');
        newProject.className = "main__project";
        newProject.setAttribute("onclick", `location.href=\'${project.page}\';`);

        newProject.style = `background-image: url(${project.image});`;

        const isGif = project.image.endsWith(".gif");
        if (isGif) {
            newProject.setAttribute("background-repeat", "repeat");
        }

        const description_en = document.createElement('p');
        description_en.setAttribute("lang", "en");
        description_en.className = "main__project-description";
        description_en.textContent += project.description_en;

        const description_ru = document.createElement('p');
        description_ru.setAttribute("lang", "ru");
        description_ru.className = "main__project-description";
        description_ru.textContent += project.description_ru;

        newProject.appendChild(description_en);
        newProject.appendChild(description_ru);
        projects.prepend(newProject);
    });
}
