import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/counter" as="/counter">
          <a>Counter</a>
        </Link>
      </li>
      <li>
        <Link href="/namegame" as="/namegame">
          <a>Name Game</a>
        </Link>
      </li>
    </ul>
  )
}
