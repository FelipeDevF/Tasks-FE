import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const DialogTitle = styled(Dialog.Title)`
  margin-bottom: 1rem;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-1']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  strong {
    color: ${(props) => props.theme['green-500']} !important;
  }

  .cancel {
    height: 40px;
    min-width: 120px;
    border: 0;
    background-color: ${(props) => props.theme['red-1']};
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
      background-color: ${(props) => props.theme['red-0']};
      transition: background-color 0.2s;
    }
  }

  button[type='submit'] {
    height: 40px;
    min-width: 120px;
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
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: end;
  align-items: center;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-5 ']};
`