let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("signupEmail");
let signupPasswordInput = document.getElementById("signupPassword");
let signupBtn = document.getElementById("signupBtn");
let msgError = document.getElementById("msgError");
let msgExist = document.getElementById("msgExist");
let msgSuccess = document.getElementById("msgSuccess");
let userEmailInput = document.getElementById("userEmail");
let userPasswordInput = document.getElementById("userPassword");
let msgIncorrect = document.getElementById("msgIncorrect");

let signupList = [];



if (localStorage.getItem('userContainer') == null) {
    signupList = []
} else {
    signupList = JSON.parse(localStorage.getItem('userContainer'))
}

// SignUp
function signup (){
        if ( signupNameInput.value ==""|| signupEmailInput.value =="" || signupPasswordInput.value =="" ){

            msgError.classList.remove("d-none");
            msgSuccess.classList.add("d-none");
            msgExist.classList.add("d-none");
            return false;
            
    
        }
            var user = {
                name : signupNameInput.value,
                email : signupEmailInput.value,
                password :  signupPasswordInput.value,
        
            }

            if (signupList.length == 0){
                signupList.push(user);
                localStorage.setItem("userContainer",JSON.stringify(signupList));
                msgSuccess.classList.remove("d-none");
                msgExist.classList.add("d-none");
                msgError.classList.add("d-none");
            

            }


            if( existEmail() == false ){

                msgExist.classList.remove("d-none");
                msgError.classList.add("d-none");
                msgSuccess.classList.add("d-none");
        

            }else {
                signupList.push(user);
                localStorage.setItem("userContainer",JSON.stringify(signupList));
                msgSuccess.classList.remove("d-none");
                msgExist.classList.add("d-none");
                msgError.classList.add("d-none");

            
    
        }

    
}




function existEmail(){
    for(  var i = 0 ; i < signupList.length ;  i++  ){
        if(signupList[i].email.toLowerCase() == signupEmailInput.value.toLowerCase()){
            return false;

        }
    }

}



//  LogIn

function login(){

        if (  userEmailInput.value =="" || userPasswordInput.value =="" ){

            msgError.classList.remove("d-none");
            msgIncorrect.classList.add("d-none");
            
            
            return false;
            
    
        }

        
    for(  var i = 0 ; i < signupList.length ;  i++  ){
        if ( signupList[i].email.toLowerCase() == userEmailInput.value.toLowerCase()&& signupList[i].password.toLowerCase() == userPasswordInput.value.toLowerCase() ){
            
                localStorage.setItem("usernameContainer", JSON.stringify(signupList[i].name));
                window.location.href = './home.html'
                msgError.classList.add("d-none");

        } 
        
        else {
                msgIncorrect.classList.remove("d-none");
                msgError.classList.add("d-none");
            
        }
        }
}

function displayWelcomeUser(){
    var userName = JSON.parse(localStorage.getItem('usernameContainer'));
    
    var userNameWelcome = document.getElementById('username')
    userNameWelcome.innerHTML = 'Welcome ' + userName;

}

// LogOut

function logout(){
    localStorage.removeItem('usernameContainer');
    window.location.href = './index.html'; 
    
}












