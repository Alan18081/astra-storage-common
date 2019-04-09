"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const config_instance_1 = require("./config.instance");
exports.createClientOptions = (queue) => {
    return {
        transport: microservices_1.Transport.RMQ,
        options: {
            queue,
            urls: [config_instance_1.configService.get('RABBIT_URL')],
        },
    };
};
