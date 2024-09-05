const estados = {
    '0000': 'q0 - Todas as bocas estão desligadas',
    '1000': 'q1 - Somente a boca 1 está ligada',
    '0100': 'q2 - Somente a boca 2 está ligada',
    '0010': 'q3 - Somente a boca 3 está ligada',
    '0001': 'q4 - Somente a boca 4 está ligada',
    '1100': 'q5 - Somente as bocas 1 e 2 estão ligadas',
    '1010': 'q6 - Somente as bocas 1 e 3 estão ligadas',
    '1001': 'q7 - Somente as bocas 1 e 4 estão ligadas',
    '0110': 'q8 - Somente as bocas 2 e 3 estão ligadas',
    '0101': 'q9 - Somente as bocas 2 e 4 estão ligadas',
    '0011': 'q10 - Somente as bocas 3 e 4 estão ligadas',
    '1110': 'q11 - Somente as bocas 1, 2 e 3 estão ligadas',
    '1101': 'q12 - Somente as bocas 1, 2 e 4 estão ligadas',
    '1011': 'q13 - Somente as bocas 1, 3 e 4 estão ligadas',
    '0111': 'q14 - Somente as bocas 2, 3 e 4 estão ligadas',
    '1111': 'q15 - Todas as bocas estão ligadas'
};

const estadosAtuais = {
    'boca1': false,
    'boca2': false,
    'boca3': false,
    'boca4': false
};

function ligar(boca) {
    document.getElementById(boca).style.backgroundColor = 'red';
    estadosAtuais[boca] = true;
    atualizarEstado();
}

function desligar(boca) {
    document.getElementById(boca).style.backgroundColor = 'white';
    estadosAtuais[boca] = false;
    atualizarEstado();
}

function atualizarEstado() {
    const estadoBinario = 
        (estadosAtuais['boca1'] ? '1' : '0') +
        (estadosAtuais['boca2'] ? '1' : '0') +
        (estadosAtuais['boca3'] ? '1' : '0') +
        (estadosAtuais['boca4'] ? '1' : '0');
    
    const estadoTexto = estados[estadoBinario];
    document.getElementById('estado').textContent = estadoTexto;
}
