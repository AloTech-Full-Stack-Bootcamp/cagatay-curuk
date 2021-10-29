const fs = require("fs");

const createDir = () => {
  if (!fs.existsSync("odev")){  // create folder if not exists
    fs.mkdir("odev", (err) => {
      if (err) console.log(err);
      console.log("Folder is created");
    });
  }
}

const writeData = () => {
  let data = '{ "name": "Çağatay", "salary": 3000 }';
  fs.writeFileSync('./odev/employees.json', data, err => {
    if (err) {
        console.log('Error write file', err)
    } else {
        console.log('Successfully write file')
    }
  })
}

const readData = () => {
  const data = fs.readFileSync('./odev/employees.json');
  return data.toString()
}

const updateData = (new_salary) => {
  const new_data = JSON.parse(readData()) // read data before update and convert object
  new_data.salary = new_salary
  fs.writeFileSync('./odev/employees.json', JSON.stringify(new_data), err => {
    if (err) {
        console.log('Error write file', err)
    } else {
        console.log('Successfully write file')
    }
  })
}

const deleteData = () => {
  fs.unlinkSync('employees.json');
  console.log("File is deleted")
}

createDir()
writeData()
readData()
updateData(6500)