$(document).ready(function(){

    $('#carousel-imagens').slick({autoplay: true,});
    
    $('#cep').mask('00000-000', {placeholder: "_____-___"});
    $('#telefone').mask('(00) 00000-0000', {placeholder: "(__) _____-____"});
    $('#cpf').mask('000.000.000-00', {reverse: true, placeholder: "___.___.___-__"});

    $('form').validate({
        rules: {
            nome: { required: true},
            email: { required: true, email: true },
            telefone: { required: true },
            endereco: { required: true },
            cep: { required: true },
            cpf: { required: true },
        },
        messages: { // Adicione mensagens personalizadas
            nome: "Por favor, insira seu nome completo",
            email: {
                required: "Preencha com um e-mail válido",
                email: "Formato inválido (ex: nome@email.com)"
            },
            telefone: "Preencha com seu telefone",
            endereco: "Insira seu endereço completo",
            cep: "CEP obrigatório",
            cpf: "CPF obrigatório"
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(event, validator) {
            alert("Por favor, preencha todos os campos corretamente!");
        }
    });
});