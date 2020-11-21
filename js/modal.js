// SHow Modal on Button Clicks

(function openModalClick() {
    const openModalButtons = document.querySelectorAll('.open-modal-btn'); 
    for (let i = 0; i < openModalButtons.length; i += 1) {
        openModalButtons[i].addEventListener('click', () => {
            showModal();
        })
    }
})();

function showModal() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('modal-hidden');
    modalContent.classList.add('modal-visible');
    modalContent.focus();
    const modalBackground = document.querySelector('.modal-bg');
    modalBackground.classList.remove('modal-hidden');
    modalBackground.classList.add('modal-visible');
}

// Hide Modal on Button Clicks

(function closeModalClick() {
    const closeModalButtons = document.querySelectorAll('.cancel-modal-btn');
    for (let i = 0; i < closeModalButtons.length; i += 1) {
        closeModalButtons[i].addEventListener('click', () => {
            hideModal();
        })
    };
})();


function hideModal() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('modal-visible');
    modalContent.classList.add('modal-hidden');
    const modalBackground = document.querySelector('.modal-bg');
    modalBackground.classList.remove('modal-visible');
    modalBackground.classList.add('modal-hidden');
}


// Hide Modal on Outside Click

(function outsideClickHideModal() {
    const outsideArea = document.querySelector('.modal-bg');
    outsideArea.addEventListener('click', () => {
        hideModal();
    })
})();