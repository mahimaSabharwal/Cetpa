import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return <h1>Page not found. Redirecting to homepage in 3 seconds.</h1>;
};

export default NotFound;
