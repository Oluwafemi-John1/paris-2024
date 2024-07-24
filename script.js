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

        show.innerHTML = `
            <tr>
                <td>S/N</td>
                <td>Athlete</td>
                <td>Gender</td>
                <td>Sport</td>
                <td>Country</td>
                <td>Actions</td>
            </tr>
        `

        for(var i = 0; i < allAthletes.length; i++) {
            show.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${allAthletes[i].athlete}</td>
                    <td>${allAthletes[i].gender}</td>
                    <td>${allAthletes[i].country}</td>
                    <td>${allAthletes[i].sport}</td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                        <button class="btn btn-warning">Edit</button>
                    </td>
                </tr>
            `
        }
    }
}