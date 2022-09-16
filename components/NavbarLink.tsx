import { withClassNames } from "#/lib/classNames.ts";

export type NavbarLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export function NavbarLink({ label, href, isActive }: NavbarLinkProps) {
  return (
    <a
      {...withClassNames(
        "flex flex-col w-20 h-20",
        "justify-center items-center",
        isActive && "bg-white bg-opacity-20",
      )}
      href={href}
    >
      {label}
    </a>
  );
}
