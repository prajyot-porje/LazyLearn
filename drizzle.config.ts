import { defineConfig } from "drizzle-kit";
import 'dotenv/config'; // This loads the .env.local file

if (!process.env.NEXT_PUBLIC_DATABASE_UR) {
  throw new Error('DATABASE_URL is not defined');
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.ts",
  dbCredentials:{
    url: process.env.NEXT_PUBLIC_DATABASE_UR
  }
});
