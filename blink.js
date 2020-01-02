const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

const { Board, Led } = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;
/** instantiate a new board for Johnny-Five - not used currently */
const board = new Board({
  io: new Raspi(),
  repl: false
});

const led = new Led("P1-13");

app.use(cors())

app.get('/', (err, res) => {
  led.blink()
  res.send({ "status": "blinking" })
})

app.get('/endBlink', (err, res) => {
  led.stop();
  led.off();
  res.send({ "status": "off" })
})
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
