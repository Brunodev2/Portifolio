const el = window.document.querySelector('#text')
const text = 'Olá me chamo Bruno sou desevolvedor, você está no meu portifolio, seja bem Vindo.'
const interval = 200;


function  showText(el,text,interval){




const char = text.split("").reverse();



const typer = setInterval(()=>{
    if(!char.length){
        return clearInterval(typer);
    }
    const next = char.pop();

    el.innerHTML += next;

},interval);


}

showText(el,text,interval)