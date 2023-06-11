const endDate = "8 June 2023 11:51 PM";

// console.log(endDate);

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock  = () =>{
      const end =  new Date(endDate)
      const now = new Date()

      //console.log(end, now);

      //Calculate difference 
      const diff = (end-now)/1000;
      //console.log(diff);

      //convert into days
      const days = Math.floor(diff/ 3600 / 24);
      //console.log('Days: ',days)

      if(diff < 0) return;

      inputs[0].value = days;

      //hours
      inputs[1].value = Math.floor((diff / 3600) % 24)

      //minutes
      inputs[2].value = Math.floor((diff / 60) % 60)

      //Seconds
      inputs[3].value = Math.floor(diff % 60)
}

clock();

setInterval(
      () => {
            clock()
      },
      1000
)