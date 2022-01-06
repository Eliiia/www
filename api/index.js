function request() {
    fetch(document.getElementById("requestaddr").value)
        .then((res) => {
            if(res.status != 200) {
                `There was a problem. Status code: ${res.status}`
                document.getElementById("result").value = `There was a problem; status code: ${res.status}`
                return
            }

            res.json().then((data) => {
                document.getElementById("result").value = data
            })   
        })
        .catch((e) => {
            console.log(`Fetch error: ${e}`)
            document.getElementById("result").value = `Fetch error: ${e}`
        })
}