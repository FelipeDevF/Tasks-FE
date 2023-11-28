import styled from 'styled-components'

export const TasksContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const TasksContent = styled.div`
  width: 350px;
  border-radius: 6px;
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-0']};

  .register {
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-5 ']};

    a {
      color: ${(props) => props.theme['gray-5 ']};
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme['white']};
      }
    }
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['gray-2']};
      color: ${(props) => props.theme['white']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-5']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme['white']};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`
