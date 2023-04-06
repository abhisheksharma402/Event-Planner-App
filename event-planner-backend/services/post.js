const queryData = require('../dbconnect/query');

const storeUser = async (user) =>{
    const query = `INSERT 
                    INTO public."Users" 
                    (user_name, phone,email,password,dob,address,gender,city)
                    VALUES ('${user.name}','${user.phone}','${user.email}','${user.password}','${user.dob}','${user.address}','${user.gender}','${user.city}')`;

    const res = await queryData(query);
    return res;
    
}

const storeEvent = async (event) =>{
    const query = `INSERT 
                    INTO public."Event"
                    (event_name, event_description, event_date, venue)
                    VALUES ('${event.eventName}', '${event.description}', '${event.date}', '${event.location}')`;
                    
    const res = await queryData(query);
    return res;
}

module.exports = {storeUser, storeEvent};