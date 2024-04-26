const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailInfo = form.elements['email'];
  const passInfo = form.elements['password'];
  const emailTrimmed = emailInfo.value.trim();
  const passTrimmed = passInfo.value.trim();

  if (emailTrimmed !== '' && passTrimmed !== '') {
    const info = {
      email: emailTrimmed,
      password: passTrimmed,
    };
    console.log(info);
  } else {
    alert('All form fields must be filled in');
  }
  form.reset();
});
