callApi();

async function callApi() {
    let response = await fetch("/api/banner");
    const data = await response.json();
    console.log(data);
    // console.log(todos);
}
