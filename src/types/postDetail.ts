export interface IDetailsState {
    article: IDetailsArticle | null
}

export interface IDetailsArticle {
    author: string,
    title: string,
    datePublication: any,
    views: number,
    imgMain: string,
    markdown: string,
    tags: { id: string, text: string }[],
    category: number
}