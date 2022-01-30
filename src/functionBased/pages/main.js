import React from 'react'
import { Route, Routes } from "react-router-dom"
import TodoContainer from "../components/TodoContainer"

import About from "./About"
import NotMatch from "./NotMatch"
import Navbar from "../components/Navbar";

const ToDo = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer/>}/>
        <Route path= "/about/*" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  )
}
export default ToDo