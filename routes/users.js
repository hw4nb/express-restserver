import { Router } from 'express'
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
} from '../controllers/users.js'

export const router = Router()

router.get('/', usersGet)
router.put('/:id', usersPut)
router.post('/', usersPost)
router.delete('/', usersDelete)
router.patch('/', usersPatch)
