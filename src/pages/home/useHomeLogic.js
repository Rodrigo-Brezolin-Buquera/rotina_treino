import routines from '../../api/routines';
import { useState } from "react";

export const useHomeLogic = () => {
    const today = new Date().getDay();
    const [weekday, setWeekday] = useState(today);
    const [view, setView] = useState("gym");
    const routine = routines[weekday];

    const changeView = () =>{
        if(view === "asanas") setView("gym")
        else setView("asanas")    
    }

    return { routine, view, changeView }
}