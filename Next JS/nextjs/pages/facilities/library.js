import React from "react";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: { footerStatus: true },
  };
};

const library = () => {
  return (
    <>
      <h1>Library</h1>
      <Link href="/facilities">Go back to Facilities</Link>
    </>
  );
};

export default library;
