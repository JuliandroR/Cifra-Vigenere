const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Algoritmo de criptografia
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let texto = (removeAcento(capturaInput(0)))
    let chave = retornaVetorPosicoes(removeAcento(capturaInput(1)))
    let anchor = 0
    let retorno = ""

    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i]);
        
        if (texto[i] == " ") {
            retorno += texto[i]
        }
        else {
            if (anchor > chave.length) {
                anchor = 0
                retorno += cifraLetra(retornaPosicao(texto[i]), chave[anchor])
            } else if (anchor <= chave.length) {
                retorno += cifraLetra(retornaPosicao(texto[i]), chave[anchor])
            } else { }
            anchor++
        }
    }

    document.getElementById('retorno').innerHTML = retorno
})

// Algoritmo de Descriptografia
document.getElementsByTagName('button')[1].addEventListener('click', () => {
    let texto = capturaInput(0)
    let chave = retornaVetorPosicoes(removeAcento(capturaInput(1)))
    let anchor = 0
    let retorno = ""

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == " ") {
            retorno += texto[i]
        } else {
            if (anchor > chave.length) {
                anchor = 0
                retorno += descifraLetra(retornaPosicao(texto[i]), chave[anchor])
            } else if (anchor <= chave.length) {
                retorno += descifraLetra(retornaPosicao(texto[i]), chave[anchor])
            } else { }
            anchor++
        }
    }

    document.getElementById('retorno').innerHTML = retorno
})

// Algoritmo para Limpar Preechimento
document.getElementsByTagName('button')[2].addEventListener('click', () => {
    document.getElementsByTagName('input')[0].value = ""
    document.getElementsByTagName('input')[1].value = ""
    document.getElementById('retorno').innerHTML = "___________________"
})


// Função para capturar valor da input desejada
const capturaInput = (posicao) => {
    let valor = document.getElementsByTagName('input')[posicao].value
    if (valor != "") {
        return valor.toUpperCase()
    } else {
        alert('Valor Nulo!')
    }
}

// Função que retorna o posição da letra no alfabeto.
const retornaPosicao = (letra) => {
    for (let i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i] == letra) {
            return i
        }
    }
}

// Função de Cifrar Letra
const cifraLetra = (Posicaoletra, valor) => {
    return alfabeto[(Posicaoletra + valor) % alfabeto.length]
}

// Função de Descifrar Letra
const descifraLetra = (Posicaoletra, valor) => {
    return alfabeto[((Posicaoletra - valor) + alfabeto.length) % alfabeto.length]
}

// Função que define as posições das letras das chaves
const retornaVetorPosicoes = (palavra) => {
    let vetor = []
    for (let i = 0; i < palavra.length; i++) {
        vetor.push(retornaPosicao(palavra[i]))
    }

    return vetor
}

const removeAcento = (letraAcento) => {
    let string = letraAcento.toLowerCase();
	var mapaAcentosHex 	= {
		a : /[\xE0-\xE6]/g,
		e : /[\xE8-\xEB]/g,
		i : /[\xEC-\xEF]/g,
		o : /[\xF2-\xF6]/g,
		u : /[\xF9-\xFC]/g,
		c : /\xE7/g,
		n : /\xF1/g
	};

	for ( var letra in mapaAcentosHex ) {
		var expressaoRegular = mapaAcentosHex[letra];
		string = string.replace( expressaoRegular, letra );
	}

	return string.toUpperCase();

}

