let cat = document.querySelector("#cat-picture");


let catSubs = ["CatsInBusinessAttire", "catpictures", "jellybeantoes", "kittens","CatsStandingUp", "tuckedinkitties", "catbellies", "blep"];
let dogSubs = ["dogpictures", "goldenretrievers","puppies","rarepuppers","blop","BabyCorgis","PuppySmiles","TongueOutHounds"];
let otherSubs = ["redpandas","BabySkunks", "hamsters","Sneks","hardcoreaww","babygoats","Superbowl"];

function randomSub(x){
    return Math.floor(Math.random() * Math.floor(x));
};

function randomPic(){
    return Math.floor(Math.random() * Math.floor(30));
};


    
function fetcher(sub,x) {fetch(`https://www.reddit.com/r/${sub}.json?limit=${x}`)
    .then (response => response.json())
    .then (data => data.data.children.map(data => data.data.url))
    .then (map => {while (  typeof map[x] ==="undefined"||
                            typeof map[x] ==="null" ||
                            map[x].indexOf("comment")>-1 ||
                            map[x].indexOf("gallery")>-1 || 
                            map[x].indexOf("/a/")>-1 ||
                            map[x].indexOf("v.redd.it")>-1 || 
                            map[x].indexOf("gifv")>-1 ||
                            map[x].indexOf(".html")>-1 ||
                            map[x].indexOf("youtu")>-1 ||
                            map[x].indexOf("gfy")>-1 ||
                            map[x].indexOf("embed.ly")>-1
                           )
                            {x = randomPic()};
                            if(map[x].indexOf("imgur")===-1 && map[x].indexOf("i.redd.it")===-1){
                                return "https://i.imgur.com/87svlNR.jpg";
                            }else{
                        return map[x]};})
    .then (img => {if (img.split('.').pop() !== "jpg" && img.split('.').pop() !== "gif" && img.split('.').pop() !== "gifv" && img.split('.').pop() !== "png" )
                    {img +=".gif"};
                    return img;})
    .then (img => cat.src=img)
}; 




document.getElementById("cat-button").addEventListener("click", function(){
    fetcher (catSubs[randomSub(8)], randomPic());
});

document.getElementById("dog-button").addEventListener("click", function(){
    fetcher (dogSubs[randomSub(8)], randomPic());
});

document.getElementById("other-button").addEventListener("click", function(){
    fetcher (otherSubs[randomSub(7)], randomPic());
});