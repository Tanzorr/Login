 function isValid(value) {
    return value.length >=4;
}

 function addToLocalStorage(log, pass) {
        localStorage.setItem('login', log)
        localStorage.setItem('password', pass)
}


function removeLocalStorage() {

    localStorage.removeItem('login')
    localStorage.removeItem('password')


}


