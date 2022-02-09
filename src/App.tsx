import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Courses from "./components/CourseComponents/Courses";
import Cart from "./components/CartComponents/Cart";
import Filter from "./components/FilterComponents/Filter"
import courses from "./data/courses.json";

import styled from "styled-components";
import { Column, Row, } from "./components/MainContainer"

const CoursesSection = styled(Column)`
  justify-content: flex-start;
  display: flex;
  box-sizing: border-box;
  padding: 10px 38px 10px 38px;
  flex-direction: column;
  background-color: #fafafa;
`;

const FilterSection = styled(Column)`
  top: 0px;
  height: 50vh;
  margin-top: 50px;
`;

const CartSection = styled(Column)`
  position: sticky;
  top: 0px;
  height: 100vh;
  margin-top: 25px;
`;

type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};


const App = () => {
  const [courseData, setCourseData] = useState<Array<courseType>>(courses);
  const [cart, setCart] = useState<String[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");


  // Removes course from the cart
  const removeCourse = (course: courseType): void => {
    let stringCourse = JSON.stringify(course)
    if (cart.includes(stringCourse)) {
      if (error) {
        setError(false)
      }
      let newCart = [...cart];
    
      //delete course from the new set
      let indexOfString = newCart.indexOf(stringCourse);
      newCart.splice(indexOfString, 1);

      setCart(newCart);
    } else {
      setError(true);
      setErrorMessage("You cannot delete a course that is not in your cart.");
    }
  }


  // Adds course to the cart
  const addCourse = (course: courseType): void => {
    if (cart.length < 7) {
      if (error) {
        setError(false)
      }

      let stringCourse = JSON.stringify(course)
      let newCart = [...cart];
      newCart.push(stringCourse)
      setCart(newCart)
    } else {
      setError(true);
      setErrorMessage("You have added more than 7 courses.");
    }
  }



  const updateCourseData = (courseDataInput: Array<courseType>): void => {
    setCourseData(courseDataInput)
  }

  useEffect(() => {
  }, [cart, error, courseData])

  return (
    <>
      <Row>
      <CoursesSection percent="70%">
        <FilterSection percent="100%">
          <Navbar /> 
          <Filter updateCourseData={updateCourseData} courses={courses}/>
          <Courses cart={cart} addCourse={addCourse} removeCourse={removeCourse} courses={courseData}/>
        </FilterSection>
      </CoursesSection>

      <CartSection percent="30%">
        <Cart cart={cart} setCart={setCart} error={error} errorMsg={errorMessage} removeCourse={removeCourse}/>
      </CartSection>
      </Row>
    </>
  );
};

export default App;