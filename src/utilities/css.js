export function buildClassString(cssModule, classNames) {
  return classNames.filter(
    (className) => !! className
  ).map(
    (className) => cssModule[className]
  ).join(" ");
}
