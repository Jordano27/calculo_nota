document.getElementById("verMedia").addEventListener("click", function() {
    let presenca = parseFloat(document.getElementById("nota1").value);
   
    let media = document.getElementById("media");

    // Verifica se os valores são números válidos
    if (isNaN(presenca)) {
        media.innerHTML = "Por favor, insira valores numéricos válidos!";
        return;
    }

    let frequencia = (presenca/200)*100;

    if (frequencia === 100) {
        media.innerHTML = `🎉 Parabéns! Sua porcentagem de presença é ${frequencia.toFixed(2)}%`;
    } else if (frequencia >= 75) {
        media.innerHTML = `✅ Aprovado! Sua porcentagem de presença é ${frequencia.toFixed(2)}%`;
    } else {
        media.innerHTML = `❌ Reprovado! Sua porcentagem de presença${frequencia.toFixed(2)}%`;
    }
});