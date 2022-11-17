const [daysCard, hoursCard, minutesCard, secondsCard] = document.querySelectorAll('.countdown-timer__timer-container')

const counter = {
	days: 3,
	hours: 0,
	minutes: 0,
	seconds: 9,
}

const countdown = new Date()

countdown.setHours(countdown.getHours() + counter.days * 24)
countdown.setHours(countdown.getHours() + counter.hours)
countdown.setMinutes(countdown.getMinutes() + counter.minutes)
countdown.setSeconds(countdown.getSeconds() + counter.seconds)

setInterval(() => {
	let currentDate = new Date()
	let remainingTime = Math.ceil((countdown - currentDate) / 1000)

	if (remainingTime < 0) return

	flipAllCards(remainingTime)
}, 1000)

function flipAllCards(time) {
	flipCard(daysCard, Math.floor(time / (3600 * 24)))
	flipCard(hoursCard, Math.floor(time / 3600) % 24)
	flipCard(minutesCard, Math.floor(time / 60) % 60)
	flipCard(secondsCard, time % 60)
}

function flipCard(card, value) {
	let currentValue = card.querySelector('.card-top').textContent
	value = value.toString().padStart(2, '0')

	card.querySelector('.card-top-flip').textContent = currentValue
	card.querySelector('.card-top').textContent = value
	card.querySelector('.card-bottom-flip').textContent = value
	card.querySelector('.card-bottom').textContent = currentValue

	if (value === currentValue) return

	card.classList.remove('animation')
	setTimeout(() => {
		card.classList.add('animation')
	}, 300)
}
