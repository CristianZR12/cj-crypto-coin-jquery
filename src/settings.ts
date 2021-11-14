import { config } from 'dotenv';
config();

const settingsServer = {
    port: process.env.PORT || 3500
}

export { settingsServer };