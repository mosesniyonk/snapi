// src/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-5xl font-bold tracking-tight">TanStack Start</h1>
      <p className="text-xl text-muted-foreground max-w-md text-center">
        Full-stack React framework with type-safe routing, server functions, and
        streaming out of the box.
      </p>
      <div className="flex gap-4">
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Dashboard
        </Link>
        <a
          href="https://tanstack.com/start/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-lg font-semibold hover:bg-accent transition-colors"
        >
          Docs
        </a>
      </div>
    </main>
  );
}
