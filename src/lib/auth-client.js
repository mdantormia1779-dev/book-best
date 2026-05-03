import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL না দিলেও same domain এ কাজ করবে
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const { signIn, signUp, useSession } = authClient;