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


let viaggiDis = [];
let elemento
let viaggi = document.querySelectorAll('img:not(header img, #recensioni img)');
for (let i = 0; i < viaggi.length; i++) {
  elemento = viaggi[i].parentNode;
  let stile = window.getComputedStyle(elemento);
  let display = stile.display;
  if (display !== 'none') {
    viaggiDis.push(viaggi[i]);
  }
}




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
    appendAlert(`There are ${viaggiDis.length} trips showed!`, 'info')
  })


  const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}


let welcomeCards = document.querySelectorAll('#welcomeSummer .card')
let span = document.createElement('span');
  span.classList.add('position-absolute', 'top-0', 'end-0', 'badge', 'rounded-pill', 'bg-danger');
  span.innerText = 'HOT';
for (let i = 0; i < welcomeCards.length; i++) {
  welcomeCards[i].appendChild(span);
}

