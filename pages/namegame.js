import Link from 'next/link'
import Name from "../Components/namegame"


export default function NameParent() {
  return <><ul>
    <li>
      <Link href="/" as="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/counter" as="/counter">
        <a>Counter</a>
      </Link>
    </li>
  </ul>
    <Name />
  </>
}
