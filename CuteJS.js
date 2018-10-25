const cutePic = document.querySelector("#cute-picture");


const catSubs = ["CatsInBusinessAttire", "catpictures", "jellybeantoes", "kittens","CatsStandingUp", "tuckedinkitties", "catbellies", "blep"];
const dogSubs = ["dogpictures", "goldenretrievers","puppies","rarepuppers","blop","BabyCorgis","PuppySmiles","TongueOutHounds"];
const otherSubs = ["redpandas","BabySkunks", "hamsters","Sneks","hardcoreaww","babygoats","Superbowl"];

function randomiser(i){
    return Math.floor(Math.random() * Math.floor(i));
};

function fetcher(sub,x) {fetch(`https://www.reddit.com/r/${sub}.json?limit=${x}`)
    .then (response => response.json())
    .then (data => data.data.children.map(data => data.data.url))
    .then (map => {while (  typeof map[x] ==="undefined"||
                            typeof map[x] ==="null" ||
                            map[x].indexOf("comment")>-1 ||
                            map[x].indexOf("gallery")>-1 ||
                            map[x].indexOf("v.redd.it")>-1 ||        
                            map[x].indexOf("gifv")>-1 ||
                            map[x].indexOf(".html")>-1 ||
                            map[x].indexOf("youtu")>-1 ||
                            map[x].indexOf("gfy")>-1 ||
                            map[x].indexOf("embed.ly")>-1)
                            {x = randomiser(30)}; 
                        if(map[x].indexOf("imgur")===-1 && map[x].indexOf("i.redd.it")===-1)
                            {return "https://i.imgur.com/zRcxgde.jpg";}
                        else{ return map[x] } ;})
    .then (img => {if   (  img.split('.').pop() !== "jpg" &&
                           img.split('.').pop() !== "gif" && 
                           img.split('.').pop() !== "png")
                           {img +=".gif"};
                        return img;})
    .then (img => cutePic.src=img)
}; 

document.getElementById("cat-button").addEventListener("click", function(){
    fetcher(catSubs[randomiser(8)], randomiser(30));
});

document.getElementById("dog-button").addEventListener("click", function(){
    fetcher(dogSubs[randomiser(8)], randomiser(30));
});

document.getElementById("other-button").addEventListener("click", function(){
    fetcher(otherSubs[randomiser(7)], randomiser(30));
});