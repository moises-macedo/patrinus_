import { Route, Routes as RoutePages } from "react-router-dom"
import { ScreenTest } from "../Components/ScreenTest"

export const Routes = () => {
    return (
        <RoutePages>
            <Route exact path="/" element={<ScreenTest />} />
        </RoutePages>
    )
}