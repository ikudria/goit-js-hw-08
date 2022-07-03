import throttle from 'lodash.throttle';

const FEEDBACK_FORM = "feedback-form-state";
const form = document.querySelector('.feedback-form');
// console.log(form);

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// const dataForm = {};
let dataForm = localStorage.getItem(FEEDBACK_FORM) ?  JSON.parse(localStorage.getItem(FEEDBACK_FORM)) : {};

function onFormInput(event) {

    const { target } = event;
    const elTargetName = target.name;
    const elTargetValue = target.value;
    // console.log(target);

    
  
        dataForm = {
        ...dataForm,
        [elTargetName]: elTargetValue,
    }


    // console.log(dataForm);

    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(dataForm));

}

function populateForm () {
    const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    // console.log(formData);

    for (const key in formData) {
        const inputEl = form.elements[key];
        const inputValue = formData[key];
        // console.log(inputEl);
        // console.log(inputValue);

        inputEl.value = inputValue;
    }
}

function onFormSubmit(event) {
    event.preventDefault();

    
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
    localStorage.removeItem(FEEDBACK_FORM);
    
}


populateForm();