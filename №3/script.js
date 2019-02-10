let langSelector = document.getElementById('langSelect');

function changeTextLang(){

    let paragraph = document.getElementsByTagName('p');
    let selectedLanguage = langSelector.options[langSelector.selectedIndex].value;

    let enText = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, dignissimos dolorum mollitia in repellendus illo officiis praesentium porro consequuntur. Quos cumque consequatur laborum, maiores nobis atque quo praesentium. Eum.","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, dignissimos dolorum mollitia in repellendus illo officiis praesentium porro consequuntur. Quos cumque consequatur laborum, maiores nobis atque quo praesentium. Eum.","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, dignissimos dolorum mollitia in repellendus illo officiis praesentium porro consequuntur. Quos cumque consequatur laborum, maiores nobis atque quo praesentium. Eum.","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, dignissimos dolorum mollitia in repellendus illo officiis praesentium porro consequuntur. Quos cumque consequatur laborum, maiores nobis atque quo praesentium. Eum.","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, dignissimos dolorum mollitia in repellendus illo officiis praesentium porro consequuntur. Quos cumque consequatur laborum, maiores nobis atque quo praesentium. Eum."]

    let ruText = ["Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации направлений прогрессивного развития.", "Повседневная практика показывает, что рамки и место обучения кадров в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.", "Не следует, однако забывать, что начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия.", "Разнообразный и богатый опыт начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач.", "Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."]

    switch (selectedLanguage) {
        case 'en':      

            for (let i = 0; i < paragraph.length; i++) {
                paragraph[i].innerText = enText[i];
            }

        break;

        case 'ru':

            for (let i = 0; i < paragraph.length; i++) {
                paragraph[i].innerText = ruText[i];
            } 

        break;
    }
}
window.onload=changeTextLang;
langSelector.onchange=changeTextLang;

//video

let playBtn = document.getElementById('startVideoButton');

let divForVideo = document.getElementsByClassName('video')[0];

playBtn.onclick= () => {
    let video = document.createElement('video');
        video.setAttribute('id', 'myVideo');
        video.setAttribute('controls', 'true');
        video.setAttribute('src', 'videos/All over in 10 seconds.mp4');
    if (divForVideo.childNodes.length==0) 
    {
        divForVideo.appendChild(video);  
        video.play();
        playBtn.style.display='none';
    }
}