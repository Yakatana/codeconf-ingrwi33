function addFocusClass(event) {
  const group = event.target.closest('.fill__group');
  group.classList.add('focused');
}

function removeFocusClass(event) {
  const group = event.target.closest('.fill__group');
  group.classList.remove('focused');
}

document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('.fill__group input');

  inputs.forEach(function (input) {
    input.addEventListener('focus', addFocusClass);
    input.addEventListener('blur', removeFocusClass);
  });
});
