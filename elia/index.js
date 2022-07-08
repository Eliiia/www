function request() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://discord.com/api/webhooks/972439639707226172/Vw0nZiFCaKLcAZW-Re9Fgai8n4np6E_9L0qQtwzRQeoBf3K8jEhDz8x3FmI-HgsK_HbX"
  );
  xhr.setRequestHeader("Content-Type", "application/json");

  let data = `{
        "username": "${document.getElementById("name-box").value}",
        "content": "${document.getElementById("message-box").value}"
    }`;

  xhr.send(data);

  document.getElementById("result").style.display = "block";
}
