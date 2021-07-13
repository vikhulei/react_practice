import {useParams} from "react-router-dom"

const About = () => {
    const {name} = useParams()
    return <div>
        <h1>Hi your name is {name}</h1>
    </div>
}

export default About