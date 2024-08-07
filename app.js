green_states = ["AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MS",
    "MT",
    "NC",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "WA",
    "WI",
    "WV",
    "WY"]
resultElement = document.getElementById('result')


function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    if (!green_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED"
        resultElement.style.color = "red"
        return
    }

    resultElement.style.color = "green"

    if (green_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED"
        return
    }
    
}