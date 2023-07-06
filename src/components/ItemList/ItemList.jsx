import Item from "../Item/Item";


export default function ItemList({ data }) {
  return (
    <div className="mh">
      {data.map((a) => {
        return (
          <Item
            key={a.id}
            title={a.title}
            id={a.id}
            description={a.description}
            img={a.img.img1}
            category={a.category}
          ></Item>
        );
      })}
    </div>
  );
}
