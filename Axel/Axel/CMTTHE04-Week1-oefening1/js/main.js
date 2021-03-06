var aantal_vissen = 0

function createElements(){
    setTimeout(function(){
        createFish()
        createBubble()
    }, 250)
}
//
// geef de vis een random positie en een random kleur
//
function createFish(){
    //create fish
    let fish = document.createElement("Fish")
    document.body.appendChild(fish)

    //create random xposition and y posistion
    let xpos = (Math.random() * window.innerWidth)
    let ypos = (Math.random() * window.innerHeight)

    //set fish to random x and y posistion
    fish.style.top = ypos + "px"
    fish.style.left = xpos + "px"

    //generate random colour
    let color = Math.random() * 360

    //give fish random colour
    fish.style.webkitFilter = "hue-rotate(" + color + "deg)"
    fish.style.filter = "hue_rotate(" + color + "deg)"

    aantal_vissen++
    console.log(aantal_vissen)

    fish.addEventListener("click", killFish)

    //als het aantal vissen kleiner is dan honderd maak nieuwe vis
    if(aantal_vissen < 100) {
        createElements()
    }
}

function killFish(e){
    //here you kill the fish
    let fish = e.currentTarget
    fish.classList.add("dead")   
    createFish() 
}

//
// geef de bubble een random positie
//
function createBubble(){
    let bubble = document.createElement("bubble")
    document.body.appendChild(bubble)

    let xpos = (Math.random() * window.innerWidth)

    bubble.style.left = xpos + "px"
    
    bubble.addEventListener("click", killbubble)
}

function killbubble (e){
    let bubble = e.currentTarget
    bubble.style.display = "none"
    }

//
// roep een functie aan als alles geladen is
//
window.addEventListener("load", function () {
    createElements()
})