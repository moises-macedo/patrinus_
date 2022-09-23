import { useState } from "react";
import { createContext } from "react";

export const CoursesContext = createContext([])

export const CoursesProvider = ({children}) =>{
    const courses = JSON.parse(localStorage.get("@Patrinus: courses")) || []
    const [myCourses,setMyCouses] = useState(courses)


    const addCourses = (courses) =>{
        const newCourses = [...myCourses,courses];
        setMyCouses(newCourses)
        localStorage.setItem("@Patrinus: courses", JSON.stringify(newCourses))
    }

    return(
        <CoursesContext.Provider value={{myCourses, addCourses,setMyCouses}}>
            {children}
        </CoursesContext.Provider>
    )
}