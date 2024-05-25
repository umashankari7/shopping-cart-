document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Example: Send form data to server (not implemented in this example)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  document.getElementById('confirmation').textContent = 'Message sent successfully!';
});
