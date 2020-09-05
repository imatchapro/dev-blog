export type PostContentData = {
  id: string
  date: string
  title: string
  description: string
  contentHtml: string
}

export type PostsData = Omit<PostContentData, 'contentHtml'>

export type PostFrontMatterData = Pick<
  PostData,
  'title' | 'date' | 'description'
>
