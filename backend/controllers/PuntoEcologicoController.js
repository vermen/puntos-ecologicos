import Punto from '../models/PuntoEcologico.js';

const obtenerPuntos = async (req, res) => {
  const puntos = await Punto.find();
  res.json(puntos);
}

const actualizarPunto = async (req, res) => {
  const { _id, edificio, piso, resAprovechable, resOrganico, resNoAprovechable } = req.body;
  let punto;
  try {
    punto = await Punto.findById(_id);
  } catch (error) {
    return res.status(404).json({ msg: 'No encontrado' });
  }

  punto.edificio = edificio || punto.edificio;
  punto.piso = piso || punto.piso;
  punto.resAprovechable = resAprovechable || punto.resAprovechable;
  punto.resOrganico = resOrganico || punto.resOrganico;
  punto.resNoAprovechable = resNoAprovechable || punto.resNoAprovechable;

  const total = Number(resAprovechable) + Number(resNoAprovechable) + Number(resOrganico);
  const promedio = (total * 100) / 1500;

  if (promedio > 60) {
    punto.estado = 'Limpio';
  } else {
    punto.estado = 'Contaminado';
  }
  console.log(punto);
  try {
    const puntoUpdate = await punto.save();
    res.json(puntoUpdate);
  } catch (error) {
    console.clear(error);
  }
}


const agregarPunto = async (req, res) => {

  const punto = new Punto(req.body);
  res.json(punto);

  try {
    const nuevoPunto = punto.save();
    res.json(nuevoPunto);
  } catch (error) {
    console.log(error);
  }
}

export {
  obtenerPuntos,
  actualizarPunto,
  agregarPunto
}
