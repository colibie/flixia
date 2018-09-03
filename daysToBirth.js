//a module which calculates a birthday based on current date
//and returns the difference in days for the birthdate
// 0 means birthday is today
// 1 means birthday is next day
// 2 means birthday is day after the next
// -1 means birthday was the previous day
// -2 means birthday was the day before the previous day
// ...and so on

module.exports = function(month, day){ 
    var birth = new Date(2018, month-1, day);
    var birthMonth = birth.getMonth().toString().length == 1 ? 
                    '0'+birth.getMonth() : birth.getMonth();
    var birthDate = birth.getDate().toString().length == 1 ? 
                    '0'+birth.getDate() : birth.getDate();
    var today = new Date();
    var month = today.getMonth().toString().length == 1 ?
                '0'+ today.getMonth() : today.getMonth();
    var date = today.getDate().toString().length == 1 ?
                '0'+ today.getDate() : today.getDate();
    var birthday = birthMonth + birthDate.toLocaleString();
    var today = month + date.toLocaleString();
    var daysToBirth = birthday - today;
    return daysToBirth;
};
