// src/routes/login.tsx
import { createFileRoute } from "@tanstack/react-router";
import { authClient } from "~/lib/auth-client";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = Route.useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const { error } = await authClient.signIn.email({ email, password });
    if (error) {
      setError(error.message ?? "Sign in failed");
    } else {
      await navigate({ to: "/dashboard" });
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4 border rounded-xl p-8"
      >
        <h1 className="text-2xl font-bold">Sign in</h1>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded-lg px-4 py-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded-lg px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-lg px-4 py-2 font-semibold hover:opacity-90 transition-opacity"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
