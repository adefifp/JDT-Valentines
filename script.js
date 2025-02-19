VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 900.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    quantity: 4.00,
    backgroundAlpha: 0.00,
    birdSize: 1.00,
    wingSpan: 10.00,
    speedLimit: 2.00,
    separation: 100.00,
    alignment: 1.00,
    cohesion: 1.00,
    color1: 0xff58dc,
    color2: 0xa75e5e,
    })
    const messages = [
        "Are you sure?",
        "Really sure?",
        "Pookie Please?",
        "I'm going to cry... :(",
        "You're breaking my heart!",
        "REALLY sure?",
        "please?",
        "pretty please?",
        "PLEASE?",
        "PRETTY PLEASE?",
        "PLEASE PLEASE PLEASE?",
        "PLEASE PLEASE PLEASE PLEASE PL",
        "stop",
        "STOP",
        ":(",
        ":( :(",
        ":( :( :(",
        "I'm sad now",
        "No",
        "No",
        "No",
        "No",
     ];
let currentMessageIndex = 0;

function teleportButton(button){
    const screenWidth = window.innerWidth; 
    const screenHeight = window.innerHeight;  
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const padding = 20;
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;
    let randomX, randomY;
    do{
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while(
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    )
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

let yesScale = 1;
let noScale = 1;

yesButton.addEventListener('click',()=>{
    document.getElementById('sky').src = "skycropped.jpg";
    yesButton.textContent = "YAY!"
    noButton.style.display = "none";
    yesButton.style.transform = "scale(1.6)";
})

noButton.addEventListener('click',()=>{
    yesScale += 0.1;
    yesButton.style.transform = `scale(${yesScale})`;  
    noScale -= 0.05;
    noButton.style.transform = `scale(${noScale})`; 
    teleportButton(noButton);
    noButton.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
})