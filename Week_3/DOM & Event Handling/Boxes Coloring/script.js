console.log("script is running...")


// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.floor(Math.random() * (255-0) + 0)
    let val2 = Math.floor(Math.random() * (255-0) + 0)
    let val3 = Math.floor(Math.random() * (255-0) + 0)
    console.log(val1,val2,val3)
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(box => {
    box.addEventListener('click', function() {
        box.style.backgroundColor = getRandomColor();
        // box.style.color = getRandomColor();
    });
});

