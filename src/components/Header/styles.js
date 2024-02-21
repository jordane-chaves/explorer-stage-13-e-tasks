import styled from "styled-components";
import { SCREENS_BREAKPOINTS } from "../../styles/screens-breakpoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  padding: 1rem 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 2rem;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 2.5rem;
  }

  @media (max-width: ${SCREENS_BREAKPOINTS.MD}) {
    display: block;
  }
`;
