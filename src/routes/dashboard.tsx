import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "../..//convex/_generated/api";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useQuery(api.users.getCurrentUser);

  return (
    <div>
      <div>
        <p>
          Welcome {user?.first_name} {user?.last_name}
        </p>
      </div>
    </div>
  );
}
