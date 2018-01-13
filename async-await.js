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

async function something() {
  console.log('pre result')
  let result
  try {
    result = await dynamicPromise(300) + await dynamicPromise(100)
  } catch (e) {
    console.log(e)
  }
  console.log('****************')
  console.log('result: ', result)
  console.log('post result')
}

something()
