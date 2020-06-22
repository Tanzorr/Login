


        const log ="Amit20";
        const pas ="amit2020";
      let loginLocal =  localStorage.getItem('login')
      let passwordLocal =  localStorage.getItem('password')


const logOut =document.getElementById('logOut')
const form = document.getElementById('form')
const login = form.querySelector("#login")
const password = form.querySelector("#pwd")


        console.log('loguot',logOut)

form.addEventListener('submit', submitFormHandler)
        logOut.addEventListener('click',removeLocalStorage)


 logOut.addEventListener('click',()=>{removeLocalStorage(), window.location.reload()})

function submitFormHandler(event) {

        event.preventDefault()

    console.log(loginLocal)
    console.log(passwordLocal)

    if(isValid(login.value) && isValid(password.value)){
        if(login.value === log && password.value === pas ){
            addToLocalStorage(log,pas)
            window.location.reload()

        }else{
            message.innerText =`Login or Password Incorrect`
        }
    }else{
        message.innerText =`Login or Password can't be less then 4 letters`
    }
}

if(loginLocal){
    form.style.display="none";
    message.innerText=`Hi ${loginLocal}`
    logOut.style.display ='block'

}else {
    logOut.style.display ='none'

}
