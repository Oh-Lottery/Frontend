import { EnvelopeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { cn, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { Link } from "@remix-run/react";

const LNB = () => {
  return (
    <>
      <Listbox
        className={cn(
          "w-[16rem] p-3 border-r-[1px] border-[#2B2B2B] flex items-center gap-6 "
        )}
      >
        <ListboxItem className={cn("mt-2 mb-8")}>
          <Link to="/">
            <h1 className={cn("font-logo text-3xl text-center")}>
              Oh! Lottery
            </h1>
          </Link>
        </ListboxItem>
        <ListboxSection title="당첨 결과" className={cn("text-2xl p-2")}>
          <ListboxItem className={cn("mb-1")}>
            <Link
              to={"/lottery645"}
              className={cn("text-lg flex items-center gap-2 p-1")}
            >
              <LightBulbIcon width={18} />
              로또 6/45
            </Link>
          </ListboxItem>
          <ListboxItem className={cn("my-1")}>
            <Link
              to={"/lottery720"}
              className={cn("text-lg flex items-center gap-2 p-1")}
            >
              <EnvelopeIcon width={18} />
              연금복권 720+
            </Link>
          </ListboxItem>
        </ListboxSection>
      </Listbox>
    </>
  );
};

export default LNB;
