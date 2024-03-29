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
      ],
      term: '',
      filter: ''
    }
    this.maxId = 4
  }


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

  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => {
  //     const index = data.findIndex(elem => elem.id === id)

  //     const old = data[index]
  //     const newItem = { ...old, increase: !old.increase }
  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

  //     return {
  //       data: newArr
  //     }
  //   })
  // }

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise }
  //       }
  //       return item
  //     })
  //   }))
  // }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
  }

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term: term }) // = this.setState({term}) идентичные записи
  }

  // filterOnSalary = (items) => {
  //   return items.filter(item => item.salary > 1000)
  // }

  // filterOnRise = (items) => {
  //   return items.filter(item => item.rise )
  // }

  // onSetFilter = (filter) => {
  //   this.setState({filter})
  // }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise)
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state
    const totalEmloyee = () => this.state.data.length
    const emloyeeOnRise = () => this.state.data.filter(elem => elem.rise).length
    let visibleData = this.filterPost(this.searchEmployee(data, term), filter)

    // let visibleData

    // switch (this.filter) {
    //   case "salary":
    //     visibleData = this.filterOnSalary(data)
    //     break;
    //   case 'rise':
    //     visibleData = this.filterOnRise(data)
    //     break;
    //   default:
    //     visibleData = this.searchEmployee(data, term)
    //     break;
    // }

    return (
      <div className="app">
        <AppInfo totalEmloyee={totalEmloyee}
          emloyeeRise={emloyeeOnRise} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter}
            onFilterSelect = {this.onFilterSelect}
            /*onSetFilter={onSetFilter}*/ />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }

}

export default App;
