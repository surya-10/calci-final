let cal = document.querySelector(".calculator");
cal.innerHTML +=`
<div class="input-box">
<input type="text" placeholder=0 class="text">
</div>
<div class="first">
<button class="clear" onclick=${'cls()'}>C</button>
<button onclick=${'del()'}><ion-icon name="arrow-back-outline"></ion-icon></button>
<button onclick=${'calculate(".")'}>.</button>
<button onclick=${'calculate("*")'}><ion-icon name="close-outline"></ion-icon></button>
</div>
<div class="additional">
<button onclick=${'add()'}>M+</button>
<button onclick=${'rem()'}>M-</button>
<button onclick=${'show()'} class="mc">MC</button>
</div>
<div class="second">
<button onclick=${'calculate(7)'}>7</button>
<button onclick=${'calculate(8)'}>8</button>
<button onclick=${'calculate(9)'}>9</button>
<button onclick=${'calculate("/")'}>/</button>
</div>
<div class="third">
<button onclick=${'calculate(4)'}>4</button>
<button onclick=${'calculate(5)'}>5</button>
<button onclick=${'calculate(6)'}>6</button>
<button onclick=${'calculate("-")'}>-</button>
</div>
<div class="four">
<button onclick=${'calculate(1)'}>1</button>
<button onclick=${'calculate(2)'}>2</button>
<button onclick=${'calculate(3)'}>3</button>
<button onclick=${'calculate("+")'}>+</button>
</div>
<div class="third">
<button onclick=${'calculate(0)'}>0</button>
<button onclick=${'calculate("%")'}>%</button>
<button onclick=${'answer()'} class="equal">=</button>

</div>`


function cls(){
    document.querySelector(".text").value="";
}
function calculate(val){
    document.querySelector(".text").value += val;
}
function answer(){
    try{
    let a = document.querySelector(".text");
    if(a.value=="" || a.value==undefined){
        alert("please enter valid number")
        a.value=0;
    }
    a.value=eval(a.value);
    }
    catch(er){
        alert("Invalid input given");
        a.value=0;
    }
}
function del(){
    let a = document.querySelector(".text");
    a.value = a.value.slice(0, -1)
}

let inputText = document.querySelector(".text");
inputText.addEventListener("keyup", checknum);


function checknum(){
    // console.log(inputText.value)
    let out = inputText.value.slice(-1);
    // console.log(Number.isInteger(parseInt(out)))
        if(Number.isInteger(parseInt(out))==false){
            alert("Only numbers are allowed");
            inputText.value = inputText.value.slice(0, -1)
        }
}

function add(){
    let a =document.querySelector(".text").value;
    let b = localStorage.getItem("value");
    
    if(b==null){
        localStorage.setItem("value", a);
    }
    else{
        c = eval((+a)+ (+b));
        localStorage.setItem("value", c);
    }


}

function rem(){
    let b = document.querySelector(".text").value;
    let c = localStorage.getItem("value");
    let d = c-b;
    localStorage.setItem("value", d);
    console.log(d);
}

function show(){
    document.querySelector(".text").value = localStorage.getItem("value");
}

