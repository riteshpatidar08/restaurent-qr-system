import express from 'express' ;
import { createTable, getTableBySlug } from '../controllers/table.controller.js';

const router = express.Router() ;

router.post('/tables',createTable )
router.get('/tables/:slug' , getTableBySlug)

export default router
