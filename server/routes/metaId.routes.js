import express from 'express'
import { getAllMetaIds } from '../controller/wallet.controller.js'

const router = express.Router()

router.post('/allmetaids', getAllMetaIds)

export default router;