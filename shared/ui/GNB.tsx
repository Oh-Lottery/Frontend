import { EnvelopeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
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
      <Navbar isBordered className={cn("mb-3")}>
        <NavbarBrand className={cn("flex-1")}>
          <Link to="/">
            <h1 className={cn("font-logo text-3xl text-center")}>
              Oh! Lottery
            </h1>
          </Link>
        </NavbarBrand>
        <NavbarContent title="당첨 결과" className={cn(" !flex-grow-0")}>
          <NavbarItem>
            <Link
              to={"/lottery645"}
              className={cn("text-lg flex items-center")}
            >
              <LightBulbIcon width={18} />
              로또 6/45
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to={"/lottery720"}
              className={cn("text-lg flex items-center")}
            >
              <EnvelopeIcon width={18} />
              연금복권 720+
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default LNB;
