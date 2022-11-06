const axios = require(`axios`);
const { errorHandler } = require("../Mavlina");
const Mavlina = require("../Mavlina");
const nhei = require("./nhei");
class fact extends nhei {

    async facts(){
        try {
        const options = {
            method: 'GET',
            url: `https://mavlina-api.sazgal.repl.co/api/facts`,
          };
          const ax = await axios.request(options)
          return ax.data
        } catch(err){
         return err = "Internal Server Error"
        }
    }
}

module.exports = fact;