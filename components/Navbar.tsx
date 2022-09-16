import { Router } from "#/contexts/Router.ts";
import { NavbarLink } from "#/components/NavbarLink.tsx";

export function Navbar() {
  return (
    <Router.Consumer>
      {({ route }) => {
        return (
          <div className="flex justify-center items-center h-20 bg-blue-400 text-white">
            <NavbarLink
              label="Blog"
              href="/"
              isActive={route.startsWith("/post") || route === "/"}
            />
            <NavbarLink
              label="About"
              href="/about"
              isActive={route === "/about"}
            />
            <NavbarLink
              label="Contact"
              href="/contact"
              isActive={route === "/contact"}
            />
          </div>
        );
      }}
    </Router.Consumer>
  );
}
