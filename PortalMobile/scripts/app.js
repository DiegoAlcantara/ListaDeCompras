
var item;
var itens = [];
var qtd;


function AdcionarIten() {

    item = document.getElementById("item").value;

    itens.push(item)

    ListarItens();
}



function ListarItens() {

    var divConteuro = document.getElementById("itensLista");
    divConteuro.innerHTML = "";
    for (var i in itens)
    {
        var divIten = document.createElement("div");
        divIten.setAttribute("id",  + i);
        divIten.setAttribute("class", "col-md-6");
        divIten.innerHTML = "<p class='bg-success'>" + itens[i] + " </p>";

 
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
    }

    ListarItens();

}


document.getElementById("add").addEventListener('click', AdcionarIten);

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