import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <Content1/>
            </Card>
            <Card>
                <Content2 />
            </Card>
        </div>
    );
};

const Content1 = () =>{
  return (
    <div>
      <h2>Card Title</h2>
      <p>This is some content inside the card.</p>
    </div>
  )
}

const Content2 = () =>{
  return (
    <div>
      <h2>Another Card</h2>
      <p>This card has different content!</p>
    </div>
  )
}

export default App;
