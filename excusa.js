function ramdom(maxNumber) {
return (Math.floor(Math.random() * maxNumber));
}

function excusa(){
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
return who [ramdom(4)] +" " +what [ramdom(4)]+" "+when [ramdom(5)];
}



document.addEventListener("click", () => {
//var texto=document.getElementByid("excuse")
//texto.innerHTML=excusa();asi es lo mismo y no va
    document.getElementById("excuse").innerHTML=excusa();
  });




