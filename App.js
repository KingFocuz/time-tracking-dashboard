const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");
const title = document.querySelectorAll(".title");
const hours = document.querySelectorAll(".hours");
const previous = document.querySelectorAll(".previous"); 

  function displayWeek() {
    fetch('https://raw.githubusercontent.com/KingFocuz/time-tracking-dashboard/master/data.json')  
  .then(response => response.json())
  .then(data => { hours.data
      for(let key in data){
        title[key].innerHTML = data[key].title;
        hours[key].innerHTML = data[key].timeframes.weekly.current + "hrs";
        previous[key].innerHTML = "Last week - " + data[key].timeframes.weekly.previous + "hrs";
      }
     });
  }
  
  weeklyBtn.addEventListener("click", () => {
         weeklyBtn.classList.add("active")
         dailyBtn.classList.remove("active")
         monthlyBtn.classList.remove("active")
         displayWeek();
    })

 function displayDaily () {
   fetch('https://raw.githubusercontent.com/KingFocuz/time-tracking-dashboard/master/data.json')  
  .then(response => response.json())
  .then(data => { hours.data
      for(let key in data){
        title[key].innerHTML = data[key].title;
        hours[key].innerHTML = data[key].timeframes.daily.current + "hrs";
      previous[key].innerHTML = "Yesterday - " + data[key].timeframes.daily.previous + "hrs";
    }
  })
 }
  
  dailyBtn.addEventListener("click", () => {
      dailyBtn.classList.add("active");
      weeklyBtn.classList.remove("active");
      monthlyBtn.classList.remove("active");
      displayDaily();
  })
   
function displayMonthly () {
  fetch('https://raw.githubusercontent.com/KingFocuz/time-tracking-dashboard/master/data.json')  
  .then(response => response.json())
  .then(data => { hours.data
     for(let key in data){
       title[key].innerHTML = data[key].title;
       hours[key].innerHTML = data[key].timeframes.monthly.current + "hrs";
       previous[key].innerHTML = "Last month - " + data[key].timeframes.monthly.previous + "hrs";
    }
  })
}

 monthlyBtn.addEventListener("click", () => {
         monthlyBtn.classList.add("active")
         dailyBtn.classList.remove("active")
         weeklyBtn.classList.remove("active")
         displayMonthly()
  });