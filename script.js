const obj = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

var daily = document.getElementById("daily");
var weekly = document.getElementById("weekly");
var monthly = document.getElementById("monthly");
var work = document.getElementById("box-1");
var play = document.getElementById("box-2");
var study = document.getElementById("box-3");
var exercise = document.getElementById("box-4");
var social = document.getElementById("box-5");
var self_care = document.getElementById("box-6");


daily.addEventListener("click", function(){
    daily.style.color = "white";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "hsl(235, 45%, 61%)";
    work.getElementsByClassName("hours")[0].innerHTML = obj[0].timeframes.daily.current + "hrs";
    play.getElementsByClassName("hours")[0].innerHTML = obj[1].timeframes.daily.current + "hrs";
    study.getElementsByClassName("hours")[0].innerHTML = obj[2].timeframes.daily.current + "hrs";
    exercise.getElementsByClassName("hours")[0].innerHTML = obj[3].timeframes.daily.current + "hrs";
    social.getElementsByClassName("hours")[0].innerHTML = obj[4].timeframes.daily.current + "hrs";
    self_care.getElementsByClassName("hours")[0].innerHTML = obj[5].timeframes.daily.current + "hrs";
    work.getElementsByClassName("previous")[0].innerHTML = "Yesterday - " + obj[0].timeframes.daily.previous + "hrs";
    play.getElementsByClassName("previous")[0].innerHTML = "Yesterday - " + obj[1].timeframes.daily.previous + "hrs";
    study.getElementsByClassName("previous")[0].innerHTML = "Yesterday - " + obj[2].timeframes.daily.previous + "hrs";
    exercise.getElementsByClassName("previous")[0].innerHTML = "Yesterday - " + obj[3].timeframes.daily.previous + "hrs";
    social.getElementsByClassName("previous")[0].innerHTML = "Yesterday - " + obj[4].timeframes.daily.previous + "hrs";
    self_care.getElementsByClassName("previous")[0].innerHTML = "Yesterday - " + obj[5].timeframes.daily.previous + "hrs";
})
weekly.addEventListener("click", function(){
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "white";
    monthly.style.color = "hsl(235, 45%, 61%)";
    work.getElementsByClassName("hours")[0].innerHTML = obj[0].timeframes.weekly.current + "hrs";
    play.getElementsByClassName("hours")[0].innerHTML = obj[1].timeframes.weekly.current + "hrs";
    study.getElementsByClassName("hours")[0].innerHTML = obj[2].timeframes.weekly.current + "hrs";
    exercise.getElementsByClassName("hours")[0].innerHTML = obj[3].timeframes.weekly.current + "hrs";
    social.getElementsByClassName("hours")[0].innerHTML = obj[4].timeframes.weekly.current + "hrs";
    self_care.getElementsByClassName("hours")[0].innerHTML = obj[5].timeframes.weekly.current + "hrs";
    work.getElementsByClassName("previous")[0].innerHTML = "Last Week - " + obj[0].timeframes.weekly.previous + "hrs";
    play.getElementsByClassName("previous")[0].innerHTML = "Last Week - " + obj[1].timeframes.weekly.previous + "hrs";
    study.getElementsByClassName("previous")[0].innerHTML = "Last Week - " + obj[2].timeframes.weekly.previous + "hrs";
    exercise.getElementsByClassName("previous")[0].innerHTML = "Last Week - " + obj[3].timeframes.weekly.previous + "hrs";
    social.getElementsByClassName("previous")[0].innerHTML = "Last Week - " + obj[4].timeframes.weekly.previous + "hrs";
    self_care.getElementsByClassName("previous")[0].innerHTML = "Last Week - " + obj[5].timeframes.weekly.previous + "hrs";
})
monthly.addEventListener("click", function(){
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "white";
    work.getElementsByClassName("hours")[0].innerHTML = obj[0].timeframes.monthly.current + "hrs";
    play.getElementsByClassName("hours")[0].innerHTML = obj[1].timeframes.monthly.current + "hrs";
    study.getElementsByClassName("hours")[0].innerHTML = obj[2].timeframes.monthly.current + "hrs";
    exercise.getElementsByClassName("hours")[0].innerHTML = obj[3].timeframes.monthly.current + "hrs";
    social.getElementsByClassName("hours")[0].innerHTML = obj[4].timeframes.monthly.current + "hrs";
    self_care.getElementsByClassName("hours")[0].innerHTML = obj[5].timeframes.monthly.current + "hrs";
    work.getElementsByClassName("previous")[0].innerHTML = "Last Month - " + obj[0].timeframes.monthly.previous + "hrs";
    play.getElementsByClassName("previous")[0].innerHTML = "Last Month - " + obj[1].timeframes.monthly.previous + "hrs";
    study.getElementsByClassName("previous")[0].innerHTML = "Last Month - " + obj[2].timeframes.monthly.previous + "hrs";
    exercise.getElementsByClassName("previous")[0].innerHTML = "Last Month - " + obj[3].timeframes.monthly.previous + "hrs";
    social.getElementsByClassName("previous")[0].innerHTML = "Last Month - " + obj[4].timeframes.monthly.previous + "hrs";
    self_care.getElementsByClassName("previous")[0].innerHTML = "Last Month - " + obj[5].timeframes.monthly.previous + "hrs";
})