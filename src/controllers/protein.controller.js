const db = require('../database/database');
const { restart } = require('nodemon');

exports.listAllProtein = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    if (!page || !limit) {
      return res.status(400).json({
        status: 'error',
        message: 'Parametros limit e page são obrigatorios',
      });
    }
    const response = await db.query(
      'SELECT * FROM rnacen.protein_info ORDER BY protein_accession ASC LIMIT $1 OFFSET $2',
      [limit, page]
    );
    res.status(200).send(response.rows);
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error interno' }).send();
  }
};

exports.findProteinById = async (req, res) => {
  const proteinId = req.params.id;
  const response = await db.query(
    'SELECT * FROM rnacen.protein_info WHERE protein_accession = $1',
    [proteinId]
  );
  res.status(200).send(response.rows);
};
