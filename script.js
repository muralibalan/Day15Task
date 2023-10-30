var count = document.createElement('div');
count.setAttribute("class","coundown");
var text = document.createElement('div');
text.setAttribute("class","textName");
text.innerText="wait and see here..."
    setTimeout(()=>{
        count.innerText="10";
    },1000);

    setTimeout(()=>{
        count.innerText="9";
    },2000);

    setTimeout(()=>{
        count.innerText="8";
    },3000);

    setTimeout(()=>{
        count.innerText="7";
    },4000);

    setTimeout(()=>{
        count.innerText="6";
    },5000);

    setTimeout(()=>{
        count.innerText="5";
    },6000);

    setTimeout(()=>{
        count.innerText="4";
    },7000);

    setTimeout(()=>{
        count.innerText="3";
    },8000);

    setTimeout(()=>{
        count.innerText="2";
    },9000);

    setTimeout(()=>{
        count.innerText="1";
    },10000);

    setTimeout(()=>{
        text.innerText="Happy Independence Day";
    },11000);
document.body.append(count,text);