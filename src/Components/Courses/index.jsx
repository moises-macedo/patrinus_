import { CourseStyle } from './style';
import {AiFillStar} from 'react-icons/ai';
import { useState } from 'react';
export const CourseComponent = () => {
    const [isOn, setIsOn] = useState(false);

    const favoriteCourse = () =>{
        setIsOn(!isOn);
    }
    return (
        <CourseStyle>
          <p>nameCourse</p>
          <p>typeCourse</p>
          <p>instCourse</p>
          <AiFillStar  onClick={favoriteCourse} color={isOn ? "yellow" : "black"} size={50}/>
        </CourseStyle>
    )
}