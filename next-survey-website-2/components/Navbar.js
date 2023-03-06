import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    height: 80px;
    background: #abc;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navbar = () => {
  return (
    <Nav>
        <div>
          <Link href="/" passHref>
            Home
          </Link>
        </div>
        <div>
          <Link href="/about" passHref>
            About
          </Link>
        </div>
    </Nav>
  )
}

export default Navbar