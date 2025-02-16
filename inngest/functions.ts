import { database } from "@/config";
import { inngest } from "./client";
import { usersTable } from "@/config/schema";
 // Make sure to import the eq function from the correct module
 import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ step, event }) => {
    const {user }= event.data; 
    const result = await step.run("Check if user exists in database if not create a new user", async () => {
      const userEmail = user?.primaryEmailAddress?.emailAddress;
      if (!userEmail) return;

      const Table = await database.select().from(usersTable)
        .where(eq(usersTable.email, userEmail));
      console.log(Table);
      if (Table?.length == 0) {
        const response = await database.insert(usersTable).values({
          userName: user?.fullName ?? '',
          email: user?.primaryEmailAddress?.emailAddress ?? '',
        }).returning({ id: usersTable?.id });
        console.log(response);
      }
    });
  },
);