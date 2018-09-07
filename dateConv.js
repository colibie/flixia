function releaseDate(releaseDate){
    if (releaseDate){
        let day = parseInt(releaseDate % 100);
        let month = parseInt((releaseDate/100) % 100);
        let year = parseInt(releaseDate/10000);
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = `${months[month-1]} ${day}, ${year}`;
        return date;
    }else{
        return 'Ouch, we don\'t know this yet'
    }
};

function birthDate(dateOfBirth){
    if (dateOfBirth){
        let day = parseInt(dateOfBirth % 100);
        let month = parseInt((dateOfBirth/100) % 100);
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = `${months[month-1]} ${day}`;
        return date;
    }else{
        return 'Ouch, we don\'t know this yet'
    }
}

function addCommas(number){
    var number = number.toLocaleString();
    return number;
}
console.log(addCommas(123897856456.789));
