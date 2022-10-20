const btnLimpar = document.querySelector('#btn-limpar');
const limpar = document.querySelectorAll('.aniversarios');
const elemento = document.querySelector('#remover');
const title= document.querySelector('#title');

btnLimpar.onclick = function(){
        removeChildren(limpar);
        title.innerHTML= "Nenhum Aniversário Hoje"

}


function removeChildren (params){
    let parentId = params.parentId;
    let childName = params.childName;

    let childNodesToRemove = document.getElementsByClassName('aniversarios');
    for(let i=childNodesToRemove.length-1;i >= 0;i--){
        let childNode = childNodesToRemove[i];
        childNode.parentNode.removeChild(childNode);
    }
}