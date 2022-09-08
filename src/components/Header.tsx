export default function Header() {
  return (
    <header>
    <div className="logo"><a className='logo__link' href="/#">#</a>
    </div>

    <button onClick={() => {
      document.body.classList.toggle('nav-open')
  }} className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
    </button>

    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact Info</a></li>
            <li className="nav__item"><a href="#jobs" className="nav__link">Job History</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#details" className="nav__link">CTA!</a></li>
        </ul>
    </nav>
</header>
  )
}
