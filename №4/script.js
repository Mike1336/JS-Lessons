let links = document.getElementsByTagName('a');
let moreP= document.getElementById('more');

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', (event) => {

        let target = event.target;

        switch (target.id) {
            case 'moreLink':
                target.removeAttribute('href');
                target.classList.remove('active');
                moreP.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus illo odio, sapiente pariatur consequuntur dolores officia officiis molestias alias nemo sint esse ducimus distinctio itaque ad ratione? Facilis, natus?";
                break;
        }
      });         
}
//change text
let changeLink = document.getElementById('changeLink');
let hs = document.getElementsByClassName('headers');

    for (let i = 0; i < hs.length; i++) {
        let reclick=false;
            changeLink.addEventListener('click', ()=>{
                
                if (reclick) {
                    hs[i].classList.add('courier');
                }
                else
                {
                    hs[i].classList.remove('courier');
                }
            reclick =! reclick;
            });
    }