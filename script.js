
function EscrevendoInput() {
    const contacts = [
        { name: 'Rodolfo', number: '(19) 8459-6254' },
        { name: 'Amanda', number: '(81) 9684-5236' },
        { name: 'Paulo', number: '(25) 8465-2987' },
        { name: 'João Pedro', number: '(81) 9111-8342' }
    ]

    let input = document.querySelector("input")
    let p = document.querySelector("p")

    //usando i++ porque ai vai mudando de posição o momento que vai somando (parecido com o i = i +1)//

    for (const contact of contacts) {

        //"tolowercase é para fazer com que independente de a letra está minuscula ou maiuscula, irá encontrar"//       
        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = "Contato Encontrado, Nome: " + contact.name + " Telefone: " + contact.number

            break //parar o for quando encontrar//

        } else {
            p.innerHTML = "Nome Inválido, Tente outro nome"
        }

    }
}


let input = document.querySelector("input")
let p = document.querySelector("p")
let button = document.querySelector("button")
let i = 0

while (i < contacts.length) {
    EscrevendoInput()
    i++
}
dddd
