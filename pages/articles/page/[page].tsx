import { Typography } from '@arco-design/web-react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ARTICLES_PER_PAGE } from '..'
import ArticleList from '../../../components/ArticleList'
import Pagination from '../../../components/Pagination'
import { Article } from '../../../interfaces/articles'
const { Title } = Typography

type Props = { articles: Article[]; pagination: { currentPage: number; totalPages: number } }

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const articles: Article[] = await res.json()
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const pageNumber = parseInt((params?.page as string) || '1')

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const articles: Article[] = await res.json()

  const displayArticles = articles.slice(
    ARTICLES_PER_PAGE * (pageNumber - 1),
    ARTICLES_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(articles.length / ARTICLES_PER_PAGE),
  }

  return { props: { articles: displayArticles, pagination } }
}

const ArticlesPage = ({ articles, pagination }: Props) => {
  const router = useRouter()

  return (
    <>
      <Title style={{ marginTop: 0, marginBottom: '0.6rem' }}>All Articles</Title>
      {router.isFallback && 'looading'}
      <ArticleList articles={articles} />
      <Pagination pagination={pagination} />
    </>
  )
}

export default ArticlesPage
