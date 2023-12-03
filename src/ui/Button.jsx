/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


export default function Button({children, disabled, to, type, onClick}) {
  const base = "bg-yellow-400 text-sm uppercase font-semibold rounded-lg text-stone-800 inline-block tracking-wide hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus: ring-offset-2"

const styles = {
  primary: base + "px-4 py-3 md:px-6 md:py-4",
  small: base + "py-2 md:px-5 md:py-2.5 text-xs",
  secondary: " border-2 border-stone-400 uppercase font-semibold rounded-xl text-stone-800 inline-block tracking-wide px-2 py-2 hover:bg-stone-300 transition-all duration-300 focus:ring focus:ring-stone-800 focus:ring-offset",
  round: base +  "px-2 py-1 md:px-3 md:py-2 text-xs bg-yellow-400 text-sm"
}

  if (onClick) {
    return <button disabled={disabled} className={styles[type]} onClick={onClick}>{children}</button>
  }

  if (to) {
    return <Link to={to} className={styles[type]}>{children}</Link>
  }
  return (
    <button disabled={disabled} className={styles[type]}>{children}</button>
  )
}
