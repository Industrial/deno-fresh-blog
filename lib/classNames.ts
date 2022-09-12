export type ClassNameProps = {
  className?: string;
};

export type ClassNamesArgs = Array<string | boolean | null | undefined>;

export function classNames(...args: ClassNamesArgs) {
  return args.filter((entry) => {
    return Boolean(entry);
  }).join(" ");
}

export function withClassNames(...args: ClassNamesArgs) {
  return {
    className: classNames(...args),
  };
}
