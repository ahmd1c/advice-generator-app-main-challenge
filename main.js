const main = document.getElementById('main')
const card = document.querySelector('.card')
const imgBtn = document.querySelector('.img-2')
const IdadviceElement = document.getElementById('IdadviceElement');
const adviceElement = document.getElementById('adviceElement');

let Idadvice
let advice

async function getData(){
    try{
        let dataRes = await fetch('https://api.adviceslip.com/advice');

        let dataobj = await dataRes.json();

        Idadvice = `ADVICE # ${dataobj.slip.id}`;

        IdadviceElement.innerHTML=`${Idadvice}`;

        advice = `${dataobj.slip.advice}`;

        adviceElement.innerHTML=`${advice}`;


    }catch(err){
        console.log(Error('try again'))
    }
    
}
getData();

imgBtn.addEventListener('click',((e)=>{
    getData();
}))