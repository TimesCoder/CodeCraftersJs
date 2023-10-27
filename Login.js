function validateForm() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail === '' || loginPassword === '') {
        document.getElementById('message').innerHTML = 'Email dan Password harus diisi.';
        return false; 
    }

    return true; 
}