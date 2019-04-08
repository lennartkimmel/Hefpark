# Bixby

Muziek recommendations

## Server

Ga naar de server map

`cd server`

Installeer alle node modules. Dit hoeft maar maar 1 keer.

`npm install`

Start de server.  

`node app.js`

Dan kan je de website openen met

`localhost:8888`

Als het goed is wordt de website nu doorgestuurd naar Spotify, waarna je een login token krijgt.
Met dit login token kan je `fetch` commando's doen naar de Spotify API.

Stop de server (als je wijzigingen hebt gedaan)

CTRL+C

## Client

Website met spotify login. De website staat in de client map. In `client/js/main.js` kan je de `fetch` commando's uitvoeren.