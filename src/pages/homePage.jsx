import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

export const HomePage = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Bem vindo aos Hooks, {user.userName}!</h1>
            <Link to="/useState">Vá para o UseStatePage</Link>
            <br />
            <br />
            <br />
            <Link to="/useEffect">Vá para o UseEffectPage</Link>
            <br />
            <br />
            <br />
            <Link to="/useCallBack">Vá para o UseCallBackPage</Link>
            <br />
            <br />
            <br />
            <Link to="/useMemo">Vá para o UseMemoPage</Link>
            <br />
            <br />
            <br />
            <Link to="/useRef">Vá para o UseRef</Link>
        </>
    );
}

export default HomePage;