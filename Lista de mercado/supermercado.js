var itens = []

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeproduto = document.querySelector('input[name=Nome_produto]');
    var precoproduto = document.querySelector('input[name=Valor_produto]');

    itens.push({
        nome: nomeproduto.value,
        valor: precoproduto.value
    });
    let Lista_produtos = document.querySelector('.Lista-produtos');
    let soma = 0;
    Lista_produtos.innerHTML = "";
    itens.map(function(val){
        soma += parseInt(val.valor);
        Lista_produtos.innerHTML+=`
        <div class="Lista-produtos-single">
            <h3>`+val.nome+`</h3> 
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    })
    nomeproduto.value = ""
    precoproduto.value = ""

    let elementosoma = document.querySelector('.soma-produto h1')
    elementosoma.innerHTML ='Total: R$'+soma;
});

document.querySelector('button[name=Limpar]').addEventListener('click',()=>{
    itens = [];
    document.querySelector('.Lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = 'Total: R$0'

})

