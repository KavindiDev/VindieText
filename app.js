let bold=document.getElementById("boldBtn");
let italic=document.getElementById("italicBtn");
let underline=document.getElementById("underlineBtn");
let txtColor=document.getElementById("txtColorBtn");
let leftAlign=document.getElementById("lAlignBtn");
let centerAlign=document.getElementById("cAlignBtn");
let rightAlign=document.getElementById("rAlignBtn");
let justify=document.getElementById("justifyBtn");
let undo=document.getElementById("undoBtn");
let redo=document.getElementById("redoBtn");
let txtContain=document.getElementById("textContainer");

let boldFn=function(){
    document.execCommand("bold",false,null);
}
let italicFn=function(){
    document.execCommand("italic",false,null);
}
let underlineFn=function(){
    document.execCommand("underline",false,null);
}
let lAlignFn=function(){
    txtContain.style.textAlign='left';
}
let cAlignFn=function(){
    txtContain.style.textAlign='center';
}
let rAlignFn=function(){
    txtContain.style.textAlign='right';
}
let justifyFn=function(){
    txtContain.style.textAlign='justify';
}
let undoFn=function(){
    document.execCommand("undo",false,null);
}
let redoFn=function(){
    document.execCommand("redo",false,null);
}

let txtColorFn=function(){
    document.execCommand("foreColor",false,txtColor.value);
}

bold.addEventListener("click",boldFn);
italic.addEventListener("click",italicFn);
underline.addEventListener("click",underlineFn);
leftAlign.addEventListener("click",lAlignFn);
centerAlign.addEventListener("click",cAlignFn);
rightAlign.addEventListener("click",rAlignFn);
justify.addEventListener("click",justifyFn);
undo.addEventListener("click",undoFn);
redo.addEventListener("click",redoFn);
txtColor.addEventListener("change",txtColorFn);