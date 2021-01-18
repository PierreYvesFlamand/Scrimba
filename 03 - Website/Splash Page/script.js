const emailCollectorForm = document.querySelector('#Email-Collector');

emailCollectorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const ourFormData = new FormData(event.target);
    const userFirstName = ourFormData.get('firstName');
    const userEmailAddress = ourFormData.get('emailAddress');
    const updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
        <p class="fine-print">We'll never share your information without your permission</p>
    `;

    document.querySelector('#Main-Content').innerHTML = updatedHtmlContent;
});
