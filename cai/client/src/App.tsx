// import { SignedIn, SignedOut, SignInButton, UserButton, useSession } from "@clerk/clerk-react";
// import { useEffect, useState } from "react";

// export default function App() {
//   const { session } = useSession();
//   const [startTime, setStartTime] = useState<number|null>(null);
//   console.log("App is rendering: session", session);
//   useEffect(() => {
//     console.log("Effect is running: session", session, "startTime", startTime);
//     if (session) {
//       // User just logged in, start tracking session
//       setStartTime(Date.now());
//     } else if (startTime) {
//       // User logged out, calculate session duration
//       const sessionDuration = Date.now() - startTime;
//       console.log(`Session lasted: ${sessionDuration / 1000} seconds`);
//       // Optionally, send session duration to a backend or analytics
//     }
//   }, [session]);

//   return (
//     <header>
//       <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
//   );
// }

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
