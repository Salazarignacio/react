

export default function ItemDetail({ id, title, description }) {
  return (
    <div key={id} className='ItemDetail'>
      <h3 >{title}</h3>
      
      <p>{description}</p>
    </div>
  );
}
