const express = require('express');
const cors = require('cors');
const Sequelize = require("sequelize");
const mysql2 = require('mysql2')

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Servidor en 3000"));

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin1234',
  database: 'uniLuisPelaez',
})

app.get('/llistaAssig/pelaez', (req, res) => {
  db.query('SELECT ASSIG_CODI, ASSIG_NOM FROM ASSIGNATURES WHERE ASSIG_DNI_PROFESSOR_RESP = ( SELECT DEPT_PROF_DNI FROM departament WHERE DEPT_NOM ="INFORMATICA I MATEMATICA APLICADA")',(err,resp)=> {
    console.log(res.body)
    if (err) console.log('Error', err)
    else res.json(resp)
  })
})
app.put('/verge/pelaez', (req, res) => {
  const { ALUMN_VIRGEN } = req.body;
  db.query(
    'ADD ALUMN_VIRGEN BIGINT;' +
    'UPDATE ALUMNES SET ALUMN_VIRGEN=?',
    [ALUMN_VIRGEN],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json("Ave Maria, ¿cuando seras mia?");
      } else {
        res.json({
          mensaje: "Modificado correctamente",
          result: result
        });
      }
    }
  );
});

const { crearConfigDB } = require("./db.config");
const db1 = crearConfigDB();
//?
app.get('/naiDe10/pelaez', async (req, res) => {
  try {
    const Alumne = await Alumne.findAll({
      include: [{
        model: Alumne,
        where: { matr_nota: 10 },
        attributes: ["alum_dni"]
      }]
    });

    res.json(Alumne);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/modifDept/pelaez', async (req, res) => {
  try {
    const departament = req.params.id;

    await departament.update(req.body, {
      where: { DEPT_CODI: dept_codi, DEPT_NOM: dept_nom, DEPT_UBICACIO:dept_ubicacio, DEPT_TELEFON: dept_telefon, DEPT_PROF_DNI: dept_prof_dni }
    });

    res.json({ message: " dept Modificat" });

  } catch (error) {
    res.status(500).json( {error , msg: "No puc, pelacanyes!" });
  }
});
