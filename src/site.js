function addClass(selector, className) {
	var elements = document.getElementsByClassName(selector);
	for (var i = 0; i < elements.length; i++) {
		if (!elements[i].classList.contains(className)) {
			elements[i].classList.add(className);
		}
	}
}

function removeClass(selector, className) {
	var elements = document.getElementsByClassName(selector);
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains(className)) {
			elements[i].classList.remove(className);
		}
	}
}

function resetDisplay() {
	removeClass('cc', 'lit');
	addClass('word_it', 'lit');
	addClass('word_is', 'lit');
}

function displayTime(today) {
	var hours = today.getHours() % 12;
	var minuteHash = Math.floor(today.getMinutes() / 5);

	resetDisplay();

	var distanceFromMiddleOfHour = Math.abs(6 - minuteHash)
	addClass('distance_' + distanceFromMiddleOfHour, 'lit');

	if (minuteHash == 0) {
		addClass('word_oclock', 'lit');
	} else if (minuteHash < 7) {
		addClass('word_past', 'lit');
	} else {
		addClass('word_to', 'lit');
		hours = (hours + 1) % 12;
	}

	addClass('hour_' + (hours ? hours : 12), 'lit');
}

function startLoop() {
	displayTime(new Date());
	setInterval(function() {
		displayTime(new Date());
	}, 5000);
}

function testClock() {
	var milliseconds = 0;
	setInterval(function() {
		displayTime(new Date(milliseconds));
		(milliseconds += 60000) % 86400000;
	}, 150);
}

window.onload = startLoop;
