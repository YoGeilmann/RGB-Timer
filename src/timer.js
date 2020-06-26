const units = {
    a: {
      cooldown: 10
    },
    b: {
      cooldown: 10,
      step: 3
    },
    c: {
      cooldown: 100,
      step: 10
    }
  }
  
  const Timer = (function() {
    function create({cooldown, step = 1}, cb) {
      let current = cooldown;
  
      let interval = setInterval(() => {
        if (current <= 0) {
          clearInterval(interval)
          console.log("done")
          return
        }
        cb && cb(current)
        current -= step
      }, 1000)
    }
  
     return {
       create
     }
  })();
  
  const State = (function() {
    let a = 42;
  
    return {a}
  })()
  
  Timer.create(units.b , function(current) {
    console.log(current)
  })
  // console.log(State.a)
  
  let interval = setInterval(() => {
  }, 1000) 