import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


import {actions, connect} from 'react-mirrorx'

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          result: ''
      }
  }

  _callFetch2() {
      actions.app.fetchRequest('shaoyun')
      .then( result => { 
        this.setState({ result: JSON.stringify(result) })
      }).catch((err) => {
        console.log(err);
      });
  }

  async _callFetch() {
    try {
      let result = await actions.app.fetchRequest('shaoyun')
      this.setState({ result: JSON.stringify(result) })
    } catch (error) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >
          Count: {this.props.app.count}
        </Text>
        <View style={{ flexDirection: 'column'}}>
        <Button onPress={()=>{ actions.app.increment()}} title="Sync +1" />
        <Button onPress={()=>{ actions.app.incrementAsync()}} title="Async +1" />
        <Button onPress={()=>{ actions.app.fetchRequest('shaoyun')}} title="Fetch Url" />
        <Button onPress={()=>{ this._callFetch() }} title="Fetch Url2" />
        </View>
        <Text>
          Fetch Result:
        </Text>
        <Text>
        Fetch Result2: {this.state.result}
         </Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});