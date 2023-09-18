import {pool} from "../database.js";

export const getBlog = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM blog')

        if (rows.length <= 0) {
            return res.status(404).json({message: 'Blog not found'})
        }
        res.json(rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const getBlogById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM blog WHERE idblog = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }
        res.json(rows[0])
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const createBlog = async (req, res) => {
    const {title, date, img} = req.body
    try {

        const [rows] = await pool.query('INSERT INTO blog (title, date, img) VALUES (?, ?, ?)', [title, date, img])
        res.send({
            idblog: rows.insertId,
            title,
            date,
            img
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const updateBlog = async (req, res) => {
    const {id} = req.params
    const {title, date, img} = req.body

    try {

        const [result] = await pool.query('UPDATE blog SET title = IFNULL(?, title), date = IFNULL(?,date), img = IFNULL(?, img) WHERE idblog = ?', [title, date, id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${id} does not exists`})
        }

        const [rows] = await pool.query('SELECT * FROM blog WHERE idblog = ?', [id])
        res.json(rows[0])

    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM blog WHERE idblog = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({message: `The travel with id ${req.params.id} does not exists`})
        }

        res.json({message: `The travel with id ${req.params.id} has been deleted successfully`})
    } catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Something goes wrong'})
    }
}