
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "promoted",
      time: "",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }
  

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function PostComponent({name, subtitle, time, image, description}) {
    console.log("rerender");
  return <div style={style}> 

    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {time !== undefined ? <div style={{display: 'flex'}}>
          <div>{time}</div>
          <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{width: 12, height: 12}} />
        </div> : null}
      </div>
    </div>
    <div style={{fontSize: 12}}>
     {description}
    </div>
 </div>
}


export default App

