import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { courseData: data },
  };
};

const batches = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>batches</title>
      </Head>
      <>
        <h1>batches</h1>jvk
        {props.courseData.map((item, index) => {
          return <Link href={`/batches/${item.id}`}>{item.title}</Link>;
        })}
      </>
    </>
  );
};

export default batches;
