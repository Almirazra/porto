import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <main className="container page-wrapper">
        <h1 className="page-heading">Tentang Portfolio</h1>

        <img src="/photobooth (4).png" alt="Foto Profil" className="profile-image" />

        <p className="section-text">
          Website ini adalah portfolio pribadi yang berisi pengalaman seperti PKL, Lomba, dan Project.
        </p>

        <p className="section-text">Dibuat menggunakan:</p>
        <ul>
          <li>React JS</li>
          <li>CSS + Bootstrap</li>
          <li>React Router</li>
          <li>CRUD (Experience)</li>
        </ul>

        <p className="section-text">
          Project ini dibuat oleh <strong>Almira</strong>.
        </p>
      </main>
    </div>
  );
}

export default About;
