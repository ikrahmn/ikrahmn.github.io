document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Toggle menu when clicking the hamburger icon
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close the menu automatically when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from trying to refresh the page

    // 1. Grab the values from your inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 2. Format the email body text using standard JavaScript newlines (\n)
    const emailBody = `Hi Ikram,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;

    // 3. Construct the official Gmail compose URL
    // encodeURIComponent will now cleanly convert those '\n' characters into working spaces
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=your-email@gmail.com&su=New Project Idea from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;

    // 4. Open Gmail in a new tab with everything filled out
    window.open(gmailUrl, '_blank');
});