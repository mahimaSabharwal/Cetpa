import React from "react";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: { footerStatus: true },
  };
};

const lab = () => {
  return (
    <>
      <h1>Lab</h1>
      <Link href="/facilities">Go back to Facilities</Link>
    </>
  );
};

export default lab;
