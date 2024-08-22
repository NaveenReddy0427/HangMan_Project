import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

const StartGame = () => {

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/play')
    }

    return (
        <div>
            <h1>Start Game</h1>
            <TextInputFormContainer onSubmit={handleSubmit}/>

        </div>
    );
}

export default StartGame