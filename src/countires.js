function convertObject(obj) {
    let newArr = [];
    for (let key in obj) {
      let newObj = {};
      newObj.name = key;
      newObj.prefix = obj[key].prefix;
      newArr.push(newObj);
    }
    return newArr;
  }

export default convertObject({
                "Argentina":      {"prefix" : "ar." },
                "Australia":      {"prefix" : "au." },
                "Austria":        {"prefix" : "at." },
                "Bahrain":        {"prefix" : "bh." },
                "Belgium":        {"prefix" : "be." },
                "Brazil":         {"prefix" : "br." },
                "Canada":         {"prefix" : "ca." },
                "Chile":          {"prefix" : "cl." },
                "China":          {"prefix" : "cn." },
                "Colombia":       {"prefix" : "co." },
                "Costa Rica":     {"prefix" : "cr." },
                "Czech Republic": {"prefix" : "cz." },
                "Denmark":      {"prefix" : "dk." },
                "Ecuador":      {"prefix" : "ec." },
                "Egypt":        {"prefix" : "eg." },
                "Finland":      {"prefix" : "fi." },
                "France":       {"prefix" : "fr." },
                "Germany":      {"prefix" : "de." },
                "Greece":       {"prefix" : "gr." },
                "Hong Kong":    {"prefix" : "hk." },
                "Hungary":      {"prefix" : "hu." },
                "India":        {"prefix" : "in." },
                "Indonesia":    {"prefix" : "id." },
                "Ireland":      {"prefix" : "ie." },
                "Israel":       {"prefix" : "il." },
                "Italy":        {"prefix" : "it." },
                "Japan":        {"prefix" : "jp." },
                "Kuwait":       {"prefix" : "kw." },
                "Luxembourg":   {"prefix" : "lu." },
                "Malaysia":     {"prefix" : "malaysia." },
                "Mexico":       {"prefix" : "mx." },
                "Morocco":      {"prefix" : "ma." },
                "Netherlands":  {"prefix" : "nl." },
                "New Zealand":  {"prefix" : "nz." },
                "Nigeria":      {"prefix" : "ng." },
                "Norway":       {"prefix" : "no." },
                "Oman":         {"prefix" : "om." },
                "Pakistan":     {"prefix" : "pk." },
                "Panama":       {"prefix" : "pa." },
                "Peru":         {"prefix" : "pe." },
                "Philippines":  {"prefix" : "ph." },
                "Poland":       {"prefix" : "pl." },
                "Portugal":     {"prefix" : "pt." },
                "Qatar":        {"prefix" : "qa." },
                "Romania":      {"prefix" : "ro." },
                "Russia":       {"prefix" : "ru." },
                "Saudi Arabia": {"prefix" : "sa." },
                "Singapore":    {"prefix" : "sg." },
                "South Africa": {"prefix" : "za." },
                "South Korea":  {"prefix" : "kr." },
                "Spain":        {"prefix" : "es." },
                "Sweden":       {"prefix" : "se." },
                "Switzerland":  {"prefix" : "ch." },
                "Taiwan":       {"prefix" : "tw." },
                "Thailand":     {"prefix" : "th." },
                "Turkey":       {"prefix" : "tr." },
                "Ukraine":      {"prefix" : "ua." },
});