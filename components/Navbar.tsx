import { Router } from "#/contexts/Router.ts";
import { withClassNames } from "#/lib/classNames.ts";

export function Navbar() {
  return (
    <Router.Consumer>
      {({ route }) => {
        return (
          <div className="flex justify-center items-center h-20 bg-blue-400 text-white">
            <a
              {...withClassNames(
                "pl-4 pr-4 pt-7 pb-7",
                (route.startsWith("/post") || route === "/") && "font-bold",
              )}
              href="/"
            >
              Blog
            </a>
            <a
              {...withClassNames(
                "pl-4 pr-4 pt-7 pb-7",
                route === "/about" && "font-bold",
              )}
              href="/about"
            >
              About
            </a>
            <a
              {...withClassNames(
                "pl-4 pr-4 pt-7 pb-7",
                route === "/contact" && "font-bold",
              )}
              href="/contact"
            >
              Contact
            </a>
          </div>
        );
      }}
    </Router.Consumer>
  );
}
