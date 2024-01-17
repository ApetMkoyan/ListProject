export const generateRandomID = (userData = []) => {
  let id = "";
  for (let i = 0; i < 10; i++) {
    const n = Math.floor(Math.random() * 10);
    id += n;
  }
  if (userData.find((el) => el.id == id)) {
    return generateRandomID();
  }

  return id;
};
