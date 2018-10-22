let dog = document.querySelector("#dog-picture");
let cat = document.querySelector("#cat-picture");
let other = document.querySelector("#other-picture");

dog.style.display = "none";
other.style.display = "none";

    
    function butt(x) {fetch(`https://www.reddit.com/r/catsinbusinessattire.json?limit=20`)
    .then (response => response.json())
    .then (data => data.data.children.map(data => data.data.url))
    .then (map => map[x])
    .then (img => cat.src=img)
        }; 

    butt(8);
// cat.src=butt(1);