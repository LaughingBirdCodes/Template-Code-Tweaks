/* =================
please avoid using any HYPHENS in your naming.

outerName is your outermost id. wrapper, in other words.
tabClassName is common class name for tab
contClassName is common class name for container

call with

   LOCALT3('outerName', 'tabClassName', 'contClassName')

active tabs are given the class outerName_active. this is what you use to do tabby stuff.
 ==================== */

 /* =================
 functionality shit that nobody cares abt
 ==================== */

function LOCALT3(LOCALT3_outerName, LOCALT3_tabClassName, LOCALT3_contClassName, LOCALT3_toggle='false') {

 var stylingClass = LOCALT3_outerName + "_active"; // styling shit equipped to it.
 var tabIdName = LOCALT3_outerName + "_tab"; // common identifer prefix name for tab
 var contIdName = LOCALT3_outerName + "_container"; // common identifer prefix name for container
 var divyChar = "-";

 // this garbo's single purpose is to add unique identifier names and it's kind of the core of the script but i've lowkey forgotten how it works so uh whOOPS
let allOuter=document.querySelectorAll("#" + LOCALT3_outerName),comp=document.getElementById(LOCALT3_outerName);
 for (let a=0,i=0,j=allOuter.length;a<j;a++) {
  var allTabs = allOuter[a].querySelectorAll("." + LOCALT3_tabClassName);
  for (var b = 0; b < allTabs.length; b++) {
   var x = b + 1;
   allTabs[b].classList.add(tabIdName + divyChar + x);
   if (comp.removeEventListener) {allTabs[b].addEventListener("click",LOCALT3_tabclick);}else if (comp.detachEvent) {allTabs[b].attachEvent("onclick",LOCALT3_tabclick);}
   if(LOCALT3_toggle=='true'){i++;for(let r=j-i,d=0;d<r;d++){if (comp.removeEventListener) {allTabs[b].removeEventListener("click",LOCALT3_tabclick);}else if (comp.detachEvent) {allTabs[b].detachEvent("onclick", LOCALT3_tabclick);}}}};
  var allCont = allOuter[a].querySelectorAll("." + LOCALT3_contClassName);
  for (var c = 0; c < allCont.length; c++) {
   var y = c + 1;
   allCont[c].classList.add(contIdName + divyChar + y);
  };
 };
 // garbo naming over lol

 function LOCALT3_tabclick() {
  let $this = this, sel = $this.closest("#" + LOCALT3_outerName); // get closest #LOCALT3_outerName from the element u clicked
      ele = $this.className, // get the clicked element's class
      hash = ele.indexOf(divyChar), // find the var of the divyChar contained and get its index position
      id = ele.slice(hash + 1); // from this index pos add +1 so it slices off it and everything before it
  if(id.includes(stylingClass)){
   let e=id, t=e.indexOf(stylingClass);
   id=e.substring(0,t);
  }
  
   let allCont = sel.querySelectorAll("." + LOCALT3_contClassName), // get all containers
       allTab = sel.querySelectorAll("." + LOCALT3_tabClassName); // get all tabs
  
  if(LOCALT3_toggle=='false'){
    for(var i=0;i<allCont.length;i++) { // allCont = however many containers exist. so this cycles through every container and applies shit.
      if(allCont[i].className.includes(contIdName+divyChar+id)){allCont[i].classList.add(stylingClass);}
      else{allCont[i].classList.remove(stylingClass);}}
    for(var i=0;i<allTab.length;i++) {  // allTab = however many tabs exist. so this cycles through every tab and applies shit.
      if (allTab[i].className.includes(tabIdName+divyChar+id)){allTab[i].classList.add(stylingClass);}
      else{allTab[i].classList.remove(stylingClass);}}
  }else if(LOCALT3_toggle=='true'){
    for(const i in allCont){allCont[i].classList.toggle(stylingClass);}
    for(const i in allTab){allTab[i].classList.toggle(stylingClass);}
  }
 };
}