let dog = document.querySelector("#dog-picture");
let cat = document.querySelector("#cat-picture");
let other = document.querySelector("#other-picture");
let rando = 

dog.style.display = "none";
other.style.display = "none";

    
function butt(sub,x) {fetch(`https://www.reddit.com/r/${sub}.json?limit=${x}`)
    .then (response => response.json())
    .then (data => data.data.children.map(data => data.data.url))
    .then (map => map[x])
    .then (img => cat.src=img)
}; 

function dude(){
    let x = Math.floor(Math.random() * Math.floor(4));
    let y = ["CatsInBusinessAttire", "catpictures", "jellybeantoes", "kittens"]
    let z = Math.floor(Math.random() * Math.floor(100));
    return butt(y[x],z);
}
    
document.getElementById("cat-button").addEventListener("click", function(){
    
    dude(); 
});