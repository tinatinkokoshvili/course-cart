import styled from 'styled-components'


type ColumnProps = {
    percent: string;
};

export const Column = styled.div<ColumnProps>`
  justify-content: center;
  width: 100%;
  max-width: ${({ percent }) => percent || '25%'};
  position: relative;
  flex: 0 0 ${({ percent }) => percent || '25%'};
`;


export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


