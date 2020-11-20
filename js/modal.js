// SHow Modal

(function openModalClick() {
    const openModalButtons = document.querySelectorAll('.open-modal-btn'); 
    for (let i = 0; i < openModalButtons.length; i += 1) {
        openModalButtons[i].addEventListener('click', () => {
            showModal();
        })
    }
})();

function showModal() {
    const displayFlex = document.querySelector('.modal-container');
    displayFlex.classList.remove("display-none");
    displayFlex.classList.add("display-flex");
}

// Hide Modal

(function closeModalClick() {
    const closeModalButtons = document.querySelectorAll('.cancel-modal-btn');
    for (let i = 0; i < closeModalButtons.length; i += 1) {
        closeModalButtons[i].addEventListener('click', () => {
            hideModal()
        })
    };
})();

function hideModal() {
    const displayFlex = document.querySelector('.modal-container');
    displayFlex.classList.remove("display-flex");
    displayFlex.classList.add("display-none");
}


