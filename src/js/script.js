/**
skjule/vise elementer vha klasser

//CSS
.hidden{
    display:none;
}

//JS
element.classList.add("hidden");
element.classList.remove("hidden");

//demo
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp


blockList = ["introduksjon", "oversikt", "detaljer", "sammenligning"]
const displayBlock = (block) => {
    blockList = blockList.map(a => {
        console.log(document.getElementById(a));
        document.getElementById(a).classList.add("hidden");

    });
    document.getElementById(block).classList.remove("hidden");
}
**/

var content = document.getElementById("innhold");

function displayBlock(block) {
    var blocks = content.getElementsByTagName("div");
    for(i = 0; i < blocks.length; i++){
        blocks.item(i).style.display = "none";
    } 
    document.getElementById(block).style.display = "block";    
}
