import styled from 'styled-components'

export const TasksContainer = styled.header`
  padding: 2rem 0;
`

export const TasksContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .empty {
    width: 100%;
    text-align: center;
    margin-top: 3rem;
  }
`
