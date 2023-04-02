//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('#get-data').addEventListener('click', getFetch)
document.querySelector('#clear-data').addEventListener('click', function(){
    let list = document.querySelector('ul')
    while (list.firstChild){
        list.removeChild(list.firstChild)
        const h2 = document.querySelector('h2')
        h2.textContent = 'Class?'
        const h3 = document.querySelector('h3')
        h3.textContent = 'Sub Classes?'
    }

    localStorage.removeItem('appendedItems')
})

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // document.querySelector('h2')
        document.querySelector('h2').innerText = `${choice}`
        // document.querySelector('h3')
        document.querySelector('h3').innerText = data.classes[0].name
        // document.querySelector('h4')
        data.subclasses.forEach(obj => {
            console.log(obj.name)
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

