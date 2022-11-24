import { Typography } from '@arco-design/web-react'
import styles from '../styles/footer.module.css'

const { Text } = Typography

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Text type="secondary">Praveen Kumar • © 2022 • EBlog</Text>
    </footer>
  )
}

export default Footer
