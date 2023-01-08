const express = require('express');
const { Sequelize, DataTypes } = require('sequelize')
const app = express();
const port = 3000;

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql12'
});

const Info = sequelize.define('Truck', {
    timeStamp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gpsNorthing: {
        type: DataTypes.FLOAT
        // If not specified, it defaults to true. 
    },
    gpsEasting: {
        type: DataTypes.FLOAT
    },
    fuelRate: {
        type: DataTypes.FLOAT
    },
    status: {
        type: DataTypes.STRING
    },
    payLoad: {
        type: DataTypes.FLOAT
    },
    truckID: {
        type: DataTypes.INTEGER
    },
    truckTypeID: {
        type: DataTypes.INTEGER
    },
    shovelID: {
        type: DataTypes.INTEGER
    },
    dumpID: {
        type: DataTypes.INTEGER
    },
})

app.use("/scripts", express.static("public/scripts"));
app.use("/styles", express.static("public/styles"));
app.use("/images", express.static("public/images"));
app.use("/html", express.static("app/html"));
app.use("/text", express.static("app/text"));

try {
    await sequelize.authenticate();
    console.log('Successfull');
} catch (error) {
    console.error('Unsuccessfull', error);
}

app.listen(3000, () => {
    console.log(`App listening at http://localhost:${port}`);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/html/index.html')
});

sequelize.close();



