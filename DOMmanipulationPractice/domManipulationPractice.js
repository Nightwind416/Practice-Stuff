const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent = 'Hey, I\'m red!';
container.appendChild(para1);

const head3 = document.createElement('h3');
head3.classList.add('head3');
head3.textContent = 'Hey, I\'m a blue h3!';
container.appendChild(head3);

const divBorder = document.createElement('div');
divBorder.classList.add('head3');
divBorder.textContent = '<black border, pink background>';
container.appendChild(divBorder);

const head1 = document.createElement('h1');
head1.classList.add('head3');
head1.textContent = 'I’m in a div';
container.appendChild(head1);

const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent = 'ME TOO!';
container.appendChild(para2);