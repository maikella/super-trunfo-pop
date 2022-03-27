const cartas = [

    {
        nome: 'Ariana Grande',
         img: 'https://pbs.twimg.com/media/FMkC3OTXEAEqOlP?format=jpg&name=900x900',

        atributos:{

            ataque: 69,
            defesa: 45,
            carisma: 666
        }

    },
    
    {
        nome: 'Shakira',
        img: 'https://i1.sndcdn.com/avatars-000754019632-3ewkg8-t500x500.jpg',

        atributos:{

            ataque: 15,
            defesa: 5,
            carisma: 30
        }


    },
    
    {
        nome: 'Taylor Swift',
        img: 'https://pbs.twimg.com/media/FMkC3jTWUAEsHtc?format=jpg&name=large',

        atributos:{

            ataque: 18,
            defesa: 9,
            carisma: 40
        }

    }
]


let butaoJogar = document.getElementById('bJogar')
butaoJogar.disabled = true

let butaoN = document.getElementById("bJogarN")

let butaoSortear = document.getElementById('bSortear')

let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
let cartaMaquina  = cartas[numeroCartaMaquina]


let numeroCartaJogador = parseInt(Math.random() * cartas.length)
let cartaJogador = cartas[numeroCartaJogador]


const sortearCarta = () => {

 
        if (cartas[numeroCartaMaquina] !== cartas[numeroCartaJogador]){

            cartaJogador = cartas[numeroCartaJogador]
            
        }

        
        butaoJogar.style.cursor = 'pointer'
        butaoJogar.disabled = false

       
        butaoSortear.addEventListener('mouseover', mouse2, false)

       
        showCartaJogador()
        setHover()
        setHover3()

}


const setHover = () => {


let origColorStyle = butaoN.style.color;

butaoN.addEventListener("mouseenter", (event) => { event.target.style.background = "linear-gradient(135deg, rgb(197, 173, 79) 0%, rgb(197, 173, 79) 100%)" });

butaoN.addEventListener("mouseleave", (event) => { event.target.style.background = origColorStyle })
    

}



const setHover3 = () => {


let origColorStyle = butaoJogar.style.color;

butaoJogar.addEventListener("mouseenter", (event) => { event.target.style.background = "linear-gradient(135deg, rgb(197, 173, 79) 0%, rgb(197, 173, 79) 100%)" });

butaoJogar.addEventListener("mouseleave", (event) => { event.target.style.background = origColorStyle })
    

}


const atributoSelecionado = () =>{

   

    let radioAtributos = document.getElementsByName('atributo')


    for(let i = 0; i < radioAtributos.length; i++){

        if(radioAtributos[i].checked){
            
            return radioAtributos[i].value
        }
    }

}


const jogar = () => {


    let cartaSelecionada = atributoSelecionado()
    
    let valorCartaJogador = cartaJogador.atributos[cartaSelecionada]

    let valorCartaMaquina = cartaMaquina.atributos[cartaSelecionada]
 
    
     let resultado = document.getElementById('gameResults')

     if(valorCartaJogador > valorCartaMaquina){

         resultado.innerHTML = '<p class="resultado-final">Você ganhou!</p>'

         resultado.style.color = "#03c997"

     }else if(valorCartaMaquina > valorCartaJogador){
         resultado.innerHTML = '<p class="resultado-final">Você Perdeu!</p>'

         resultado.style.color = "#DA3B50"

     }else{

         resultado.innerHTML = '<p class="resultado-final">Empatou!</p>'

         resultado.style.color ='#4BDCEC'
     }

     
     showCartaMaquina()
     jogarNovamente()
     sumirBotao()

     setHover()

}


const sumirBotao = () => {

    let again2 = document.getElementById('bJogar')

    again2.style.display = 'none'
 
   }

const jogarNovamente = () => {

    let again = document.getElementById('bJogarN')

    again.style.display = 'block'
 
   var carregar = document.querySelector('.carregar')
 
    carregar.addEventListener('click', mouse)
}


const mouse = () => {
   
        location.reload();
    
}

const mouse2 = () => {

butaoSortear.addEventListener("mouseenter", (event) => { event.target.style.cursor = "no-drop" });

butaoSortear.addEventListener("mouseenter", (event) => { event.target.style.background = "linear-gradient(135deg, rgb(197, 173, 79) 0%, hsla(21, 46%, 31%, 1) 100%)" });

}

const showCartaMaquina = () => {

    
    let atributos = Object.getOwnPropertyNames(cartaMaquina.atributos).sort()

    let divMaquina = document.getElementById('carta-maquina')
    divMaquina.style.backgroundImage = `url(${cartaMaquina.img})`

    
    let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

    let tagHTML = `<div id="opcoes" class="maquina">`


    let showText=''


    for(let atributo in cartaMaquina.atributos){

    showText += `<p
    name="atributo" value="${atributo}"> ${atributo} ${cartaMaquina.atributos[atributo]}</p>`

     }

     let nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`

     divMaquina.innerHTML = `${moldura} ${nome} ${tagHTML} ${showText} </div>`
}


const showCartaJogador = () => {

    let atributos = Object.getOwnPropertyNames(cartaJogador.atributos).sort()

    let divJogador = document.getElementById('carta-jogador')
    divJogador.style.backgroundImage = `url(${cartaJogador.img})`


    let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

    let tagHTML = `<div id="opcoes" class="carta-status">`


    let showText=''


        for(let atributo in cartaJogador.atributos){

        showText += `<input type="radio" checked
        name="atributo" value="${atributo}"> ${atributo} ${cartaJogador.atributos[atributo]} </br>`

        }

        let nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`

        let youChoice = '<p class="atributo">Escolha o seu atributo</p>'

        divJogador.innerHTML = `${moldura} ${nome} ${youChoice} ${tagHTML} ${showText} </div>`
  
}