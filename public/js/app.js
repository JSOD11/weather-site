const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1') // id is #, class is .
const messageTwo = document.querySelector('#message-2') // id is #, class is .

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  url = '/weather?address=' + location

  messageOne.textContent = 'Loading...'

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        console.log(data.location)
        console.log(data.description)
        console.log(data.temperature)
        console.log(data.feelslike)
        messageOne.textContent = data.location
        messageTwo.textContent = 'Temp is ' + data.temperature + '. Feels like ' 
          + data.feelslike + '. ' + data.description + '.'
      }
    })
  })
})