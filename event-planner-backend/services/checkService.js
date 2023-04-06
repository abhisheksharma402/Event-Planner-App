const queryData = require('../dbconnect/query');

const getByEmail = async (email)=>{
    console.log(email);
    const query = `SELECT * FROM public."Users" where email='${email}'`;
    const res = await queryData(query);
    return res;
}

module.exports = {getByEmail};