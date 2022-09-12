export type ClassNameProps = {
  className?: string;
};

export type ClassNamesArgs = Array<string | null | undefined>;

export function classNames(...args: ClassNamesArgs) {
  return args.filter((entry) => {
    return !["null", "undefined"].includes(typeof entry);
  }).join(" ");
}

export function withClassNames(...args: ClassNamesArgs) {
  return {
    className: classNames(...args),
  };
}
