export function capitalize(str) {
  return str.slice(0, 1)[0].toUpperCase().concat(str.slice(1));
}

export function copyPW(val, cb) {
  try {
    navigator.clipboard.writeText(val);
    cb({
      text: val,
      result: 'Copied!',
    });
  } catch (err) {
    cb({
      result: 'Copy Failed',
    });
  }
}

export function truncate(str, max, cb) {
  let copy = str.slice(0, max - 3);
  cb(`${copy}...`);
}
