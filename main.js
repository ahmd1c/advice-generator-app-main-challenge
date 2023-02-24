const main = document.getElementById('main')
const card = document.querySelector('.card')
const imgBtn = document.querySelector('.img-2')

let IdadviceElement;
let adviceElement;


async function getData(){
    try{
        let dataRes = await fetch('https://api.adviceslip.com/advice');
        
        let dataobj = await dataRes.json();

        IdadviceElement = document.createElement('h6');

        let Idadvice = document.createTextNode('ADVICE #' + dataobj.slip.id);

        IdadviceElement.appendChild(Idadvice);
        
        card.prepend(IdadviceElement);

        adviceElement = document.createElement('q');

        let advice = document.createTextNode(dataobj.slip.advice);

        adviceElement.appendChild(advice);

        IdadviceElement.after(adviceElement);

    }catch(err){
        console.log(Error('try again'))
    }
    
}
getData();

imgBtn.addEventListener('click',((e)=>{
    IdadviceElement.remove();
    adviceElement.remove();
    getData();
}))