const fs = require('fs');

function calcularFaturamento(dados) {
    if (!dados || !dados.faturamento) {
        throw new Error('Dados de faturamento inválidos.');
    }

    const faturamento = dados.faturamento;

    const diasComFaturamento = faturamento.filter(d => d.valor > 0);

    const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

    const totalFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
    const mediaMensal = totalFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        const dados = JSON.parse(data);

        console.log('Dados lidos do arquivo:', dados);

        const resultados = calcularFaturamento(dados);
        console.log('Menor faturamento:', resultados.menorFaturamento);
        console.log('Maior faturamento:', resultados.maiorFaturamento);
        console.log('Número de dias com faturamento acima da média mensal:', resultados.diasAcimaDaMedia);
    } catch (parseError) {
        console.error('Erro ao processar o JSON:', parseError);
    }
});
