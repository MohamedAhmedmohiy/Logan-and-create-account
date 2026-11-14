// إظهار / إخفاء الباسورد
document.querySelectorAll('.toggle-password').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var input = document.getElementById(btn.dataset.target);
        var icon = btn.querySelector('i');
        var show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        icon.className = show ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
});

// Validation بسيط للـ signup
var signup = document.getElementById('signup-form');
if (signup) {
    signup.addEventListener('submit', function (e) {
        var pass = document.getElementById('password');
        var err = document.getElementById('password-error');
        if (pass.value.length < 8) {
            e.preventDefault();
            err.textContent = 'Password must be at least 8 characters.';
            pass.focus();
        } else {
            err.textContent = '';
        }
    });
}
