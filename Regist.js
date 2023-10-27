function validateRegisterForm() {
    var registUsername = document.getElementById('registUsername').value;
    var registEmail = document.getElementById('registEmail').value;
    var registPassword = document.getElementById('registPassword').value;

    if (registUsername === '' || registEmail === '' || registPassword === '') {
        document.getElementById('registMessage').innerHTML = 'Semua kolom harus diisi.';
        return false; 
    }
    
    return true;
}