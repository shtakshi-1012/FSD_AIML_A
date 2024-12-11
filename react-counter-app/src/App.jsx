import {Route,Routes} from "react-router-dom"
import Home from "./Components/Home"
// import Counter from "./Components/Counter"
import Stopwatch from "./Components/Stopwatch"
import RefEx from "./Components/RefEx"
import Parent from "./Components/Parent"
import ReducerEx from "./Components/ReducerEx"

const App=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                {/* <Route path="/counter" element={<Counter/>}></Route> */}
                <Route path="/stopwatch" element={<Stopwatch/>}></Route>
                <Route path="/refex" element={<RefEx/>}></Route>
                <Route path="/parent" element={<Parent/>}></Route>
                <Route path="*" element={<h1>No Page Available</h1>}></Route>
                <Route path="/reducer" element={<ReducerEx/>}></Route>

            </Routes>
        </div>
    )
}
export default App;