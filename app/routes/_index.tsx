import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Oh! Lottery" },
    { name: "description", content: "Welcome to Oh! Lottery" },
  ];
};

export default function Index() {
  return <div className="flex h-screen items-center justify-center"></div>;
}
