const array = [
  {
    id: "SBWMiRSPGWuP2T7xV1bY",
    img1: "img1 a",
    price: 159.999,
  },
  {
    id: "sumbrut",
    img1: "coso",
    price: 159.999,
  },
];

const arrayToConsole = (clave, valor) => {
  console.log(clave, valor);
};
array.forEach((a) => {
  arrayToConsole(a.id, a.img1);
});

const arrayToStorage = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};
