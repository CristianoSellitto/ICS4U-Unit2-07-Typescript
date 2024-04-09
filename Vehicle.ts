/**
*
* This class creates a vehicle
*
* By:      Cristiano Sellitto
* Version: 1.1
* Since:   2024-03-28
*/

export class Vehicle {
  // Class variables
  protected colour: string             // Vehicle colour
  protected speed: number              // Current speed of the vehicle
  protected maxSpeed: number           // Maximum speed of the vehicle

  // Creates the base vehicle
  public constructor(startColour: string, startMaxSpeed: number) {
    this.colour = startColour
    this.speed = 0
    this.maxSpeed = startMaxSpeed
  }

  // Gets the colour of the vehicle
  public get colour() {
    return this.colour
  }

  // Gets the current speed of the vehicle
  public get speed() {
    return this.speed
  }

  // Gets the maximum speed of the vehicle
  public get maxSpeed() {
    return this.maxSpeed
  }

  // Creates a string about the status of the car
  public get status() {
    let statusString = 'Status:\n'
    statusString = ` -> Speed: ${this.speed}\n`
    statusString += ` -> MaxSpeed: ${this.maxSpeed}\n`
    statusString += ` -> Color: ${this.colour}`

    return statusString
  }

  // Sets the colour of the vehicle
  public set colour(newColour: string) {
    this.colour = newColour
  }

  // Accelerates the car, changing the speed
  public accelerate(accelPower: number, accelTime: number) {
    this.speed = (accelPower * accelTime) + this.speed
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // Brakes the car, changing the speed
  public brake(brakePower: number, brakeTime: number) {
    this.speed = this.speed - (brakePower * brakeTime)
    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

