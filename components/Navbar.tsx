import { NavbarLink } from "#/components/NavbarLink.tsx";
import { Router } from "#/contexts/Router.ts";
import { css, cx } from "#/lib/emotion.ts";
import { color, spacing } from "#/style/theme.ts";

export function Navbar() {
  return (
    <Router.Consumer>
      {({ route }) => {
        return (
          <div
            className={cx(css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: `${spacing(8)}px`,

              backgroundColor: color.primary.dark,
              color: color.white,
            }))}
          >
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
