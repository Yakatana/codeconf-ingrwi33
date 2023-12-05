document.addEventListener('DOMContentLoaded', function () {
  const formGroups = document.querySelectorAll('.form-group');

  formGroups.forEach(function (formGroup) {
    const input = formGroup.querySelector('input, textarea');

    input.addEventListener('focus', function () {
      formGroup.classList.add('focused');
    });

    input.addEventListener('blur', function () {
      if (!input.value) {
        formGroup.classList.remove('focused');
      }
    });
  });
});
