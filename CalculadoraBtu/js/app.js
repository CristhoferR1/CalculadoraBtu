//inputs
const Altura = document.getElementById('altura');
const Largo = document.getElementById('largo');
const Ancho = document.getElementById('ancho');
const Personas = document.getElementById('personas');
const Ventanas = document.getElementById('ventanas');
const btn = document.querySelector('.btn');
let valores = {
    largo:"",
    altura :"",
    ancho:"",
    personas:"",
    ventanas:""
}
eventsListeners();

function eventsListeners(){
 Altura.addEventListener('blur',Verificar);
 Largo.addEventListener('blur',Verificar)
 Ancho.addEventListener('blur',Verificar);
 Personas.addEventListener('blur',Verificar)
 Ventanas.addEventListener('blur',Verificar)
 btn.addEventListener('click',checkvalues)
}

function Verificar(e){
    borrarAlerta(e.target.parentElement);
    e.preventDefault();
    if(e.target.value.trim() == "" || isNaN(e.target.value)){
       Alerta('Ingrese el valor Numerico',e.target.parentElement);
       return;
    }
    valores[e.target.id] = e.target.value;
}

function Alerta(errorContent,referencia){
    
    const span = document.createElement('span');
    span.classList.add('error');
    span.textContent = errorContent;
    referencia.appendChild(span);
}
function borrarAlerta(referencia){
    const alerta = referencia.querySelector('.error');
    if(alerta){
        alerta.remove();
    }
    
}
function checkvalues(){
    const {largo,ancho,altura,personas,ventanas}=valores

    if(largo != "" && ancho !=""){
       let btus= CalcularBtu(largo,ancho)
       FiltrarAires(btus);
        Swal.fire(`Cantidad de btus ${btus}`);
    }
    if(largo != "" && ancho !="" && altura !=""){
        let btus= CalcularBtu(largo,ancho,altura)
         Swal.fire(`Cantidad de btus ${btus}`);

    }
    if(largo != "" && ancho !="" && altura && personas !=""){
        let btus= CalcularBtu(largo,ancho,altura,personas)
         Swal.fire(`Cantidad de btus ${btus}`);
    }
    if(largo != "" && ancho !="" && altura && personas !="" 
        && ventanas != ""
    ){
        let btus= CalcularBtu(largo,ancho,altura,personas,ventanas)
         Swal.fire(`Cantidad de btus ${btus}`);
    }
    
}
function CalcularBtu(largo,ancho,altura,personas=0,ventanas=0){
    if(!largo && !ancho ){
        return "Datos Requeridos largo y ancho";
    }
    let area = ancho*largo;
    let btuBase = area*600;
    if(altura){
        btuBase = (area*altura)*600;
    }
    let btupersonas = personas*700;
    let btuventanas = btuBase*(0.05 * ventanas);
    let btuTotal = btuBase+btupersonas+btuventanas;
    return btuTotal;
}
function FiltrarAires(btu){
    let aires = aire.filter(aire => aire.btu >= btu)
    console.log(aires);
}

function CrearCards(){
    
}
