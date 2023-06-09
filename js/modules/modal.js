function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}


function modal(triggerSelector, modalSelector, modalTimerId) {
    
    // Modal
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);

    modalTrigger.forEach(modalBtn => {
        modalBtn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.style.display === 'block') {
            closeModal(modalSelector);
        }
    });


    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

}

export default modal;
export {closeModal};
export {openModal};