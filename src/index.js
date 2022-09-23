import './less/index.less'

// Your code goes here!

//Load Event
window.onload = function (event) {
    console.log(`event ${event.type} fired! Ready to go!`);
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to go!'

//Event Listener (COPY)
    window.addEventListener('copy',()=> {
        navigator.clipboard.readText()
        .then(text =>{
            heading.textContent += text;
        })
    })

//Event Listener (CLICK)
    document.body.addEventListener('click', event => {
        event.target.classList.toggle('mirror')
    })

//Event Listener (DBLCLICK)
    document.body.addEventListener('dblclick', event => {
        event.target.outerHTML = '';
    })

//Event Listener (KEYDOWN)
    window.addEventListener('keydown', event => {
        if (event.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66!</h1>'
        }
    })

//Event Listener (MOUSEMOVE)
    document.body.addEventListener('mousemove', event => {
        const {clientX, clientY} = event
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })

//Event Listener (MOUSEENTER && MOUSELEAVE)
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = "bold";
        })
        destination.addEventListener('mouseleave', () =>{
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
}


