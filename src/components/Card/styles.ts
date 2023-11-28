import styled from "styled-components";

export const CardContent = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-3']};
  border-radius: 6px;

  display: flex;
  justify-content: start;
  align-items: center;
`

export const Title = styled.div`
  width: 35%;
`

export const Description = styled.div`
  width: 40%;
`

export const Responsible = styled.div`
  width: 15%;
`

export const Actions = styled.div`
  width: 10%;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
`