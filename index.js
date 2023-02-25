const inputele=document.getElementById('input');
const infoele=document.getElementById("info-text");
const meaningele=document.getElementById("meaning-container");
//const 

const titleelement=document.getElementById("title");
const meaningelement=document.getElementById("meaning");
const audioelement=document.getElementById("audio");





async function fetchAPI(word){
    
   try {
    
    infoele.style.display="block";
    infoele.innerText=`Searching for the meaning of "${word}"...`
    meaningele.style.display="none";



    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result=await fetch(url).then((res) => 
    res.json());

    if(result.title){
        infoele.style.display="none";
        meaningele.style.display="block";
        titleelement.innerText=word;
        meaningelement.innerText=" Sorry couldn't find"
        audioelement.style.display="none";



    }else{
        infoele.style.display="none";
        meaningele.style.display="block";
        audioelement.style.display="inline-flex"
        titleelement.innerText=word;
        meaningelement.innerText=result[0].meanings[0].definitions[0].definition;
        audioelement.src=result[0].phonetics[1].audio;


    }
    



   } catch (error) {
    infoele.innerText="Error try again..";
   } 

} 

inputele.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter") {
        console.log(e.target.value);
        fetchAPI(e.target.value);
    }
    else{
        infoele.innerText="pls press any word and press enter ";
        }
});  

function cleartext(){
    console.log(inputele.value);
    inputele.value=" ";
}























