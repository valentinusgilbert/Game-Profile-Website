// Hamburgere button -> Home Page
let menu = document.querySelector("#menu-button");
let navbar = document.querySelector(".nav-bar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}


//Filter Heroes by category ->Heroes Page
let categoryHeroes = document.querySelectorAll('.category-heroes');
let all_category = document.querySelectorAll('.all');

for(let i = 0; i<categoryHeroes.length;i++){
    categoryHeroes[i].addEventListener('click', filterPosts.bind(this, categoryHeroes[i]));
}

function filterPosts(item){
    change_active(item);
    for(let i = 0; i<all_category.length;i++){
        if(all_category[i].classList.contains(item.attributes.id.value)){
            all_category[i].style.display = "block";
        }
        else{
            all_category[i].style .display = "none";
        }
    }
}

function change_active(activeItem){
    for(let i = 0; i<categoryHeroes.length; i++){
        categoryHeroes[i].classList.remove('active-category');
    }
    activeItem.classList.add('active-category');
};



//VALIDAITON
let submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", () => {
    event.preventDefault()

    let formName = document.getElementById("formName").value
    let formEmail = document.getElementById("formEmail").value
    let formPass = document.getElementById("formPass").value
    let formCPass = document.getElementById("formCPass").value
    let formTerm = document.getElementById("formTerm")

    let errorName = document.getElementById("error-name")
    let errorEmail = document.getElementById("error-email")
    let errorPass = document.getElementById("error-password")
    let errorCPass = document.getElementById("error-cpassword")
    let errorTerm = document.getElementById("error-term")

    // Namae
    if(formName.length == 0){
        errorName.innerHTML = "Name Must Be Filled!"
        errorName.style.display = "block"
        document.getElementById("formName").style.border = "2px solid red"
    }
    else if(!checkName(formName)){
        errorName.innerHTML = "Name Must Be Valid!"
        errorName.style.display = "block"
        document.getElementById("formName").style.border = "2px solid red"
    }
    else{
        errorName.innerHTML = ""
        errorName.style.display = "none"
        document.getElementById("formName").style.border = "2px solid grey"
    }

    // Email
    if(formEmail.length == 0){
        errorEmail.innerHTML = "Email Must Be Filled!"
        errorEmail.style.display = "block"
        document.getElementById("formEmail").style.border = "2px solid red"
    }
    else if(!checkEmail(formEmail)){
        errorEmail.innerHTML = "Email Must Be Valid!"
        errorEmail.style.display = "block"
        document.getElementById("formEmail").style.border = "2px solid red"
    }
    else{
        errorEmail.innerHTML = ""
        errorEmail.style.display = "none"
        document.getElementById("formEmail").style.border = "2px solid grey"
    }

    // Password
    if(formPass.length < 8){
        errorPass.innerHTML = "Password Must Be At Least 8 Characters!"
        errorPass.style.display = "block"
        document.getElementById("formPass").style.border = "2px solid red"
    }
    else{
        errorPass.innerHTML = ""
        errorPass.style.display = "none"
        document.getElementById("formPass").style.border = "2px solid grey"
    }

    // Confirm Password
    if(formCPass.length == 0){
        errorCPass.innerHTML = "Password Must Be Filled!"
        errorCPass.style.display = "block"
        document.getElementById("formCPass").style.border = "2px solid red"
    }
    else if(formPass != formCPass){
        errorCPass.innerHTML = "Password Must Be The Same!"
        errorCPass.style.display = "block"
        document.getElementById("formCPass").style.border = "2px solid red"
    }
    else{
        errorCPass.innerHTML = ""
        errorCPass.style.display = "none"
        document.getElementById("formCPass").style.border = "2px solid grey"
    }

    // Checkbox
    if(formTerm.checked == false){
        errorTerm.innerHTML = "Term of Use, Privacy Notice, and Cookies Notice Must Be Accepted!"
        errorTerm.style.display = "block"
    }
    else{
        errorTerm.innerHTML = ""
        errorTerm.style.display = "none"
    }
})

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkName(name){
    return /^[a-zA-Z\s]+$/.test(name);
}