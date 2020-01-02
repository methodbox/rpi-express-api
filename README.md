# Express API for controlling Raspberry Pi GPIO
This is extremely basic at the moment. I'm experimenting with controlling my Raspberry Pi using a simple web app; this API allows this using the Johnny-Five GPIO API.

The goal is to make this more dynamic to provide something of a web-based wrapper around Johnny-Five, or a similar RPi GPIO library.

# Usage
## Clone the Repo
Clone the repo and install node modules.

```bash
git clone https://github.com/methodbox/rpi-express-api
cd rpi-express-api
npm install
```

## Run as sudo
This needs to be run on the Raspberry Pi, and as of now you need to run it using `sudo`.

```bash
cd rpi-express-api
sudo node blink.js
```

## Example Project
Use this example from W3Schools to get started (don't use their code; I'm using Johnny-Five - just copy the breadboard setup): https://www.w3schools.com/nodejs/nodejs_raspberrypi_blinking_led.asp