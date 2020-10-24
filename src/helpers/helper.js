export const inverseDate = (date) => {
  return date.split("/").reverse().join("-");
};

export const sanitarizeDate = (date) => {
  let sanitarize = date;
  if (sanitarize.indexOf("/") !== -1 || sanitarize.indexOf("_") !== -1) {
    sanitarize = sanitarize.replace("/", "");
    sanitarize = sanitarize.replace("_", "");
    return sanitarizeDate(sanitarize);
  }
  return sanitarize;
};
