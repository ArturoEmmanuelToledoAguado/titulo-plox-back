const sendFile = (req, res) => {
    res.send(`Here are the files`);
}

const viewFiles = (req, res) => {
    res.send(`Here are all the files`);
}

const sendReport = (req, res) => {
    res.send(`Here are the reports`);
}

// ! Do not implement if it is not needed because
// ! this route is last merely fury development
const viewReports = (req, res) => {
    res.send(`Here are all the reports of files`);
}

const deleteFile = (req, res) => {
    res.send(`Here are detele the files`);
}

const profile = (req, res) => {
    res.send(`Here are the config and profile preferences`);
}

module.exports = {
    deleteFile,
    profile,
    sendFile,
    sendReport,
    viewFiles,
    viewReports,
}