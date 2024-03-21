import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (precProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   //true -> Props가 바뀌지 않음 -> 리렌더링X
//   //false -> Props가 바뀜 -> 리렌더링 O

//   if (precProps.id !== nextProps.id) return false;
//   if (precProps.isDone !== nextProps.isDone) return false;
//   if (precProps.content !== nextProps.content) return false;
//   if (precProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
