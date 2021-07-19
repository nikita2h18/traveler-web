export class Comment {
  constructor(
    public id: number,
    public message: string,
    public travelId: string,
    public userId: number
  ) {
  }
}
