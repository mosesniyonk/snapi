// src/routes/api/auth/$.ts
// Catch-all route: handles /api/auth/sign-in, /api/auth/sign-up, /api/auth/session, etc.
import { createServerFileRoute } from "@tanstack/react-start/server";
import { auth } from "~/server/auth";

export const ServerRoute = createServerFileRoute("/api/auth/$").methods(
  ["GET", "POST"],
  ({ request }) => auth.handler(request),
);
