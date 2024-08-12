ssdi_states = ["AR",
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
    "WY",
    ]

fe_states = [
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "DC",
    "DE",
    "FL",
    "GA",
    "IA",
    "ID",
    "IL",
    "IN",
    "LA",
    "MI",
    "MO",
    "MS",
    "NC",
    "NE",
    "NH",
    "NM",
    "OH",
    "OK",
    "PA",
    "RI",
    "SC",
    "TN",
    "TX",
    "UT",
    "VA",
    "WI",
    "WV",
    "WY" 
    ]
resultElement = document.getElementById('result')


function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    if (!(medicare_states.includes(inputtedState) || aca_states.includes(inputtedState) || u65_states.includes(inputtedState))) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR (MEDICARE) (ACA) (U65)"
        resultElement.style.color = "red"
        return
    }

    resultElement.style.color = "green"

    resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR"

    if (ssdi_states.includes(inputtedState)) {
        resultElement.textContent += " (SSDI)"
    }

    if (fe_states.includes(inputtedState)) {
        resultElement.textContent += " (FE)"
    }
    
}