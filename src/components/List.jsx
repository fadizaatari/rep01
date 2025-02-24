function List({ title }) {
  return (
    <li>
      <div className="flex h-10 hover:text-yellow-500">
        <a href="#" className="font-roboto">
          {title}
        </a>
      </div>
    </li>
  );
}

export default List;
