import { timestamp } from 'drizzle-orm/pg-core';
import {pgEnum, pgTable} from 'drizzle-orm/pg-core'
import { serial } from 'drizzle-orm/pg-core';
import { integer } from 'drizzle-orm/pg-core';
import { text } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['open', 'paid', 'void', 'uncollectible'])

export const Invoices = pgTable('invoices', {
    id: serial('id').primaryKey().notNull(),
    createTs: timestamp('create_ts').defaultNow().notNull(),
    value: integer('value').notNull(),
    description: text('description').notNull(),
    status: statusEnum('status').notNull().default('open'),
});