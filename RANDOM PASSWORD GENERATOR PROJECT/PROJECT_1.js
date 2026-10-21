const btn = document.querySelector(".btn");
const inpElem = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btn.addEventListener("click",()=>{
    createPassword();
});

copyIconEl.addEventListener("click",()=>{
    if(inpElem.value){
        copyPassword();
        alertContainerEl.classList.remove("active")
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000);
    }
    
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum+1);
    }
    inpElem.value = password;
    alertContainerEl.innerText = inpElem.value + " copied!";

}

function copyPassword(){
    inpElem.select();//here select method is used mainly with <input> or <textarea> elements to select/highlight all the text inside them
    inpElem.setSelectionRange(0,9999);//similar to select method it just select exactly the range you specify
    navigator.clipboard.writeText(inpElem.value);

    //inpElem.value="";
}
