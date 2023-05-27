import { Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import List from "./components/List";

function AllRoutes(){
    const paths = [
        { path: '/', component: <Form /> },
        { path: '/trips', component: <List /> }
    ];

    return (
        <Routes>
            {
                paths.map((path, index) => {
                    return (
                        <Route key={index} path={path.path} element={path.component} />
                    );
                })
            }
        </Routes>
    );
}

export default AllRoutes;