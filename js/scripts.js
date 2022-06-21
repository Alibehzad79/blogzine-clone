function alertActive() {
    const alertSuggestion = document.querySelector('#alertSuggestion');
    const closeAlertSuggestion = document.querySelector('#closeAlertSuggestion');
    closeAlertSuggestion.addEventListener('click', () => {
        {
            alertSuggestion.classList.remove('active');
        }
    })

}

alertActive();