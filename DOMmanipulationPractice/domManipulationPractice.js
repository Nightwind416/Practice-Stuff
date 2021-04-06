// set up variable links
const container = document.querySelector('#container');
const buttonDiv = document.querySelector('#buttonDiv');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');

// add new div and text to container label
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// append paragraph and red text to previously made div
const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent = 'Hey, I\'m red!';
para1.style.color = 'red';
container.appendChild(para1);

// append heading 3 and blue text to previously made div
const head3 = document.createElement('h3');
head3.classList.add('head3');
head3.textContent = 'Hey, I\'m a blue h3!';
head3.style.color = 'blue';
container.appendChild(head3);

// add div with black border and pink background
const divBorder = document.createElement('div');
divBorder.classList.add('divBorder');
divBorder.textContent = '<black border, pink background>';
divBorder.style.backgroundColor = "pink";
divBorder.style.borderStyle = "solid";
container.appendChild(divBorder);

// add heading 1 to previous div
const head1 = document.createElement('h1');
head1.classList.add('head1');
head1.textContent = 'I’m in a div';
divBorder.appendChild(head1);

// add paragraph to previous div
const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent = 'ME TOO!';
divBorder.appendChild(para2);

// add javascript on-click event to button 2
button2.onclick = () => alert("Hello World 2");

// add javascript multiple click event to button 3
button3.addEventListener('click', () => {
    alert("Hello World 3");
});

// add javascript on-click using functions, call from terminal
function buttonAlert() {
    alert("Hello World Function");
}

// add javascript onclick calling function
button5.onclick = buttonAlert;

//add javascript onclick event listener calling function
button6.addEventListener('click', buttonAlert);

//add javascript onclick event listener calling function 'event'
button7.addEventListener('click', function (e) {
    console.log(e);
});

//add javascript onclick event listener readout to console
button8.addEventListener('click', function (e) {
    console.log(e.target);
});

//add javascript onclick event listener change target color
button9.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});