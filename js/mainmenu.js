/*author: Sotiris Sotiriou*/

/*An event which shows or hides the navigation buttons based if they are visible or not in the mobile mode*/
let menuBtnTwo = document.getElementById("menubtnTwo");
function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    let halfScreenHeight = window.screen.height/2;
    if (document.body.scrollTop > halfScreenHeight || document.documentElement.scrollTop > halfScreenHeight) {
        menuBtnTwo.style.display = "block";
    } 
    else {
        menuBtnTwo.style.display = "none";
    }
}

let openMenu = false;
function showMenu(){
    if(!openMenu){
        document.getElementById("desk-degreebtn").style.display = "block";
        document.getElementById("desk-contactbtn").style.display = "block";
        document.getElementById("desk-aboutbtn").style.display = "block";
        document.getElementById("desk-degreebtn").style.opacity = "100%";
        document.getElementById("desk-contactbtn").style.opacity = "100%";
        document.getElementById("desk-aboutbtn").style.opacity = "100%";
        openMenu = true;
    }else{
        document.getElementById("desk-degreebtn").style.display = "none";
        document.getElementById("desk-contactbtn").style.display = "none";
        document.getElementById("desk-aboutbtn").style.display = "none";
        document.getElementById("desk-degreebtn").style.opacity = "0%";
        document.getElementById("desk-contactbtn").style.opacity = "0%";
        document.getElementById("desk-aboutbtn").style.opacity = "0%";
        openMenu = false;
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
    image.src="../images/desktopVersionFinal.png";
}
else if(window.innerWidth<800){
    image.src="../images/mobileVersionFinal.png";
}
window.addEventListener("resize",()=>{
    if (window.innerWidth>=800){
        image.src="../images/desktopVersionFinal.png";
    }
    else if(window.innerWidth<800){
        image.src="../images/mobileVersionFinal.png";
    }
});

let thirdPart = document.getElementById("third-part");
let heightOfElement = thirdPart.offsetHeight;
thirdPart.style.height = (heightOfElement - 300);

// function themeMode(){
//     let body=document.getElementById("body");
//     body.style.backgroundColor = "black";
//     document.getElementById("intro-text").style.color="white";
//     document.getElementById("degree").style.color="white";
//     document.getElementById("personalProjects").style.color="white";
// }