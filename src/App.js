import { useState } from "react";
import { userContext, gameLevelContext } from ".";
import AppRouter from "./components/AppRouter/AppRouter";
import './styles/main.sass'


export default function App() {

    const localUser = JSON.parse(localStorage.getItem('cardGameCurrentUser'));
    const userState = useState(localUser);

    const gameLevelState = useState('lvl-1');
    
    return (
        <userContext.Provider value={userState}>
            <gameLevelContext.Provider value={gameLevelState}>
                <div className="wrapper">
                    <AppRouter />
                </div>
            </gameLevelContext.Provider>
        </userContext.Provider>
    );
}