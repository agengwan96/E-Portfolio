function openMenu(){
    document.body.classList += " menu__open";
}

function closeMenu(){
    document.body.classList.remove('menu__open');
}

let invert = false;

function darkMode(){
    if(invert==false){
        invert = true;
        document.body.classList += "invert";
    }
    else{
        invert = false;
        document.body.classList.remove('invert');
    }
}