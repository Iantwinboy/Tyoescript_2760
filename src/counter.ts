// Import any necessary modules here
// ...

// Define the setupCounter function
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.textContent = `count is ${counter}`;
  };
}

// Define the greet function
export function greet(name: string) {
  console.log(`Hello, ${name}!`);
}