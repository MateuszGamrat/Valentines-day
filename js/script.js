const noButton = document.getElementById('no')
const yesButton = document.querySelector('#yes')

function decisionYes() {
	window.location.href = 'index2.html'
}


function decisionNo() {
	const aktualnyRozmiarw = window.getComputedStyle(yesButton).width
	const aktualnyRozmiarh = window.getComputedStyle(yesButton).height
	const aktualnyRozmiarf = window.getComputedStyle(yesButton).fontSize
	const nowyRozmiarh = parseFloat(aktualnyRozmiarh) * 1.2 // Zwiększamy rozmiar o 20%
	const nowyRozmiarw = parseFloat(aktualnyRozmiarw) * 1.2 // Zwiększamy rozmiar o 20%
	const nowyRozmiarf = parseFloat(aktualnyRozmiarf) * 1.2 // Zwiększamy rozmiar o 20%

	yesButton.style.width = nowyRozmiarw + 'px'
	yesButton.style.height = nowyRozmiarh + 'px'
	yesButton.style.fontSize = nowyRozmiarf + 'px'

	const buttonRect = noButton.getBoundingClientRect()
	const maxWidth = window.innerWidth - buttonRect.width
	const maxHeight = window.innerHeight - buttonRect.height

	const randomLeft = Math.min(Math.floor(Math.random() * maxWidth), 700)
	const randomTop = Math.min(Math.floor(Math.random() * maxHeight), 700)

	noButton.style.left = randomLeft + 'px'
	noButton.style.top = randomTop + 'px'
}

yesButton.addEventListener('click', decisionYes)
noButton.addEventListener('click', decisionNo)
