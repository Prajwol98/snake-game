// game const and variables
let direction={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArray=[{
    x:13,y:15
}]

// function
function main(cTime){
    window.requestAnimationFrame(main);
    console.log(cTime)
    if((cTime-lastPaintTime)/1000<1/speed);{
        return;
    }
    lastPaintTime=cTime;
    gameEngine();

}
function gameEngine(){
    // part 1=updating the snake food amd array 

    // part 2=display the snake and food
    board.innerHTMl='';
    snakeArray.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement)
    })
    guguf
}






// main logic start from here
window.requestAnimationFrame(main);

