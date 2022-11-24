import { Typography, Divider } from '@arco-design/web-react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Article as IArticle } from '../../interfaces/articles'
import styles from '../../styles/article.module.css'
const { Title, Text } = Typography

type Props = { article: IArticle }

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const articles: IArticle[] = await res.json()
  const paths = articles.map((aricle) => ({ params: { id: aricle.id.toString() } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt((params?.id as string) || '0')
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const article: IArticle = await res.json()

  return { props: { article } }
}

const Article = ({ article }: Props) => {
  return (
    <>
      <div className={styles.articleHeader}>
        <Text>May 2, 2021</Text>
        <Title style={{ margin: '0', textAlign: 'center' }}>{article.title}</Title>
      </div>
      <Divider />
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </Typography>
    </>
  )
}

export default Article
