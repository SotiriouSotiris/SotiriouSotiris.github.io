/*author: Sotiris Sotiriou*/

/*An event which shows or hides the navigation buttons based if they are visible or not in the mobile mode*/
let menuBtnTwo = document.getElementById("menubtnTwo");
function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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
    } 
    else {
        mybutton.style.display = "none";
    }
};
// When the user clicks on the button, scroll to the top of the document
function backToTop(){
    document.querySelector('#header').scrollIntoView({behavior: 'smooth'});    
}

let theme = "light";
let image=document.getElementById("rect");
let aboutSelfText = document.getElementById("aboutSelf");
let aboutComText = document.getElementById("aboutCom");
let aboutComDiv = document.getElementById("aboutComdiv");
if (window.innerWidth>=800){
    if(theme=="light"){
        image.src="../images/desktopVersionFinal.png";
    }else{
        image.src="../images/desktopVersionFinalDark.png";
    }
}
else if(window.innerWidth<800){
    if(theme=="light"){
        image.src="../images/mobileVersionFinal.png";
    }else{
        image.src="../images/mobileVersionFinalDark.png";
    }
}
window.addEventListener("resize",()=>{
    if (window.innerWidth>=800){
        if(theme=="light"){
            image.src="../images/desktopVersionFinal.png";
            aboutSelfText.style.borderRight = "4px solid rgb(0,0,128)";
            aboutComText.style.borderLeft = "4px solid rgb(0,0,128)";
            aboutComDiv.style.borderTop = "none";
        }else{
            image.src="../images/desktopVersionFinalDark.png";
            aboutSelfText.style.borderRight = "4px solid white";
            aboutComText.style.borderLeft = "4px solid white";
            aboutComDiv.style.borderTop = "none";
        }
    }
    else if(window.innerWidth<800){
        if(theme=="light"){
            image.src="../images/mobileVersionFinal.png";
            aboutSelfText.style.borderRight = "none";
            aboutComText.style.borderLeft = "none";
            aboutComDiv.style.borderTop = "4px solid rgb(0,0,128)";
        }else{
            image.src="../images/mobileVersionFinalDark.png";
            aboutSelfText.style.borderRight = "none";
            aboutComText.style.borderLeft = "none";
            aboutComDiv.style.borderTop = "4px solid white";
        }
    }
});

let thirdPart = document.getElementById("third-part");
let heightOfElement = thirdPart.offsetHeight;
thirdPart.style.height = (heightOfElement - 300);

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', function(){
    if(this.checked){
        changeTheme();
    }else{
        changeTheme();
    }
});

