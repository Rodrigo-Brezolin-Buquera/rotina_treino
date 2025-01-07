import { useState } from "react";
import routines from "./routines";

const App = () => {
  const today = new Date().getDay()
  const [weekday, setWeekday] = useState(today)
  const [view, setView] = useState("gym")

  console.log(routines[weekday].day)

  return (
    <div >
        aaaaaa
    </div>
  );
}

export default App;
