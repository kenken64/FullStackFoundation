var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");

const NODE_PORT = process.env.NODE_PORT || 8000;

// TODO check the dirname is correct when test
const CLIENT_FOLDER = path.join(__dirname + '/../client');

const MSG_FOLDER = path.join(CLIENT_FOLDER + '/assets/messages');

var app = express();
