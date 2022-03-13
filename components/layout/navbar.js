import Link from "next/link";
import Image from "next/image";
import bpLogo from "../../public/bpLogo.png";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <NavBar>
        <Link href="/">
          <a>
            <Image src={bpLogo} alt="" width="50" height="50" />
          </a>
        </Link>
        <ul role="list" className="layout-flex">
          <li>
            <a href="#">Consultation</a>
          </li>
          <li>
            <a href="#">Prenatal Classes</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <BookNow href="#">Book Now</BookNow>
          </li>
        </ul>
      </NavBar>
    </>
  );
}

const NavBar = styled.nav`
  --breakpoint: 70ch;
  background-color: var(--color-primary);
  padding: 1rem;
  padding-inline: 12rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &::before {
    content: "";
    flex-grow: 100;
    flex-basis: calc((var(--breakpoint) - 100%) * 500);
  }
  & > :first-child {
    order: -1;
  }
  & ul {
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bolder;
  }
  a:not([class]) {
    --outline-offset: 0.25em;
    color: var(--color-secondary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:focus,
    &:focus-visible {
      border-radius: 2px;
    }
  }
  a.navbar-image {
    color: inherit;
  }

  @media (max-width: 1200px) {
    padding-inline: 4rem;
  }
`;

const BookNow = styled.a`
  display: block;
  background-color: var(--color-tertiary);
  color: var(--color-button-text);
  padding-block: 0.75rem;
  padding-inline: 1.25rem;
  border-radius: 9999px;
  text-decoration: none;
`;

export default Navbar;
