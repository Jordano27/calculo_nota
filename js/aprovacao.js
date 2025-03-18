document.getElementById("verResultado").addEventListener("click", function() {
    let nota = parseFloat(document.getElementById("nota").value);
    let frequencia = parseFloat(document.getElementById("frequencia").value);
    let resultado = document.getElementById("resultado");
    let exelente = "🎉 Parabéns! Você obteve 100% de frequência e nota 10!";
    let resultadobom = "✅ Aprovado!";
    let resultadoruim = "❌ Reprovado!";

    if (isNaN(nota) || isNaN(frequencia)) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        return;
    }

    if (nota === 10 && frequencia === 100) {
        resultado.innerHTML = exelente;
    } 
    else if (nota >= 7 && frequencia > 75) {
        resultado.innerHTML = resultadobom;
    } 
    else {
        resultado.innerHTML = resultadoruim;
    }
});


