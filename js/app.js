let reloj = document.getElementById('reloj');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let segundos = 0;
let minutos = 0;
let horas = 0;
const conversion = (tiempo) => {
    if (tiempo < 10) {
        return "0" + String(tiempo);
    } else {
        return tiempo;
    }
}
const cronometro = () => {
    reloj.innerHTML = `${conversion(horas)}:${conversion(minutos)}:${conversion(segundos)}`;
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
            minutos = 0;
            horas++;
        }
    }
}
let funcionamiento
start.addEventListener('click', () => {
    funcionamiento = setInterval(cronometro, 1000);
});
pause.addEventListener('click', () =>{
    clearInterval(funcionamiento)
})
reset.addEventListener('click', () =>{
    clearInterval(funcionamiento)
    segundos = 0;
    minutos = 0;
    horas = 0;
    reloj.innerHTML = `${conversion(horas)}:${conversion(minutos)}:${conversion(segundos)}`;
})