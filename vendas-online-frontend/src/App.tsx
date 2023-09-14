import styled from 'styled-components';
import {  Button } from 'antd';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <StyledLink isBlue={count > 4} className="card">
        <Button type='primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledLink>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

interface PStyledLink {
  isBlue?: boolean;
}

const StyledLink = styled.div<PStyledLink>`
  color: ${(props) => (props.isBlue ? 'blue' : 'pink')};
  font-weight: bold;
  `;

export default App
