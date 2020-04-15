import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        //actualizar react state
        this.setState({
            [key]: value
        });
    }

    additem() {
        //creacion de item con id único
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        //copia de la actual lista de los items
        const list = [...this.state.list];

        //agregar nuevo item a la lista
        list.push(newItem);

        //actualizar state con nueva lista
        this.setState({
            list,
            newItem: ""
        });
    }

    deleteItem(id) {
        //copia lista actual
        const list = [...this.state.list];

        //filtro para eliminar
        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="card">
                        <div className="App">
                            <h1>todo</h1>
                            <input type="text" placeholder="Agregar una tarea" value={this.state.newItem}
                                onChange={e => this.updateInput("newItem", e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => this.additem()}>Agregar</button>
                        <br></br>
                        <ul>
                            {this.state.list.map(item => {
                                return (
                                    <div className="row">
                                        <div className="col">
                                            <li key={item.id}>
                                                {item.value}
                                            </li>
                                        </div>
                                        <div class="col">
                                            <button type="button" className="btn btn-danger" onClick={() => this.deleteItem(item.id)}>eliminar</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
export default App;