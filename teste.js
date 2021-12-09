$(document).ready(function() {
    $.ajax({
        url: "http://localhost:5000/arrecadacao",
        method: "GET",
        contentType: "application/json",
        dataType: 'json',
        success: function(result) {
            result.forEach(function(data) {
                $('#dados-tabela').append(
                    "<tr>" +
                    "<td scope='row'>" + data.data.substring(0, 10) + "</td>" +
                    "<td>" + data.valor_arrecadado + "</td>" +
                    "<td>" +
                    "<a href='editarArrecadacao.html' class='btn btn-outline-info'><i class='fas fa-pencil-alt'></i></a>" +
                    "<button type='button' class='btn btn-outline-danger' data-toggle='modal' data-target='#modal-excluir'><i class='fas fa-trash'></i></button>" +
                    "<button type=\"button\" id=\"delete\" class=\"btnDelete\" onclick=deletarArrecadacao()>Enviar</button>" +
                    " </td>" +
                    "</tr>");
                //(Essa linha precisa ser ajustada) $('#delete').addEventListener('onclick', deletarArrecadacao(data.id_arrecadao));
            });
        }
    });
});

function deletarArrecadacao(evt, id_arrecadao) {
    console.log("Entrou na funcao")
    console.log(evt.preventDefault());
    $.ajax({
        url: "http://localhost:5000/arrecadacao/" + id_arrecadao,
        method: "DELETE",
        contentType: "application/json",
    }).done(function(data) {
        location.reload();
    }).fail(function(jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
    });
}