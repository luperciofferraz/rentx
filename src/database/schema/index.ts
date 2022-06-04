import { appSchema } from '@nozbe/watermelondb';
import { CarSchema } from './CarSchema';

import { userSchema } from './userSchema';

const schemas = appSchema({
    version: 2,
    tables: [
        userSchema,
        CarSchema
    ]
});

export { schemas };