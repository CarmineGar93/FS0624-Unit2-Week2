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

let viaggi = document.querySelectorAll('img:not(header img, #recensioni img)');


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

window.addEventListener('load', () => {
    appendAlert(`There are ${viaggi.length} trips showed!`, 'info')
  })
