function updateClock() {
    const now = new Date();
    
    // Formatação do Tempo
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    // Atualiza os blocos diretamente
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

    // Formatação da Data (Ex: Quarta-feira, 22 de abril)
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    let dateString = now.toLocaleDateString('pt-PT', options);
    
    // Coloca a primeira letra da data em maiúsculo
    document.getElementById('date').innerText = dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

// Atualiza a cada 1 segundo
setInterval(updateClock, 1000);
updateClock();