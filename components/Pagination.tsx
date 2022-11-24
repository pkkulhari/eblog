import { Grid, Typography } from '@arco-design/web-react'
import Link from 'next/link'
const { Row, Col } = Grid
const { Text } = Typography

type Props = {
  pagination: { currentPage: number; totalPages: number }
}

const Pagination = ({ pagination }: Props) => {
  const prevPage = pagination.currentPage > 1
  const nextPage = pagination.currentPage < pagination.totalPages

  return (
    <div>
      <Row justify="space-between">
        <Col span={2}>
          {prevPage ? (
            <Link
              href={
                pagination.currentPage - 1 === 1
                  ? `/articles/`
                  : `/articles/page/${pagination.currentPage - 1}`
              }
            >
              <Text>Previous</Text>
            </Link>
          ) : (
            <Text type="secondary">Previous</Text>
          )}
        </Col>
        <Col span={1}>
          {pagination.currentPage} of {pagination.totalPages}
        </Col>
        <Col span={2}>
          {nextPage ? (
            <Link href={`/articles/page/${pagination.currentPage + 1}`}>
              <Text>Next</Text>
            </Link>
          ) : (
            <Text type="secondary">Next</Text>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default Pagination
