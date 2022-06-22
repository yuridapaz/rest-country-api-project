import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 5rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.5px 0.5px 10px gray;
  position: fixed;
  .page-title {
    font-size: 1.7rem;
  }
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;

  .btn-icon {
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1 className='page-title'>Where in the world ?</h1>
      <HeaderButton>
        <span>ICON</span> Dark mode
      </HeaderButton>
    </HeaderContainer>
  );
};
