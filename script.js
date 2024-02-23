const music=new Audio('1.mp3');

let container = document.getElementById('container');
let play_button=document.getElementById("play_button");
let btn = document.getElementById('btn');
let text = document.getElementById('text');
text.innerHTML='';

function aimg(){
    for(var i=1;i<=10;i++)
    {
        let span = document.createElement('span');
        span.style = `--j:${i};`;
        let img = document.createElement('img');
        img.src = `img/${i}.jpg`;
        img.width = '140';
        span.appendChild(img);
        container.appendChild(span);
    }
}

btn.addEventListener('click', ()=>{
    music.play();
    btn.style.display = 'none';
    text.innerHTML = '<h2><span>Happy</span><span>Birthday</span></h2>'
    text.classList.add('text');
    aimg();
})

