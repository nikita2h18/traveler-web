export class Travel {
  constructor(
    public id: number,
    public description: string,
    public pointFrom: string,
    public pointTo: string,
    public image: string,
    public userId: number,
  ){
  }
}
