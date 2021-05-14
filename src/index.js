import "./styles.css";
const url = "www.example.com/api/get/1";

fetch(url)
  .then((resp) => resp.text())
  .then((data) => {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
document.getElementById("app").innerHTML = `
<h1>Question-4</h1>
<div>
Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.
</div>
`;
