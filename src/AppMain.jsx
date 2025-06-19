import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createBrowserHistory } from "history";

import NavBar from "./pages/NavBar";

const history = createBrowserHistory({ basename: "/Gakuru-Alex" });
const AppMain=()=>{
    return (
        <HistoryRouter history={history}>
        <NavBar />
        <Routes>
        <Route path="/" element={< HomePage />}/>
        </Routes>
        </HistoryRouter>
    )
}
export default AppMain;