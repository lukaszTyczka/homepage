const firstName = 'Łukasz';
const age = 27;
console.log(
    `Cześć witaj na mojej stronie nazywam się ${firstName} i mam ${age} lata!`
);

let content = document.querySelector('.welcome-section__content--js');

content.innerHTML = `Cześć witaj na mojej stronie nazywam się ${firstName} i mam ${age} lata!`;
