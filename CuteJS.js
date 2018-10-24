let dog = document.querySelector("#dog-picture");
let cat = document.querySelector("#cat-picture");
let other = document.querySelector("#other-picture");

let y = ["CatsInBusinessAttire", "catpictures", "jellybeantoes", "kittens","CatsStandingUp", "tuckedinkitties", "catbellies"];


function randomSub(){
    return Math.floor(Math.random() * Math.floor(7));
};

function randomPic(){
    return Math.floor(Math.random() * Math.floor(30));
};

dog.style.display = "none";
other.style.display = "none";

    
function fetcher(sub,x) {fetch(`https://www.reddit.com/r/${sub}.json?limit=${x}`)
    .then (response => response.json())
    .then (data => data.data.children.map(data => data.data.url))
    .then (map => {while (typeof map[x] ==="undefined"|| typeof map[x] ==="null" || map[x].indexOf("comment")>-1 || map[x].indexOf("gallery")>-1 || map[x].indexOf("/a/")>-1 || map[x].indexOf("v.redd.it")>-1 || map[x].indexOf("gifv")>-1){x = randomPic()}return map[x]})
    .then (img => {if (img.split('.').pop() !== "jpg" && img.split('.').pop() !== "gif" && img.split('.').pop() !== "gifv" && img.split('.').pop() !== "png" )
                    {img +=".gif"};
                    return img;})
                  
    .then (img => cat.src=img)
}; 




document.getElementById("cat-button").addEventListener("click", function(){
    fetcher (y[randomSub()], randomPic());
});

