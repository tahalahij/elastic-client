import React from 'react';
import Home from './Home';
import { Route } from "react-router-dom";

(async function () {
    // we need less for antd global less variable and them customization.
    // note that cra dont support less by default so i needed to customize
    // webpack config.
    await import('assets/app.less');
    // we need this because we all know that sass is way cooler than less.
    await import('assets/app.scss');
})();

function App() {
    return (
            <>
                <Route path="/">
                    <Home/>
                </Route>
            </>
    );
}

export default App;
