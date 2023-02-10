export interface IPost{
    id: number,
    title: string
    content: string,
    image: string,
    createdAt: string,
    likes: string|number,
    creator: ICreator,
    userId?: string|number
  }
  
export interface ICreator{
id: number,
name: string,
followers: string,
isOnline: boolean,
isFollowing: boolean
}