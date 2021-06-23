const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      satellite: "/api/v1/",
    };
    this.middleWares();
    // Rutas de la aplicación
    this.routes();
  }

  middleWares() {
    //config cors , directorio public y express
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.paths.satellite, require("../routes/satellites"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
