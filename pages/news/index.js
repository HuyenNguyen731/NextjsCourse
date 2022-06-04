import { Fragment } from "react";
import Link from "next/link";

function NewPage() {
  return (
    <Fragment>
      <h2>News Page</h2>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextIf is a great framework
          </Link>
        </li>
        <li>
          <a href="/news/something-else">Something Else</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewPage;
