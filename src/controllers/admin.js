const source = (req, res) => {
    res.send(`Here recent events of system`);
    // res.json({});
}

const home = (req, res) => {
    res.send(`Here are home`);
    // res.json({});
}

const users = (req, res) => {
    res.send(`Here are users of system`);
    // res.json({});
}

const deleteUsers = (req, res) => {
    req.send(`Here delete users of system`);
    // res.json({});
}

const docs = (req, res) => {
    res.send(`Here are docs of users`);
    // res.json({});
}

const deleteDocuments = (req, res) => {
    res.send(`Here delete documents of users`);
    // res.json({});
}

// This last route is merely optional and
// A fury development or boredom :v
// ! Do not implement if it is not necessary
const statistics = (req, res) => {
    res.send(`Here are statistics of Network, traffic, and use of system`);
}

module.exports = {
    deleteDocuments,
    deleteUsers,
    docs,
    home,
    source,
    users,
}