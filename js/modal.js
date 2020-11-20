// SHow Modal

(function openModal() {
    const openModal = document.querySelector('.modal-opener');
    openModal.addEventListener('click', () => {showModal()});
})();
     


function showModal() {
 const displayFlex = document.querySelector('.modal-container');
 displayFlex.classList.add("display-flex");
}

// Hide Modal

(function closeModal() {
    const closeModal = document.querySelectorAll('.cancel-modal');
    for(let i = 0; i < closeModal.length; i += 1) {
        closeModal[i].addEventListener('click', () => {hideModal()
    })
    };
})();
     


function hideModal() {
    const displayFlex = document.querySelector('.modal-container');
    displayFlex.classList.add("display-none");
   }