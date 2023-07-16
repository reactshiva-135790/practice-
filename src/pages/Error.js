import error from "../assets/error.jpg"
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const navigateToUserList = () => {
        navigate('/');
    };

    return (
        <div className="container">
          <div className="d-flex justify-content-center mt-5">
          <Button onClick={navigateToUserList}>Go Back</Button> 
          </div>
         

            <img src={error} className="img-fluid" alt="error-page" />
        </div>
    )
};

export default Error