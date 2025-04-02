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
            <ErrorBoundary>
                <Content1/>
            </ErrorBoundary>
            </Card>
        <ErrorBoundary>
            <Card>
                <Content2 />
            </Card>
        </ErrorBoundary>
        </div>
    );
};

const Content1 = () =>{
    throw new Error("I crashed!");
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


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default App;
