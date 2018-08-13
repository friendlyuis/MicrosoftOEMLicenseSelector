import React from "react";
import Select from "react-select";
import data from "./data";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class Selector extends React.Component {
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

    //loads oem json data into array list only once
    for (i = 0; i < data.length; i++) {
      if (arrayList.includes(data[i].label)) {
      } else {
        arrayList.push(data[i].label);
      }
    }

    //turning array into an array of objects
    for (i = 0; i < arrayList.length; i++) {
      arrayList[i] = { label: arrayList[i] };
    }

    console.log(arrayList);
    //sets category state
    this.setState({ categories: arrayList });
  }

  handleChange = selectedOption => {
    let i;
    let toView = [];
    let key;

    //matches the selected option to the dataset
    for (i = 0; i < data.length; i++) {
      //if it's the same, add to new toView array
      if (data[i].label === selectedOption.label) {
        toView.push({ key: key, data: data[i] });
        key = key + 1;
      }
    }
    //set the array to state
    this.setState({
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
          isMulti={false}
          autoFocus={true}
        />
        <List>
          {this.state.toView.map(item => (
            <ListItem divider={true}>
              <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                <ListItemText
                  primary={item.data.Description}
                  style={{ display: "flex", flex: 9 }}
                />
                <ListItemText
                  primary={item.data.value}
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "flex-end"
                  }}
                />
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
