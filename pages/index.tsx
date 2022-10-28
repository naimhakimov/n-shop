import { useActions } from "../src/hooks/actions";
import { useAppSelector } from "../src/hooks/redux";

function Home() {
    const {increment, decrement} = useActions()
    const {count} = useAppSelector(state => state.count)
    return (
        <ul>
            <span>
                {count}
            </span>
            <button onClick={increment}>+werwer</button>
            <button onClick={decrement}>-werwer</button>
        </ul>
    )
}


export default Home