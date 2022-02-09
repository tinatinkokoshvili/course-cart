import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Column, Row } from "../MainContainer"
import { courseNumberColor } from "../NumberColor"
import CourseInfo from "./CourseDescription";
import { SubContainer, SubTitle, SubText } from "./CourseDescription"
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove';
import ShowMore from 'react-show-more';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const CourseTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin: 0;
`;

const CourseDescription = styled.p`
  font-size: 13px;
  margin: 0 0 0 45px;
`;

const ButtonContainer = styled.div`
  padding-top: 8px;
  padding-right: 5px;
  display: flex;
  justify-content: end;
  flex-direction: column;
  float: right;
`


const CourseContainer = styled.div`
  display: flex;
  border-radius: 12px;
  height: auto;
  width: auto;
  padding: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 20px #f2f2f2;
  align-items: top;
  flex-direction: column;
  transition-duration: 0.7s;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.7s;
  }
`;


type CartButtonProps = {
  backgroundColor: boolean;
}

export const CartButton = styled.button<CartButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ? '#3262a8' : '#ab113d'};  
  border: 1px solid white;
  box-shadow: 0px 2px 0 white, 2px 4px 6px #eee;
  font-weight: 800;
  font-size: 18px;
  color: white;
  letter-spacing: 1px;
  -webkit-transition: all 150ms linear;
  transition: all 150ms linear;
  border-radius: 10%;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
    // color: #c9d7f2;
    text-decoration: none;
    -webkit-transition: all 250ms linear;
    transition: all 250ms linear;
  }
`;

  type CourseNumContainerProps = {
    courseNum: number;
  }

  export const CourseNumContainer = styled.div<CourseNumContainerProps>`
    display: flex;
    border-radius: 5px;
    min-height: 35px;
    min-width: 40px;
    max-height: 40px;
    background: ${({ courseNum }) => courseNumberColor(courseNum) || '#588afc'};
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
  `;

  const IconContainer = styled.div`
  padding-top: 8px;
  padding-right: 5px;
  display: flex;
  justify-content: end;
  flex-direction: column;
  float: right;
`
  
  const cutLines = (description: string) => {
    const myArray = description.split(" ");
    var result = "";
    for (var i = 0; i < 31; i++) {
        result = result + myArray[i];
        if (i != 20) {
          result += " ";
        }
    }
    return result;
  }

 
  type courseType = {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
  };

  interface CourseCardProps {
    dept: string;
    number: number;
    title: string;
    description: string;
    crosslisted?: string[];
    prereqs?: string[];
    cart: String[];
    addCourse: (course: courseType) => void;
    removeCourse: (course: courseType) => void;
  }


  export const CourseCard = ({
    dept, 
    number,
    title,
    description,
    crosslisted,
    prereqs,
    cart,
    addCourse,
    removeCourse
    }: CourseCardProps) => {

    const [courseData, setCourseData] = useState<courseType>();
    const [showInfo, setShowInfo] = useState<boolean>(false);

    useEffect(() => {
      console.log("changed")
    }, [showInfo])

    const courseInCart = (course: courseType):boolean => {
      let stringCourse = JSON.stringify(course)
      return cart.includes(stringCourse)
    }

    const showCourseInfo = (course: courseType): void => {
      setCourseData(course)
      setShowInfo(true)
    }

    return (
    <>
    <CourseContainer>
      <Row>
      <Column percent="85%" onClick={() => showCourseInfo({dept, number, title, crosslisted, prereqs, description})}>
          <TitleContainer>
            <CourseNumContainer courseNum={number}>{number}</CourseNumContainer>
            <CourseTitle key={`${dept}-${number}`}>{title}</CourseTitle>
          </TitleContainer>
          <CourseDescription>

          <SubContainer>
                <SubTitle>Description: </SubTitle>
                <SubText>
                      {cutLines(description)}
                </SubText>
          </SubContainer>
          <SubContainer>
            <SubTitle>Prerequisites: </SubTitle>
            <SubText>{(prereqs && prereqs.length != 0) ? "" : "None"}</SubText>
            {prereqs && prereqs.length != 0 &&
                        prereqs.map( (prereq) => (
                            <SubText>{prereq}, </SubText>
                        ))}
          </SubContainer>

          </CourseDescription>
      </Column>

      <Column percent="15%">
        <IconContainer>
          {courseInCart({dept, number, title, crosslisted, prereqs, description}) ? <RemoveIcon fontSize='default'  onClick={() => removeCourse({dept, number, title, crosslisted, prereqs, description})}></RemoveIcon>
          : <AddIcon fontSize='default'  onClick={() => addCourse({dept, number, title, crosslisted, prereqs, description})}></AddIcon>}
        </IconContainer>
      </Column>
      </Row>
          
    </CourseContainer>

    {courseData && 
    <CourseInfo course={courseData} visible={showInfo} setVisible={setShowInfo} 
        addCourse={addCourse} removeCourse={removeCourse} cart={cart}></CourseInfo>} 
    </>
    )
  }