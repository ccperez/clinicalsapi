import patientController from './controller/patient.js';
import clinicalsController from './controller/clinicals.js';

export default function clinicalRoutes(router) {
  router.get('/patients', patientController.get);
  router.post('/patients', patientController.create);
  router.put('/patients/:id', patientController.update);
  router.delete('/patients/:id', patientController.delete);

  router.get('/clinicals/:patientId', clinicalsController.get);
  router.post('/clinicals', clinicalsController.create);
}
