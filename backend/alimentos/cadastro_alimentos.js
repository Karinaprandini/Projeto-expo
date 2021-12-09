let salvar = document.getElementById("salvar");

let quantia = document.getElementById('quantia');
let data = document.getElementById('data');


salvar.onclick = function() {

    let dadosArrecadacao = {
        ValId: "0",
        Date: data.value,
        Val: quantia.value,
    }
    if (data.value != '' && quantia.value != '') {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function() {
                console.log(xhr.responseText);
                if (xhr.responseText != '') {
                    alert('Alimento Inserida!');
                    data.value = '';
                    quantia.value = '';
                } else {
                    alert('Algo deu errado!')
                }
            }
            //console.log(dadosArrecadacao);
        xhr.send(JSON.stringify(dadosSAlimentos));
    }
}