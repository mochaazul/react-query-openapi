import {config} from 'dotenv'
config()
export default {
  carmuk:{
    input:  process.env.VITE_BASE_URL+'/api-json',
    output: {
      workspace: './src',
      target: "./generated/api-rq.ts",
      schemas: './generated/schemas',
      client: 'react-query',
      override: {
        mutator: "./utils/axios.ts",
      },
    },
  }
};