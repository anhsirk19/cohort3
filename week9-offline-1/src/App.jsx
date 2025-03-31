

function App() {

  return (
    <div style={{ height : "100vh", display : "flex", justifyContent: "center", alignItems: "center"}}>
      <ProfileCardd />
    </div>
  )
}

function ProfileCard(){
  return <div style={{width: 300, height : 350, backgroundColor : "rgb(246, 240, 240)", border: "black", padding : 20}}>
    <div style={{}}>
      <div style={{display : "flex", justifyContent : "center"}}><img style={{width: 130, height : 130, borderRadius : "50%"}} src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg"></img></div>
      <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
        <h2 style={{margin : 10}}>Sai krishna</h2>
        <p style={{margin : 10}}>Working with web2</p>
      </div>
      <hr></hr>
    </div>
    <div>
      <div style={{display : "flex", justifyContent : "space-between", alignItems : "center"}}>
        <h3>Profile viewers</h3>
        <p>41,901</p>
      </div>
      <div style={{display : "flex", justifyContent : "space-between", alignItems : "center"}}>
        <h3>Post impressions</h3>
        <p>1234</p>
      </div>
    </div>
  </div>
}

const ProfileCardd = () => {
  const profileData = {
    name: "Sai Krishna",
    role: "Working with Web2",
    image: "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg",
    stats: {
      viewers: 41901,
      impressions: 1234,
    },
  };

  const containerStyle = {
    width: 300,
    height: 350,
    backgroundColor: "rgb(246, 240, 240)",
    border: "1px solid black",
    borderRadius: "10px",
    padding: 20,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const centeredFlex = {
    display: "flex",
    justifyContent: "center",
  };

  const rowFlex = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <section>
        <div style={centeredFlex}>
          <img
            src={profileData.image}
            alt="Profile"
            style={{ width: 130, height: 130, borderRadius: "50%" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ margin: 10 }}>{profileData.name}</h2>
          <p style={{ margin: 10, fontSize: "14px", color: "gray" }}>{profileData.role}</p>
        </div>
        <hr style={{ margin: "10px 0", border: "0.5px solid gray" }} />
      </section>

      <section>
        <div style={rowFlex}>
          <h3 style={{ fontSize: "14px" }}>Profile viewers</h3>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{profileData.stats.viewers.toLocaleString()}</p>
        </div>
        <div style={rowFlex}>
          <h3 style={{ fontSize: "14px" }}>Post impressions</h3>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{profileData.stats.impressions.toLocaleString()}</p>
        </div>
      </section>
    </div>
  );
};


export default App
