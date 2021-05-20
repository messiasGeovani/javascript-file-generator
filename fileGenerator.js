const fs = require("fs");

function generateString(length) {
  const result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function storeRandomData() {
  const currentRandomData = generateData();

  fs.writeFile("randomData.txt", currentRandomData, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

function generateData() {
  const randomData = Array(Array.from(20).keys()).map((item) => str);

  return createFile(randomData);
}

function createFile(dataArray) {
  let stringData = "";

  dataArray.forEach((data, index) => {
    stringData += data + ";";
    stringData += index % 5 === 0 ? "\n" : "";
  });

  return stringData;
}

storeRandomData();
