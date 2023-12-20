const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const boton = document.getElementById('boton');

let contador = 0

boton.addEventListener('click', ()=>{
    contador++;
    if (contador % 2 === 0) {
        parrafo1.classList.remove('elementoPrincipal1');
        parrafo1.classList.remove('elementoSecundario1');
        parrafo1.classList.add('elementoPrincipal2');
        parrafo1.classList.add('elementoSecundario2');
        parrafo2.classList.remove('elementoPrincipal2');
        parrafo2.classList.remove('elementoSecundario2');
        parrafo2.classList.add('elementoPrincipal1');
        parrafo2.classList.add('elementoSecundario1');
    }else{
        parrafo1.classList.remove('elementoPrincipal2');
        parrafo1.classList.remove('elementoSecundario2');
        parrafo1.classList.add('elementoPrincipal1');
        parrafo1.classList.add('elementoSecundario1');
        parrafo2.classList.remove('elementoPrincipal1');
        parrafo2.classList.remove('elementoSecundario1');
        parrafo2.classList.add('elementoPrincipal2');
        parrafo2.classList.add('elementoSecundario2');
    }
    
})