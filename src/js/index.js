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
**/

blockList = ["introduksjon", "oversikt", "detaljer", "sammenligning"]
const displayBlock = (block) => {
    blockList = blockList.map(a => {
        document.getElementById(a).classList.add("hidden");
        console.log(document.getElementById(a));
    });
    document.getElementById(block).classList.remove("hidden");
}

