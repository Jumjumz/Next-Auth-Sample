"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function WhoButton({ User }: { User: () => Promise<string> }) {
  const [userName, setUserName] = useState<string>();
  return (
    <div>
      <button
        onClick={async () => {
          setUserName(await User());
        }}
        className=" bg-cyan-500"
      >
        Username: {userName}
      </button>
    </div>
  );
}
