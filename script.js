const empty = " ";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*_-=";

const plength = document.getElementById("p-length");
const puppercase = document.getElementById("p-uppercase");
const plowercase = document.getElementById("p-lowercase");
const pnumber = document.getElementById("p-numbers");
const psymbol = document.getElementById("p-symbols");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener('click', generate);
function generate(){
    let inpass = empty;
    (puppercase.checked) ? inpass += uCase : " ";
    (plowercase.checked) ? inpass += lCase : " ";
    (pnumber.checked) ? inpass += number : " ";
    (psymbol.checked) ? inpass += symbol : " ";

    password.value = give(plength.value,inpass);
};
function give(l,inpass){
    let pass = "";
    for(let i=0;i<l;i++){
        pass += inpass.charAt(Math.floor(Math.random()*inpass.length));
    }
   return pass;
}
// copy password

const copy = document.getElementById('copy');
copy.addEventListener('click',()=>{
    if(password.value == " "){
        alert("Please first generate the password");
    }
    else{
        var copyText = document.getElementById('password').value;
        navigator.clipboard.writeText(copyText).then(()=>{
            alert("Copied to clipboard");
        });
    }
})