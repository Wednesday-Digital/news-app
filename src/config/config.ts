import { config as dotEnvConfig } from 'dotenv';

import { Config } from './types/config';

let path;
switch (process.env.NODE_ENV) {
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  case 'staging':
    path = `${__dirname}/../../.env.staging`;
    break;
  case 'development':
    path = `${__dirname}/../../.env.development`;
    break;
  case 'local':
  default:
    path = `${__dirname}/../../.env.local`;
}
dotEnvConfig({ path: path });

const config: Config = {
  apiPort: parseInt(process.env.API_PORT) || 9000,
  guardianAPIURL: process.env.GUARDIAN_API_URL || 'https://content.guardianapis.com',
  guardianAPIKey: process.env.GUARDIAN_API_KEY || '68e59b6f-6441-4fb2-8618-6004e0c850e8',
};

export default config;
