import { Typography } from '@arco-design/web-react'
import { GetStaticProps } from 'next'
import ArticleList from '../../components/ArticleList'
import Pagination from '../../components/Pagination'
import { Article } from '../../interfaces/articles'
const { Title } = Typography

export const ARTICLES_PER_PAGE = 5

type Props = { articles: Article[]; pagination: { currentPage: number; totalPages: number } }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const articles = await res.json()
  const initialDisplayArticles = articles.slice(0, ARTICLES_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(articles.length / ARTICLES_PER_PAGE),
  }

  return { props: { articles: initialDisplayArticles, pagination } }
}

const Articles = ({ articles, pagination }: Props) => {
  return (
    <>
      <Title style={{ marginTop: 0, marginBottom: '0.6rem' }}>All Articles</Title>
      <ArticleList articles={articles} />
      <Pagination pagination={pagination} />
    </>
  )
}

export default Articles
