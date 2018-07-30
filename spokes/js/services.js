let theData = JSON.parse(data);
console.log(theData);

for (let i = 0; i < theData.length; i++) {
    let row = "<tr><td>" + theData[i]['name'] + "</td><td>" + theData[i]['cost'] + "</td></tr>";
    console.log(row);
    $('#table').append(row);
}
