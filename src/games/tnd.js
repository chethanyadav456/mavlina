const axios = require(`axios`);
const Mavlina = require("../Mavlina");
class tnd {
    

   async truth(type){
    if(typeof type !== 'string') throw new Error("Type method must be in string")
    if(!type) throw new Error('You have to pass the type method')
    let method = ['normal','nsfw']
    if(!method.includes(type))  throw new Error('You have provided wrong type method')
        try {
           
            const options = {
                method: 'GET',
                url: `https://mavlina-api.sazgal.repl.co/api/truth?type=${type}`,
              };
              const ax = await axios.request(options)
              return ax.data
        } catch(err){
            return err = "Internal Server Error"
        }
    }

   async dare(){

    try {
        const options = {
            method: 'GET',
            url: `https://mavlina-api.sazgal.repl.co/api/dare`,
          };
          const ax = await axios.request(options)
          return ax.data
    } catch(err){
        return err = "Internal Server Error"
    }}

    async randomtnd(type){
        if(typeof type !== 'string') throw new Error("Type method must be in string")
        if(!type) throw new Error('You have to pass the type method')
        let method = ['normal','nsfw']
        if(!method.includes(type))  throw new Error('You have provided wrong type method')
        let api = [
            `https://mavlina-api.sazgal.repl.co/api/truth?type=${type}`,
            `https://mavlina-api.sazgal.repl.co/api/dare?type=${type}`
        ]
        var apis = Math.floor(Math.random()*api.length);
        try {
        const options = {
            method: 'GET',
            url: `${api[apis]}`,
          };
          const ax = await axios.request(options)
          return ax.data
        } catch(err){
              return err = "Internal Server Error"
        }
    }
}

module.exports = tnd;