import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import data from "./data";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toView: [],
      selectedOption: null
    };
  }

  componentDidMount() {
    let i;
    let arrayList = [];

    for (i = 0; i < data.length; i++) {
      if (arrayList.includes(data[i].label)) {
      } else {
        arrayList.push(data[i].label);
      }
    }

    for (i = 0; i < arrayList.length; i++) {
      arrayList[i] = { label: arrayList[i] };
    }

    console.log(arrayList);
    this.setState({ categories: arrayList });
  }

  handleChange = selectedOption => {
    let i;
    let toView = [];

    for (i = 0; i < data.length; i++) {
      if (data[i].label === selectedOption.label) {
        toView.push(data[i]);
      }
    }
    this.setState({
      selectedOption: selectedOption,
      toView: toView
    });
  };

  render() {
    const { selectedOption } = this.state;
    console.log(this.state.toView);

    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.categories}
        />
        <List>
          {this.state.toView.map(item => (
            <ListItem>
              <ListItemText primary={item.Description} />
              <ListItemText primary={item.value} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
