import {app} from './consts';

import { second } from './demo1';

app.get('/', (req, res) => {
  const result2 = second('AHOJ SERVER', 999)
  res.send(result2);
});
