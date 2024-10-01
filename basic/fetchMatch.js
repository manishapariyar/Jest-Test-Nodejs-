const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 1000); 
  });
};

module.exports = fetchData;