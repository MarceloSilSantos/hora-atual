const horaAtualElemento =document.getElementById('hora-atual');
function atualizarHora(params) {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundo = agora.getSeconds().toString().padStart(2, '0');
    
    const horaFormatada = ` ${horas} : ${minutos} : ${segundos}`
}
setInterval(atualizarHora,1000);