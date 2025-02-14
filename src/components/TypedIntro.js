import { ReactTyped } from "react-typed";
import Typed from'./TypedIntro.css';

const TypedInfo = () => {
    return(
        <div>
            <h1>
                <ReactTyped strings={["Welcome to my Portfolio Site"]} typeSpeed={200}  />
            </h1>
        </div>
    );
}

export default TypedInfo;