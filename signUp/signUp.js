import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignUp extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="09c20432-878d-4674-b76c-34f89bb3e348" style={styles.signUp}>
        <View data-layer="2f13f510-4bb3-43d1-9498-5a5038145093" style={styles.signUp_rectangle1}></View>
        <Svg data-layer="d4c3f83a-5f3d-4654-9d55-f7eabc1319dc" style={styles.signUp_line1} preserveAspectRatio="none" viewBox="0 -0.5 774 1" fill="transparent"><SvgPath d="M 0 0 L 774 0"  /></Svg>
        <Svg data-layer="db24d98f-13e4-4d2c-81fa-e6758924288d" style={styles.signUp_line2} preserveAspectRatio="none" viewBox="0 -0.5 753.5 1" fill="transparent"><SvgPath d="M 0 0 L 753.5 0"  /></Svg>
        <Svg data-layer="64311d25-f246-421d-8438-0a844e59878b" style={styles.signUp_line3} preserveAspectRatio="none" viewBox="0 -0.5 753.5 1" fill="transparent"><SvgPath d="M 0 0 L 753.5 0"  /></Svg>
        <Text data-layer="14cca2e6-f8b9-4bcf-b240-cb497ef282a7" style={styles.signUp_userId}>User Id</Text>
        <Text data-layer="2349ca18-156a-4920-9913-3d873c9089db" style={styles.signUp_password}>Password</Text>
        <Text data-layer="c563ee77-8dda-4d98-a5e8-5a2acf9dbef3" style={styles.signUp_confirmPassword}>Confirm Password</Text>
        <View data-layer="ea3b4022-2928-4a45-94fb-2571f4d9f775" style={styles.signUp_rectangle27}></View>
        <View data-layer="bd4165de-5c0b-496b-98e9-01b5229fc7b9" style={styles.signUp_rectangle28}></View>
        <Text data-layer="ff3773ee-0f20-42dd-89cd-631ff0bbb5dd" style={styles.signUp_signUp43803665}>Sign UP</Text>
    </ScrollView>
    );
  }
}

SignUp.propTypes = {

}

SignUp.defaultProps = {

}


const styles = StyleSheet.create({
  "signUp": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1080,
    "height": 2343,
    "left": 0,
    "top": 0
  },
  "signUp_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(14, 35, 83, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 606,
    "borderTopRightRadius": 606,
    "borderBottomLeftRadius": 606,
    "borderBottomRightRadius": 606,
    "width": 1212,
    "height": 2348,
    "left": 164.79,
    "top": -1623
  },
  "signUp_line1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 774,
    "height": 1,
    "left": 145.5,
    "top": 899
  },
  "signUp_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 753.5,
    "height": 1,
    "left": 163.25,
    "top": 1066
  },
  "signUp_line3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 753.5,
    "height": 1,
    "left": 163.25,
    "top": 1234.5
  },
  "signUp_userId": {
    "opacity": 0.5299999713897705,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 50,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 190,
    "height": 67,
    "left": 166,
    "top": 833
  },
  "signUp_password": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 50,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 248,
    "height": 67,
    "left": 163.25,
    "top": 994
  },
  "signUp_confirmPassword": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 50,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 485,
    "height": 67,
    "left": 166,
    "top": 1171.5
  },
  "signUp_rectangle27": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(14, 35, 83, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 593,
    "borderTopRightRadius": 593,
    "borderBottomLeftRadius": 593,
    "borderBottomRightRadius": 593,
    "width": 1210.82,
    "height": 1822.4,
    "left": -709.05,
    "top": 1711.51
  },
  "signUp_rectangle28": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(69, 63, 214, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(78, 47, 151, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(78, 47, 151, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(78, 47, 151, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(78, 47, 151, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 847,
    "height": 182,
    "left": 117,
    "top": 1437
  },
  "signUp_signUp43803665": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 50,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 208,
    "height": 67,
    "left": 431,
    "top": 1495
  }
});