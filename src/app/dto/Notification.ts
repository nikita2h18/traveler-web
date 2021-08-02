export class Notification {
  constructor(
    public id: number,
    public isSeen: boolean,
    public userId: number,
    public subscribeId: number,
  ) {
  }
}
