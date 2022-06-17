// Copyright (c) 2022 Ivan Teplov

export class RegistrationError extends Error {
  name = this.constructor.name

  constructor(message: string, public element: HTMLElement) {
    super(message)
  }
}
