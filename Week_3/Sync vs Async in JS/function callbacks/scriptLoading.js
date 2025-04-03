//Write a program where you are loading a script from a cdn website and when its got load print a message

function scriptloading(args){
    console.log("Script is Successfuly Loaded!",args)
}
function loadscript(src,callback){
let sc = document.createElement("script");
sc.src = src;
sc.onload = callback(src);
}


loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",scriptloading)