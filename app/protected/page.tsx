import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <div className=" p-16 flex flex-row justify-center text-center">
      Session Protected.
      <br />
      Status: Authenticated
    </div>
  );
}
