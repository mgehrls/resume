import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link")

if(navToggle !== null){
  navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open')
  })
}
navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);


