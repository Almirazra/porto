import "./ExperienceCard.css";

function ExperienceCard({ judul, kategori, onDelete, onEdit }) {
  return (
    <article className="experience-card">
      <div className="experience-card__details">
        <h3>{judul}</h3>
        <span className="experience-card__tag">{kategori}</span>
      </div>

      <div className="experience-card__actions">
        <button type="button" className="btn btn-secondary" onClick={onEdit}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ExperienceCard;
