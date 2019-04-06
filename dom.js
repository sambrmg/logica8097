


var lista = []

function salvarAluno(){
    var nome = document.querySelector("#nome").value;
    var nota = document.querySelector("#nota").value;
    if(nome != "" && nota != ""){
        lista.push(
            {
               nomeAluno: nome,
               notaAluno: parseFloat(nota)
            }
        )
    
        document.querySelector("#nome").value = ""
        document.querySelector("#nota").value = ""
        alert("O aluno: " + nome + " inserido com sucesso")
        montarTabela();
    }else{
        alert("Informe um nome e uma nota")
    }
}

function montarTabela(){
    var tbody = "";
    var total = 0;
    for(var i = 0; i < lista.length; i++ ){
        total = total + lista[i].notaAluno;
        tbody =  "<tr><td>"+ lista[i].nomeAluno +"</td><td>"+ lista[i].notaAluno +"</td></tr>" +tbody
    }
    document.getElementById("linhaTabela").innerHTML = tbody
    document.getElementById("linhaTotal").innerHTML = "<tr><td>Total</td><td>"+ total +"</td></tr>";
}