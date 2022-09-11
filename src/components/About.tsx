export default function About() {
  return (
    <section className="about-me" id="about">

        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based out of <br/>Grand Rapids, MI</p>

        <div className="about-me__body">
            <p>{`Hi TRBL! I had been working on this resume site before I spoke with Jackie, the recruiter, but finished it quickly to get 
              it to her before she left town Friday. Over the weekend, to start prepping for the position, I refactored this site into Next.JS `}
              <a href="https://next-js-resume-mgehrls.vercel.app/" target={"_blank"}>HERE</a>. The design is the same, but I thought it was important
              to show that I am a self starter who is motivated and passionate.</p>
            <p>{`I'm a former music teacher and real estate agent, who works well in professional, and creative environments. I'm a self taught web dev who started 
            learning HTML, CSS, and JS through things like freecodecamp.org or youtube pretty blindly, but found `}<a href="https://scrimba.com/learn/frontend">Scrimba</a>
            {`, an online course from people looking to become Frontend Developers.`}</p>
            
        </div>
        <img className='about__img' src="img/deck towards.jpg" alt="Matt on his back porch with dog named Alfie." />

    </section>
  )
}
