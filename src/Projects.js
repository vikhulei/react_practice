import { useLocation, useHistory } from "react-router"

const Projects = () => {
const history = useHistory()
const location = useLocation()
    return <div>
        <h1>I am from Projects</h1>
        <button onClick={(() => history.push("./about"))}>About</button>
        <button onClick={(() => alert(JSON.stringify(location)))}>Location</button>
    </div>
}

export default Projects