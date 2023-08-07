const el = window.document.querySelector('#text')
const text = 'Olá me chamo Bruno Castro sou desevolvedor, você está no meu Portifólio, seja bem Vindo.'
const interval = 200;


function  showText(el,text,interval){




const char = text.split("").reverse();



const typer = setInterval(()=>{
    if(!char.length){
        return clearInterval(typer);
    }
    const next = char.pop();

    el.innerHTML += next;
   

    if(next== 87){
        el.style.display = 'none'
    }
    

},interval);


}

showText(el,text,interval)