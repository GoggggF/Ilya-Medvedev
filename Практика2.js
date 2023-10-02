//Задание 1
// let number = 1
// if(number > 0){
//     console.log("Число положительно")
// } else if(number < 0){
//     console.log("Число отрицательное")
// } else if(number = 0){
//     console.log("Это ноль")
// }
//Задание 1.2
// if (!age > 14 && age < 90)
//Задание 1.1
// if (age > 14 && age < 90)

//Задание 2
// let time = 38
// if (time > 0 && time < 15) {
//     console.log ("Первая четверть")
//  } else if(time > 15 && time < 30){
//     console.log ("Вторая четверть")
//  } else if(time > 31 && time < 48){
//     console.log ("Третья четверть")
//  } else if(time > 49 && time < 59){
//     console.log ("Четвёртая четверть")
//  }

//Задание 3
//  let month = 4
//  if (month > 0 && month < 3){
//     console.log("Зима")
//  } else if(month > 3 && month < 6){
//     console.log("весна")
//  } else if(month > 6 && month < 9){
//     console.log("Лето")
//  } else if(month > 9 && mont < 12){
//     console.log("Осень")
//  }

let month = 4
let result = ''

switch (month) {
    case 1:
    case 2:
        result = "Зима"
        break;
    case 3:
    case 4:
    case 5:
        result = "Весна"
        break;
    case 6:
    case 7:
    case 8:
        result = "Лето"
        break;
    case 9:
        result = "Осень"
        break;
}

