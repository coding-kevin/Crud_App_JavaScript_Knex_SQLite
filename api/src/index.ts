import express from 'express'
import cors from 'cors'

const db = require('../dbConfig')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/mountains', async (req, res) => {
  try {
    const mountains = await db('mountains')
    if (mountains.length < 1) {
      res.status(404).json({ message: 'Mountains not found' })
    } else {
      res.status(200).json(mountains)
    }
  } catch (err) {
    console.log(err)
  }
})
app.get('/mountains/:id', async (req, res) => {
  const id = req.params
  try {
    const specificMountain = await db('mountains').where(id)
    if (specificMountain.length < 1) {
      res.status(404).json({ message: 'Mountain not found' })
    } else {
      res.status(200).json(specificMountain)
    }
  } catch (err) {
    console.log(err)
  }
})
app.post('/mountains', async (req, res) => {
  const newMountain = req.body
  try {
    await db('mountains').insert(newMountain)
    res.status(201).json({ message: 'Mountain added' })
  } catch (err) {
    console.log(err)
  }
})
app.delete('/mountains/:id', async (req, res) => {
  const id = req.params
  try {
    const mountains = await db('mountains').where(id)
    if (mountains < 1) {
      res.status(404).json({ message: 'Mountain not found' })
    } else {
      await db('mountains').where(id).del()
      res.status(200).json({ message: 'Mountain deleted' })
    }
  } catch (err) {
    console.log(err)
  }
})

app.listen(5010, async () => {
  try {
    console.log('🚀 Skynet is active')
  } catch (e) {
    console.error(e)
    throw new Error('There was an issue setting up the DB')
  }
})
