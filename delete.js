// // console.log("teste")

// // $(document).ready(function(id_arrecadao) {
// //         console.log("teste")
// //         $.ajax({
// //             url: "http://localhost:5000/arrecadacao/" + id_arrecadao,
// //             method: "DELETE",
// //             contentType: "application/json",
// //             dataType: 'json',
// //             success: function(result) {
// //                 result.forEach(function(data) {
// //                     $('#dados-tabela').append(
// //                         "<tr>" +
// //                         "<td scope='row'>" + data.data.substring(0, 10) + "</td>" +
// //                         "<td>" + data.valor_arrecadado + "</td>" +
// //                         "<td>" +
// //                         "<a href='editarArrecadacao.html' class='btn btn-outline-info'><i class='fas fa-pencil-alt'></i></a>" +
// //                         "<button type='button' class='btn btn-outline-danger' data-toggle='modal' data-target='#modal-excluir'><i class='fas fa-trash'></i></button>" +
// //                         " </td>" +
// //                         "</tr>");
// //                     //(Essa linha precisa ser ajustada) $('#delete').addEventListener('onclick', deletarArrecadacao(data.id_arrecadao));
// //                 });
// //             }
// //         });
// // })
// console.log("Oi")

// function deletarArrecadacao() {
//     console.log("Entrou na funcao")
//         // evt.preventDefault();
//     $.ajax({
//         url: "http://localhost:5000/arrecadacao/",
//         contentType: "application/json",
//     }).done(function(data) {
//         location.reload();
//     }).fail(function(jqXHR, textStatus) {
//         console.log(jqXHR);
//         console.log(textStatus);
//     });
// }