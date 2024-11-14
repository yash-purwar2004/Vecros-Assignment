import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button
  } from "@nextui-org/react";
  
  export const AcmeLogo = () => (
    <a href="#" target="_self">
      <img
        src="https://vecros.com/static/media/vecros_logo_exp4.e0d68dc5e8c45587ddfb.png"
        width="100px"
        height="auto"
        alt="Acme Logo"
      />
    </a>
  );
  
  export default function Nav() {
    return (
      <Navbar isBlurred={true}>
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Product
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Solutions
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Resources
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Support
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              as={Link}
              className="bg-black rounded-md text-sm text-white"
              href="#"
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
  