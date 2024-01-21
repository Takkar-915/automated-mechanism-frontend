import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Mechanisms } from "../components/pages/Mechanisms"
import { Generator } from "../components/pages/Generator"
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />}></Route>
                <Route path="/generator" element={<Generator />}></Route>
                <Route path="/mechanisms" element={<Mechanisms />}></Route>
            </Routes>
        </BrowserRouter>
    )
}