import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { Column, Row } from '../MainContainer';


const FilterContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-direction: column;
    margin-top: 30px;
`

const FilterSubTitle = styled.span`
    font-size: 17px;
    font-weight: 600;
    margin-top: 10px;
    padding-bottom: 30px;
`

const DivStyles = styled.div`
    height: 10px;
`

type courseType = {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
  };

const ordering = [
    { value: 0, label: 'Ascending Course Level' },
    { value: 1, label: 'Decending Course Level' },
    { value: 2, label: 'Alphabetical' },
    { value: 3, label: 'Lowest Number of Prereqs' }
]

const filter = [
    { value: 0, label: 'All Level' },
    { value: 1, label: '100 Level' },
    { value: 2, label: '200 Level' },
    { value: 3, label: '300 Level' },
    { value: 4, label: '400 Level' },
]



type FilterProps = {
    courses: Array<courseType>
    updateCourseData: (courseDataInput: Array<courseType>) => void;
}

const Filter = ({
    updateCourseData,
    courses}: FilterProps) => {

    const [order, setOrder] = useState<number>(0);
    const [filterType, setFilterType] = useState<number>(0);

    useEffect(() => {
        let newCourseData;
        switch (order) {
            
            case 0:
                newCourseData = [...courses.sort( (a,b) => {return a.number - b.number})]
                updateCourseData(filterData(newCourseData))
                break;
            case 1:
                newCourseData = [...courses.sort( (a,b) => {return b.number - a.number})]
                updateCourseData(filterData(newCourseData))
                break;
            case 2:
                newCourseData = [...courses.sort( (a,b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }

                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }

                    return 0;
                })]
                updateCourseData(filterData(newCourseData))
                break;

            case 3:
                newCourseData = [...courses.sort( (a,b) => {
                    if (a.prereqs) {
                        if (b.prereqs) {
                            if (b.prereqs.length > a.prereqs.length) {
                                return -1;
                            } else if (b.prereqs.length < a.prereqs.length) {
                                return 1;
                            }
                            return 0;
                        } else {
                            return 1;
                        }
                    } else {
                        if (b.prereqs) {
                            return -1;
                        } else {
                            return 0
                        }
                    }
                })]
                updateCourseData(filterData(newCourseData))
                break;
        } 
    }, [order, filterType])

   const filterData = (orderedData: Array<courseType>): Array<courseType> => {
        let newCourseData2;
        switch (filterType) {
            
            case 0:
                return orderedData
                break;
            case 1:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 1 )]
                return newCourseData2
                break;
            case 2:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 2 )]
                return newCourseData2
                break;
            case 3:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 3 )]
                return newCourseData2
                break;
            case 4:
                newCourseData2 = [...orderedData.filter(course => Math.floor(course.number / 100) == 4 )]
                return newCourseData2
                break;
        } 

        return orderedData
    }
    
    return (
        
        <FilterContainer>
            <Row>
                <Column percent="47%">
                    <FilterSubTitle>Order</FilterSubTitle>
                    <DivStyles>

                    </DivStyles>
                    <Select value={ordering[order]} options={ordering} onChange={ (value) => setOrder(value ? value.value : 0)}/>

                </Column>
                <Column percent="6%">
                </Column>
                <Column percent="47%">
                    <FilterSubTitle>Course Level</FilterSubTitle>
                    <DivStyles>
                        
                    </DivStyles>
                    <Select value={filter[filterType]}  options={filter} onChange={ (value) => setFilterType(value ? value.value : 0)}/>
                </Column>
            </Row>
        </FilterContainer>
    );
    
};

export default Filter;