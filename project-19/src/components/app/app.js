import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: true, id: 1, rise: true },
        { name: "Alex M.", salary: 300, increase: true, id: 2, rise: false },
        { name: "Carl W.", salary: 5000, increase: false, id: 3, rise: false }
      ]
    }
    this.maxId = 4
  }

  totalEmloyee = () =>  this.state.data.length
  emloyeeRise = () => (this.state.data.filter(elem => elem.rise !== false)).length
  

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {   // мое решение
    this.setState(({ data }) => {
      return {
        data: [...data, { name: name, salary: salary, increase: false, rise: false, id: this.maxId++ }]
      }
    })
  }

  /*//   addItem = (name, salary) => { - решение из примера
  //     const newItem = {
  //         name, 
  //         salary,
  //         increase: false,
  //         id: this.maxId++
  //     }
  //     this.setState(({data}) => {
  //         const newArr = [...data, newItem];
  //         return {
  //             data: newArr
  //         }
  //     });
  // }
  */

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id)

      const old = data[index]
      const newItem = { ...old, increase: !old.increase }
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item
      })
    }))
  }


  render() {
    return (
      <div className="app">
        <AppInfo totalEmloyee={this.totalEmloyee}
                  emloyeeRise={this.emloyeeRise}/>

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }

}

export default App;
