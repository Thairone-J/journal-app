const journalModel = require ('../models/journalModel')


const getAll = async (req,res) => {

    const journals = await journalModel.getAll();
    return res.status(200).json(journals);

};

module.exports = {
    getAll


}