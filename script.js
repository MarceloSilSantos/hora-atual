const horaAtualElemento =document.getElementById('hora-atual');
function atualizarHora() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    
    const horaFormatada = ` ${horas} : ${minutos} : ${segundos}`;
    horaAtualElemento.innerHTML = horaFormatada;
}
setInterval(atualizarHora,1000);
atualizarHora();
