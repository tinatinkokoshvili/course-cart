import React from 'react'
import styled from 'styled-components'

type ErrorContainerProps = {
    visibile: boolean;
}

const ErrorMessage = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
`

const ErrorContainer = styled.div<ErrorContainerProps>`
  background-color: #ff4a4a;
  display: ${({ visibile }) => visibile ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  margin: 20px;
  margin-bottom: 0px;
  border-radius: 8px;
  padding: 0px 5px;
  visibility: ${({ visibile }) => visibile ? 'visible' : 'hidden'};
  transition-duration: 1s;
`

type ErrorDisplayProps = {
    error: boolean;
    errorMsg: string;
  }


export const Error = ({
    error,
    errorMsg}: ErrorDisplayProps) => {

    return (
        <ErrorContainer visibile={error}>
            <ErrorMessage >ERROR: {errorMsg}</ErrorMessage>
        </ErrorContainer>
    );
}