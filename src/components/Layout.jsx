import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";



const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "false";
    });

    // useEffect(() => {
    //     localStorage.setItem("darkMode", darkMode);
    // }, [darkMode]);



    return (
        <>
            {/* Main Layout Wrapper */}
            <div className={`h-screen flex  ${darkMode ? "bg-gray-700" : "bg-gray-100"} `}>

                {/* Sidebar (Fixed) */}
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
                {/* Main Content Section */}
                <main
                    className={`flex-1 
                    ${darkMode ? "bg-gray-700 border-gray-300 text-white" : "bg-[#f3f4f6] text-black "}
                    ${isOpen ? "ml-60" : "ml-16"}
                    overflow-y-auto transition-all duration-300`}
                >
                    {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen}
                        darkMode={darkMode} setDarkMode={setDarkMode}
                    /> */}
                    <Outlet context={{ darkMode, setDarkMode, isOpen, setIsOpen }} />
                </main>
            </div>

        </>

    );
};

export default Layout;