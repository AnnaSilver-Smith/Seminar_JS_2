/* Задание 3
В переменной day лежит какое - то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число(в первую, вторую или третью). */

let day = Number(prompt(`Введите значение переменной day`));
if (day >= 1 && day <= 10) {
    alert(`day = ${day} попадает в первую декаду месяца`);
}
if (day >= 11 && day <= 20) {
    alert(`day = ${day} попадает во вторую декаду месяца`);
}
if (day >= 21 && day <= 31) {
    alert(`day = ${day} попадает в третью декаду месяца`);
}
if (day <= 0 || day >= 32) {
    alert(`day = ${day} число не попадает ни в какую декаду месяца`);
}