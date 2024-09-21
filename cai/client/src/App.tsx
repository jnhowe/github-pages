import { SignedIn, SignedOut, SignInButton, UserButton, useSession } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function App() {
  const { session } = useSession();
  const [startTime, setStartTime] = useState<number|null>(null);
  console.log("App is rendering: session", session);
  useEffect(() => {
    console.log("Effect is running: session", session, "startTime", startTime);
    if (session) {
      // User just logged in, start tracking session
      setStartTime(Date.now());
    } else if (startTime) {
      // User logged out, calculate session duration
      const sessionDuration = Date.now() - startTime;
      console.log(`Session lasted: ${sessionDuration / 1000} seconds`);
      // Optionally, send session duration to a backend or analytics
    }
  }, [session]);

  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}