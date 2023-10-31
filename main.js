const btnGo = document.querySelector('.b1')
const btnPause = document.querySelector('.b2')
const btnReset = document.querySelector('.b3')

const txtWork = document.querySelector('.affichageT')
const txtRest = document.querySelector('.affichageP')
const txtCycle = document.querySelector('h2')

let minutes = 1800
let restMinutes = 300
let checkInterval = false 
let pause =  false
let nbCycle = 0
txtCycle.innerText = `Nombre de cycles ${nbCycle}`

displayTime()
displayTimeRest()

btnGo.addEventListener('click', () =>{

    if (!checkInterval) {
        checkInterval = true
        minutes--
        displayTime()
        displayTimeRest()

        let timer = setInterval(() => {
            
            if(pause === false && minutes > 0){
                minutes--
                displayTime()
                displayTimeRest()
            }else if(pause === false && minutes === 0 && restMinutes === 0){
                nbCycle++
                txtCycle.innerText = `Nombre de cycles ${nbCycle}`
                minutes = 1800
                restMinutes = 300
                displayTime()
                displayTimeRest()
            }else if(pause === false && minutes === 0){
                restMinutes--
                displayTimeRest()
            }
        }, 1000);
        reset(timer)
    }else{
        return
    }
})

onPause()

function onPause(){
    btnPause.addEventListener('click', () =>{
        pause = !pause
        if (pause === false) {
            btnPause.innerText = 'Pause'
        }else if(pause){
            btnPause.innerText = 'Play'
        }
    })
}



function reset(valreset){
    btnReset.addEventListener('click', () => {
        clearInterval(valreset)
        minutes = 1800
        restMinutes = 300
        displayTime()
        displayTimeRest()
        checkInterval = false 
        pause =  false
        nbCycle = 0
        txtCycle.innerText = `Nombre de cycles ${nbCycle}`
    })
}


function displayTime(){
    txtWork.innerText = `
    ${Math.floor(minutes/60)} : ${(minutes % 60 < 10) ? `0${minutes % 60}` : minutes % 60}`
}
function displayTimeRest(){
    txtRest.innerText = `
    ${Math.floor(restMinutes/60)} : ${(restMinutes % 60 < 10) ? `0${restMinutes % 60}` : restMinutes % 60}`
}























