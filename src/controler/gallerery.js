const images = [
    '/assets/images/aset1.jpg',
    '/assets/images/aset2.jpg',
    '/assets/images/aset6.jpg',
    '/assets/images/aset5.jpg',
    '/assets/images/aset3.jpg',
    '/assets/images/aset4.jpg'
]
export default () => {
    let div = document.querySelector(`#aboutImgs`)
    images.map(image => {
        let d = document.createElement('div')
        d.classList.add('flex', 'm-2', 'p-2')
        let classes = ["w-full", "rounded-lg"]
        let img = document.createElement('img')
        img.classList.add(...classes)
        img.src = image
        img.alt = 'gallery'
        d.appendChild(img)
        div.appendChild(d)
    })
}