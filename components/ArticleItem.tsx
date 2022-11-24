import { Article } from '../interfaces/articles'
import { Grid, Typography } from '@arco-design/web-react'
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowRight } from '@arco-design/web-react/icon'
const { Row, Col } = Grid
const { Title, Text, Paragraph } = Typography

type Props = {
  article: Article
}

const ArticleItem = ({ article }: Props) => {
  return (
    <div>
      <Row gutter={20}>
        <Col span={5}>
          <Link href={`/articles/${article.id}`}>
            <Image
              src="https://picsum.photos/300"
              alt=""
              width={200}
              height={200}
              style={{ borderRadius: 2 }}
            />
          </Link>
        </Col>
        <Col span={19}>
          <Link href={`/articles/${article.id}`}>
            <Title heading={4} style={{ marginTop: 0, marginBottom: 3 }}>
              {article.title}
            </Title>
          </Link>
          <Text>August 7, 2021</Text>
          <Paragraph type="secondary" style={{ marginTop: 10 }}>
            {article.body}
          </Paragraph>
          <Link href={`/articles/${article.id}`} className="btn-more">
            <span>Read more</span>
            <IconArrowRight />
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default ArticleItem
