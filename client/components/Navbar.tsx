import { Navbar, NavLink, NavLinkProps } from "@mantine/core";

export default function NavbarMinimal() {
  return (
    <Navbar color="gray" style={{ zIndex: 1 } }>
      <NavLink component="a" href="/" color="gray" style={{ fontWeight: "bold" }}>
        Tebaay
      </NavLink>
      <NavLink component="a" href="/products" color="gray">
        Products
      </NavLink>
      <NavLink component="a" href="/auth" color="gray">
        Login
      </NavLink>
    </Navbar>
  )
 }