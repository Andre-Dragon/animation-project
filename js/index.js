'use strict';

const $audio = document.getElementById('sound');
const $button = document.getElementById('button');
const $container = document.querySelector('.container');
const $preloader = document.querySelector('.preloader');
const $title = document.querySelector('.title');
const $textBtn = document.querySelector('.button__text');
const $overlay = document.querySelector('.project__overlay');
const $car = document.querySelector('.project__car');
const $box = document.querySelector('.project__box');
const $cloud = document.querySelectorAll('.project__cloud');
const $rain = document.querySelectorAll('.project__rain--item');
const $tree = document.querySelectorAll('.project__tree');
const $building = document.querySelectorAll('.project__building');
const $road = document.querySelector('.project__road');

const elements = {$title, $car, $box, $cloud, $rain, $tree, $building, $road}

const preloaderPage = () => {
	if ($container.classList.contains('hide')) {
		$container.classList.remove('hide');
		$preloader.classList.add('hide');
	}
};

const checkClassAnimate = elem => {
	if (!elem.classList.contains('animate')) {
			elem.classList.add('animate');
	}
	else {
			elem.classList.remove('animate');
	}
};

const animateElements = elems => { 
	Array.from(elems).forEach(elem => {
		checkClassAnimate(elem);
	});
};

const removeAnimateElements = elems => Array.from(elems).forEach(elem => elem.classList.remove('animate'));

const animateStart = () => {
	for (let key in elements) {
		if (!elements[key]) return;
		if (
			elements[key] === $cloud ||
			elements[key] === $rain ||
			elements[key] === $tree ||
			elements[key] === $building
		) {
			animateElements(elements[key]);
		}
		else {
			checkClassAnimate(elements[key]);
		}
	}
};

const animateTextBtn = text => {
		$textBtn.style.opacity = 0;
		setTimeout(() => {
			$textBtn.textContent = `${text}`;
			$textBtn.style.opacity = 1; 
		}, 500);
};

const addAnimateBtnClass = () => {
	if (!$button.classList.contains('animate-btn')) {
		$button.classList.add('animate-btn');
		setTimeout(() => $button.classList.remove('animate-btn'), 500);
	}
};

const addAudioHandler = () => {
	if ($audio.paused) {
		$audio.play();
		animateStart();
		$overlay.classList.add('hide');
		animateTextBtn('Pause');
		addAnimateBtnClass();
	}
	else {
		$audio.pause();
		animateStart();
		$overlay.classList.remove('hide');
		animateTextBtn('Play');
		addAnimateBtnClass();
	}
};

$button.addEventListener('click', addAudioHandler);
setTimeout(preloaderPage, 3000);