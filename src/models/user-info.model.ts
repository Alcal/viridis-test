export class UserInfo {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public alternateEmails?: string[],
    public phone?: string,
    public imgUrl?: string
  ){

  }
}
