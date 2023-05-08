const tableSection = document.getElementById('table-content-section');
const button = document.getElementById('btn-11');


const insertData  = (data) => {
    for(let i=0; i<data.length; i++) {
        const tr = document.createElement('tr');
        tr.className = "data-col";
        console.log(data[i])
        tr.innerHTML = `
        <td>${data[i].id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Email}</td>
        <td>${data[i].PublishedLink}</td>
        <td>${data[i].PublishDate}</td>
        <td>${data[i].ExpireDate}</td>
        <td>${data[i].Price}</td>
        `
        tableSection.appendChild(tr)
    }
}

  fetch('https://64549c40a74f994b33445df3.mockapi.io/Database', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(tasks => {
      insertData(tasks)
  }).catch(error => {
    // handle error
  })
button.addEventListener('click', ()=>{
    return document.location = './tablepost.html'
})

