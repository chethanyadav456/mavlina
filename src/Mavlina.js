const fact = require("./games/facts");
const axios = require(`axios`);

class Mavlina extends fact{


    async checkConnection(){
        try {
            const options = {
                method: 'GET',
                url: `https://mavlina-api.sazgal.repl.co/ping`,
              };
              const ax = await axios.request(options)
              return ax.data = "Connection Is Estabalised"
            } catch(err){
                return err = "Connection Fail"
            }
    }

     errorHandler(code,origin){
        let error = `[ MAVLINA ERROR ] Something is not right at ${origin} , with error code ${code}`
        return error
    }

    
}

module.exports = Mavlina;