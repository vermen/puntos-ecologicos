import mongoose from "mongoose";

const puntoEcologicoSchema = mongoose.Schema({
  edificio: {
    type: String,
    required: true
  },
  piso: {
    type: String,
    required: true
  },
  resAprovechable: {
    type: Number,
    required: true
  },
  resOrganico: {
    type: Number,
    required: true,
  },
  resNoAprovechable: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: false
  }
})

const Punto = mongoose.model('PuntoEcologico', puntoEcologicoSchema);

export default Punto;