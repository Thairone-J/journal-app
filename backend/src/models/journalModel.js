const connection = require('./connection');


const getAll = async () => {
    const [journals] = await connection.execute('SELECT * FROM journals');
    return journals;
};

module.exports = {
    getAll



};

