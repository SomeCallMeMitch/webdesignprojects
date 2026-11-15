

/* Section 11 demo behaviors. No fetch, no URL submission, no analytics. */
(()=>{
  const form=document.getElementById('concept-request-form');
  const box=document.getElementById('concept-form-message');
  const unknown=document.getElementById('concept-date-unknown');
  const date=document.getElementById('concept-event-date');
  const syncDate=()=>{date.disabled=unknown.checked;date.required=!unknown.checked;if(unknown.checked)date.value=''};
  unknown.addEventListener('change',syncDate);syncDate();
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    box.textContent='Preview complete. This example would collect the event details, but this unofficial design does not send messages, check availability, store a request or reserve a date.';
    box.classList.add('visible');
    box.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
  });
})();
