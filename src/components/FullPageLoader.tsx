import Spinner from '../assets/spinner.gif';
import '../styles/components/FullPageLoader.css';

export const FullPageLoader = () => {
    return (
        <div className="fpContainer">
            <img src={Spinner} className="fpLoader" alt="loading" />
        </div>
    );
};
