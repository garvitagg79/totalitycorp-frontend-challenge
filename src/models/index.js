// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Connect } = initSchema(schema);

export {
  Connect
};