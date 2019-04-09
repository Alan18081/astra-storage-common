"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
exports.configService = new services_1.ConfigService(`${process.env.NODE_ENV}.env`);
