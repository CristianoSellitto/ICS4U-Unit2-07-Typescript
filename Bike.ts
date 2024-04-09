/**
*
* This class creates a bike using methods from vehicles
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-04-05
*/

import { Vehicle } from './Vehicle'

export class Bike extends Vehicle {
  // Class variables
  private cadence: number

  // Creates the base bike
  public constructor(startColour: string, startMaxSpeed: number) {
    super(startColour, startMaxSpeed)
    this.cadence = 0
  }

  // Sets the new cadence to the bike
  public set cadence(newCadence: number) {
    this.cadence = newCadence
  }

  // Gets the current cadence
  public get cadence() {
    return this.cadence
  }

  // Creates a string about the status of the car
  public get status() {
    let statusString = ` -> Speed: ${this.speed}\n`
    statusString += ` -> MaxSpeed: ${this.maxSpeed}\n`
    statusString += ` -> Color: ${this.colour}\n`
    statusString += ` -> Cadence: ${this.cadence}`

    return statusString
  }

  // Accelerates the bike, changing cadence
  public accelerate(appliedNumber: number) {
    this.cadence = this.cadence + appliedNumber
    this.speed = this.speed + appliedNumber + appliedNumber
  }

  // Rings the bike's bell
  public ringBell() {
    console.log("Ding ding!\n")
  }
}
