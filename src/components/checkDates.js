export function dateChecker(date) {
  const currentDate = new Date();
  const pastDate = new Date(date);
  if (currentDate > pastDate) {
    return true;
  } else {
    return false;
  }
}
