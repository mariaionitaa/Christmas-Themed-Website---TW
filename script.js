﻿// Christmas Countdown

document.addEventListener('DOMContentLoaded', () => {
    const countdownTimer = document.getElementById('countdownTimer');
    const countdownContainer = document.getElementById('countdownContainer');

    function updateCountdown() {
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25);
        if (now > christmas) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }

        const timeDifference = christmas - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        countdownTimer.textContent = `🎄 ${days}d ${hours}h ${minutes}m ${seconds}s until Christmas 🎁`;

        if (seconds % 2 === 0) {
            countdownTimer.style.color = '#ff4d4f';
        } else {
            countdownTimer.style.color = '#52c41a';
        }
    }

    setInterval(updateCountdown, 1000);

    countdownTimer.addEventListener('click', (event) => {
        event.stopPropagation();

        countdownTimer.classList.toggle('highlight');

        const computedStyles = getComputedStyle(countdownTimer);
        console.log('Countdown Timer Computed Styles:', {
            color: computedStyles.color,
            fontSize: computedStyles.fontSize,
            transform: computedStyles.transform,
        });
    });

    countdownContainer.addEventListener('click', () => {
        countdownTimer.classList.remove('highlight');
        countdownTimer.style.color = '#ff4d4f'; 
    });

    updateCountdown();

    const updateMessageButton = document.getElementById('updateMessageButton');
    updateMessageButton.addEventListener('click', (event) => { 
        const messageInputValue = document.getElementById("messageInput").value;
        document.getElementById("customMessage").textContent = messageInputValue;
    });
});

const snowflakes = document.querySelectorAll('.snowflake');



snowflakes.forEach((snowflake, index) => {
    snowflake.style.width = '30px';
    snowflake.style.height = '30px';
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%'; 
    snowflake.style.border = '2px solid lightblue'; 

    const startLeft = Math.random() * 100; 
    const endLeft = Math.random() * 100;
    snowflake.style.setProperty('--start-left', `${startLeft}vw`);
    snowflake.style.setProperty('--end-left', `${endLeft}vw`);

    snowflake.style.position = 'absolute'; 
    snowflake.style.animation = `fall ${5 + index}s infinite ease-in-out`; 
});

if (!document.querySelector('style[data-fall-animation]')) {
    const styleSheet = document.createElement('style');
    styleSheet.setAttribute('data-fall-animation', '');
    styleSheet.innerHTML = `
      @keyframes fall {
        0% { top: -50px; left: var(--start-left); opacity: 0; }
        50% { opacity: 1; }
        100% { top: 100vh; left: var(--end-left); opacity: 0; }
      }
    `;
    document.head.appendChild(styleSheet);
}




snowflakes.forEach(snowflake => {
    snowflake.addEventListener('click', () => {
        snowflake.style.color = 'red'; 
        snowflake.title = 'You clicked me!';
        console.log("Snowflake clicked!");
    });



//crearea si stergerea unui element html
const newSnowflake = document.createElement('div'); 
newSnowflake.className = 'snowflake'; 
newSnowflake.style.width = '30px'; 
newSnowflake.style.height = '30px';
newSnowflake.style.backgroundColor = 'white';
newSnowflake.style.borderRadius = '50%';
newSnowflake.style.position = 'absolute';
newSnowflake.style.top = '0';
newSnowflake.style.left = `${Math.random() * 100}vw`; 

const snowflakesContainer = document.querySelector('.snowflakes'); 
snowflakesContainer.appendChild(newSnowflake); 

setTimeout(() => {
    newSnowflake.remove();
    console.log('Snowflake removed!');
}, 5000);

});





//setInterval
const snowflakeMessages = [
    "Let it snow!",
    "Snowflakes are falling!",
    "Winter magic is here!",
    "Catch a snowflake!",
    "The air is full of Christmas joy!"
];

const messageElement = document.getElementById('snowflakeMessage');

let currentIndex = 0;

function updateSnowflakeMessage() {
    
    messageElement.textContent = snowflakeMessages[currentIndex];

    currentIndex = (currentIndex + 1) % snowflakeMessages.length; 
}

setInterval(updateSnowflakeMessage, 3000);





//localStorage
const messageInput = document.getElementById('messageInput');
const saveButton = document.getElementById('saveMessageButton');
const snowflakeMessage = document.getElementById('snowflakeMessage');

document.addEventListener('DOMContentLoaded', () => {
    const savedMessage = localStorage.getItem('christmasMessage');
    if (savedMessage) {
        snowflakeMessage.textContent = savedMessage;
    }
});

saveButton.addEventListener('click', () => {
    const newMessage = messageInput.value;
    if (newMessage.trim() !== '') {
        localStorage.setItem('christmasMessage', newMessage);
        snowflakeMessage.textContent = newMessage; 
        messageInput.value = ''; 
        alert('Message saved!');
    } else {
        alert('Please enter a valid message.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('christmasCountdown');
    countdownElement.addEventListener('click', (event) => {
        event.target.classList.toggle('highlight'); 
    });

    updateCountdown();
    setInterval(updateCountdown, 1000);
});



// formular
            $('#loginForm').on('submit', function (e) {
                e.preventDefault(); 
    
                const username = $('#username').val();
                const password = $('#password').val();
    
                // json
                $.getJSON('users.json', function (users) {
                    const user = users.find(user => user.username === username && user.password === password);
    
                    if (user) {
                        $('#responseMessage').text('Login successful!');
                    } else {
                        $('#responseMessage').text('Invalid username or password.');
                    }
                }).fail(function () {
                    $('#responseMessage').text('Error loading user data.');
                });
            });