const links = document.querySelectorAll('a[href*="#"]')

links.forEach((link) => {
	link.addEventListener('click', function(e) {
		e.preventDefault()
		const blockId = link.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
})
const slider = document.querySelectorAll('.clients__review')
const btn = document.querySelectorAll('.clients__slider .clients__round')
let i = 0

btn.forEach((b,index)=>{
	b.addEventListener('click', function() {
		btn.forEach(e=>e.classList.remove('active'))
		slider.forEach(e=>e.classList.remove('active'))
		slider[index].classList.add('active')
		b.classList.add('active')
		i = index
	})
})
setInterval(function(e) {
	btn.forEach(e=>e.classList.remove('active'))
	slider.forEach(e=>e.classList.remove('active'))
	slider[i].classList.add('active')
	btn[i].classList.add('active')
	if (i == 2) {
		i = 0
	} else {
		i++
	}
}, 3000)

const formBtn = document.querySelector('.form__btn button')
const inputs = document.querySelectorAll('.form input')
const textarea = document.querySelector('.form textarea')
let isInp = false
console.log(inputs)
formBtn.addEventListener('click', function(event) {
	event.preventDefault()
	inputs.forEach(e => {
		e.value = ""
	})
	textarea.value = ''
	alert('Данные отправлены')
})

