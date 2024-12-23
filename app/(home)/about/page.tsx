export default function About() {
  return (
    <main>
      <div className="links-hover text-4xl py-20 leading-relaxed max-w-screen-lg mx-auto">
        <p className="font-normal">Jens Fischer - Tech Lead, Full Stack Engineer and Indie Hacker. German, living in New York City. Over two decades of experience crafting digital products and interactive experiences. <br /><br />
        You can reach me via <a href="https://www.linkedin.com/in/jensfischer-nyc/" target="_blank">LinkedIn</a> or <a href="mailto:jens@weareprofound.com">email</a>.</p>
      </div>


      <div className="py-12 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-medium pb-2">CLIENTS</h2>
        <p className="text-xl font-regular pb-10 text-gray-500 max-w-prose">I have been lucky to work with - and learn from - many great people and companies across diverse industries.</p>
        <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 client-logos">
          <div><img className="w-1/3" src="/clients/apple.svg" /></div>
          <div><img className="w-1/2" src="/clients/google.svg" /></div>
          <div><img className="w-4/6" src="/clients/microsoft.svg" /></div>
          <div><img className="w-1/2" src="/clients/spotify.svg" /></div>
          <div><img className="w-2/5" src="/clients/oscar.svg" /></div>
          <div><img className="w-1/2" src="/clients/shopify.svg" /></div>
          <div><img className="w-1/3" src="/clients/easports.svg" /></div>
          <div><img className="w-1/2" src="/clients/cocacola.svg" /></div>
          <div><img className="w-2/5" src="/clients/puma.svg" /></div>
          <div><img className="w-1/2" src="/clients/nationwide.svg" /></div>
          <div><img className="w-3/5" src="/clients/hotels.svg" /></div>
          <div><img className="w-1/3" src="/clients/fox.svg" /></div>
          <div><img className="w-1/3" src="/clients/htc.svg" /></div>
          <div><img className="w-1/3" src="/clients/ibm.svg" /></div>
          <div><img className="w-2/3" src="/clients/nationalgrid.svg" /></div>
          <div><img className="w-1/2" src="/clients/hp.svg" /></div>
        </div>
      </div>

      <div className="py-28 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-medium pb-2">EXPERIENCE</h2>
        <p className="text-xl font-regular pb-10 text-gray-500 max-w-prose">I have been lucky to work with - and learn from - many great people and companies across diverse industries.</p>
        <div className="resume">
          <h4>Heat Waves</h4>
          <p></p>
          <h4>Herd Health Inc.</h4>
          <p>Design and manage an innovative, efficient, and sustainable technology infrastructure that accomplishes the company’s mission and business goals within a secure and scalable platform. Oversee the design and engineering efforts holistically.</p>
          <h4>Something New</h4>
          <p>Responsible for shaping the technical strategy and vision for the company, supporting business development and overseeing successful engagement delivery. Developed systems and tooling for improved workflows towards best practices. The role meant being hands-on from pitch to post-launch, including tasks such as prototyping, architectural and sprint planning, code contribution/review, and documentation.</p>
          <h4>B-Reel</h4>
          <p>Contractor on a senior/lead level. Directly involved with pitches, client meetings, prototyping and full-stack development of campaigns, applications, microsites, and games for international brands. </p>
          <h4>Fantasy Interactive</h4>
          <p>Senior Developer on projects ranging from microsites to video portals. Involved in all aspects of the projects, from concepting, pitches, project planning, day to day client meetings, internal reviews and production efforts.</p>
          <h4>Firstborn</h4>
          <p>Worked on award winning marketing experiences for large brands, mostly as the only developer on the project, or as lead on a small team. Helped see projects through all phases; including pitch work, design, development, and client delivery.</p>
          <p><a href="/resume.pdf">Download Resume</a></p>
        </div>
      </div>

    </main>
  );
}
