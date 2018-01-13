function dynamicPromise (time = 1000) {
  time *= 2
  return new Promise((resolve, reject) => {
    if (time === 200) {
      return reject('Time is wrong')
    }
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

console.log('before promiseOne')

dynamicPromise(100)
  .then(result => {
    console.log('result one', result)
    return result
  })
  .catch(err => {
    console.log('err one', err)
    return 300
  })
  .then(dynamicPromise)
  .then(result => {
    console.log('result two', result)
    return result
  })
  .catch(err => {
    console.log('err two', err)
  })
  .then(() => {
    console.log('array 1')
    const arr = [300, 50, 1000]

    return Promise.all(arr.map(element => {
      return dynamicPromise(element)
        .then(result => {
          console.log(element, result)
          return result
        })
    }))
      .then(data => {
        console.log(data)
      })
      .catch(console.error)
  })
  .then(() => {
    console.log('array 2')
    const arr = [400, 300, 500, 900, 400]

    return Promise.all(arr.map(element => {
      return dynamicPromise(element)
        .then(result => {
          console.log(element, result)
          return result
        })
    }))
      .then(data => {
        console.log(data)
      })
      .catch(console.error)
  })
  .then(() => {
    console.log('TOTAL FINISH')
  })

console.log('after promiseOne')
