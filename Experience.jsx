import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ExperienceCard from "../components/ExperienceCard";

function Experience() {
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");

  const [daftarExperience, setDaftarExperience] = useState(() => {
    const data = localStorage.getItem("dataExperience");
    return data ? JSON.parse(data) : [];
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("dataExperience", JSON.stringify(daftarExperience));
  }, [daftarExperience]);

  function tambahExperience(e) {
    e.preventDefault();

    if (judul === "" || kategori === "") {
      alert("Semua field harus diisi!");
      return;
    }

    if (daftarExperience.length >= 10) {
      alert("Maksimal 10 experience sudah tercapai!");
      return;
    }

    const dataBaru = {
      id: Date.now(),
      judul,
      kategori,
    };

    setDaftarExperience([...daftarExperience, dataBaru]);
    setJudul("");
    setKategori("");
  }

  function hapusExperience(id) {
    const dataBaru = daftarExperience.filter(item => item.id !== id);
    setDaftarExperience(dataBaru);
  }

  function editExperience(id) {
    const item = daftarExperience.find(item => item.id === id);
    setJudul(item.judul);
    setKategori(item.kategori);
    setEditId(id);
  }

  function updateExperience(e) {
    e.preventDefault();

    const dataUpdate = daftarExperience.map(item =>
      item.id === editId
        ? { ...item, judul, kategori }
        : item
    );

    setDaftarExperience(dataUpdate);
    setEditId(null);
    setJudul("");
    setKategori("");
  }

  function hapusSemua() {
    if (window.confirm("Yakin ingin menghapus semua data?")) {
      setDaftarExperience([]);
    }
  }

  return (
    <div>
      <Navbar />

      <main className="container page-wrapper">
        <h1 className="page-heading">CRUD Experience</h1>

        <form
          className="form-grid"
          onSubmit={editId ? updateExperience : tambahExperience}
        >
          <input
            className="input"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Judul Experience"
          />

          <select
            className="input"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="">Pilih Kategori</option>
            <option value="PKL">PKL</option>
            <option value="Lomba">Lomba</option>
            <option value="Project">Project</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editId ? "Update" : "Tambah"}
            </button>
            {editId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setEditId(null);
                  setJudul("");
                  setKategori("");
                }}
              >
                Batal
              </button>
            )}
          </div>
        </form>

        <div className="section-toolbar">
          <p className="section-title">Total Experience: {daftarExperience.length}</p>
          {daftarExperience.length > 0 && (
            <button className="btn btn-danger" onClick={hapusSemua}>
              Hapus Semua
            </button>
          )}
        </div>

        {daftarExperience.length === 0 ? (
          <div className="empty-state">Belum ada data experience, silakan tambahkan terlebih dahulu.</div>
        ) : (
          <div className="card-list">
            {daftarExperience.map(item => (
              <ExperienceCard
                key={item.id}
                judul={item.judul}
                kategori={item.kategori}
                onDelete={() => hapusExperience(item.id)}
                onEdit={() => editExperience(item.id)}
              />
            ))}
          </div>
        )}

        {daftarExperience.length > 10 && (
          <p className="note">Kelas sudah penuh!</p>
        )}
      </main>
    </div>
  );
}

export default Experience;
