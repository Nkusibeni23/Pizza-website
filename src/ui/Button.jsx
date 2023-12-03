/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


export default function Button({children, disabled, to}) {
   const className =" bg-yellow-400 uppercase font-semibold rounded-lg text-stone-800 py-3 px-4 inline-block tracking-wide hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus: ring-offset-2"
  if (to) {
    return <Link to={to} className={className}>{children}</Link>
  }
  return (
    <button disabled={disabled} className={className}>{children}</button>
  )
}
