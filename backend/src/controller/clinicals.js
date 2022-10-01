import dao from '../dao/clinicals.js';
import mongodb from 'mongodb';

export default {
  get: (req, res) =>
    dao.get(
      { patient: mongodb.ObjectID(req.params.patientId) },
      (err, clinicalData) => res.send(clinicalData)
    ),
  create: (req, res) => {
    const clinicals = req.body;
    dao.create(clinicals, (err, clinicals) => res.send(clinicals));
  },
};
