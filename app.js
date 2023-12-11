const Container = () => {
    return React.createElement(`div`,null,`Hey kalvians!, Welcome to React Learning`,
    React.createElement(`div`,null,`Let's rock and roll`))
}

const container1 = document.getElementById('react-container')
ReactDOM.render(React.createElement(Container),container1);

// progress2

class ReactContainer1 extends React.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`))
    }
}

const container2 = document.getElementById('react-container2')
ReactDOM.render(React.createElement(ReactContainer1),container2);

// Progress3

class ReactContainer2 extends React.Component{

      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>Let's rock and roll-This is babel</div>
         </div> )
      };  
  }

const container3 = document.getElementById('react-container3');
ReactDOM.render(<ReactContainer2/>,container3); 