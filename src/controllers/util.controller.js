import {pool} from "../database.js";

export const getUtil = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM util')

        if (rows.length <= 0) {
            return res.status(404).json({message: 'util not found'})
        }
        res.json(rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const getUtilById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM util WHERE idutil = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }
        res.json(rows[0])
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const createUtil = async (req, res) => {
    const {logo, title, description} = req.body
    try {

        const [rows] = await pool.query('INSERT INTO util (logo, title, description) VALUES (?, ?, ?)', [logo, title, description])
        res.send({
            idblog: rows.insertId,
            logo,
            title,
            description
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const updateUtil = async (req, res) => {
    const {id} = req.params
    const {logo, title, description} = req.body

    try {

        const [result] = await pool.query('UPDATE util SET logo = IFNULL(?, logo), title = IFNULL(?,title), description = IFNULL(?, description) WHERE idutil = ?', [logo, title, description])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${id} does not exists`})
        }

        const [rows] = await pool.query('SELECT * FROM util WHERE idutil = ?', [id])
        res.json(rows[0])

    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const deleteUtil = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM util WHERE idutil = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }

        res.json({message: `The travel with id ${req.params.id} has been deleted successfully`})
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}