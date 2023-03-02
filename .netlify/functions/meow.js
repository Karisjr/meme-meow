const memesdata = require("./memesdata");

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(memesdata.data)
    }
  };