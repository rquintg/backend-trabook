import {pool} from "../database.js";


export const getBest_travel = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM best_travel')

        if (rows.length <= 0) {
            return res.status(404).json({message: 'Travels not found'})
        }
        res.json(rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const getBest_travelById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM best_travel WHERE idbesttravel = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }
        res.json(rows[0])
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const createBestTravel = async (req, res) => {
    const {pais, city, price, time, score, img} = req.body
    try {

        const [rows] = await pool.query('INSERT INTO best_travel (pais, city, price, time, score, img) VALUES (?, ?, ?, ?, ?, ?)', [pais, city, price, time, score, img])
        res.send({
            idbesttravel: rows.insertId,
            pais,
            city,
            price,
            time,
            score,
            img
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const updateBestTravel = async (req, res) => {
    const {id} = req.params
    const {pais, city, price, time, score, img} = req.body

    try {

        const [result] = await pool.query('UPDATE best_travel SET pais = IFNULL(?, pais), city = IFNULL(?, city), price = IFNULL(?,price), time = ifnull(?, time), score = IFNULL(?, score), img = ifnull(?, img) WHERE idbesttravel = ?', [pais, city, price, time, score, img, id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${id} does not exists`})
        }

        const [rows] = await pool.query('SELECT * FROM best_travel WHERE idbesttravel = ?', [id])
        res.json(rows[0])

    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const deleteBestTravel = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM best_travel WHERE idbesttravel = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }

        res.json({message: `The travel with id ${req.params.id} has been deleted successfully`})
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}