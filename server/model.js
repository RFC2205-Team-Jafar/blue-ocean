const client = require('./db.js');

const isSeeker = (uuid) => {
    return client.query(`
    SELECT exists 
        (SELECT 1 FROM "Seekers" WHERE user_uuid = '${uuid}'  LIMIT 1);
    `)
}


const isRecruiter = (uuid) => {
    return client.query(`
    SELECT exists 
        (SELECT 1 FROM "Recruiters" WHERE user_uuid = '${uuid}'  LIMIT 1);
    `)
}

const getUser = (uuid, userType) => {
    if(userType === 'seeker') {
        return client.query(`
            SELECT *
            FROM "Seekers"
            WHERE user_uuid = '${uuid}'
        `)
    } else {
        return client.query(`
        SELECT *
        FROM "Recruiters"
        WHERE user_uuid = '${uuid}'
    `)
    }
}

module.exports = {
    isSeeker,
    isRecruiter,
    getUser
}