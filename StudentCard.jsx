import "./StudentCard.css";

function StudentCard({ nama, kelas, onDelete, onEdit }) {
  return (
    <article className="student-card">
      <div className="student-card__content">
        <h3>{nama}</h3>
        <p className="student-card__meta">Kelas: {kelas}</p>
      </div>

      <div className="student-card__actions">
        <button type="button" className="btn btn-primary" onClick={onEdit}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          Hapus
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
