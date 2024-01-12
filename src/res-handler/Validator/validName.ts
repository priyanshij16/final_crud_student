function isValiDate(dateString:any){
    var regexExp = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if(dateString.match(regexExp) == null){
        return false
    }
    return true
}
module.exports = isValiDate;