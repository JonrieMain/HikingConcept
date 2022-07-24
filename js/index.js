const header = document.querySelector('#header');
const bars = document.querySelector('#bars');

bars.addEventListener('click', ()=>{
	if (bars.classList.contains('fa-bars')) {
		bars.classList.remove('fa-bars')
		bars.classList.add('fa-x')
		header.style.left="0";
		bars.style.transform="rotate(180deg)";
	}else{
		bars.classList.add('fa-bars')
		bars.classList.remove('fa-x')
		header.style.left="-100%";
		bars.style.transform="rotate(-180deg)";
	}
})

/* close the nav when <a> is onClick*/
var ulChild = document.querySelectorAll(".a");
	ulChild.forEach((btn)=>{
		btn.addEventListener('click', ()=>{
			if (window.matchMedia("(max-width: 990px)").matches){
				bars.classList.add('fa-bars')
				bars.classList.remove('fa-x')
				header.style.left="-100%";
				bars.style.transform="rotate(-180deg)";
			}
				
		})
	})


	/* diable right click*/
	document.body.addEventListener('contextmenu', (e)=>e.preventDefault())