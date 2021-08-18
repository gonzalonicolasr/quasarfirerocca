const { Router, request } = require("express");
const { check } = require("express-validator");
const fetch = require("node-fetch");
const {
  verifySatellite,
  setSatellite,
  getPositionObject,
} = require("../controllers/satellite");
const { validarCampos } = require("../middlewares/check-fields");

const router = Router();
//validacion con express validation
router.post(
  "/topsecret",
  [
    check("satellites", "Los satélites son obligatorios").notEmpty(),
    check("satellites.*.distance", "La distancia es obligatoria").notEmpty(),
    check(
      "satellites.*.distance",
      "La distancia debe ser numérica"
    ).isNumeric(),
    check("satellites.*.message", "El mensaje es obligatorio").isArray(),
    validarCampos,
  ],
  verifySatellite
);

//validacion con express validation
router.post(
  "/topsecret_split/:name",
  [
    check(
      "name",
      "El nombre del satelite debe ser: kenobi, skywalker o sato"
    ).isIn(["kenobi", "skywalker", "sato"]),
    check("distance", "La distancia es obligatoria").notEmpty(),
    check("message", "El mensaje es obligatorio").isArray(),
    validarCampos,
  ],
  setSatellite
);

router.get("/topsecret_split", getPositionObject);

router.get("/hola", async function (req, res, next) {
  let response = await getWeather();
  await res.status(200).send(response);
});
async function getWeather() {
  const weather = await fetch(
    "https://steamcommunity.com/id/emmik/inventory/json/730/2"
  );
  let response = await weather.json();
  return response;
}
module.exports = router;
