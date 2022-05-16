let Quessions = [
	{
		quession: 'Wie heißt der Erfinder von JavaScript?',
		answer_1:'Douglas Crockford',
		answer_2:'Brendan Eich',
		answer_3:'John Resig',
		answer_4: 'Steve Jobs',
		right_answer: '2'
	}, {
		quession: 'Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?',
		answer_1: 'Micha',
		answer_2: 'Mocha',
		answer_3: 'Mecha',
		answer_4: 'Mucha',
		right_answer: '2'
	}, {
		quession: 'Welche der folgenden Sprachen hatte keinen Einfluss auf JS?',
		answer_1: 'Self',
		answer_2: 'Scheme',
		answer_3: 'Java',
		answer_4: 'Prolog',
		right_answer: '4'
	}, {
		quession: 'Wer passt hier nicht in die Reihe?',
		answer_1: 'ActionScript',
		answer_2: 'LiveScript',
		answer_3: 'JavaScript',
		answer_4: 'AppleScript',
		right_answer: '2'
	}, {
		quession: 'Was ist false?',
		answer_1: '1/0 === Infinity',
		answer_2: 'Number.POSITIVE_INFINITY === Infinity',
		answer_3: 'Number.MIN_VALUE * -2 === -Infinity',
		answer_4: 'Number.MAX_VALUE * 2 === Infinity',
		right_answer: '3'
	}
]

let currentQuession = 0
let rightQuessions = 0
let successAudio = new Audio('audio/suc.mp3')
let wrongAudio = new Audio('audio/wrong.mp3')

function init() { 	
	document.getElementById('allQuession').innerHTML = Quessions.length;
	showQuession()
}



function showQuession() {
	

	if (gameIsOver()) {
		showEndscreen()	
		
	} else {
		updateProgressBar()
		updateToNextQuession()
		
	}
}
function gameIsOver() { 
	return currentQuession >= Quessions.length
}
function updateToNextQuession() { 
	let quession = Quessions[currentQuession];
	document.getElementById('whichQuession').innerHTML = currentQuession + 1
	document.getElementById('queassonText').innerHTML = quession.quession
	document.getElementById('answer_1').innerHTML = quession.answer_1
	document.getElementById('answer_2').innerHTML = quession.answer_2
	document.getElementById('answer_3').innerHTML = quession.answer_3
	document.getElementById('answer_4').innerHTML = quession.answer_4
}
function showEndscreen() {
	document.getElementById('quessionBody').classList.add('d-none');
	document.getElementById('endQuiz').classList.remove('d-none');
	document.getElementById('img1').classList.add('d-none');
	document.getElementById('rightAnswer').innerHTML = rightQuessions
	document.getElementById('allQ').innerHTML = Quessions.length
}
function updateProgressBar() { 
	let percent = (currentQuession + 1) / Quessions.length
	percent = Math.round(percent * 100)
	document.getElementById('percent').innerHTML = `${percent}%`
	document.getElementById('percent').style = `width:${percent}%`
}

function answer(parameter) { 
	let quession = Quessions[currentQuession];
	let selectedQuessionNumber = parameter.slice(-1)// zugriff zu letzte buchtabe 

	let IdOfRightAnswer = `answer_${quession.right_answer}`
	if (rightSelected(selectedQuessionNumber)) {
		document.getElementById(parameter).parentNode.classList.add('bg-success')
		rightQuessions++
		successAudio.play()
		
	} else { 
		document.getElementById(parameter).parentNode.classList.add('bg-danger')
		document.getElementById(IdOfRightAnswer).parentNode.classList.add('bg-success')
		wrongAudio.play()
	}
	document.getElementById('btn').disabled = false

	console.log(parameter)
	console.log('object :>> ', selectedQuessionNumber);
}
function rightSelected(selectedQuessionNumber) { 
	let quession = Quessions[currentQuession];
	return selectedQuessionNumber == quession.right_answer
}

function resetAnswerButton() { 
	document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
	document.getElementById('answer_1').parentNode.classList.remove('bg-success')
	document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
	document.getElementById('answer_2').parentNode.classList.remove('bg-success')
	document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
	document.getElementById('answer_3').parentNode.classList.remove('bg-success')
	document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
	document.getElementById('answer_4').parentNode.classList.remove('bg-success')
}

function next() {
	currentQuession++
	resetAnswerButton()
	document.getElementById('btn').disabled = true

	
	showQuession();
}


function reStart() { 

	document.getElementById('quessionBody').classList.remove('d-none');
	document.getElementById('endQuiz').classList.add('d-none');
	document.getElementById('img1').classList.remove('d-none');
	rightQuessions=0
	currentQuession=0
	init()
}