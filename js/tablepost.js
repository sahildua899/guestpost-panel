const form = document.getElementById('table-data');


const submitData = (e) =>{
    e.preventDefault();
    const DatatoAdd = {
        Name:form.name.value,
        Email:form.email.value,
        PublishedLink:form.publink.value,
        PublishDate:form.pubdate.value,
        ExpireDate:form.expdate.value,
        Price:form.price.value
    }
    fetch("https://64549c40a74f994b33445df3.mockapi.io/Database", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(DatatoAdd),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(alert('Data Added '))
.then(form.reset());
}
form.addEventListener('submit', submitData);