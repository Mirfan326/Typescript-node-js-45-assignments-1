// 45. Cars Write a function that stores information about a car in a 
// Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function
// with the required information and two other name-value pairs,
//  such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.




type Car = {
    manufacture: string;
    model: string;
    // Optional properties can be added dynamically using [key: string]: any;
  };
  
  function createCar(manufacture: string, model: string, optional?: { [key: string]: any }): Car {
    return {
      manufacture,
      model,
      ...optional, // Include optional properties if provided
    };
  }
  
  const myCar: Car = createCar("Toyota", "Corolla", { color: "silver", year: 2024 });
  console.log(myCar);
  