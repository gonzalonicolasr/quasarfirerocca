/**
 * Obtiene el mensaje en un arreglo de cada satélite y lo unifica en uno solo
 * @param {*} messages arreglo de mensajes de cada satélite
 * @returns message, mensaje en formato de texto
 */
const getMessage = (messages) => {
  let arrMessage = [];
  for (let i = 0; i < messages.length; i++) {
    for (let j = 0; j < messages[i].length; j++) {
      if (
        messages[i][j] !== "" &&
        messages[i][j] !== undefined &&
        arrMessage[j] === undefined
      ) {
        arrMessage[j] = messages[i][j].trim().toLowerCase();
      }
    }
  }
  const message = formatTextMessage(arrMessage);

  return message;
};
const extractMessage = (satellites = "") => {
  let arrMessage = [];
  satellites.forEach((element) => {
    arrMessage.push(element.message);
  });

  return arrMessage;
};
const formatTextMessage = (arrMessage) => {
  let message = "";
  for (let index = 0; index < arrMessage.length; index++) {
    message += arrMessage[index] + " ";
  }

  message = message.substring(0, message.length - 1);
  return message;
};

module.exports = {
  getMessage,
  extractMessage,
};
