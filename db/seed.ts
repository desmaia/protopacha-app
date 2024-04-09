import { db, Message } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Message).values([
		{ from: "abc@blabla", to: 'Job1' },
		{ from: "xyz@blublu", to: 'Job2'},
	  ])
}
