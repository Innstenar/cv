function highlightSkill(element) {
    element.classList.add('highlight');
}

function unhighlightSkill(element) {
    element.classList.remove('highlight');
}

function highlightLanguage(element) {
    element.classList.add('highlight');
    element.querySelector('.confirmation').style.display = 'block';
}

function unhighlightLanguage(element) {
    element.classList.remove('highlight');
    element.querySelector('.confirmation').style.display = 'none';
}
