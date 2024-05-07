import { useSelector } from 'react-redux'
import './Counter.css'

function Counter() {
    const count = useSelector((state) => state.value);
    return (
        <p className="count">{count}</p>
    )
}

export default Counter
