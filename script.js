
let err = document.getElementById('form__error')
let btn = document.getElementById('form__button')
let textErr= document.getElementById('form__email')
let form = document.querySelector('form')
let formMain = document.getElementById('form-main')
let formSecond = document.getElementById('form-second')

function error() {

  let x = window.matchMedia("(max-width: 700px)")
  err.style.display = 'inline'
  textErr.style.color = '#ed4159'
  textErr.style.border = 'solid 1px #ed4159'

  if (x.matches){
    form.style.height = '408px'
    
  }
  else {
    form.style.height = '481px'
  }
  
}

async function posts(email, password){
  let user = {
    email: email,
    password: password,
  };
      
  let response = await fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
    });  
}

btn.addEventListener('click',async function valid(){
  var email = document.forms['form']['email'].value
  let password = document.forms['form']['password'].value

  if (email == "" || password == ""){
    error()
  }  
  else {
    res = await posts(email, password)
    console.log(res)
    if (res){
      formMain.parentNode.removeChild(formMain)
      formSecond.classList.remove('hidden')
    }
    else if (!res){
      error() 
    }
  } 
})

