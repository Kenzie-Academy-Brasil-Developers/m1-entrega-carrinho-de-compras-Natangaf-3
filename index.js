let body                = document.querySelector('body')
let main                = document.createElement('main');
let sacola              = document.createElement('section');
let h2                  = document.createElement('h2')
let p                   = document.createElement('p');

sacola.classList.add("sacola");
main.classList.add("loja")

h2.innerText = "Itens"
p.innerText  =  "Valor"

sacola.append(h2,p)
main.appendChild(sacola)
body.appendChild(main)



function montagemCard(obj) {
    let productsDetail  = document.createElement('li');
    let nome            = document.createElement('p');
    let valor           = document.createElement('p');

    valor.classList.add("valor")
    nome.classList.add("nome")
    productsDetail.classList.add("item")

    valor.innerText     = obj.price;
    nome.innerText      = obj.name;
    productsDetail.append(nome,valor);

    return productsDetail

}

function rederizacaoCard(lista){
    let main            = document.querySelector('main')
    let section         = document.createElement('section')
    let productslist    = document.createElement('ul');

    productslist.classList.add("items");

    for(let i = 0; i < lista.length;i++){
        let box = lista[i];
        let card = montagemCard(box)
        productslist.appendChild(card)
    }
    section.appendChild(productslist)
    main.appendChild(section)
}

rederizacaoCard(productsCart)

function soma(list){
    let resultado = 0
    for(let i = 0 ;i < list.length;i++){
        resultado += list[i].price
    }

    return rederizacaoSacola(resultado)
}
soma(productsCart)

function rederizacaoSacola(value){
    let main            = document.querySelector('main')
    let section         = document.createElement('section');
    let div             = document.createElement('div');
    let total           = document.createElement('p');
    let valor           = document.createElement('p');
    let button          = document.createElement('button')
    
    section.classList.add("finalizacao");
    div.classList.add("calculo");
    div.classList.add("item")
    button.classList.add("finalizar");

    button.innerText = "Finalizar compra"
    total.innerText = "Total"
    valor = value

    div.append(total,valor);
    section.append(div,button)
    main.append(section)

} 
