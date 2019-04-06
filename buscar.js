


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
        
    }else{
        alert("Informe um nome e uma nota")
    }
}

function montarTabela(listaRes){
    var tbody = "";
    for(var i = 0; i < listaRes.length; i++ ){
        tbody =  "<tr><td>"+ listaRes[i].nomeAluno +"</td><td>"+ listaRes[i].notaAluno +"</td></tr>" +tbody
    }
    document.getElementById("linhaTabela").innerHTML = tbody
}

function buscarNomeAluno(){
    var procurarNome = document.querySelector("#procurarNome").value;
    var listaRes = []
    for(var i = 0; i < lista.length; i++ ){
        var re = new RegExp(procurarNome, "i");
        var res = re.exec(lista[i].nomeAluno);
        if( res != null) {   
            listaRes.push(lista[i])
        }
    }
    if( listaRes.length > 0){
        document.getElementById("tabelaAlunos").classList.remove("exibir")
        montarTabela(listaRes);

    }
}