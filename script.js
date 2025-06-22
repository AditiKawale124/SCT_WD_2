const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value !== undefined) {
      display.value += value;
    }
  });
});

// Equal button
document.querySelector('.equal').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
});

// Clear button
document.querySelector('.clear').addEventListener('click', () => {
  display.value = '';
});

// Delete button
document.querySelector('.del').addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

// Keyboard input handling
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  } else if (key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch (err) {
      display.value = "Error";
    }
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    display.value = '';
  }
});
