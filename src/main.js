import '../style.css'
// Default theme
import '@splidejs/splide/css';


// // or other themes
// import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
// or only core styles
// import '@splidejs/splide/css/core';
import gallereryImg from './controler/gallerery'
import formValidation from './controler/formValidaton'
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Links from './components/links'
import navValidation, {} from './controler/nav'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const app = document.querySelector('#app')
app.appendChild(Header)
app.appendChild(Links)
app.appendChild(Home)
app.appendChild(About)
app.appendChild(Services)
app.appendChild(Gallery)
app.appendChild(Contact)
app.appendChild(Footer)

new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  autoScroll: {
    speed: 2,
  }
}).mount({ AutoScroll })
navValidation();
gallereryImg();
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  if (formValidation()) {
    document.querySelector('form').reset()
    alert('Form Submitted')
  }
})
