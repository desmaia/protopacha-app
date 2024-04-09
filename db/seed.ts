import { db, Message, Host } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Host).values([
		{ name: "Job1", experience: 'pick up olives', email: "job1@whatever" },
		{ name: "Job2", experience: 'pick up cherries', email: "job2@whatever"},
		{ name: "Job3", experience: 'pick up cherries', email: "job2@whatever"}
	  ])
	await db.insert(Message).values([
		{ from: "abc@blabla", to: 'Job1', content: "I want to apply" },
		{ from: "xyz@blublu", to: 'Job2', content: "I also want to apply"},
	  ])
}
