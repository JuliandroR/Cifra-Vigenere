const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const map = [" ", "'", "!", "@", "#", "$", "%", "¨", "&", "*", "(", ")", "-", "_", "=", "+", '"', "|", ",", ".", ";", "<", ">", ":", "?", "/", "ª", "º", "§"]

// Criptografa o texto
document.getElementsByClassName('button')[0].addEventListener('click', () => {
    let posicoes = retornaPosicoes(removeAcento(capturaInput(1)))
    console.log(posicoes);
})

const retornaPosicoes = (palavra) => {
    let posicoes = []
    for (let i = 0; i < palavra.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if (palavra[i] == alfabeto[j]) {
                posicoes.push(j)
            }
        }
    }
    return posicoes
}

const removeAcento = (palavra) => {
    let texto = palavra

    texto = texto.replace(new RegExp('[ÁÀÃÂ]', 'gi'), 'A');
    texto = texto.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E');
    texto = texto.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I');
    texto = texto.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O');
    texto = texto.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U');
    texto = texto.replace(new RegExp('[Ç]', 'gi'), 'C');

    return texto
}

const capturaInput = (posicao) => {
    return (document.getElementsByClassName('input')[posicao].value).toUpperCase()
}
