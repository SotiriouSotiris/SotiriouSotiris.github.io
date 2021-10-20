/*author: Sotiris Sotiriou*/

/*An event which shows or hides the navigation buttons based if they are visible or not in the mobile mode*/
let menuBtnTwo = document.getElementById("menubtnTwo");
function openNav(byBtnTwo) {
    document.getElementById("mySidenav").style.width = "50%";
    //document.getElementById("main").style.marginRight = "50%";
    if(byBtnTwo){
        menuBtnTwo.style.display = "none";
    }
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginRight= "0";
    let halfScreenHeight = window.screen.height/2;
    if (document.body.scrollTop > halfScreenHeight || document.documentElement.scrollTop > halfScreenHeight) {
        menuBtnTwo.style.display = "block";
    } 
    else {
        menuBtnTwo.style.display = "none";
    }
}

function openDetails(typeOfDetails){
    if(typeOfDetails=='degree'){
        document.getElementById("degree-details").style.width = "95%";
        document.getElementById("degree-details").style.height = "90%";
        document.getElementById("degree-details").style.color = "rgb(255,255,255)";
        document.getElementById("degree-text").style.margin = "2% 3%";
    }
    else if(typeOfDetails=='projects'){
        document.getElementById("personal-details").style.width = "95%";
        document.getElementById("personal-details").style.height = "90%";
        document.getElementById("personal-details").style.color = "rgb(255,255,255)";
        document.getElementById("personal-text").style.margin = "2% 3%";
    }
}
function closeDetails(typeOfDetails){
    if(typeOfDetails=='degree'){
        document.getElementById("degree-details").style.width = "0";
        document.getElementById("degree-details").style.height = "0%";
        document.getElementById("degree-details").style.color = "transparent";
        document.getElementById("degree-text").style.margin = "0%";
    }
    else if(typeOfDetails=='projects'){
        document.getElementById("personal-details").style.width = "0";
        document.getElementById("personal-details").style.height = "0%";
        document.getElementById("personal-details").style.color = "transparent";
        document.getElementById("personal-text").style.margin = "0%";
    }
}

//Get the button
let mybutton = document.getElementById("backToTop");
// When the user scrolls down half of the screen height from the top of the document, show the button
let halfScreenHeight = window.screen.height/2;
window.onscroll = function() {
    if (document.body.scrollTop > halfScreenHeight || document.documentElement.scrollTop > halfScreenHeight) {
        mybutton.style.display = "block";
        menuBtnTwo.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
        menuBtnTwo.style.display = "none";
    }
};
// When the user clicks on the button, scroll to the top of the document
function backToTop(){
    document.querySelector('#header').scrollIntoView({behavior: 'smooth'});    
}


let image=document.getElementById("rect");
if (window.innerWidth>=800){
    image.src="../images/svg/gold and blue rect.svg";
}
else if(window.innerWidth<800){
    image.src="../images/svg/gold rect.svg";
}
window.addEventListener("resize",()=>{
    if (window.innerWidth>=800){
        image.src="../images/svg/gold and blue rect.svg";
    }
    else if(window.innerWidth<800){
        image.src="../images/svg/gold rect.svg";
    }
});

// function themeMode(){
//     let body=document.getElementById("body");
//     body.style.backgroundColor = "black";
//     document.getElementById("intro-text").style.color="white";
//     document.getElementById("degree").style.color="white";
//     document.getElementById("personalProjects").style.color="white";
// }