import styled from '@emotion/styled';

export const Stats = styled.div`
  color: #4d5264;
  max-width: 200px;
   `;

  export const StatItem = styled.p`
  color: #4d5264;
  font-size: 16px;
  padding: 10px;
  background-color: #f3f3f5;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  border-right: 1px solid #e4e9f0;
  
  &:last-child {
    border-right: none;
  }
`;