function request() {
  fetch(document.getElementById("requestaddr").value)
    .then((res) => {
      res.json().then((data) => {
        document.getElementById("result").value = JSON.stringify(data, null, 4);
      });
    })
    .catch((e) => {
      console.log(`Fetch error: ${e}`);
      document.getElementById("result").value = `Fetch error: ${e}`;
    });
}
