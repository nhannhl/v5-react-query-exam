import { NavLink } from "react-router-dom"

function Navbar() {
  const navLink = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/post",
      name: "Post"
    },
    {
      path: "/user",
      name: "User"
    },
    {
      path: "/userbylistid",
      name: "UserByListId"
    },
    {
      path: "/comments",
      name: "Comments"
    },
    {
      path: "/comments-infinite-load",
      name: "Infinite load"
    }
  ]

  return (
    <>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          {navLink.map((item, index) => (<li key={index}><NavLink to={item.path}>{item.name}</NavLink></li>))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar