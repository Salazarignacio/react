import './Item.css';

function Item({ id, title, img, description }) {
  return (
    <div key={id} className='Item'>
      <h3> {title} </h3>
      <img src={img} className="mb-4" alt="car"/>
      <p>{description}</p>
      
  <button className="btn btn-primary" type="button">Ver Info</button>

    </div>
  );
}

export default Item;
