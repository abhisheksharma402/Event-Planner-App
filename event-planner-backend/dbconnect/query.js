const config = require('./config')

const queryData = async (queryBody)=>{

    const client = config.client;

    const result = await client.query(queryBody);

    return result.rows;
}



module.exports=queryData;