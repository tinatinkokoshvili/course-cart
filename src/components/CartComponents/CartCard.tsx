import React from 'react'
import styled from 'styled-components'

import { courseNumberColor } from "../NumberColor"
import CrossIcon from '@material-ui/icons/Close'


const CartCourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(199,199,199,0.8);
  padding-bottom: 10px;
  margin-bottom: 20px;
`
type CourseNumContainerProps = {
    courseNum: number;
}

const CartCourseNum = styled.div<CourseNumContainerProps>` 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 5px;
  background: ${({ courseNum }) => courseNumberColor(courseNum) || '#588afc'};;
  margin-right: 10px;
  flex-direction: column;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  box-shadow: 0px 2px 3px 1px rgb(196, 196, 196, 0.5);
  span:nth-child(1) {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 1px;
  }
  span:nth-child(2) {
    font-size: 16px;
  }
`

const CartCourseTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
`
const CartCourseCross = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adadad;
  font-size: 20px;
  float: right;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const DeleteCourseCross = styled(CrossIcon)`
  &: hover{
    color: red;
  }
`

const UpArrow = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    width: 2px;
    height: 2px;
    &:hover {
      border: solid #7d6b4b;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      width: 2px;
      height: 2px;
    }
`;



const DownArrow = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 2px;
    height: 2px;
    &:hover {
      border: solid #7d6b4b;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      width: 2px;
      height: 2px;

    }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
`

const moveCourseDown = (cart: String[], course: any, setCart: React.Dispatch<React.SetStateAction<String[]>>) => {
  console.log("downclicked");
  //create copy of cart
  const cartClone = [...cart];
  //switch indexes
  var i = cartClone.indexOf(course);
  if (i !== cartClone.length-1) {
    var temp = cartClone[i];
    cartClone[i] = cartClone[i + 1];
    cartClone[i + 1] = temp;
    //update cart use setCart
    setCart(cartClone);
  }
}

const moveCourseUp = (cart: String[], course: any, setCart: React.Dispatch<React.SetStateAction<String[]>>) => {
    console.log("upclicked");
    //create copy of cart
    const cartClone = [...cart];
    //switch indexes
    var i = cartClone.indexOf(course);
    if (i !== 0) {
      var temp = cartClone[i];
      cartClone[i] = cartClone[i - 1];
      cartClone[i - 1] = temp;
      //update cart use setCart
      setCart(cartClone);
    }
}

type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};

interface CartCardProps {
    cart: String[];
    setCart: React.Dispatch<React.SetStateAction<String[]>>;
    course: any;
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
    removeCourse: (course: courseType) => void;
}


export const CartCard = ({ 
    cart,
    setCart,
    course,
    dept,
    number,
    title,
    crosslisted,
    prereqs,
    description,
    removeCourse,
  }: CartCardProps) => (
    <>
    <CartCourseContainer>
      <ArrowContainer>
        <UpArrow onClick={() => moveCourseUp(cart, course, setCart)}> </UpArrow>
        <DownArrow onClick={() => moveCourseDown(cart, course, setCart)}> </DownArrow>
      </ArrowContainer>
       
      <CartCourseNum courseNum={number}><span>CIS</span><span>{number}</span></CartCourseNum>
      <TitleContainer>
        <CartCourseTitle>{title}</CartCourseTitle>
        <CartCourseCross onClick={() => removeCourse({dept, number, title, crosslisted, prereqs, description})}>
          <DeleteCourseCross fontSize='inherit' ></DeleteCourseCross>
        </CartCourseCross>
      </TitleContainer>
      
    </CartCourseContainer>
    </>

);