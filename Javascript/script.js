var counter = 0;

console.log(counter)

function implement(){
    console.log("Hi")
    counter++
    console.log(counter)
    var textUpdate = document.getElementById("count");
    textUpdate.innerText=counter
};

var clickCounter = document.getElementById("box");
clickCounter.addEventListener("click",implement);

console.log(counter)


