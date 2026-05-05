import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <main className="container page-wrapper">
        <h1 className="page-heading">Halo, saya Almira 👋</h1>

        <p className="section-text">
          Ini adalah portfolio sederhana berbasis React yang berisi data pengalaman
          seperti PKL, Freelance, Lomba, dan Project.
        </p>

        <p className="section-text">
          Website ini dibuat menggunakan React, CSS, Bootstrap, routing, dan sistem CRUD sederhana.
          SENANG BERTEMU DENGAN KALIAN
        </p>
      </main>
    </div>
  );
}

export default Home;
