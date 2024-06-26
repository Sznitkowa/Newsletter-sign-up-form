const cardMain = document.querySelector('.card-main');
const cardMessage = document.querySelector('.card-message');
const subscribeBtn = document.querySelector('.subscribe-btn');
const hideMessageBtn = document.querySelector('.hide-message');
const errorInfo = document.querySelector('.error-info');
const input = document.querySelector('input');
const emailAddress = document.querySelector('.email-address');

const checkEmail = (e) => {
	const match = new RegExp(
		/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/
	).test(input.value);

	errorInfo.textContent = '';
	input.style.backgroundColor = '';
	input.style.color = '';
	input.style.borderColor = '';

	if (input.value !== '') {
		if (match === true) {
			emailAddress.textContent = input.value;
			showMessage();
		} else {
			errorInfo.textContent = 'Valid email required';
			input.style.backgroundColor = '#FFEAE3';
			input.style.color = 'tomato';
			input.style.borderColor = 'tomato';
		}
	} else {
		errorInfo.textContent = 'The field is empty!';
		input.style.backgroundColor = '#FFEAE3';
		input.style.color = 'tomato';
		input.style.borderColor = 'tomato';
	}
};

const showMessage = () => {
	cardMain.style.display = 'none';
	cardMessage.style.display = 'flex';
};

const hideMessage = () => {
	const mediaQuery = window.matchMedia('(min-width: 1024px)');
	if (mediaQuery.matches) {
		cardMain.style.display = 'flex';
		cardMessage.style.display = 'none';
	} else {
		cardMain.style.display = 'block';
		cardMessage.style.display = 'none';
	}
};

subscribeBtn.addEventListener('click', (e) => {
	checkEmail();
});
hideMessageBtn.addEventListener('click', hideMessage);
