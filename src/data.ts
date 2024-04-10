
import { db, Host } from 'astro:db';

export const hosts = await db.select().from(Host);

