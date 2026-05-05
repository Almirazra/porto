import { useState, useEffect } from "react";
import StudentCard from "../components/StudentCard";
import Navbar from "../components/Navbar";
import "./Project.css";

function Project() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [users, setUsers] = useState([]);
  const [daftarSiswa, setDaftarSiswa] = useState(() => {
    const data = localStorage.getItem("dataSiswa");
    return data ? JSON.parse(data) : [];
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("dataSiswa", JSON.stringify(daftarSiswa));
  }, [daftarSiswa]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  function tambahSiswa(e) {
    e.preventDefault();
    if (nama === "" || kelas === "") {
      alert("Semua field harus diisi!");
      return;
    }

    if (daftarSiswa.length >= 10) {
      alert("Maksimal 10 siswa sudah tercapai!");
      return;
    }

    const siswaBaru = {
      id: Date.now(),
      nama,
      kelas,
    };

    setDaftarSiswa([...daftarSiswa, siswaBaru]);
    setNama("");
    setKelas("");
  }

  function hapusSiswa(id) {
    const dataBaru = daftarSiswa.filter(item => item.id !== id);
    setDaftarSiswa(dataBaru);
  }

  function editSiswa(id) {
    const siswa = daftarSiswa.find(item => item.id === id);
    setNama(siswa.nama);
    setKelas(siswa.kelas);
    setEditId(id);
  }

  function updateSiswa(e) {
    e.preventDefault();
    const dataUpdate = daftarSiswa.map(item =>
      item.id === editId ? { ...item, nama, kelas } : item
    );
    setDaftarSiswa(dataUpdate);
    setEditId(null);
    setNama("");
    setKelas("");
  }

  function hapusSemua() {
    if (window.confirm("Yakin ingin menghapus semua data?")) {
      setDaftarSiswa([]);
    }
  }

  return (
    <div>
      <Navbar />

      <main className="container page-wrapper project-page">
        <h1 className="page-heading">Data Siswa Lokal</h1>

        <form
          className="form-grid"
          onSubmit={editId ? updateSiswa : tambahSiswa}
        >
          <input
            className="input"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
          />

          <select
            className="input"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          >
            <option value="">Pilih Kelas</option>
            <option value="X PPLG">X PPLG</option>
            <option value="XI RPL">XI RPL</option>
            <option value="XII RPL">XII RPL</option>
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
                  setNama("");
                  setKelas("");
                }}
              >
                Batal
              </button>
            )}
          </div>
        </form>

        <div className="section-toolbar">
          <p className="section-title">Total Siswa: {daftarSiswa.length}</p>
          {daftarSiswa.length > 0 && (
            <button className="btn btn-danger" onClick={hapusSemua}>
              Hapus Semua
            </button>
          )}
        </div>

        {daftarSiswa.length === 0 ? (
          <div className="empty-state">Belum ada siswa, silakan tambahkan data terlebih dahulu.</div>
        ) : (
          <div className="card-list">
            {daftarSiswa.map(item => (
              <StudentCard
                key={item.id}
                nama={item.nama}
                kelas={item.kelas}
                onDelete={() => hapusSiswa(item.id)}
                onEdit={() => editSiswa(item.id)}
              />
            ))}
          </div>
        )}

        {daftarSiswa.length > 10 && (
          <p className="note">Kelas sudah penuh!</p>
        )}

        <hr style={{ margin: "2.5rem 0", border: "none", borderTop: "2px solid rgba(99, 102, 241, 0.2)" }} />

        <h2 className="page-heading" style={{ fontSize: "1.75rem", marginTop: 0 }}>Data dari API</h2>

        {users.length === 0 ? (
          <div className="empty-state">Memuat data dari API...</div>
        ) : (
          <div className="card-list">
            {users.map((user) => (
              <div
                key={user.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "1.25rem 1.35rem",
                  border: "1px solid rgba(15, 23, 42, 0.12)",
                  boxShadow: "0 20px 45px rgba(15, 23, 42, 0.06)",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem", color: "#0f172a" }}>{user.name}</h3>
                <p style={{ margin: "0", color: "#475569" }}>{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Project;
