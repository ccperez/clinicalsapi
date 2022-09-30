import dao from '../dao/patient.js';

export default patientController = {
  get: (req, res) => {
    dao.get({}, (err, patients) => res.send(patients));
  },
  create: (req, res) => {
    const patient = req.body;
    dao.create(patient, (err, patient) => res.send(patient));
  },
  update: (req, res) => {
    const patient = {
      age: req.body.age,
    };
    dao.update({ _id: req.params.id }, patient, (err, patient) =>
      res.send('Patient Updated')
    );
  },
  delete: (req, res) => {
    dao.delete({ _id: req.params.id }, (err, results) => res.send(result));
  },
};
