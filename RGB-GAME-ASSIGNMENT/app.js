const rElement=document.getElementById("r")
const gElement=document.getElementById("g")
const bElement=document.getElementById("b")
const colorDisplayElement = document.getElementById("color-display")


const levels= Array.from(document.getElementsByClassName("mode"));
let selectedLevelButton = levels.find(( level) =>{
    const classList= Array.from( level.classList);
   return classList.includes("selected");
}) .innerHTML;
 let gameLevel = selectedLevelButton.innerHTML
let squares= getSquares(gameLevel);


 


levels.forEach( level =>{
level.addEventListener( "click", function () {
    levels.forEach((mode)=> mode.classList.remove("selected"));
this.classList.add("selected");

gameLevel= this.innerHTML
setTitleAccordingToLevel(gameLevel);
squares= getSquares(gameLevel);
// dec 19thclass 

});
    });
    function getSquares(gameLevel) {
        const allSquares= Array.from( document.getElementsByClassName("square"));
        if (gameLevel + "Easy"){
            return allSquares.slice(0,3)
        } else  { 
            return allSquares
        }
    };
function setTitleAccordingToLevel(currentGameLevel){
    const allSquares= Array.from( document.getElementsByClassName("square"));
    if(currentGameLevel == "Easy"){
        const firstThreeSquares = allSquares.slice(0,3)
        const lastThreeSquares=allSquares.slice(3,6)

        lastThreeSquares.forEach(sq=>sq.classList.add("hidden"))
    }
    else if (currentGameLevel=="Hard"){
        allSquares.forEach(sq=>sq.classList.remove("hidden"))
    }
}

    //class ended week 3
    // concepts; eventListeners
    /*get element by Id, get element by class name, transform element into an array */


    //week 4 lecture
    //1. aAttempt to make all the suares have a background color RGB..... 200,45.255

const startButton = document.getElementById("reset");



startButton.addEventListener( "click", function(){
    this.innerHTML="New Colors";
    //assign each individual square a color
    for(let i=0; i< squares.length; i=i +1) {
       const red= Math.floor( Math.random() * 256);
       const green= Math.floor( Math.random() * 256);
       const blue= Math.floor( Math.random() * 256);

       const rgbString = "rgb(" + red +"," +green + "," + blue + ")";
    
        const square= squares[i]

        square.dataset.rgb_value = JSON.stringify([red,green,blue])
        square.style.backgroundColor = rgbString;

    }
//weeek 5 lecture
    //assign a random RGB value in the header
    const randomSquareIndex = Math.floor(Math.random() * squares.length);
    const headerColorSquare = squares[randomSquareIndex];
     setHeaderRgbBackgroungColor(headerColorSquare)

});

function setHeaderRgbBackgroungColor(squareElement){
    const setHeaderElementBackgroungColor = (rgbValues,element) => {
        const [r,g,b] =rgbValues
        
        const rgbString = `rgb(${r}, ${g}, ${b} )`;

        element.style.backgroundColor = rgbString;
        element.innerHTML = rgbValues.find((rgbValue) => {
            return rgbValue > 0;
        } )

    }
    const rgbString = squareElement.dataset.rgb_value;
    colorDisplayElement.dataset.rgb_value = rgbString;
    const [red,green,blue] = JSON.parse(rgbString);

    const redBackground = [red,0,0];
    const greenBackground = [0,green,0];
    const blueBackground = [0,0,blue];
    setHeaderElementBackgroungColor(redBackground,rElement);
    setHeaderElementBackgroungColor(greenBackground,gElement);
    setHeaderElementBackgroungColor(blueBackground,bElement);


}

squares.forEach( square => {
    square.addEventListener( "click" ,function () {
        const hederRgbValue =  colorDisplayElement.dataset.rgb_value
        const squareRgbValue= this.dataset.rgb_value;

        if (hederRgbValue ==squareRgbValue){
            setSquareBackgroungAfterWin(hederRgbValue)
        }
        else{ 
            this.classList.add("hidden");
        }
    } );
});

function setSquareBackgroungAfterWin (hederRgbString) {
    const [r,g,b] = JSON.parse(hederRgbString)
    const rgbString = `rgb(${r}, ${g}, ${b} )`;
    squares.forEach( sq =>{
        sq.classList.remove("hidden");
        sq.style.backgroundColor=rgbString;

    });


}
