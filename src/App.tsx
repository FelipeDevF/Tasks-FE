import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Tasks } from "./pages/Tasks";
import { TasksProvider } from "./contexts/TasksContexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import RouteRequiresLogin from "./components/RouteRequiresLogin";
import { Register } from "./pages/register";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RouteRequiresLogin component={<Tasks />} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </ThemeProvider>
  )
}







