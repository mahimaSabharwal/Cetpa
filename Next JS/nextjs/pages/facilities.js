import React from "react";
import Link from "next/link";

const facilities = () => {
  return (
    <>
      <h1>Facilities</h1>
      <ul>
        <li>
          <Link href="/facilities/lab">lab</Link>
        </li>
        <li>
          <Link href="/facilities/library">library</Link>
        </li>
        <li>
          <Link href="/facilities/playground">playground</Link>
        </li>
        <li>
          <Link href="/facilities/sports">sports</Link>
        </li>
      </ul>
    </>
  );
};

export default facilities;
