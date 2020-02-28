import { h } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';

const Notfound = () => {

    return (
        <div class={style.notfound}>
            <h1>Error 404</h1>
            <p>That page doesn't exist.</p>
            <Link href="/"><h4>Back to Home</h4></Link>
        </div>
    )
}

export default Notfound;