﻿// Christmas Countdown
window.onload = function() {
    const canvas = document.getElementById('christmasCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;

    // Draw fireplace base
    ctx.fillStyle = '#8B4513'; // Brown bricks
    ctx.fillRect(100, 150, 200, 100);

    // Draw inner fireplace
    ctx.fillStyle = '#000000'; // Black interior
    ctx.fillRect(140, 170, 120, 60);

    // Draw fire
    function drawFire(x, y) {
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + 10, y - 20, x + 20, y);
        ctx.quadraticCurveTo(x + 30, y - 20, x + 40, y);
        ctx.quadraticCurveTo(x + 20, y - 40, x, y);
        ctx.fill();

        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.moveTo(x + 10, y);
        ctx.quadraticCurveTo(x + 20, y - 15, x + 30, y);
        ctx.quadraticCurveTo(x + 20, y - 25, x + 10, y);
        ctx.fill();
    }

    // Draw fire in the fireplace
    drawFire(150, 210);

    // Add "Merry Christmas" text
    ctx.fillStyle = 'red';
    ctx.font = '24px serif';
    ctx.fillText('Merry Christmas!', 120, 50);
};

document.addEventListener('DOMContentLoaded', () => {
    const countdownTimer = document.getElementById('countdownTimer');
    const countdownContainer = document.getElementById('countdownContainer');

    // Function to update the countdown
    function updateCountdown() {
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25); // Christmas on Dec 25th

        // If Christmas has already passed this year, calculate for next year
        if (now > christmas) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }

        const timeDifference = christmas - now;

        // Calculate days, hours, minutes, seconds left
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        // Display the countdown
        countdownTimer.textContent = `🎄 ${days}d ${hours}h ${minutes}m ${seconds}s until Christmas 🎁`;

        // Add animation effect every time the countdown updates
        if (seconds % 2 === 0) {
            countdownTimer.style.color = '#ff4d4f'; // Christmas Red
        } else {
            countdownTimer.style.color = '#52c41a'; // Christmas Green
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Click event for the countdown timer
    countdownTimer.addEventListener('click', (event) => {
        // Prevent event from propagating to the container
        event.stopPropagation(); // This ensures that the container's click event is not triggered

        // Toggle the highlight class to change color and size
        countdownTimer.classList.toggle('highlight');

        // Get and log the computed styles of the countdown timer
        const computedStyles = getComputedStyle(countdownTimer);
        console.log('Countdown Timer Computed Styles:', {
            color: computedStyles.color,
            fontSize: computedStyles.fontSize,
            transform: computedStyles.transform,
        });
    });

    // Click event for the container (reset the countdown when clicked outside)
    countdownContainer.addEventListener('click', () => {
        // This will only trigger if the user clicks outside the countdown timer (because of stopPropagation on the timer)
        countdownTimer.classList.remove('highlight');
        countdownTimer.style.color = '#ff4d4f'; // Reset to red
    });

    // Initialize the countdown immediately
    updateCountdown();

    const updateMessageButton = document.getElementById('updateMessageButton');
    updateMessageButton.addEventListener('click', (event) => { 
        const messageInputValue = document.getElementById("messageInput").value;
        document.getElementById("customMessage").textContent = messageInputValue;
    });
});



// Select all elements with the class 'snowflake'
const snowflakes = document.querySelectorAll('.snowflake');



// Apply new styles to each snowflake
snowflakes.forEach((snowflake, index) => {
    // Change the size of the snowflake
    snowflake.style.width = '30px';
    snowflake.style.height = '30px';
    snowflake.style.backgroundColor = 'white'; // Add a visible background color
    snowflake.style.borderRadius = '50%'; // Make the snowflake round
    snowflake.style.border = '2px solid lightblue'; // Add a border to enhance visibility

    // Add unique left values as CSS variables
    const startLeft = Math.random() * 100; // Start position (vw)
    const endLeft = Math.random() * 100; // End position (vw)
    snowflake.style.setProperty('--start-left', `${startLeft}vw`);
    snowflake.style.setProperty('--end-left', `${endLeft}vw`);

    // Add animation
    snowflake.style.position = 'absolute'; // Required for animation
    snowflake.style.animation = `fall ${5 + index}s infinite ease-in-out`; // Different speeds for each snowflake
});

// Define the keyframes for the 'fall' animation once
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
        snowflake.style.color = 'red'; // Changes color to red when clicked
        snowflake.title = 'You clicked me!'; // Modify the title Property
        console.log("Snowflake clicked!");
    });



//crearea si stergerea unui element html
// 1. Create a new snowflake element
const newSnowflake = document.createElement('div'); // Create a new <div>
newSnowflake.className = 'snowflake'; // Add the 'snowflake' class
newSnowflake.style.width = '30px'; // Set some styles to make it visible
newSnowflake.style.height = '30px';
newSnowflake.style.backgroundColor = 'white';
newSnowflake.style.borderRadius = '50%';
newSnowflake.style.position = 'absolute';
newSnowflake.style.top = '0';
newSnowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position

// 2. Append the new snowflake to the snowflakes container
const snowflakesContainer = document.querySelector('.snowflakes'); // Select the container
snowflakesContainer.appendChild(newSnowflake); // Add the new snowflake to the DOM

// 3. Automatically remove the snowflake after 5 seconds
setTimeout(() => {
    newSnowflake.remove(); // Remove the snowflake from the DOM
    console.log('Snowflake removed!');
}, 5000); // 5000ms = 5 seconds

});





//setInterval
// Array of snowflake messages
const snowflakeMessages = [
    "Let it snow!",
    "Snowflakes are falling!",
    "Winter magic is here!",
    "Catch a snowflake!",
    "The air is full of Christmas joy!"
];

// Get the message element
const messageElement = document.getElementById('snowflakeMessage');

// Initialize message index
let currentIndex = 0;

// Function to update the message
function updateSnowflakeMessage() {
    // Update the message text
    messageElement.textContent = snowflakeMessages[currentIndex];

    // Move to the next message in the array
    currentIndex = (currentIndex + 1) % snowflakeMessages.length; // Loop back to the start
}

// Start the interval to update the message every 3 seconds
setInterval(updateSnowflakeMessage, 3000);





//localStorage
// Get references to DOM elements
const messageInput = document.getElementById('messageInput');
const saveButton = document.getElementById('saveMessageButton');
const snowflakeMessage = document.getElementById('snowflakeMessage');

// Load saved message from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedMessage = localStorage.getItem('christmasMessage');
    if (savedMessage) {
        snowflakeMessage.textContent = savedMessage;
    }
});

// Save message to localStorage when the button is clicked
saveButton.addEventListener('click', () => {
    const newMessage = messageInput.value;
    if (newMessage.trim() !== '') {
        localStorage.setItem('christmasMessage', newMessage); // Save to localStorage
        snowflakeMessage.textContent = newMessage; // Update the displayed message
        messageInput.value = ''; // Clear the input field
        alert('Message saved!'); // Optional: Confirm to the user
    } else {
        alert('Please enter a valid message.');
    }
});



// date + classList + getComputedStyle + stopPropagation




// Add a click event to toggle the "highlight" class
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('christmasCountdown');
    countdownElement.addEventListener('click', (event) => {
        event.target.classList.toggle('highlight'); // Toggle the 'highlight' class
    });

    // Initialize countdown immediately
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});


