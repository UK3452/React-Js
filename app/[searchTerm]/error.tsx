"use client";

import { use, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log of error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went Wrong!</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
