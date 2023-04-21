import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer>
        <p>{length} List {length > 1 ? "items" : "item"}</p>
        <p>Copyright&copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer