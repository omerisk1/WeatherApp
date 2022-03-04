import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'
import { BsFillSunFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

function DarkTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>

      <div className="md">
        {theme == "dark"
          ? <BsFillSunFill onClick={() => setTheme(theme === "dark" ? "ligth" : "dark")} className="md-dark">Dark Mode</BsFillSunFill>
          : <MdNightlight onClick={() => setTheme(theme === "dark" ? "ligth" : "dark")} className="md-dark">Dark Mode</MdNightlight>
        }
      </div>
    </div>
  )
}

export default DarkTheme