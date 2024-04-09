/**
*
* This class creates a truck using methods from vehicles
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-04-05
*/

import { Vehicle } from './Vehicle'

export class Truck extends Vehicle {
  // Class variables
  private plateNumber: string

  // Creates the base truck
  public constructor(startColour: string, startMaxSpeed: number, startPlateNumber: string) {
    super(startColour, startMaxSpeed)
    this.plateNumber = startPlateNumber
  }

  // Sets a new plate number to the truck
  public set plateNumber(newPlateNumber: string) {
    this.plateNumber = newPlateNumber
  }

  // Gets the current plate number
  public get plateNumber() {
    return this.plateNumber
  }

  // Creates a string about the status of the car
  public get status() {
    let statusString = ` -> Speed: ${this.speed}\n`
    statusString += ` -> MaxSpeed: ${this.maxSpeed}\n`
    statusString += ` -> Color: ${this.colour}\n`
    statusString += ` -> License Plate: ${this.plateNumber}`

    return statusString
  }

  // Provides air to the wheels of the truck
  public applyAir(airPressure: number) {
    this.speed = this.speed - airPressure / 2
  }
}
