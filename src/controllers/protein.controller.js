const db = require('../database/database');
const { restart } = require('nodemon');

exports.listAllProtein = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM rnacen.protein_info ORDER BY protein_accession ASC LIMIT 100 OFFSET 0'
  );
  res.status(200).send(response.rows);
};

exports.findProteinById = async (req, res) => {
  const proteinId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM rnacen.rna WHERE id = $1', [
    proteinId,
  ]);
  res.status(200).send(response.rows);
};
