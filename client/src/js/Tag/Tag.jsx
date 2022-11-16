
function TagBtn({ value,onClick,key }) {
    return (
    <div className="TagBtn" key={key} value={value} onClick={onClick}>
        <p>#<span>{value}</span></p>
    </div>
  );
}
export default TagBtn;
