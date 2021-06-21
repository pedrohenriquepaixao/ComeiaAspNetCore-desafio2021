// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$("#cnpj").change(function(e) {
    let cnpj = $("#cnpj").val();
    if (cnpj.length <= 0) return;
    $.ajax({
        'url': 'https://www.receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': "GET",
        'dataType': 'jsonp',
        'success': function(data){
            $("input[name='nome_fantasia']").val(data.fantasia ? data.fantasia : data.nome)
                $("input[name='email']").val(data.email)
                $("input[name='telefone']").val(data.telefone)
            },
        })
})

/*
 * 
 *  $.get("https://www.receitaws.com.br/v1/cnpj/", { code: cnpj }, (result) => {
            if (result.status != 1) {
                alert(result.message || "Houve um ero desconhecido");
                return;
            }
            console.log(result)
            $("input[name='nome_fantasia']").val(result.nome)
            $("input[name='email']").val(result.email)
            $("input[name='telefone']").val(result.telefone)
        })

$(document).ready(function () {
    $('#telefone').mask('(00) 0 0000-0000');
    $('#cnpj').mask('00.000.000/0000-00', { reverse: true });
});



$("#cnpj").change(function (e) {
    let cnpj = $("#cnpj").unmask().val();
    //debugger;
    var param = {};
    param.url = 'https://www.receitaws.com.br/v1/cnpj/' + cnpj;
    param.method = 'GET';
    param.success = (data) => populate(data);
    param.dataType = 'jsonp';
    serviceRest(param);
    $('#cnpj').mask('00.000.000/0000-00', { reverse: true });
});

function populate(data) {
    (data.fantasia == "") ? $('#nome_fantasia').val(data.nome) : $('#nome_fantasia').val(data.fantasia)

    $('#email').val(data.email)
    $('#telefone').val(data.telefone)
    console.log(data);
}

function serviceRest(param) {
    $.ajax({
        url: param.url,
        dataType: param.dataType,
        type: param.method,
        data: param.data,
        success: param.success
    });
}*/
