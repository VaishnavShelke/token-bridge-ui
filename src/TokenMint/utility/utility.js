export const MyJSONStringify = (obj) => {
  return JSON.stringify(obj, (key, value) => {
    if (key === "provider") {
      if (value) {
        return "Provider Present";
      } else {
        return null;
      }
    }
    return value;
  });
};
