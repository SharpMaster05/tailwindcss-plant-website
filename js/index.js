const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const hamburger  = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('left-[0]')
	hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(l => {
	l.addEventListener('click', () => {
		navMenu.classList.toggle('left-[0]')
		hamburger.classList.toggle('ri-close-large-line')
	})
})

const swiper = new Swiper('.swiper', {
	grabCursor: true,
	speed:400,
	spaceBetween:30,
	autoplay :{
		delay:3000,
		disableOnInteraction: false
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true
	},
	breakpoints : {
		640 : { slidesPerView : 1 },
		768 : { slidesPerView : 2 },
		1024 : { slidesPerView : 3 },
	}
  });

const scrollUp = () => {
	const scrollBtn = document.getElementById('scroll-up')

	if(this.scrollY >= 500) {
		changeScrollUpBtnPosition(scrollBtn, '-bottom-1/2', 'bottom-4')
	}else {
		changeScrollUpBtnPosition(scrollBtn, 'bottom-4', '-bottom-1/2')
	}
}

function changeScrollUpBtnPosition(btn, removedClass, addedClass){
	btn.classList.remove(removedClass)
	btn.classList.add(addedClass)
}

window.addEventListener('scroll', scrollUp)

const activeLink = () => {
	const sections = document.querySelectorAll('section')
	const links = document.querySelectorAll('.nav-link')

	let currentLink = 'home'
	sections.forEach(element => {
		const sectionTop = element.offsetTop

		if(this.scrollY >= sectionTop - 60){
			currentLink = element.getAttribute('id')
		}
	});

	links.forEach(link => {
		link.classList.remove('active')

		if(link.href.includes(currentLink)){
			link.classList.add('active')
		}
	})
}

window.addEventListener('scroll', activeLink)

const sr = ScrollReveal ({
	origin: 'top',
	distance: '60px',
	duration: 1000,
	delay: 200,
	reset: true
})

sr.reveal(`.home-data, .about-top, .popular-top, .review`)
sr.reveal(`.home-image`, {scale: 0.5})

sr.reveal(`.service-card`, {interval: 100})

sr.reveal(`.about-leaf-img`, {origin: 'right'})
sr.reveal(`.about-leaf-img-1, .about-leaf-content-1`, { origin: 'right'})
sr.reveal(`.about-leaf-img-2, .about-leaf-content-2, .review-img`, { origin: 'left'})
sr.reveal(`.popular-card, .footer`, { origin: 'bottom', interval: 100})
