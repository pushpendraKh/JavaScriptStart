import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import store from './store';
import { incrementCounter , decrementCounter} from './ActionTypes'
import { connect} from 'react-redux';
import { bindActionCreators, Dispatch ,DispatchProps} from 'redux';

export interface OwnProps {
  name: string
  enthusiasmLevel?: number
  // onIncrement: () => void
  // onDecrement: () => void
  
}

interface StateProps {
  count: number
}

type Props = OwnProps & StateProps & DispatchProps

interface State {
  enthusiasmLevel: number
}

// const mapStateToProps = state => ({
//   isLoggedIn: state.userInfo.isLoggedIn,
//   temp: state.userInfo.temp
// });
// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     incrementCounter
//   }, dispatch)
// );

function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return { count: state.count }
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps {
   return { onIncrement : () => dispatch(incrementCounter(1)), 
        onDecrement : () => dispatch(decrementCounter(1))
          }
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error("You could be a little more enthusiastic. :D")
    }

    this.state = {
      enthusiasmLevel: props.count
    }
  }

  // onIncrement = () => {  store.dispatch(incrementCounter(1));this.setState({enthusiasmLevel:store.getState().count + 1}); };
  // onDecrement = () => { this.setState({enthusiasmLevel:this.state.enthusiasmLevel - 1}); this.props.onDecrement() };
  getExclamationMarks = (numChars: number) => {
    console.log("Ansu -----")
    console.log(numChars);
    return Array(numChars + 1).join("!")
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello {this.props.name + this.getExclamationMarks(this.props.count)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.props.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.props.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    )
  }
}


// styles

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
})

export default connect<StateProps, DispatchProps, OwnProps>
  (mapStateToProps,mapDispatchToProps)(Hello)