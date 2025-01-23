import { drizzle } from 'drizzle-orm/neon-http';
import 'dotenv/config'; // This loads the .env.local file

if (!process.env.NEXT_PUBLIC_DATABASE_UR) {
  throw new Error('DATABASE_URL is not defined');
}

export const database = drizzle(process.env.NEXT_PUBLIC_DATABASE_UR);
