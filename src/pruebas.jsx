const array = [
  {
    id: "SBWMiRSPGWuP2T7xV1bY",
    img1: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/eceb0cef-d378-485f-bb51-29af7a550853_1.e3a4676c3ab68cf3eb29befa4276f2c0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    price: 159.999,
  },
];

const buscar = array.find((a) => a.id == "SBWMiRSPGWuP2T7xV1bY");
console.log(buscar);

buscar ? console.log("si") : console.log("no");

console.log(buscar.id)
