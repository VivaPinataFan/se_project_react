import "../ItemCard/ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="card">
      <div className="cards__text-container">
        <h2 className="cards__text">{item.name}</h2>
      </div>
      <img className="cards__image" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;
