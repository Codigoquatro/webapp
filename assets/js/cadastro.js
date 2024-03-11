$('#formulario-cadastro').on('submit',criarUsuario);


function criarUsuario(evento){
    evento.preventDefault();
    console.log("Dentro da função usário")

    if ($('#senha').val() != $('#confirmar-senha').val())
    alert("Senha não coincidem!")
    return

    $.ajax({
        url: 'usuarios',
        method: 'POST',
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            nick: $('#nick').val(),
            senha: $('#senha').val()           
        }     
    });
}