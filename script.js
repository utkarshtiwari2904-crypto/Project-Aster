// -----------------------------
// Get Elements
// -----------------------------

const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("continueBtn");
const stars = document.getElementById("stars");

// -----------------------------
// Create Stars
// -----------------------------

function createStars(number = 180) {

    for (let i = 0; i < number; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 5 + "s";
        star.style.animationDuration = (3 + Math.random() * 3) + "s";

        stars.appendChild(star);

    }

}

createStars();

// -----------------------------
// Story Engine
// -----------------------------

let currentScene = 0;

button.style.display = "none";

function showScene(index){

    const scene = scenes[index];

    title.style.opacity = 0;
    message.style.opacity = 0;
    button.style.opacity = 0;

    title.style.transform = "translateY(20px)";
    message.style.transform = "translateY(20px)";
    button.style.transform = "translateY(20px)";

    setTimeout(()=>{

        title.textContent = scene.title;
        message.textContent = scene.message;

        title.style.opacity = 1;
        message.style.opacity = 1;

        title.style.transform = "translateY(0)";
        message.style.transform = "translateY(0)";

        if(scene.button){

            button.style.display = "inline-block";

            setTimeout(()=>{

                button.style.opacity = 1;
                button.style.transform = "translateY(0)";

            },100);

        }else{

            button.style.display = "none";

        }

    },800);

}

showScene(currentScene);

// -----------------------------
// Auto Intro
// -----------------------------

setTimeout(()=>{

    currentScene++;

    showScene(currentScene);

},1000);

setTimeout(()=>{

    currentScene++;

    showScene(currentScene);

},4000);

setTimeout(()=>{

    currentScene++;

    showScene(currentScene);

},7000);

// -----------------------------
// Begin Button
// -----------------------------

button.addEventListener("click",()=>{

    alert("Chapter 1 will begin in Part 2 ❤️");

});
