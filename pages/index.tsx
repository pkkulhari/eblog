import { Typography } from '@arco-design/web-react'
import { IconArrowRight } from '@arco-design/web-react/icon'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import ArticleList from '../components/ArticleList'
import { Article } from '../interfaces/articles'
import styles from '../styles/home.module.css'
const { Title } = Typography

type Props = { articles: Article[] }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const articles = await res.json()

  return { props: { articles } }
}

const Home = ({ articles }: Props) => {
  return (
    <>
      <Title style={{ marginTop: '0', marginBottom: '0.5rem' }}>Latest</Title>
      <Title heading={6}>A blog created with Next.js and AcroDesign</Title>
      <ArticleList articles={articles} />
      <div className={styles.moreArticles}>
        <Link href="/articles" className="btn-more">
          <span>All Articles</span> <IconArrowRight />
        </Link>
      </div>
    </>
  )
}

export default Home