function changeTheme(){
    let myBody = document.getElementById("body");
    let firstPartIntro = document.getElementById("intro-text");
    let menuBtn = document.getElementById("menubtnOne");
    let deskMenu = document.getElementById("desk-menu");
    let btnDegree = document.getElementById("desk-degreebtn");
    let btnAbout = document.getElementById("desk-aboutbtn");
    let btnContact = document.getElementById("desk-contactbtn");
    let githubIcon = document.getElementById("githubImage");
    let githubIconForth = document.getElementById("githubImageForth");
    let abilitiesTitle = document.getElementById("abilitiesPart");
    let personalProjectsPart = document.getElementById("personalProjects");
    let cvBtn = document.getElementById("cvBtn");
    let degreePart = document.getElementById("degree");
    let personalDetailsPart = document.getElementById("personal-details");
    let degreeDetailsPart = document.getElementById("degree-details");
    let personalDetailsArrow = document.getElementById("personalCloseArrow");
    let degreeDetailsArrow = document.getElementById("degreeCloseArrow");
    let thirdPartText = document.getElementById("thirdPartContents");
    let aboutSelfText = document.getElementById("aboutSelf");
    let aboutComText = document.getElementById("aboutCom");
    let aboutComDiv = document.getElementById("aboutComdiv");
    let forthPartText = document.getElementById("forth-part");
    let footerPart = document.getElementById("footer");
    let backToTopBtn = document.getElementById("backToTop");
    if(theme == "light"){
        //document.getElementById("theme-image").src = "../images/icons8-sun-48White.png";
        document.getElementById("sun").style.opacity = "100%";
        document.getElementById("moon").style.opacity = "0%";
        document.getElementById("logo").src = "../images/logoDark.png";
        document.getElementById("cyprusFlag").src = "../images/cyprus -pngDark.png";
        if(window.innerWidth<800){
            image.src = "../images/mobileVersionFinalDark.png";
        }else{
            image.src = "../images/desktopVersionFinalDark.png";
        }
        menuBtn.style.color = "white";
        githubIcon.src = "../images/svg/githubIconWhite.svg";
        githubIconForth.src = "../images/svg/githubIconWhite.svg";
        myBody.style.backgroundColor = "rgb(20,20,20)";
        firstPartIntro.style.color = "white";
        deskMenu.style.backgroundColor = "white";
        deskMenu.style.color = "black";
        btnDegree.style.color = "black";
        btnAbout.style.color = "black";
        btnContact.style.color = "black";
        abilitiesTitle.style.color = "white";
        personalProjectsPart.style.color = "black";
        cvBtn.style.backgroundColor = "black";
        degreePart.style.color = "black";
        personalDetailsPart.style.backgroundColor = "black";
        degreeDetailsPart.style.backgroundColor = "black";
        personalDetailsArrow.style.color = "black";
        degreeDetailsArrow.style.color = "black";
        thirdPartText.style.color = "white";
        if(window.innerWidth>=800){
            aboutSelfText.style.borderRight = "4px solid white";
            aboutComText.style.borderLeft = "4px solid white";
        }else{
            aboutComDiv.style.borderTop = "4px solid white";
        }
        forthPartText.style.color = "white";
        footerPart.style.backgroundColor = "black";
        backToTopBtn.style.backgroundColor = "black";
        theme = "dark";
    }else{
        //document.getElementById("theme-image").src = "../images/moon-6693.png";
        document.getElementById("sun").style.opacity = "0%";
        document.getElementById("moon").style.opacity = "100%";
        document.getElementById("logo").src = "../images/logo.png";
        document.getElementById("cyprusFlag").src = "../images/cyprus -png.png";
        if(window.innerWidth<800){
            image.src = "../images/mobileVersionFinal.png";
        }else{
            image.src = "../images/desktopVersionFinal.png";
        }
        menuBtn.style.color = "black";
        githubIcon.src = "../images/svg/githubIcon.svg";
        githubIconForth.src = "../images/svg/githubIcon.svg";
        myBody.style.backgroundColor = "white";
        firstPartIntro.style.color = "rgb(0,0,128)";
        deskMenu.style.color = "white";
        deskMenu.style.backgroundColor = "rgb(0,0,128)";
        btnDegree.style.color = "rgb(0,0,128)";
        btnAbout.style.color = "rgb(0,0,128)";
        btnContact.style.color = "rgb(0,0,128)";
        abilitiesTitle.style.color = "rgb(0,0,128)";
        personalProjectsPart.style.color = "rgb(0,0,128)";
        cvBtn.style.backgroundColor = "rgb(0,0,128)";
        degreePart.style.color = "rgb(0,0,128)";
        personalDetailsPart.style.backgroundColor = "rgb(0,0,128)";
        degreeDetailsPart.style.backgroundColor = "rgb(0,0,128)";
        personalDetailsArrow.style.color = "rgb(0,0,128)";
        degreeDetailsArrow.style.color = "rgb(0,0,128)";
        thirdPartText.style.color = "rgb(0,0,128)";
        if(window.innerWidth>=800){
            aboutSelfText.style.borderRight = "4px solid rgb(0,0,128)";
            aboutComText.style.borderLeft = "4px solid rgb(0,0,128)";
        }else{
            aboutComDiv.style.borderTop = "4px solid rgb(0,0,128)";
        }
        forthPartText.style.color = "rgb(0,0,128)";
        footerPart.style.backgroundColor = "rgb(54,54,54)";
        backToTopBtn.style.backgroundColor = "rgb(0,0,128)";
        theme = "light";
    }
}