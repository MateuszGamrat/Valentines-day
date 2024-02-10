function decisionYes() {
	window.location.href = 'index2.html'
}

function decisionNo() {
	// ZWIĘKSZENIE PRZYCISKU YES
	var przycisk = document.getElementById('yes')
	var aktualnyRozmiarw = window.getComputedStyle(przycisk).width
	var aktualnyRozmiarh = window.getComputedStyle(przycisk).height
	var aktualnyRozmiarf = window.getComputedStyle(przycisk).fontSize
	var nowyRozmiarh = parseFloat(aktualnyRozmiarh) * 1.2 // Zwiększamy rozmiar o 20%
	var nowyRozmiarw = parseFloat(aktualnyRozmiarw) * 1.2 // Zwiększamy rozmiar o 20%
	var nowyRozmiarf = parseFloat(aktualnyRozmiarf) * 1.2 // Zwiększamy rozmiar o 20%

	przycisk.style.width = nowyRozmiarw + 'px'
	przycisk.style.height = nowyRozmiarh + 'px'
	przycisk.style.fontSize = nowyRozmiar + 'px'

	//var przycisk = document.getElementById("mojPrzycisk");
	var aktualnyRozmiar = window.getComputedStyle(przycisk).fontSize
	var nowyRozmiar = parseFloat(aktualnyRozmiar) * 1.2 // Zwiększamy rozmiar o 20%

	przycisk.style.fontSize = nowyRozmiar + 'px'

	var noButton = document.getElementById('no')

	// Losowe położenie
	var randomX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth))
	var randomY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight))

	noButton.style.left = window.scrollX + randomX + 'px'
	noButton.style.top = window.scrollY + randomY + 'px'

	noButton.classList.add('clicked')
}
