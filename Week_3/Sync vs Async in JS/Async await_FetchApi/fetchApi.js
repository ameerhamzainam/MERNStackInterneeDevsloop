async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    let json;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      json = await response.json();
      // console.log(json);
    } catch (error) {
      console.error(error.message);
    }
    return json;
  }
  async function main() {
  let data = await getData();
  console.log("Data is",data);  
  }
  main();
  
  