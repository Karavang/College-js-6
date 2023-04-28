function increment(number, value) {
  number = prompt("Task3. Enter number:");
  value = prompt("Task3. Enter value:");
  if (!value) {
    value = 1;
  }
  alert(parseInt(number) + parseInt(value));
}
increment();
