



let button = document.querySelector("button")





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

    for (let i = 0; i < contacts.length; i++) {

    //"tolowercase é para fazer com que independente de a letra está minuscula ou maiuscula, irá encontrar"//       
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = contacts[i].number

        }else  {
            p.innerHTML = "Nome Inválido, Tente outro nome"
        }

    }
}


button.addEventListener("click", EscrevendoInput)

