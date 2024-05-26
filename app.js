let arrayOfCards=[
    {name:'apple',src:'images/apple.jpeg'},
    {name:'banana',src:'images/banana.jpeg'},
    {name:'cherry',src:'images/cherry.jpeg'},
    {name:'watermelon',src:'images/watermelon.jpeg'},
    {name:'grapes',src:'images/grapes.jpeg'},
    {name:'pineapple',src:'images/pineapple.jpeg'},
    {name:'apple',src:'images/apple.jpeg'},
    {name:'banana',src:'images/banana.jpeg'},
    {name:'cherry',src:'images/cherry.jpeg'},
    {name:'watermelon',src:'images/watermelon.jpeg'},
    {name:'grapes',src:'images/grapes.jpeg'},
    {name:'pineapple',src:'images/pineapple.jpeg'}
]

//main variables

let grid=document.getElementById('grid')
let blankCards=[]
let chosenCards=[]
let msg=document.getElementById("msg")
let score=document.getElementById('score')
let scoreCounter=0
let cardsLeft=arrayOfCards.length




shuffle()


displayCards()

// shuffle array 
function shuffle(){
    let temp,j
for(let i=arrayOfCards.length-1 ; i>0 ;i--){
    j=Math.floor(Math.random()*(i+1))
    temp=arrayOfCards[j]
    arrayOfCards[j]=arrayOfCards[i]
    arrayOfCards[i]=temp
}
return arrayOfCards
}





//display blanks

function displayCards(){
    
    for(let i=0; i<arrayOfCards.length ; i++){
        let card=document.createElement('img')
        card.setAttribute('src','images/blank.jpeg')
        blankCards.push(card)
    }
}
blankCards.forEach((card,i)=>{
    grid.append(card)
    card.addEventListener('click',()=>{flip(card,i)})
   })






// cards flipping function 

function flip(card,i){
    card.classList.add("selected")
    card.setAttribute('src',arrayOfCards[i].src)
    chosenCards.push(i)
    if(chosenCards.length==2){
        blankCards[chosenCards[0]].classList.remove('selected')
        blankCards[chosenCards[1]].classList.remove('selected')
        checkWin(card)
    }
}


// check win

function checkWin(card,eventHandler){
    if(arrayOfCards[chosenCards[0]].name==arrayOfCards[chosenCards[1]].name){
       setTimeout(()=>{
        blankCards[chosenCards[0]].classList.add('off')
        blankCards[chosenCards[1]].classList.add('off')   
        chosenCards=[]
       },500)
               
        
        scoreCounter+=10
        cardsLeft-=2
        msg.classList.add('msgDisplay')
        setTimeout(()=>{
            msg.classList.remove('msgDisplay')
            score.innerHTML=scoreCounter
            if(cardsLeft==0){
                winMsg()
            }
        },1500)
    }
    else{
        setTimeout(()=>{
            blankCards[chosenCards[0]].setAttribute("src",'images/blank.jpeg')
            blankCards[chosenCards[1]].setAttribute("src",'images/blank.jpeg')
            chosenCards=[]
        },500)
    }
}

//win massage

function winMsg(){
    document.body.innerHTML='<h1>congratulations you win<h1/>'
    let btn=document.createElement("button")
    btn.innerHTML='play again'
    btn.classList.add("btn")
    btn.onclick=()=>{
        window.location.reload()
    }
    document.body.appendChild(btn)
}