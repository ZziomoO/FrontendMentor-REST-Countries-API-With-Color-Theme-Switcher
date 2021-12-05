var isDark = false;

function changeStyle(){
    if(isDark){
        document.getElementById("mode").href = "css\\light.css";
        window.localStorage.setItem('colorid', 0);
    }
    else{
        document.getElementById("mode").href = "css\\dark.css";
        window.localStorage.setItem('colorid', 1);
    }
    isDark = !isDark;
}

function openWebsite(ccn3){
    window.localStorage.setItem('ccn3', ccn3);
    window.open("country.html", "_self")
}

function setColor(){
    if(window.localStorage.getItem('colorid') == 1){
        changeStyle();
    }
}