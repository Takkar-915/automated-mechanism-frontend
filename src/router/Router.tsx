import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Mechanisms } from "../components/pages/Mechanisms"
import { Generator } from "../components/pages/Generator"
import { MechanismDetail } from "../components/pages/MechanismDetail"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />}></Route>
                <Route path="/generator" element={<Generator />}></Route>
                <Route path="/mechanisms" element={<Mechanisms />}></Route>
                <Route path="/mechanisms/:id" element={<MechanismDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}