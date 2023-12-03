const displayform = _('displayFrom');
		const forLogin = _('forLogin');
		const loginForm = _('loginForm');
		const forRegister = _('forRegister');
		const registerForm = _('registerForm');
		const formContainer = _('formContainer');

		displayForm.addEventListener('click', showForm);

		forLogin.addEventListener('click', () => {
			forRegister.classList.remove('active')
			forLogin.classList.add('active')
			if (loginForm.classList.contains('toggleForm')) {
				formContainer.style.transform = 'translate(0%)';
				formContainer.style.transition = 'transform .5s';
				loginForm.classList.remove('toggleForm');
				registerForm.classList.add('toggleForm');
			}
		})

		forRegister.addEventListener('click', () => {
			forLogin.classList.remove('active')
			forRegister.classList.add('active')
			if (registerForm.classList.contains('toggleForm')) {
				formContainer.style.transform = 'translate(-100%)';
				formContainer.style.transition = 'transform .5s';
				registerForm.classList.remove('toggleForm');
				loginForm.classList.add('toggleForm');
			}
		})

		function _(e) {
			return document.getElementById(e);
		}

		function showForm(){
			document.querySelector('.form-wrapper .card').classList.toggle('show');
		}
