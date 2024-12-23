export default function HomePage() {
  return (
    <main className="max-w-screen-lg mx-auto px-8 py-24">

      <div className="text-4xl leading-snug text-stone-900 dark:text-stone-300">
        <p className="font-bold">Hey!</p>
        <p className="font-normal">I&apos;m Jens Fischer, a Tech Lead and Full Stack Engineer based out of NYC. I take pride in clean, scalable user experiences, that are built with attention to detail.</p>
      </div>

      <div>
        <div className="pt-14">
          <a href="/garden" className="card">
            <h2>Digital Garden</h2>
            <p>Personal notes on topics that I am interested in.</p>
          </a>
        </div>

        <div className="pt-8">
          <a href="/showcase" className="card">
            <h2>Showcase</h2>
            <p>Case studies and demos of products I have built.</p>
          </a>
        </div>

        <div className="pt-8">
          <a href="/about" className="card ">
            <h2>About</h2>
            <p>Resume, client list and contact.</p>
          </a>
        </div> 
      </div>

    </main>
  );
}
