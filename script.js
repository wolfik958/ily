document.getElementById('envelope').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const openedLetter = document.getElementById('opened-letter');
    const message = document.getElementById('message');

    // Hide the envelope
    envelope.style.display = 'none';
    
    // Show the opened letter with an opening animation
    openedLetter.style.display = 'block';
    setTimeout(() => {
        openedLetter.style.transform = 'translate(-50%, -50%) scaleY(1)';
    }, 10);

    // Display the message after the letter is fully opened
    setTimeout(() => {
        message.style.display = 'flex';
        // Trigger the typing effect
        Array.from(message.children).forEach((p, index) => {
            p.style.opacity = 1;
        });
    }, 1000);
});
