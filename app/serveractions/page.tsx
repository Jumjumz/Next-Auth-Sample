import { getServerSession } from "next-auth";
import WhoButton from "./whobutton";

export default async function ServerAction() {
  const username = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not Logged In";
  };

  return (
    <div className=" w-screen flex flex-row mt-8 flex-wrap justify-center">
      <WhoButton User={username} />
    </div>
  );
}
