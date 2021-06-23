const { response, request } = require("express");
const { extractMessage, getMessage } = require("../helpers/messages");
const {
  GetLocation,
  extractLocations,
  saveSatellite,
} = require("../helpers/satellites");
const { saveDb, readDb } = require("./../helpers/saveFile");
const Satellites = require("../models/satellites");

const verifySatellite = (req = request, res = response) => {
  const { satellites } = req.body;

  try {
    if (satellites?.length < 3) {
      res.status(404).json({
        msg: `no se pueda determinar la posición o el mensaje`,
      });
    }

    const ArrMessages = extractMessage(satellites);
    const message = getMessage(ArrMessages);

    const ArrDistances = extractLocations(satellites);
    const position = GetLocation(ArrDistances);

    res.json({
      position,
      message,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: " Hubo un problema, Pongase en contacto con: gonzalor@awlatam.com",
    });
  }
};

const setSatellite = (req = request, res = response) => {
  const name = req.params.name;
  const data = req.body;

  try {
    const satellites = new Satellites();
    const satellitesDb = readDb();

    if (satellitesDb) {
      // Carga el archivo guardado
      satellites.loadSatellitesFromArr(satellitesDb);
    }

    const dataSatellite = {
      name,
      distance: data.distance,
      message: data.message,
    };

    satellites.addSatellite(dataSatellite);
    saveDb(satellites.listArr);

    res.json({
      estado: "todo fue procesado!",
      satellite: dataSatellite,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hubo un problema, Pongase en contacto con: gonzalor@awlatam.com",
    });
  }
};

const getPositionObject = (req = request, res = response) => {
  try {
    const satellites = new Satellites();
    const satellitesDb = readDb();

    if (satellitesDb) {
      satellites.loadSatellitesFromArr(satellitesDb);
    }

    // verificar si hay datos suficientes para determinar posición y el mensaje
    const dataSatellites = satellites.listArr;

    if (dataSatellites?.length < 3) {
      res.status(404).json({
        //`error codigo ${error} `
        msg: "No hay suficiente información para determinar la posición y el mensaje",
        satellites: dataSatellites,
      });
    } else {
      const ArrMessages = extractMessage(dataSatellites);
      const message = getMessage(ArrMessages);

      const ArrDistances = extractLocations(dataSatellites);
      const position = GetLocation(ArrDistances);

      // Limpiamos el objeto de los satélites
      satellites.deleteAllSatellite(satellites.listArr);
      const satellitesArr = satellites.listArr;
      saveDb(satellitesArr);

      res.json({
        position,
        message,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hubo un problema, Pongase en contacto con: gonzalor@awlatam.com",
    });
  }
};

module.exports = {
  verifySatellite,
  setSatellite,
  getPositionObject,
};
