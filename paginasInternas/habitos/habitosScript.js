// Pega os IDs do HTML e passa como variável pro JS
var sectionExt = document.getElementById('sectionExt')
var sectionInt = document.getElementById('sectionInt')
var text = document.getElementById('text')
var retornar = document.getElementById('retornar')

function section(elemento) { // Função que ativa as sections internas
    let header, imagem, descricao; // Declara variáveis que auxiliam na alteração do contéudo

    switch(elemento) { // Switch case básico
        case 'fantasia':
            header = 'Hábitos e Costumes - Fantasias'; // Muda o header
            imagem = './habitosIMG/fantasias.png'; // Muda a fonte da imagem
            descricao = 'Os celtas acreditavam que no Halloween era possível entrar em contato com os espíritos e que fantasmas, fadas e demônios ficavam à solta nessa noite.<br><br> Para representar esse cenário sobrenatural, eles usavam peles e cabeças de animais abatidos como fantasias.<br><br>Hoje, as fantasias são umas das características marcantes do halloween.'; // Muda a descrição da aba interna
            break;
        case 'historia':
            header = 'Hábitos e Costumes - Histórias de Terror';
            imagem = './habitosIMG/fantasma.png';
            descricao = 'As histórias de terror no Halloween fazem parte de sua tradição, elas normalmente são contadas oralmente, sempre tentando causar um suspense e medo nos ouvintes. <br><br> Seja nas lendas, nas histórias contadas ao redor da fogueira ou nos mitos usados para assustar filhos desobedientes. As histórias de terror chegaram em 1794 com a publicação de “O castelo de Otranto”, de Horace Walpole';
            break;
        case 'abobora':
            header = 'Hábitos e Costumes - Abóbora Lanterna';
            imagem = './habitosIMG/jackolantern.png';
            descricao = 'Os celtas acreditavam que os espíritos dos mortos se misturavam com as pessoas vivas, então para afasta-los eles começaram a esculpir rostos aterrorizantes em seus próprios nabos.<br><br> Hoje, as abóboras são um elemento básico das comemorações do Halloween mais focados em decoração';
            break;
        case 'doce':
            header = 'Hábitos e Costumes - Doces ou Travessuras';
            imagem = './habitosIMG/doces.png';
            descricao = 'No início do século 20, a indústria alimentícia dos Estados Unidos começou a incentivar cada vez mais a tradição do pedido de doces no Dia das Bruxas, defendendo que, ao fornecer as guloseimas, você impediria que atos de vandalismo fossem realizados como travessuras.';
            break;
        case 'cores':
            header = 'Hábitos e Costumes - Cores Preto e Laranja';
            imagem = './habitosIMG/cores.png';
            descricao = 'As cores predominantes do Halloween são as cores preto e laranja e âmbas carregam simbolismo; <br><br> Preto: predominante dos magos, bruxas, feiticeiras e sacerdotes do mestre das trevas.<br><br> Laranja: traz vitalidade, energia e força.<br>Dizem que os espíritos se aproximavam dos que estavam de laranja para sugar as energias.';
    }

    sectionExt.style.display = 'none'; // Oculta a section principal
    sectionInt.style.display = 'flex'; // Revela a section interna
    text.innerText = header; // Muda o header
    sectionInt.innerHTML = `<img src="${imagem}"><p>${descricao}</p>`; // Muda a imagem e descrição da aba interna
    retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">Voltar</a>'; // Muda o comportamento do botão voltar, ao invez de te enviar para a página principal, oculta a section interna e revela a section principal
}

function voltar() {
    sectionExt.style.display = 'flex'
    sectionInt.style.display = 'none'
    retornar.innerHTML = '<a href="../../index.html" id="retornar">Voltar</a>'
    text.innerText = 'Halloween - Hábitos e Costumes' 
}
