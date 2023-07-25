import { baseDatos } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Upload from "../Upload/Upload";
import { useState } from "react";

export default function UploadContainer() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const createPost = async () => {
    try {
        setLoading(true)
      const objPost = {
        title,
        category,
        img: {img1,img2,img3},
        description,
        price,
        stock,
      };

      const refProduct = collection(baseDatos, "baseDatos");
      const addPost = await addDoc(refProduct, objPost);
      console.log(addPost)
    } catch (err) {
      console.error(err);
    } finally{setLoading(false)}
  };
  loading&&<h1>Loading...</h1>

  return (
  <>
  <Upload 
  title={title}
  setTitle={setTitle}
  description={description}
  setDescription={setDescription}
  img1={img1}
  img2={img2}
  img3={img3}
  setImg2={setImg2}
  setImg3={setImg3}
  setImg1={setImg1}
  category={category}
  setCategory={setCategory}
  stock={stock}
  setStock={setStock}
  price={price}
  setPrice={setPrice}
  fn1={createPost}
  />
  </>
  )
}
