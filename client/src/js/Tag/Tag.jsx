
function TagBtn({ value,onClick,key }) {
    return (
    <div className="TagBtn" key={key} value={value} onClick={onClick}>
        #{value}
    </div>
  );
}
export default TagBtn;
