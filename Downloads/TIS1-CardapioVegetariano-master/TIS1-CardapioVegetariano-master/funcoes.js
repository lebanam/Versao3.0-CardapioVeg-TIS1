var clientes = JSON.parse(localStorage.getItem('clientes')) || [];

function Adicionar(event) {
    event.preventDefault();
    var cliente = {
        Nome: $("#txtNome").val(),
        Email: $("#txtEmail").val(),
        Senha: $("#txtSenha").val(),
    };
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Registro adicionado!");
}

function Login(event) {
    event.preventDefault();
    var login = {
        Email: $("#txtEmail").val(),
        Senha: $("#txtSenha").val(),
    };
    const isLogin = clientes.filter(cl => cl.Email === login.Email && cl.Senha === login.Senha).length > 0;

    if (isLogin) {
        alert('Login realizado');
    } else {
        alert('Erro ao fazer login');
    }
}

function Editar(indice_selecionado) {
    clientes[indice_selecionado] = JSON.stringify({
        Nome: $("#txtNome").val(),
        Email: $("#txtEmail").val(),
        Senha: $("#txtSenha").val(),
    });//Altera o item selecionado na tabela
    localStorage.setItem("cl", JSON.stringify(clientes));
    alert("Informações editadas.")
}

function Excluir() {
    clientes.splice(indice_selecionado, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Registro excluído.");
}

function Listar() {
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>" +
        "   <tr>" +
        "   <th></th>" +
        "   <th>Nome</th>" +
        "   <th>Email</th>" +
        "   <th>Senha</th>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in clientes) {
        var cli = JSON.parse(clientes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>" + cli.Nome + "</td>");
        $("#tblListar tbody").append("<td>" + cli.Email + "</td>");
        $("#tblListar tbody").append("<td>" + cli.Senha + "</td>");
        $("#tblListar tbody").append("</tr>");
    }
}


$("#tblListar").on("click", ".btnExcluir", function () {
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});