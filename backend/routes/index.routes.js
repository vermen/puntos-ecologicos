import express from 'express'
import { obtenerPuntos, actualizarPunto, agregarPunto } from '../controllers/PuntoEcologicoController.js';

const router = express.Router();

router.get('/puntoEcologico', obtenerPuntos);
router.post('/puntoEcologico', agregarPunto);
router.put('/puntoEcologico', actualizarPunto);


export default router;