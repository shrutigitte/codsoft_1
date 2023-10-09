var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); //shifitng the active link from 1 tab to another
    // event.currentTarget get the name of element that triggered event
    document.getElementById(tabname).classList.add("active-tab"); //this command is shwoing exp education and skills when clicked
}
// ------------------------mobile----------------------------------
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="78px";
}
function closemenu(){
    sidemenu.style.right="-200px";
}