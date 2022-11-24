import { Divider } from '@arco-design/web-react'
import React, { Fragment } from 'react'
import { Article } from '../interfaces/articles'
import ArticleItem from './ArticleItem'

type Props = {
  articles: Article[]
}

const ArticleList = ({ articles }: Props) => {
  return (
    <div style={{ marginBottom: 30 }}>
      {articles.map((article) => (
        <Fragment key={article.id}>
          <Divider />
          <ArticleItem article={article} />
        </Fragment>
      ))}
    </div>
  )
}

export default ArticleList
