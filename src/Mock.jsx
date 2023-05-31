const db = [
  { id: 1, nombre: "Televisor" },
  { id: 2, nombre: "Celular" },
  { id: 3, nombre: "Notebook" },
];

const Mock = () => {
  return new Promise((resolve, reject) => {
    resolve(db);
    reject("Error error error");
  });
};

export default Mock;
