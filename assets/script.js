
$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var userText = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, userText)
  })

  $("#hour08 .description").val(localStorage.getItem("hour08"))
  $("#hour09 .description").val(localStorage.getItem("hour09"))
  $("#hour10 .description").val(localStorage.getItem("hour10"))
  $("#hour11 .description").val(localStorage.getItem("hour11"))
  $("#hour12 .description").val(localStorage.getItem("hour12"))
  $("#hour13 .description").val(localStorage.getItem("hour13"))
  $("#hour14 .description").val(localStorage.getItem("hour14"))
  $("#hour15 .description").val(localStorage.getItem("hour15"))
  $("#hour16 .description").val(localStorage.getItem("hour16"))
  $("#hour17 .description").val(localStorage.getItem("hour17"))

  function time() {

    var currentTime = dayjs().hour()

    $(".time-block").each(function () {
      var currentHour = parseInt($(this).attr("id").split("hour")[1])

      if (currentHour < currentTime) {
        $(this).addClass("past")
        $(this).removeClass("present")
        $(this).removeClass("future")
      }
      else if (currentHour === currentTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
        $(this).removeClass("future")
      }
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
  }
  time()
})

var currentDate = dayjs().format('dddd, MMMM DD YYYY hh:mm a ')
$("#currentDay").html(currentDate)



// $(function () {
//   var today = dayjs().format('MM/DD/YYYY HH:mm:ss')
//   console.log(today);
//   document.getElementById('currentDay').innerHTML = today
// }

//   for (i = 0; i < 8; i++) {
//     var hourtime = document.getElementById("hourtime")
//     document.createElement('div');

//     document.getElementById('board').appendChild(board);
//   }

// var hourContainer = document.querySelector('.container-lg')
// var currentDay = document.querySelector('#currentDay')
// var today = dayjs().format('MMM DD, YY (at) h:mm')
// var currentHour = dayjs().startOf('hour').format('H')
// var timeBlocks = document.querySelectorAll('.time-block')

// $(function () {
//   hourContainer.addEventListener('click', handleSaveButton)

//   timeBlocks.forEach(element => {
//     var blockHour = element.id.slice(5)
//     if (currentHour > blockHour) {
//       element.dataset.when = 'past'
//     } else if (currentHour === blockHour) {
//       element.dataset.when = 'present'
//     } else {
//       element.dataset.when = 'future'
//     }
//   }
//   )
// })

// function handleSaveButton(e) {
//   if (e.target.matches('button')) {
//     var clickedSaveHour = e.target.closest('div').id
//     var hourText = e.target.previousElementSibling.value
//     localStorage.setItem(clickedSaveHour, hourText)
//   }
// }

// function setHourText() {
//   for (let i = 7; i <= 18; i++) {
//     i = leftFillNum(i, 2)
//     var hourText = localStorage.getItem("hour-" + i)
//     var hour = '#hour-' + i
//     var hourDiv = document.querySelector(hour)
//     hourDiv.queryselector(':scope > textarea').value = hourText
//   }
// }