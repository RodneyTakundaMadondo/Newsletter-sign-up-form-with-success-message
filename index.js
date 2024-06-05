if(document.getElementById("login")){
    //change image from mobile img to desktop 
let mediaquery = window.matchMedia('(min-width:600px)');
let image = document.querySelector(".changeimg");

function handleScreenWidthChange(event){
    if(event.matches){
        image.src = "./assets/images/illustration-sign-up-desktop.svg";
    }else{
        image.src = "./assets/images/illustration-sign-up-mobile.svg";
    }
}
handleScreenWidthChange(mediaquery);

mediaquery.addEventListener("change",handleScreenWidthChange);
}

//email validation
let email  = document.getElementById("email");
let submitBtn = document.querySelector(".submit-btn");
let errorContainer = document.querySelector(".error-message");
let errorMessage ="Valid email required";


submitBtn.addEventListener("click", ()=>{
    
    let emailValue = email.value;//getting the email value

    function validateEmail(emailValue) {// function to validate emal
       
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
       
        return emailPattern.test(emailValue);//return true /false
       
    }
     
      
    if(validateEmail(emailValue) == false){
        errorContainer.textContent = errorMessage;
        email.classList.add("error-border");
        email.classList.add("email");
        event.preventDefault()
    }
    else{
        errorContainer.textContent ="";
        //this is to store something in the localStorage
        localStorage.setItem('userEmail', emailValue);
        // Redirect to another page
        window.location.href = './success.html';
        
        email.classList.remove("error-border");
        email.classList.remove("email");

    }
   
})