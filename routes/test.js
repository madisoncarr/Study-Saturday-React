const router = require('express').Router();
const Test = require('../db/models/tests');
const Student = require('../db/models/students');

router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll();
    res.send(tests);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let test = await Test.findById(req.params.id);
    if (test) {
      res.send(test);
    } else {
      res.status(404).send('Test not found');
    }
  } catch (err) {
    next(err);
  }
});

router.post('/student/:studentId', async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.studentId);
    let test = await Test.create(req.body);
    let studentTest = await test.setStudent(student);
    res.status(201).send(studentTest);
  } catch (err) {
    next(err);
  }
});

router.get('/student/:studentId', async (req, res, next) => {
  try {
    let studentId = req.params.studentId;
    let allTestsFromStudent = await Test.findAll({
      where: { studentId },
      include: [{ all: true }],
    });
    console.log('TCL: allTestsFromStudent', allTestsFromStudent);
    res.status(201).send(allTestsFromStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Test.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
