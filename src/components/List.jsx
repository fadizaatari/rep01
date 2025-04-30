import { Link } from "react-router-dom";

function List({ title, link }) {
  return (
    <li>
      <div className="flex h-10 hover:text-cyan-400">
        <Link to={link} className="font-roboto">
          {title}
        </Link>
      </div>
    </li>
  );
}

export default List;
