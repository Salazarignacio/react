const baseDatos = [
  {
    id: "1",
    title: "SMART TV 50 PULGADAS 4K ULTRA HD MT50G22 - MOTOROLA",
    description: "TEL5002MOT",
    price: 239.999,
    category: "tv",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5002MOT.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5063TCL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5006PHI.jpg",
    },
  },
  {
    id: 2,
    title: "SMART TV 50 PULGADAS 4K ULTRA HD 50UQ8050PSB - LG",
    description:
      "El Smart TV LG 50 pulgadas 4K Ultra HD(3840 x 2160 píxeles). Gracias a la tecnología Crystal 4K podras disfrutar de colores vivos y detalles impresionantes con un 4K real. El procesador inteligente a5 Gen 5 mejora tu experiencia visual, para brindarte una experiencia inmersiva.",
    price: 159.999,
    category: "tv",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5080LGL.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5063TCL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5006PHI.jpg",
    },
  },
  {
    id: 3,
    title: "NOTEBOOK I3 X515EA-BR1751WPI 4G256G - ASUS",
    description: "Notebook I3 X515ea-Br1751wpi 4G256g Asus",
    price: 299.999,
    category: "notebook",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT1751ASU.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5063TCL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5006PHI.jpg",
    },
  },
  {
    id: 4,
    title: "NOTEBOOK R5 YOGA 7 14ACN6 8G512SSD - LENOVO",
    description: "NOT5008LEN",
    price: 489.999,
    category: "notebook",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/200/04/NOT5008LEN.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5063TCL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5006PHI.jpg",
    },
  },
  {
    id: 5,
    title: "RTWATCH R4 ROSE GOLD R4R - SMA",
    description: "SWA0044SMA",
    price: 23.999,
    category: "watch",
    stock: 3,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0044SMA.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5063TCL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5006PHI.jpg",
    },
  },
  {
    id: 6,
    title: "SMARTWATCH KWG1B NEGRO - KINGWEAR",
    description: "SWA0001KIW",
    price: 25.999,
    category: "watch",
    stock: 5,
    img: {
      img1: "https://www.megatone.net/Images/Articulos/zoom2x/239/SWA0001KIW.jpg",
      img2: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5063TCL.jpg",
      img3: "https://www.megatone.net/Images/Articulos/zoom2x/253/TEL5006PHI.jpg",
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
