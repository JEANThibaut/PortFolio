import jsonproject from "../jsonprojects.json"
import ProjectsCards from "./Component/projects/projectscards/ProjectsCards"


class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        }
    }
    componentDidMount(){
        let data = jsonproject.map((id)=>{
            console.log(id)
            return <ProjectsCards data={data} />
        })
    }

    
}
export default Data;