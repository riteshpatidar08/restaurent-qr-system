import express from 'express' ;
import { createTable } from '../controllers/table.controller.js';

const router = express.Router() ;

router.post('/tables',createTable )


export default router
