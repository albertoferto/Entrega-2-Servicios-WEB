const gato_btn = document.getElementById('gato_btn');
const perro_btn = document.getElementById('perro_btn');
const gato_random = document.getElementById('gato_random');
const perro_random = document.getElementById('perro_random');

gato_btn.addEventListener('click', getRandomGato);
perro_btn.addEventListener('click', getRandomPerro);

function getRandomGato() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			gato_random.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomPerro() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomPerro();
			}
			else {
				perro_random.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
