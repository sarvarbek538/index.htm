const botToken = '7255592786:AAGy1iJz2hfnrSVzQ0TKqNaW4lEml3zp548'; // Bot tokenini kiriting
const chatId = '6206221012'; // Chat ID ni kiriting

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const option = document.getElementById('options').value;

    const text = `Ism: ${name}\nEmail: ${email}\nXabar: ${message}\nUC Tanlov: ${option}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Xabar yuborildi');
                document.getElementById('contact-form').reset(); // Formani tozalash
            } else {
                alert('Xabar yuborishda xatolik yuz berdi.');
            }
        })
        .catch(error => {
            console.error('Xatolik:', error);
        });
});