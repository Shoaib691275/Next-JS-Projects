import Link from "next/link";
import PathLink from "./link";
export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Next News</Link>
      </div>
      <nav>
        <ul>
          <li>
            <PathLink path={'/news'}>News</PathLink>
          </li>
          <li>
            <PathLink path={'/archive'}>Archive</PathLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
