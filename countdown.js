let d = new Date((1821571200 - Math.floor(Date.now() / 1000)) * 1000);

document.getElementById("time").innerText = `${
  d.getFullYear() - 1970
} years, ${Math.floor((d.getMonth() + 1) * 30.5 + d.getDate())} days`;
