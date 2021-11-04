// Add your code here
function submitData(firstName, emaiAd) { 
  const formData = {
      name: `${firstName}`,
      email: `${emaiAd}`,
  }

  const configure = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  },
  body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configure)
  .then(function (response) {
      return response.json();
  })
  .then (function (object) {
      let h1 = document.createElement('h1');
      document.body.innerHTML = object['id'];
  })
  .catch(function (error) {
      document.body.innerHTML += error.message; 
  });
};