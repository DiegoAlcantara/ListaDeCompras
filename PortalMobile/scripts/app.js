

var itens = [];



function AdcionarIten() {

    var item = document.getElementById("item").value;

    if (item == "")
    {
        alert("Item vazio!");
        return false;
    }

    var qtd = document.getElementById("qtd").value

    itens.push(qtd+" - "+item)

    salvar();

    ListarItens();

    document.getElementById("item").value = "";
    document.getElementById("qtd").value = 1;
} 



function ListarItens() {

    var divConteuro = document.getElementById("itensLista");
    divConteuro.innerHTML = "";

    itens = JSON.parse(localStorage["itemsAdicionados"]);

    for (var i in itens)
    {
        //var divIten = document.createElement("div");
        //divIten.setAttribute("id",  + i);
        //divIten.setAttribute("class", "col-md-6");
        //divIten.innerHTML = "<p class='bg-success'>" + itens[i] + " </p>";

        var divIten = document.createElement("li");
        divIten.setAttribute("id", +i);
        divIten.setAttribute("class", "list-group-item");
        divIten.innerHTML = itens[i];
        divConteuro.appendChild(divIten);

        divIten.addEventListener("click", remove)
    
    }
    

}


function remove()
{
    
    var i = this.getAttribute("id")
    var it = itens[i];

    var s = confirm("Deseja deletar o item: " + it);

    if (s == true) {
        itens.splice(i, 1);

        salvar();
    }

    ListarItens();

}


function limpar()
{
    itens = [];
    salvar();
    ListarItens();

}

function salvar()
{
    localStorage["itemsAdicionados"] = JSON.stringify(itens);
}

document.getElementById("add").addEventListener('click', AdcionarIten);
document.getElementById("limpar").addEventListener('click', limpar);


ListarItens();





function add() {

    

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://homologacao/apis/ponto/api/registrosDePonto/0100000505",
        success:success,
        error: err
    });
}


function success(data)
{
    var s = JSON.stringify(data)
    alert(s);
}

function err()
{
            alert("erro");
}