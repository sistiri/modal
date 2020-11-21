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
    const displayFlex = document.querySelector('.modal-bg');
    displayFlex.classList.remove("modal-hidden");
    displayFlex.classList.add("modal-visible");
    // const modalBackground = document.querySelector('.modal-background');
    // modalBackground.classList.add('background-opacity');
}

// Hide Modal on Button Clicks

(function closeModalClick() {
    const closeModalButtons = document.querySelectorAll('.cancel-modal-btn');
    for (let i = 0; i < closeModalButtons.length; i += 1) {
        closeModalButtons[i].addEventListener('click', () => {
            hideModal()
        })
    };
})();

// Hide Modal on Window Clicks







function hideModal() {
    const displayFlex = document.querySelector('.modal-bg');
    displayFlex.classList.remove("modal-visible");
    displayFlex.classList.add("modal-hidden");
    // const modalBackground = document.querySelector('.modal-background');
    // modalBackground.classList.remove('background-opacity');
}