import IMask from 'imask';

const phoneInput = document.getElementById('form-input-phone');
const maskOptions = {
  mask: '+{7} (000) 000 00-00'
};
const mask = IMask(phoneInput, maskOptions);