var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");

const NODE_PORT = process.env.NODE_PORT || 8000;

// TODO check the dirname is correct when test
const CLIENT_FOLDER = path.join(__dirname + '/../client');
const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');

const MYSQL_USERNAME ="root";
const MYSQL_PASSWORD ="hplanet";

var app = express();

var connection = new Sequelize(
  "employees",
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  {
      host: "localhost"
      logging: console.log,
      dialect: "mysql",
      pool: {
        max: 5,
        min, 0,
        idle: 10000,
      }
  }
);

var Department = require ("./models/department")(connection, Sequelize);
var Employee = require ("./models/employee")(conn, Sequelize);
var Manager = require ("./models/deptmanager")(conn, Squelize);


app.use(express.static(CLIENT_FOLDER));
app.use(bodyParser.json());
