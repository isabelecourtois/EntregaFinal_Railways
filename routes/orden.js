import express from "express";
import ordenCnt from "../controllers/orden.js"
import { isAuthenticated } from "../services/usuario.js";


const { Router } = express;
const orderRouter = Router();
const ordenCtrl = new ordenCnt();


orderRouter.post("/:userId", ordenCtrl.postOrden)
 
export default orderRouter;