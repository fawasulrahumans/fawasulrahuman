const circleCursor = document.querySelector('.circle-cursor');
let idleTimer;

function showCursor() {
	circleCursor.classList.remove('hidden');
}

function hideCursor() {
	circleCursor.classList.add('hidden');
}

function resetIdleTimer() {
	showCursor();
	clearTimeout(idleTimer);
	idleTimer = setTimeout(() => {
		hideCursor();
	}, 3000); // 3000 ms = 3 seconds
}

// Move the cursor and reset the timer on mouse move
document.addEventListener('mousemove', e => {
	circleCursor.style.left = `${e.clientX}px`;
	circleCursor.style.top = `${e.clientY}px`;
	resetIdleTimer();
});

// Start the idle timer on page load (hide after 5s if no movement)
resetIdleTimer();