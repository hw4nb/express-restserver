import { request, response } from 'express'

const usersGet = (req = request, res = response) => {
  const { q, name = 'No name', apiKey } = req.query

  res.json({
    msg: 'get API - controller',
    q,
    name,
    apiKey,
  })
}

const usersPost = (req, res = response) => {
  const { name, age } = req.body

  res.json({
    msg: 'post API - controller',
    name,
    age,
  })
}

const usersPut = (req = request, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'put API - controller',
    id,
  })
}

const usersPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controller',
  })
}

const usersDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controller',
  })
}

export { usersDelete, usersGet, usersPatch, usersPost, usersPut }
