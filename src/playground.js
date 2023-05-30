const interval = setInterval(() => {
  console.log('running on interval')
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 10000)
