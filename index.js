function findMatching(driverNames, string){
    return driverNames.filter(function(element){
        return element.toUpperCase().startsWith(string.toUpperCase());
    });
}
function fuzzyMatch(driverNames, string){
    return driverNames.filter(function(element){
        return element.startsWith(string);
    })
}
function matchName(drivers, string){
    return drivers.filter(function(element){
        return element.name === string;
    })
}