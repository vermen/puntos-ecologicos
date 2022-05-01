let puntosEcologicos;


const puntos = JSON.parse(localStorage.getItem('puntosEcologicos'));

if (puntos) {
  puntosEcologicos = puntos;
} else {

  puntosEcologicos = [
    {
      id: Date.now(),
      edificio: "A",
      piso: "1",
      resAprovechable: 500,
      resOrganico: 200,
      resNoAprovechable: 500,
    },

    {
      id: Date.now() + 20,
      edificio: "A",
      piso: "2",
      resAprovechable: 0,
      resOrganico: 200,
      resNoAprovechable: 50,
    },

    {
      id: Date.now() + 40,
      edificio: "B",
      piso: "3",
      resAprovechable: 0,
      resOrganico: 0,
      resNoAprovechable: 0,
    },

    {
      id: Date.now() + 60,
      edificio: "C",
      piso: "3",
      resAprovechable: 0,
      resOrganico: 0,
      resNoAprovechable: 0,
    }
  ];
}


export default puntosEcologicos;