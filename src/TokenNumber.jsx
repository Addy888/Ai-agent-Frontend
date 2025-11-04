import React, { useEffect, useState } from "react";

const TokenNumber = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const newToken = "TKN-" + new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 12);
    setToken(newToken);
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Token Number</h2>
      <p className="text-blue-600 font-mono text-lg">{token}</p>
    </div>
  );
};

export default TokenNumber;
