const form =document.querySelector('#CoinSearchForm');
const res=document.querySelector('#tableResult');
const cont=document.getElementById("allContaint");
var upd;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
    const ctype=form.elements.CoinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');
    getPrice(ctype);
})