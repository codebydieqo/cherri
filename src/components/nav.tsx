import { Link } from "@tanstack/react-router";
import MaxWidthWrapper from "./max-width-wrapper";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
  return (
    <header className="w-full h-20">
      <MaxWidthWrapper className="h-full flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-0.5">
            <img src="/cherri.svg" alt="cherri" className="w-8 h-8" />
            <span className="text-3xl pacifico-regular">cherri</span>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/">
            <Button variant={"ghost"}>
              <span>Home</span>
            </Button>
          </Link>
          <SignedIn>
            <Link to="/dashboard">
              <Button variant={"ghost"}>
                <span>Dashboard</span>
              </Button>
            </Link>
            <SignOutButton>
              <Button variant={"destructive"}>Sign Out</Button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <ModeToggle />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
