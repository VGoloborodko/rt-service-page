const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach(elem => {
    elem.addEventListener('click', () => {

        if (elem.dataset.state == 'close') {
            elem.lastElementChild.lastElementChild.classList.add('faq__description-click');
            elem.lastElementChild.firstElementChild.classList.add('faq__subtitle-click');
            elem.firstElementChild.classList.add('faq__icon-click');
            elem.dataset.state = 'open';

        } else if (elem.dataset.state == 'open') {
            elem.lastElementChild.lastElementChild.classList.remove('faq__description-click');
            elem.lastElementChild.firstElementChild.classList.remove('faq__subtitle-click');
            elem.firstElementChild.classList.remove('faq__icon-click');
            elem.dataset.state = 'close';
        }
    })
})