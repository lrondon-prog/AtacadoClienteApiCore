$(function () {
    CarregarDetalhes();
});

function CarregarDetalhes() {
    //debugger;
    var id = localStorage.getItem('subcategoriaID');
    if (id == undefined || id == 0) {
        alert('AVISO - SubategoriaID não foi definido.');
        return;
    } else {
        localStorage.removeItem('subcategoriaID');
        var urlServico = 'http://localhost:10891/atacado/estoque/subcategoria/' + id;
        $.ajax({
            url: urlServico,
            async: false,
            success: function (data) {
                if (data.length == 0) {
                    alert('Erro ao carregar dados da subcategoria');
                    return;
                } else {
                    var subcategoriaID = data.subcategoriaID;
                    var categoriaID = data.categoriaID;
                    var descricao = data.descricao;
                    var dataInclusao = data.dataInclusao;

                    $('#txtSubcategoriaID').val(subcategoriaID);
                    $('#txtCategoriaID').val(categoriaID);
                    $('#txtDescricao').val(descricao);
                    $('#txtDataInclusao').val(dataInclusao);
                }
            }
        });
    }
}