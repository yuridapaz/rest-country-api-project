import styled from 'styled-components';
import { RiMoonLine } from 'react-icons/ri';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 5rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: fixed;
  .page-title {
    font-size: 1.7rem;
  }
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  .moon-icon {
    margin-right: 0.5rem;
    font-size: 1.05rem;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1 className='page-title'>Where in the world ?</h1>
      <HeaderButton>
        <RiMoonLine className='moon-icon' /> Dark mode
      </HeaderButton>
    </HeaderContainer>
  );
};
