
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import './App.css'
import { counterAtom, evenSelector } from './store/atoms/counter';




function App() {

  return (
    <RecoilRoot>
     <Counter />
    </RecoilRoot>
  )
}

function Counter(){
  return <div>
    <Currentcount />
    <Increase />
    <Decrease />
    <Evenselector/>
  </div>
}

function Evenselector(){
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ? "even" : "odd"}
  </div>
}

function Currentcount(){
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={() => {setCount(c => c + 2)}}>Increase</button>
  </div>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);

  return <div>
    <button onClick={() => {setCount(c => c - 1)}}>Decrease</button>
  </div>
}

export default App
