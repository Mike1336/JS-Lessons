let imageDivs = document.getElementsByClassName('imgItem');
let imagePlace = document.getElementById('imgPlace');
let dropDiv = document.getElementById('dropPlace');

for (let i = 0; i < imageDivs.length; i++) {
    if (imageDivs[i].children.length == 0) {
        imageDivs[i].classList.add('empty');
    }
}

dropDiv.addEventListener('drop', (event) => {
    event.preventDefault();
    
    dropDiv.style.border = "1px solid black";
    dropDiv.style.borderBottomLeftRadius = "20px";
    dropDiv.style.borderBottomRightRadius = "20px";

    if (event.dataTransfer.files) {
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
                for (let i = 0; i < imageDivs.length; i++) {
                    if (imageDivs[i].children.length==0){
                        let reader = new FileReader();
                        reader.onload = ()=>{
                            let image = document.createElement('img');
                            image.src = reader.result;
                            imageDivs[i].appendChild(image);
                            imageDivs[i].classList.remove('empty');
                        }
                        reader.readAsDataURL(event.dataTransfer.files[0]);
                        break;
                    }
                }
            }
        }
});

for (let i = 0; i < imageDivs.length; i++) {
      imageDivs[i].addEventListener('click', ()=>{
            if (imageDivs[i].childNodes.length>0) {
                if (imagePlace.children.length>0) {
                    for (let i = 0; i < imagePlace.children.length; i++) {
                        imagePlace.children[i].style.display="none";           
                    }
                }
                let image = document.createElement('img');
                image.src = imageDivs[i].firstChild.src;
                imagePlace.appendChild(image);
            }
        });
   
}

dropDiv.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropDiv.style.border = "2px dashed #5dc4f3";
    dropDiv.style.borderBottomLeftRadius = "25px";
    dropDiv.style.borderBottomRightRadius = "25px";
});

dropDiv.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dropDiv.style.border = "1px solid black";
    dropDiv.style.borderBottomLeftRadius = "20px";
    dropDiv.style.borderBottomRightRadius = "20px";
});