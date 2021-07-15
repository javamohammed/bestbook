export default interface IPost {
    id: number,
    photo?: string,
    date: string,
    userId: number,
    like?: number,
    comment?: number,
    desc?: string,
}