function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // clearInterval(modalTimerId);
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}


function modal() {
    
    // Modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    modalTrigger.forEach(modalBtn => {
        modalBtn.addEventListener('click', () => {
            openModal();
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.style.display === 'block') {
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 5000);


    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

}

export default modal;
export {closeModal};
export {openModal};