import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./Components/Home"
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Departments from './Components/Departments'
import Semesters from './Components/Semesters'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import AdminLayout from './Components/Admin/AdminLayout'
import { Stprovider } from './Components/StudyContext'
import Layout from './Components/Layout'
import Subjects from "./Components/Subjects"
import Notes from './Components/Notes'
import ForgotPassword from './Components/ForgotPassword'
import Options from './Components/Options'
import QuestionP from './Components/QustionP'
import Experiments from './Components/Experiments'
import { Authprovider } from './Components/Authcontext'
import UserProfile from './Components/UserProfile'
import { CartProvider } from './Components/CartContext'
import NotesCart from './Components/NotesCart'
import QuestionPCart from './Components/QuestionPCart'
import ExpCart from './Components/ExpCart'
import MyCart from './Components/MyCart'
function App() {
  return (
    <>
      <Authprovider>
        <CartProvider>
          <Stprovider >
            <BrowserRouter>

              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path='/About' element={<About />}></Route>
                  <Route exact path='/Contact' element={<Contact />}></Route>
                  <Route exact path="/Departments" element={<Departments />}></Route>
                  <Route exact path="/Semesters/:id" element={<Semesters />}></Route>
                  <Route exact path="/Subjects/:id" element={<Subjects />}></Route>
                  <Route exact path="/Options/:id" element={<Options />}></Route>
                  <Route exact path="/Notes/:id" element={<Notes />}></Route>
                  <Route exact path="/QuestionsPapers/:id" element={<QuestionP />}></Route>
                  <Route exact path="/Experiments/:id" element={<Experiments />}></Route>
                  <Route exact path="/SignUp" element={<SignUp />}></Route>
                  <Route exact path="/Login" element={<Login />}></Route>
                  <Route exact path="/Forgot" element={<ForgotPassword />}></Route>
                  <Route exact path="/Profile" element={<UserProfile />}></Route>
                  <Route exact path="/MyCart" element={<MyCart />}></Route>
                  <Route exact path="/MyCart/Notes" element={<NotesCart />}></Route>
                  <Route exact path="/MyCart/Qp" element={<QuestionPCart />}></Route>
                  <Route exact path="/MyCart/Experiments" element={<ExpCart />}></Route>
                </Route>
                <Route path="/Admin" element={<AdminLayout />}>
                </Route>
              </Routes>
              <Footer />
            </BrowserRouter>
            <ToastContainer />
          </Stprovider>
        </CartProvider>
      </Authprovider>
    </>
  )
}

export default App
