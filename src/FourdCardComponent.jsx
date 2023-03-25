
export const FourdCardComponent = () => {
  return (
    <section className="section-main">
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p className="paragraph-section">Our artificial intelligence powered tools use millions of project data points to ensure that your projects succesful</p>
        <div className="cards-section">
          <article className="card-supervisor animate__animated animate__backInLeft">
            <h3>Supervisor</h3>
            <p className="paragraph-card">Monitors activity to identify project roadblocks</p>
            <img src="/images/icon-supervisor.svg" alt="" />
          </article>
          <article className="card-team animate__animated animate__backInDown">
            <h3>Team Builder</h3>
            <p className="paragraph-card">Scans our talent network to create the optimal team for your project</p>
            <img src="/images/icon-team-builder.svg" alt="" />
          </article>
          <article className="card-karma animate__animated animate__backInRight">
            <h3>Karma</h3>
            <p className="paragraph-card">Regularly evaluates our talent to ensure quality</p>
            <img src="/images/icon-karma.svg" alt="" />
          </article>
          <article className="card-calculator animate__animated animate__backInUp">
            <h3>Calculator</h3>
            <p className="paragraph-card">Uses data from past projects to provide better delivery estimates</p>
            <img src="/images/icon-calculator.svg" alt="" />
          </article>
        </div>
    </section>
  )
}

