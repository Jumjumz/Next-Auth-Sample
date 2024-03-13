"use client";

import { useEffect, useState } from "react";

export default function APClient() {
  const [userName, setUserName] = useState<string>();
  useEffect(() => {
    fetch("/api/apiClient")
      .then((res) => res.json())
      .then((data) => setUserName(data.name));
  }, []);
  return (
    <div className=" text-2xl flex flex-col flex-wrap items-center">
      API Route: Client
      <span className=" text-red-600">{userName}</span>
    </div>
  );
}
