import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import props from './src/config/properties.js';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(props.PORT, (err) => {
  if (err) console.log(err);
  console.log('Application Started On Port: ' + props.PORT);
});
