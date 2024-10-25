const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
console.log(bgImage);

// 요소 생성
// document.createElement("img");

// html body 안에 bgImage 추가
// document.body.appendChild(bgImage);

// 이렇게 생긴 요소 추가됨 
// <img src="img/0.jpeg" />