import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Group } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Group mt={50} position="center">
          <Link href="/auth">
            <Button size="xl">Welcome to Tebaay!</Button>
          </Link>
        </Group>
      </div>
    </main>
  )
}