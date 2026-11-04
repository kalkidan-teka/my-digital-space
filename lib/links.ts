export function linkProps(href: string) {
    return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}