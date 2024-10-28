/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const spacecraftParams = {
   vel: 10000, // velocity (km/h)
   acc: 3, // acceleration (m/s^2)
   time: 3600, // seconds (1 hour)
   d: 0, // distance (km)
   fuel: 5000, // remaining fuel (kg)
   fbr: 0.5 // fuel burn rate (kg/s)
}

const { vel, acc, time, d, fuel, fbr } = spacecraftParams;

const velInMetersPerSecond = vel * (1000 / 3600);

const newDistance = d + (velInMetersPerSecond * time) / 1000;
const remainingFuel = Math.max(0, fuel - (fbr * time)); //calculates remaining fuel

const newVelocity = vel + (acc * time * 3600) / 1000; //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (velocity, acceleration, time) => { 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Parameters must be numbers');
  }
  return velocity + (acceleration * time);
};

const total = calcNewVel(newVelocity, acc, time);

console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance:${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);






