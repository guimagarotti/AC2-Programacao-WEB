function realizarCalculo() {
    let custoFabrica = Number.parseFloat(document.getElementById('custoFabrica').value);
    let percDistribuidor = Number.parseFloat(document.getElementById('percDistribuidor').value);
    let percImpostos = Number.parseFloat(document.getElementById('percImpostos').value);
    let valorFinal;

    valorFinal = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos);

    document.getElementById('valorfinal').value = valorFinal;
}