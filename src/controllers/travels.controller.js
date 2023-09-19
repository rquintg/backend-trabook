import {pool} from "../database.js";

export const getTravels = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM travels')

        if (rows.length <= 0) {
            return res.status(404).json({message: 'Travels not found'})
        }
        res.json(rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const getTravelById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM travels WHERE idtravels = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }
        res.json(rows[0])
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const createTravel = async (req, res) => {
    const {pais, city, price,img, price_off, score, time} = req.body
    try {

        const [rows] = await pool.query('INSERT INTO travels (pais, city, price, img, price_off, score, time) VALUES (?, ?, ?, ?, ?, ?,?)', [pais, city, price, img, price_off, score, time])
        res.send({
            idtravels: rows.insertId,
            pais,
            city,
            price,
            img,
            price_off,
            score,
            time
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const updateTravel = async (req, res) => {
    const {id} = req.params
    const {pais, city, price, img, price_off, score, time} = req.body

    try {

        const [result] = await pool.query('UPDATE travels SET pais = IFNULL(?, pais), city = IFNULL(?, city), price = IFNULL(?,price), img = ifnull(?, img), price_off = ifnull(?, price_off), score = IFNULL(?, score), time = IFNULL(?, time) WHERE idtravels = ?', [pais, city, price, img, price_off, score, time, id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${id} does not exists`})
        }

        const [rows] = await pool.query('SELECT * FROM travels WHERE idtravels = ?', [id])
        res.json(rows[0])

    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const deleteTravel = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM travels WHERE idtravels = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }

        res.json({message: `The travel with id ${req.params.id} has been deleted successfully`})
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}