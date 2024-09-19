// pages/index.js
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div style={styles.container}>
        {session ? (
          <div>
            <h1>Welcome to the Expense Tracker</h1>
            <p>You're signed in as {session.user.name}</p>
            <Link href="/home">Add / Edit / Delete</Link>
          </div>
        ) : (
          <p>Redirecting to login...</p>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
};
