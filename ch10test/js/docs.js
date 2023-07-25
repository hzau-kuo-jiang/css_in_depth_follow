(function () {
	let toggle = document.querySelector('.dropdown__toggle');
	toggle.addEventListener('click', function (event) {
		event.preventDefault();
		let dropdown = event.target.parentNode;
		dropdown.classList.toggle('is-open');
	});
}());