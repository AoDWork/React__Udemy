class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counter
    }
  }
  
  plusOne = () => {
    if(this.state.count < 5) 
    this.setState( state =>(
    {count: state.count + 1}
    ))
  }
  
    minusOne = () => {
    if(this.state.count > -5) 
    this.setState( state =>(
    {count: state.count - 1}
    ))
  }
  
  randomNumber = () => {
    this.setState( 
    {count: Math.round(Math.random()*100}
    )
  }
  
  resetCount = () => {
    this.setState( {count: 0} )
  }
  
  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.count}</div>
        <div class="controls">
          <button onClick={this.plusOne}>INC</button>
          <button onClick={this.minusOne}>DEC</button>
          <button onClick={this.randomNumber}>RND</button>
          <button onClick={this.resetCount}>RESET</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов