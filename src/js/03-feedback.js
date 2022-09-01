import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('change', throttle(initForm, 500))


initForm();

feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();
    evt.target.reset(localStorage.removeItem(STORAGE_KEY));

    const formData = new FormData(feedbackForm)
    formData.forEach((value, name) => console.log(value, name));
});

feedbackForm.addEventListener('change', evt => {

    let persistedForm = localStorage.getItem(STORAGE_KEY);
    persistedForm = persistedForm ? JSON.parse(persistedForm) : {};
    persistedForm[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedForm));
   
  

   
});
 

function initForm (){
    let persistedForm = localStorage.getItem(STORAGE_KEY);
    
    if (persistedForm) {
        persistedForm = JSON.parse(persistedForm)
        
        Object.entries(persistedForm).forEach(([name, value]) => {
            feedbackForm.elements[name].value = value;
        });
    }
};






