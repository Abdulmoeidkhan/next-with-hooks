import Link from 'next/link'
import Counter from "../Components/counter"


export default function CounterParent() {
  return <>
    <style global jsx>{`
        .MyClass {
          margin-left:100px;
        }
      `}</style>

    <ul>
      <li>
        <Link href="/" as="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/namegame" as="/namegame">
          <a>Name Game</a>
        </Link>
      </li>
    </ul>
    <Counter />
  </>
}
