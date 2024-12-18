import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "/app/styles/tailwind.css";
import { NextUIProvider } from "@nextui-org/react";
import { cn } from "shared/lib/cn";
import LNB from "shared/ui/GNB";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/poppins",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "dark")}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={cn("h-full")}>
        <NextUIProvider className={cn("h-full")}>
          <LNB />
          <main className={cn("flex-1 p-10")}>{children}</main>
        </NextUIProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
