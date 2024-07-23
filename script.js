var allAthletes = []

function register() {
    // alert("Registered")
    var athlete = document.getElementById("athlete").value
    var gender = document.getElementById("gender").value
    var sport = document.getElementById("sport").value
    var country = document.getElementById("country").value

    if (athlete === '' || gender === '' || sport === '' || country === '') {
        // alert("I cannot be empty, I reject it")
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        var person = {
            athlete,
            gender,
            sport,
            country
        }
        allAthletes.push(person)
        console.log(allAthletes);

        for(var i = 0; i < allAthletes.length; i++) {
            show.innerHTML += `
                <p>${allAthletes[i].athlete}</p>
                <p>${allAthletes[i].gender}</p>
                <p>${allAthletes[i].country}</p>
                <p>${allAthletes[i].sport}</p>
            `
        }
    }
}