import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcom to Gym Supplement Store!</h1>
      <img
        src="https://www.gymsupplementstore.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-07-at-12.00.00-PM.jpeg"
        alt="Gym Supplement Store"
      />
      <Link to="/Products">
        <button>View all products </button>
      </Link>
      <p>This is the home page.</p>
    </div>
  );
}
