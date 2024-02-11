import { useReducer, useRef } from 'react';
import './App.css';
import Reducer from './Reducer';

function reducerFunc(state, Action) {

  if (Action.type === 'ADD_NEW_ITEM') {
    return [...state, { text: Action.payload, isHidden: false }];
  }

  else if (Action.type === 'MAPPED_ARRAY') {
    return [...Action.payload];
  }

  else {
    return state;
  }

}

function Task1() {

  const [state, dispatch] = useReducer(reducerFunc, []);

  const redVariable = useRef();

  console.log(redVariable);

  const handleToggle = (indexSent) => {
    let mappedArray = state.map((element, index) => {

      if (index === indexSent) {
        return {
          text: element.text,
          isHidden: !element.isHidden,
        };
      }

      else {
        return element;
      }

    });

    console.log(mappedArray);

    dispatch({ type: 'MAPPED_ARRAY', payload: mappedArray });

  };
  return (
    <div>

      <div className="center-div">

        <input ref={redVariable} type="text" onKeyDown={(event) => {

          if (event.key == 'Enter') {
            dispatch({ type: 'ADD_NEW_ITEM', payload: event.target.value });
          }

        }} />

      </div>

      <div>
        {state.map(function (element, index) {
          //1
          return (
            <div key={index} className="center-div background">

              <h2> {element.isHidden == true ? 'Text is Hidden' : element.text} </h2>

              <button onClick={() => { handleToggle(index); }}> Toggle </button>

            </div>
          );
        })}
      </div>

      <div className="center-div">

        <button onClick={() => { redVariable.current.focus() }} > {' '}
          Focus the input Box
        </button>

      </div>

    </div>
  );
}

export default Task1;