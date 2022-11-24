import { Menu, Space } from '@arco-design/web-react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const MenuItem = Menu.Item

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        EBlog
      </Link>
      <div className={styles.menu}>
        <Menu mode="horizontal" defaultSelectedKeys={['0']}>
          <Space size={20}>
            <Link href="/">
              <MenuItem key="0">Home</MenuItem>
            </Link>
            <Link href="/articles">
              <MenuItem key="1">Articles</MenuItem>
            </Link>
            <MenuItem key="2">About</MenuItem>
          </Space>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar
