import express from 'express';
import {app} from './consts';

import first, { second } from './demo1';

//here routes defined
import './routes';

app.listen(3000, () => {
  first(5,6);
  // const result = second('Muj text', 77);
  // console.log('MUJ RESULT => ', result);
  console.log('ES6 application listening on port 3000!');
});
