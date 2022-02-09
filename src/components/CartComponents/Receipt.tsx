import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { CourseNumContainer } from "../CourseComponents/CourseCard";
import { Column } from "../MainContainer"

const CourseReceiptTitle = styled.h2`
    text-align: center;
    width: 100%;
    font-size: 35px;
`

const ReceiptCourseDescription = styled.p`
    text-align: center;
`

const CourseBox = styled.div`
    border: 4px solid #95c5cf;
    border-radius: 5px;
    min-height: 60px;
    padding: 10px 10px;
    width: 100%;
    margin-top: 10px;
`

const CourseRecNumber = styled.h5`
    margin-bottom: 5px;
    font-size: 18px;
`

const CourseRecTitle = styled.p`
    margin-bottom: 0px;
`

const ReceiptRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;




type cartType = Set<string>;


const Receipt = (props: any) => {

    let cart:cartType = props.location.state

    if (cart === undefined) {
        return (<div><h2>Error. Please return to home page.</h2></div>)
    }
    return (
        <>
            <ReceiptRow>
                <Column  percent="50%">
                <CourseReceiptTitle>Course Receipt</CourseReceiptTitle>
                <ReceiptCourseDescription>You have successfully enrolled in:</ReceiptCourseDescription>
                {console.log(cart.size)}
                {   
                    (Array.from(cart).map( (course) =>(
                        <CourseBox key={(JSON.parse(course)).number}>
                        <CourseNumContainer courseNum={(JSON.parse(course)).number}>CIS {(JSON.parse(course)).number}</CourseNumContainer>
                        <CourseRecTitle>
                        {(JSON.parse(course)).title}
                        </CourseRecTitle>
                        </CourseBox>
                    ))) 
                }
                </Column>
            </ReceiptRow>
        </>
    )
}

export default Receipt;