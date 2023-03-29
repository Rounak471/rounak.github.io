const myimg = document.querySelector("img");

myimg.onclick = ()=>{
    const mysrc = myimg.getAttribute("src");
    if(mysrc=="peng1.jpg"){

        myimg.setAttribute("src","peng2.jpg");

    }
    else{


        myimg.setAttribute("src","peng1.jpg");


    }



};

let mybutton = document.querySelector("button");
let heading = document.querySelector("h2");

function setName(){

    let name = prompt("Hello,what's your name: ");
    if(!name){
        setName();
    }
    
    localStorage.setItem("name",name);
    heading.textContent = name;
    

}

if(!localStorage.getItem("name")){
    setName();

}
else{

    const storename = localStorage.getItem("name");
    heading.textContent = 'Wellcome, '+storename;

}

mybutton.onclick = ()=>{
    
    setName();
}

