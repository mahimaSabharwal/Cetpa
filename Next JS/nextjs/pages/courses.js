import React from "react";

//Styles
import styles from "../styles/Courses.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { courseData: data },
  };
};

const courses = (props) => {
  console.log(props.courseData);
  return (
    <div>
      <h1>Courses</h1>
      <div className="row">
        {props.courseData.map((item, index) => {
          return (
            <div className="col-3 d-flex align-items-stretch gap-3">
              <div class="card mb-5" key={index}>
                <img
                  src={item.image}
                  class={[styles.img, "card-img-top"].join(" ")}
                  alt={item.title}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default courses;
