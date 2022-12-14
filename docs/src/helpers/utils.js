export const stringSlugify = (string) => {
    return string.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}