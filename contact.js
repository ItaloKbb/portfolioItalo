document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:italob@alunos.utfpr.edu.br?subject=Contato de ${name}&body=${message} - ${email}`;
    window.location.href = mailtoLink;
  });