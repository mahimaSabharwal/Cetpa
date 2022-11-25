import React from "react";

export const getStaticPaths = () => {
  const arr = ["2022", "2021", "2020", "2019", "2018"];
  const paths = arr.map((item) => {
    return {
      params: { year: item },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const data = context.params.year;
  return {
    props: {
      result: data,
      layout: false,
    },
  };
};

const Year = ({ result }) => {
  return (
    <>
      <h1>year: {result}</h1>
    </>
  );
};

export default Year;
