import {
  cn,
  NavbarItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { Link, useLocation } from "@remix-run/react";
import { ROUTE_PATH } from "shared/routes/path";

const GNB_NAVIGATION = [
  {
    title: "로또 6/45",
    to: ROUTE_PATH.LOTTERY_645._path,
  },
  {
    title: "연금복권 720+",
    to: ROUTE_PATH.LOTTERY_720._path,
  },
];

const GNB = () => {
  const location = useLocation();
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
        <NavbarContent title="당첨 결과" className={cn("!flex-grow-0")}>
          {GNB_NAVIGATION.map((nav) => (
            <NavbarItem key={nav.title} isActive={location.pathname === nav.to}>
              <Link to={nav.to}>{nav.title}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default GNB;
