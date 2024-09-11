"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="text-xl text-center text-red-700">
        Something went wrong!
      </h2>
      <h3 className="text-lg underline text-center text-red-700">
        Reason : {error.message}
      </h3>
      <div className="flex justify-center">
        <button
          className=" py-1.5 px-4 bg-violet-800 text-slate-200 rounded-lg shadow-md"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
