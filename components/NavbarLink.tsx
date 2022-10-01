import { css, cx } from "#/lib/emotion.ts";
import { color } from "#/styles/theme.ts";

export type NavbarLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export function NavbarLink({ label, href, isActive }: NavbarLinkProps) {
  return (
    <a
      className={cx(css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        // width: "64px",
        height: "64px",

        backgroundColor: color.primary.dark,
        color: color.white,
        textDecoration: "none",

        ...(isActive && {
          backgroundColor: color.primary.light,
        }),
      }))}
      href={href}
    >
      {label}
    </a>
  );
}
