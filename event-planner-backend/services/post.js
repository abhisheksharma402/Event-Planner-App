const queryData = require('../dbconnect/query');

const storeUser = async (user) =>{
    const query = `INSERT 
                    INTO public."Users" 
                    (user_name, phone,email,password,dob,address,gender,city)
                    VALUES ('${user.name}','${user.phone}','${user.email}','${user.password}','${user.dob}','${user.address}','${user.gender}','${user.city}')`;

    const res = await queryData(query);
    return res;
    
}

module.exports = {storeUser};