import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Home.css'

const BackButton = () => {
    const Navigate = useNavigate();

    const handleBack = () => {
        Navigate(-1)
    }
    return (
        <div className="back" onClick={handleBack}>
            <FaArrowLeft />
        </div>
    )
}

export default BackButton;