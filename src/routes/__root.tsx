import MaxWidthWrapper from "@/components/max-width-wrapper";
import Nav from "@/components/nav";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <MaxWidthWrapper>
        <Outlet />
      </MaxWidthWrapper>
    </>
  ),
});
