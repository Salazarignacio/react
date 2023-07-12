import { Link } from "react-router-dom";

const Finalizada = ({title}) => {
    return (
      <div className="detailRight">
        {/* <p>{title}</p> */}
        <h2>Compra Finalizada</h2>
        <Link to="/cart">
          <button
            type="button"
            className="btn-modern"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  };

  export default Finalizada