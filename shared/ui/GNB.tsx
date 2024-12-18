import {
  cn,
  NavbarItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { Link } from "@remix-run/react";

const LNB = () => {
  return (
    <>
      <Navbar
        isBordered
        classNames={{
          item: ["flex", "data-[active=true]:text-primary"],
        }}
        className={cn("mb-3")}
      >
        <NavbarBrand className={cn("flex-1")}>
          <Link to="/">
            <h1 className={cn("font-logo text-3xl text-center")}>
              Oh! Lottery
            </h1>
          </Link>
        </NavbarBrand>
        <NavbarContent title="당첨 결과" className={cn(" !flex-grow-0")}>
          <NavbarItem isActive>
            <Link to={"/lottery645"}>로또 6/45</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to={"/lottery720"}>연금복권 720+</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default LNB;
