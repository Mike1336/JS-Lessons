let langSelector = document.getElementById('langSelect');

function changeTextLang(){

    let englishText = document.getElementById('enText');
    let russianText = document.getElementById('ruText');
    let selectedLanguage = langSelector.options[langSelector.selectedIndex].value;

    switch (selectedLanguage) {
        case 'en':
        englishText.style.display="block";
        russianText.style.display="none";
            break;

        case 'ru':
        englishText.style.display="none";
        russianText.style.display="block";
            break;
        
        default:
        englishText.style.display="block";
        russianText.style.display="none";
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
        video.setAttribute('src', 'videos/All over in 10 seconds.mp4');
    divForVideo.appendChild(video);

    video.play();
}