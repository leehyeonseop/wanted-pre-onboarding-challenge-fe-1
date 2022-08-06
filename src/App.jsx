import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import JoinPage from "./pages/joinPage/JoinPage";

import Loginpage from "./pages/loginPage/LoginPage";
import CreatePage from "./pages/createPage/CreatePage";
import { AppWrapper, GlobalStyle } from "./App.style";
import TodoListPage from "./pages/todoListPage/TodoListPage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailPage from './pages/detailPage/DetailPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <GlobalStyle />
                <AppWrapper>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/join' element={<JoinPage />} />
                        <Route path='/login' element={<Loginpage />} />
                        <Route path='/create' element={<CreatePage />} />
                        <Route path='/list' element={<TodoListPage />} />
                        <Route path='/detail/:id' element={<DetailPage />} />
                    </Routes>
                </AppWrapper>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
