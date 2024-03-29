import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import axios from "axios";
import { useState, useRef, useReducer, useCallback, useEffect } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

// axios
//   .get("http://localhost:3000/mockData")
//   .then((res) => {
//     //console.log(JSON.stringify(res.data));
//     //mockData = JSON.stringify(res.data);
//   })
//   .catch((err) => {
//     console.log("err");
//   });

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  //const [mockData, setMockData] = useState(
  //   axios.get("http://localhost:3000/mockData").then((rep) => {
  //     console.log(JSON.stringify(rep.data));
  //   })
  // );
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/mockData").then((rep) => {
  //     console.log(JSON.stringify(rep.data));
  //     setMockData(rep.data);
  //   });
  // }, []);

  console.log(JSON.stringify(mockData));

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        data: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
