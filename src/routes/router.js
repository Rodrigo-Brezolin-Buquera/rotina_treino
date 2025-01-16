import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home"
import WeightPage from "../pages/weight"
import BioimpedancePage from "../pages/bioimpedance"

export const Router = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/weight" element={<WeightPage />} />
                    <Route path="/bioimpedance" element={<BioimpedancePage />} />             
                </Routes>
        </BrowserRouter>
    )
}

export default Router