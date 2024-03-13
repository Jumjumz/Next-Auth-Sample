import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
        Server Session Result
        {session?.user?.name ? (
          <div>{session.user.name}</div>
        ) : (
          <div>Not Logged In</div>
        )}
      </main>
    </>
  );
}
