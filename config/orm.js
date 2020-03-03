const connection = require("./connection");

const selectAll = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM burgers", (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(burgerdata);
        });
    });
};

const insertOne = burgerObj => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO burgers SET ?", burgerObj, (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(burgerdata);
        });
    });
};

const updateOne = (burgerObj, burgerId) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE burgers SET ? WHERE id = ?", [burgerObj, burgerId], (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (burgerdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find a burger with that ID.", code: 404 });
            }
            resolve({ message: "Burger updated successfully.", code: 200 });
        });
    });
};

const devourOne = burgerId => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], (err, burgerdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (burgerdata.affectedRows === 0) {
                return resolve({
                    message: "Couldn't find a burger with that ID.", code: 404
                });
            }

            resolve({ message: "Burger devoured successfully.", code: 200 });
        });
    });
};

module.exports = { selectAll, insertOne, updateOne, devourOne };
