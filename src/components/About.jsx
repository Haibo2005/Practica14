import about from "../assets/about.jpeg"
import Title from "./Title"

const About = () => {
  return (
    <section className="section" id="about">

      <Title title="about" subtitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>

        <article className="about-info">
          <h3>explore the difference</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About