let nascondi = document.getElementsByClassName('hide')
let sectionsToHide = document.getElementsByClassName('rowHide')

for(let i = 0; i < sectionsToHide.length; i++) {
    nascondi[i].addEventListener('click', function (e) {
        e.preventDefault
        sectionsToHide[i].classList.toggle('d-none')
        if (nascondi[i].innerText === 'Nascondi sezione') {
            nascondi[i].innerText = 'Visualizza sezione'
        } else {
            nascondi[i].innerText = 'Nascondi sezione'
        }
    })
}
