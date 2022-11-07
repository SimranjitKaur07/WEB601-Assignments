/**Student name: Simranjit kaur
 * Student Id: 0781503
 */
import React, {useState} from "react";
import './Movie.css';
import {RiMovie2Line} from "react-icons/ri";
import {BsCalendarRange} from "react-icons/bs";
import {FaTheaterMasks} from "react-icons/fa";
import {GiDirectorChair} from "react-icons/gi";
import {BsFillCalculatorFill} from "react-icons/bs";
export default function Movies(props){
    // eslint-disable-next-line no-unused-vars
    const [age, setAge] = useState(2022-props.year)

    return(
        <div>
            <hr /> 
            <h3>Movie Name <RiMovie2Line /> : {props.title}</h3>
            <h3>Year <BsCalendarRange /> : {props.year}</h3>
            <h3>Genre <FaTheaterMasks />: {props.genre}</h3>
            <h3>Movie Age <BsFillCalculatorFill />: {age}</h3>
            <h3>Director <GiDirectorChair />: {props.director}</h3>
            <hr />
        </div>
    )
}