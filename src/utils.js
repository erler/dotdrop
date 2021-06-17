export const stringHelpers = {
  truncateMiddle: (str, padLength) => {
    let truncated = str;
    if (str && padLength && 2 * padLength < str.length) {
      truncated = `${str.substring(0, padLength)}...${str.substring(
        str.length - padLength
      )}`;
    }
    return truncated;
  },
};

export const lookupResource = (resource, key, section) => {
  let value;
  if (resource && resource[key]) {
    value =
      section in resource[key] ? resource[key][section] : resource[key].default;
  }
  return value;
};
