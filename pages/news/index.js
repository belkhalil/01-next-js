import Link from 'next/link';
import { Fragment } from "react/cjs/react.production.min";


const News = () => {
    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href='/news/nextjs-is-a-great-framwork'>
                    NextJs Is a Great Framwork
                </Link>
            </li>
            <li>
                Somthings else
            </li>
        </ul>
    </Fragment>
}

export default News;