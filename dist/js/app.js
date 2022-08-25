// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Copy to clipboard
window.addEventListener('load', (event) => {
  const list = document.querySelectorAll('[data-copyToClipboard]');

  list.forEach((element) => {
    const id = element.getAttribute('data-copyToClipboard');

    element.addEventListener('click', () => {
      copyToClipboard(id);
    });
  });
});

function copyToClipboard(ID) {
  /* Get the text field */
  var copyText = document.getElementById(ID);

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.textContent);

  /* Alert the copied text */
  alert('تم نسخ الرقم المرجعي: ' + copyText.textContent);
}
