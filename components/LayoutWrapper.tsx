import { Layout } from '@arco-design/web-react'
import styles from '../styles/layoutWrapper.module.css'
import Footer from './Footer'
import Navbar from './Navbar'

const { Content } = Layout

type Props = {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className={styles.layoutWrapper}>
      <Layout>
        <Navbar />
        <Content style={{ marginBottom: '4rem' }}>{children}</Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default LayoutWrapper
