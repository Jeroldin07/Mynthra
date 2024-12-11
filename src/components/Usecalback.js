import { useCallback, useState } from "react";


export default function ParentComponent() {
    function ParentComponent() {
        const[Count, setCount] = useState(0);

        const handleClick = useCallback(() => {
            setCount(count+1)
        },[count]);

        return(
            <CLICKComponent onClick={handleClick}/>
        );
    }
    function ChildComponent({ onClick }) {
        return (
            <button onClick={onClick}>Click me</button>
        );
    }  
}
