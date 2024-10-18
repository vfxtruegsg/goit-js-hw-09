const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
