import { defineDb, defineTable, column } from 'astro:db';

const Host = defineTable({
  columns: {
    name: column.text({ primaryKey: true }),
    experience: column.text(),
    email: column.text(),
  }
})

const Message = defineTable({
  columns: {
    from: column.text(),
    to: column.text({ references: () => Host.columns.name }),
    content: column.text(),
  }
})

export default defineDb({
  tables: { Host, Message },
})  