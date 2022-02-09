import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { CartButton, }  from './CourseCard'
import { CourseNumContainer, TitleContainer }  from './CourseCard'
import Modal from 'react-modal';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove';

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '500px',
      minHeight: '250px',
      maxWidth: '500px',
      maxHeight: '500px',
      boxShadow: '0px 2px 3px 1px rgb(196, 196, 196, 0.5);'
    }
  };
const AddRemoveContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`

export const CourseTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const SubContainer = styled.div`
  margin-bottom: 8px;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 25px;
`;

export const SubText = styled.span`
  font-size: 14px;
  font-weight: 400;
  -webkit-line-clamp: 2;
`;

const IconContainer = styled.div`
padding-top: 8px;
padding-right: 5px;
display: flex;
justify-content: end;
flex-direction: column;
float: right;
`

type courseType = {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
  };
  
type CourseInfoProps = {
    course: courseType;
    visible: boolean;
    setVisible: (vis:boolean) => void;
    addCourse: (course: courseType) => void;
    removeCourse: (course: courseType) => void;
    cart: String[];
};

const CourseInfo = ({
    course,
    visible,
    setVisible,
    addCourse,
    removeCourse,
    cart}: CourseInfoProps) => {

    useEffect(() => {
    }, [visible])

    const closeModal = () => {
        setVisible(false)
    }

    const courseInCart = (courseCart: courseType): boolean => {
        let stringCourse = JSON.stringify(courseCart)
        return cart.includes(stringCourse)
    }

    return (
      <>
            <Modal isOpen={visible} onRequestClose={closeModal} style={customStyles}>
              <TitleContainer>
              <CourseNumContainer courseNum={course.number}>{course.number}</CourseNumContainer>
                <CourseTitle> - {course.title}</CourseTitle>
              </TitleContainer>

                <SubContainer>
                    <SubTitle>Description: </SubTitle>
                    <SubText>{course.description}</SubText>
                </SubContainer>
                <SubContainer>
                    <SubTitle>Prerequisite: </SubTitle>
                    <SubText>{(course.prereqs && course.prereqs.length != 0) ? "" : "None"}</SubText>
                    {course.prereqs && course.prereqs.length != 0 &&
                                course.prereqs.map( (prereq) => (
                                    <SubText>{prereq}, </SubText>
                                ))}
                </SubContainer>
                <AddRemoveContainer>
                    {courseInCart(course) ? <CartButton backgroundColor={false} onClick={() => removeCourse(course)}> Remove </CartButton> :
                    <CartButton backgroundColor={true} onClick={() => addCourse(course)}> Add </CartButton>}
                </AddRemoveContainer>
            </Modal>
        
      </>
    );
  };
  
  export default CourseInfo;