import React from "react";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: { footerStatus: true },
  };
};

const playground = () => {
  return (
    <>
      <h1>PlayGround</h1>
      <Link href="/facilities">Go back to Facilities</Link>
    </>
  );
};

export default playground;
