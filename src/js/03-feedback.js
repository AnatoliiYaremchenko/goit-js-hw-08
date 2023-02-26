
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector("input[type='email']");
const textareaRef = document.querySelector("textarea[name='message']");
let user = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

const getFieldFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const localStorageObj = getFieldFromLocalStorage(LOCALSTORAGE_KEY);

if (localStorageObj) {
  inputRef.value = localStorageObj.email;
  textareaRef.value = localStorageObj.message;
  user = localStorageObj;
} else {
  inputRef.value = '';
  textareaRef.value = '';
}

const saveFieldToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const initialSaveData = throttle(saveFieldToLocalStorage, 500);

const setInputData = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value || message.value) {
    user = {
      email: email.value,
      message: message.value,
    };

    initialSaveData(LOCALSTORAGE_KEY, user);
  }
};

formRef.addEventListener('input', setInputData);

const clearData = event => {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formRef.reset();
  console.log(user);
};

formRef.addEventListener('submit', clearData);
