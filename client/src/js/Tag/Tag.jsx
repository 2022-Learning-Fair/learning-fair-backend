import { Link } from 'react-router-dom';
function TagBtn({ value,onClick,key,link }) {
    return (
    <Link to={link}>
      <div className="TagBtn" key={key} value={value} onClick={onClick}>
        #{value}
      </div>
    </Link>
  );
}
export default TagBtn;
