import './ItemDetail.css'
import Counter from '../counter/Counter';

export default function ItemDetail({ id, img, title, description, price }) {
  return (
    <div key={id} className='ItemDetail container-md p-4 mt-4 mb-4'>
      <div>
      <h3 >{title}</h3>
      <img src={img}/>
      </div>
      <div>
      <p className='price'>${price}</p>
      <p>{description}</p>
      <Counter></Counter>
      </div>
    </div>
  );
}
