"use client";

import { useEffect } from "react";

const error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 text-center text-red-500">something went wrong</h1>
      <h1 className="my-5 text-center text-red-500">{error?.message}</h1>

      <button onClick={() => reset()} className="px-4 py-2 border border-gray-800 rounded-sm cursor-pointer">
        Reload
      </button>
    </div>
  );
};

export default error;
