import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['gray-0']};
  padding: 2.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .actions {
    display: flex;
    gap: 1rem;
  }
`

export const NewTaskButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`

export const OutButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme['red-0']};
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['red-1']};
    transition: background-color 0.2s;
  }
`