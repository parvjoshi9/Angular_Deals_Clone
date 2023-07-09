export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'parv9.joshi@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
