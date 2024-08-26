function loadContent(shows) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    switch(shows) {
        case 'Action':
            content.innerHTML = `
                <h1>For action, you can watch: </h1>
                <h2>Mob Physco 100, Naruto, Jujitsu Kaisen, Attack on Titan </h2>
            `;
            break;
        case 'Romance':
            content.innerHTML = `
                <h1>For romance, you can watch:</h1>
                <h2>Toradori, Kaguya-Sama: Love is War, Your Lie in April, My Happy Marriage </h2>
            `;
            break;
        case 'Sports':
            content.innerHTML = `
                <h1>For sports, you can watch: </h1>
                <h2>Kengan Ashura, Haikyuu!!, Bluelock, Ahiru no Sora </h2>
            `;
            break;
        default:
            content.innerHTML = `<h2>Option not found</h2>`;
            break;
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false;
    }

    if (!(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function returnHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h2>Welcome to the Anime Guide!</h2>
    <p>Select a genre to view your Options.</p>
    `
}

window.onload = function() {
    const content = document.getElementById('content');
    const form = document.createElement('form');
    form.innerHTML = `
        <h3>Contact Us</h3>
        <input type="text" id="name" placeholder="Your Name" required><br>

        <input type="email" id="email" placeholder="Your Email" required><br>

        <textarea id="message" placeholder="Your Message" required></textarea><br>

        <button type="submit" onclick="return validateForm()">Submit</button>' 
        
    `;
    content.appendChild(form);
};
