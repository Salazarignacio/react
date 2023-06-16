import { Link } from "react-router-dom";

const Finalizada = () => {
    return (
      <>
        <h2>Compra Finalizada</h2>;
        <Link to="/cart">
          <button
            type="button"
            className="btn btn-success"
          >
            Finalizar Compra
          </button>
        </Link>
      </>
    );
  };

  export default Finalizada