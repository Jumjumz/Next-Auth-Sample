import { headers } from "next/headers";

export default async function APIServer() {
  const resp = await fetch("http://localhost:3000/api/apiClient", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());
  return (
    <div className=" flex flex-col flex-wrap text-2xl justify-center items-center">
      API Route: Server
      <span className=" text-red-600">{resp?.name}</span>
    </div>
  );
}
