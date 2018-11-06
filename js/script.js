window.addEventListener('load', () => {
	const about = document.querySelector('#about');

	window.onscroll = () => {
		if (scrollY >= 550) {
			about.style.animationPlayState = "running";
		}
	}
});