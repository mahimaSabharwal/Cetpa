import React from "react";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: { footerStatus: true },
  };
};

const sports = () => {
  return (
    <>
      <h1>Sports</h1>
      <Link href="/facilities">Go back to Facilities</Link>
    </>
  );
};

export default sports;
