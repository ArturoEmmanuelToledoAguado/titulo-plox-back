const { Connect } = require('../config/db');

const { nodeItze1: nodo1, nodeItze2: nodo2, nodeItze3: nodo3, nodeItze4: nodo4, nodeArt1: nodo5, nodeArt2:nodo6, nodeArt3:nodo7} = require('../config/keys.js');

const sendFile = (req, res) => {
    res.send(`Here are the files`);
    Connect(nodeArt1);

    // res.json({});
}

const viewFiles = (req, res) => {
    res.send(`Here are all the files`);
    // res.json({});
}

const sendReport = (req, res) => {
    res.send(`Here are the reports`);
    // res.json({});
}

// ! Do not implement if it is not needed because
// ! this route is last merely fury development
const viewReports = (req, res) => {
    res.send(`Here are all the reports of files`);
    // res.json({});
}

const deleteFile = (req, res) => {
    res.send(`Here are detele the files`);
    // res.json({});
}

const profile = (req, res) => {
    res.send(`Here are the config and profile preferences`);
    // res.json({});
}

module.exports = {
    deleteFile,
    profile,
    sendFile,
    sendReport,
    viewFiles,
    viewReports,
}