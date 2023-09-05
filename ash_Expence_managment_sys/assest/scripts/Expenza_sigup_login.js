
//SIGN-UP:
function Sign_up() {
    var UserName = document.getElementById('Si_UserName').value;
    var email = document.getElementById('Si_email').value;
    var password = document.getElementById('Si_pass').value;

    // Check if any of the values are empty before setting them in localStorage
    if (UserName.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
    } else {
        localStorage.setItem('UserName:', UserName);
        localStorage.setItem('EMAIL:', email);
        localStorage.setItem('PASSWORD:', password);

        // Clear the input fields
        UserName = '';
        email = '';
        password = '';

        alert('Account Is CREATED');
        location.href = '/Expense_DASHBORD.html';
    }

}


//LOG-IN:
function Log_in() {
    var log_email = document.getElementById('Li_email').value
    var log_password=document.getElementById('Li_pass').value
    
    if (localStorage.getItem('EMAIL:') == log_email && localStorage.getItem('PASSWORD:') == log_password) 
    {
        alert('welcome')
        location.href = '/Expense_DASHBORD.html';
    }
    else
    {
        alert('Inccorrect inputs')
    }
}