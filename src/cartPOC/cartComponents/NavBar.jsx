import React from 'react'

function NavBar() {
  const cartCount = 0;
  return (

      <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
          NavBar
          <span style={{ marginLeft: "4rem" }}>{cartCount}</span>
      </div>
  )
}

export default NavBar
