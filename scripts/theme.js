let isItDark= JSON.parse(localStorage.getItem('isdark'));

function color() { 
    localStorage.setItem("isdark", "false");
    isItDark = (isItDark) ? false : true;
    changetheme();
}

changetheme();

function changetheme(){
    return (isItDark) ? darkmode() : lightmode();
}
 
function darkmode() {
    document.querySelector('body').classList.add('darkMode');
    document.getElementById("search_image").src="./assets/svg/search_black.svg";
    document.getElementById("labelColorThemeImg").src="./assets/svg/sun_ico.svg";
    localStorage.setItem("isdark", "true");

}
function lightmode(){
    document.querySelector('body').classList.remove('darkMode');
    document.getElementById("search_image").src="./assets/svg/search.svg";
    document.getElementById("labelColorThemeImg").src="./assets/svg/moon_ico.svg";
    localStorage.setItem("isdark", "false");
}

