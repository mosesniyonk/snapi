// src/routes/dashboard/index.tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getSession } from "~/server/auth";

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: async () => {
    const session = await getSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: Dashboard,
});

function Dashboard() {
  const { session } = Route.useRouteContext();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome back, <strong>{session.user.email}</strong>
      </p>
    </main>
  );
}
