const baseDatos = [
  {
    id: "1",
    title: "SA SA SABORRRRR",
    description: "TEL5002MOT",
    price: 239.999,
    category: "tv",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5002MOT.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5002MOT.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5002MOT.jpg"
    
    },
  },
  {
    id: 2,
    title: "SMART TV 50 4K ULTRA HD - LG",
    description:
      "El Smart TV LG 50 pulgadas 4K Ultra HD(3840 x 2160 píxeles). Gracias a la tecnología Crystal 4K podras disfrutar de colores vivos y detalles impresionantes con un 4K real. El procesador inteligente a5 Gen 5 mejora tu experiencia visual, para brindarte una experiencia inmersiva.",
    price: 159.999,
    category: "tv",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5080LGL.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5080LGL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5080LGL.jpg",
      
    },
  },
  {
    id: 3,
    title: "NOTEBOOK I3 - ASUS",
    description: "Notebook I3 X515ea-Br1751wpi 4G256g Asus",
    price: 299.999,
    category: "notebook",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT1751ASU.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT1751ASU.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT1751ASU.jpg",
      
    },
  },
  {
    id: 4,
    title: "NOTEBOOK R5 - LENOVO",
    description: "NOT5008LEN",
    price: 489.999,
    category: "notebook",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT5008LEN.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT5008LEN.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT5008LEN.jpg",
      
    },
  },
  {
    id: 5,
    title: "RTWATCH R4 - SMA",
    description: "SWA0044SMA",
    price: 23.999,
    category: "watch",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0044SMA.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0044SMA.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0044SMA.jpg",
      
    },
  },
  {
    id: 6,
    title: "SMARTWATCH - KINGWEAR",
    description: "SWA0001KIW",
    price: 25.999,
    category: "watch",
    stock: 5,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0001KIW.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0001KIW.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0001KIW.jpg",
      
    },
  },
];

export function getDetail(par) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(baseDatos.find((a) => a.id == par));
      reject("Error en Detail");
    }, 2000);
  });
}
export function getCategory(par) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(baseDatos.filter((a) => a.category == par));
      reject("Error en Category");
    }, 2000);
  });
}

export default function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(baseDatos);
      reject("Error error error");
    }, 2000);
  });
}
