/* 
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

function porcentagem(estado) {
    let sp = 6783643;
    let rj = 3667866;
    let mg = 2922988;
    let es = 2716548;
    let outros = 1984953;

    let total = sp + rj + mg + es + outros;

    let valorEstado;

    if (estado === 'SP') {
        valorEstado = sp;
    } else if (estado === 'RJ') {
        valorEstado = rj;
    } else if (estado === 'MG') {
        valorEstado = mg;
    } else if (estado === 'ES') {
        valorEstado = es;
    } else if (estado === 'Outros') {
        valorEstado = outros;
    } else {
        console.log('Estado não encontrado');
        return;
    }

    let percentual = (valorEstado / total * 100).toFixed(2);
    console.log(`Percentual de representação de ${estado}: ${percentual}%`);
}

porcentagem('RJ')


