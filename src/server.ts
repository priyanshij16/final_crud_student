import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mainRoute from './routes';

// Here we set up two things - 1. middleware setup & 2. routemiddleware setup
class ServerSetup {
    expressInstance: any;
    constructor() {
        this.expressInstance = express();
        this.middlewareSetUp()
        this.routingSetUp()
    }
    private middlewareSetUp() {
        // cros - Cross Origin Resource Sharing 
        // Examine two things - 1. Domain & 2. Type of HTTP request(POST,PUT,GET etc..)
        this.expressInstance.use(cors());
        // Setup request format parsing(Only JSON request will be valid)

        this.expressInstance.use(bodyParser.urlencoded({ extended: true }));
        this.expressInstance.use(bodyParser.json());
    }
    private routingSetUp() {
        this.expressInstance.use('/', mainRoute)
    }
}

export default ServerSetup;