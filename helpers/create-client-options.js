"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
exports.createClientOptions = (queue, url) => {
    return {
        transport: microservices_1.Transport.RMQ,
        options: {
            queue,
            urls: [url],
        },
    };
};
