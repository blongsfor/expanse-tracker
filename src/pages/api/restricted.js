// pages/restricted.js
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Restricted() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users to the login page
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {session ? (
        <div>
          <h1>Restricted Page</h1>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
}
