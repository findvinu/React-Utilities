import { useParams } from "react-router-dom";

const Render = () => {
    const { id } = useParams();
    return('render component', id)
}

export default Render;