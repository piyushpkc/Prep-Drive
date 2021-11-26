import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Profile extends Component {

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
    <ScrollView data-layer="71d6fc1d-e5ea-44c5-9244-0a2f0a020682" style={styles.profile}>
        <View data-layer="9cc52fb4-586b-4a99-a4da-28af743357d9" style={styles.profile_rectangle1}></View>
        <View data-layer="18343238-8118-41f4-b924-25f0444a0113" style={styles.profile_rectangle14}></View>
        <Svg data-layer="ca723b38-30dc-477d-bb54-5788abbfa3f3" style={styles.profile_path4} preserveAspectRatio="none" viewBox="-0.75 -0.75 407.657958984375 386.373291015625" fill="rgba(252, 252, 252, 1)"><SvgPath d="M 178.0789489746094 0 C 276.4292602539062 0 356.1578979492188 74.96393585205078 356.1578979492188 167.4366455078125 C 356.1578979492188 259.9093627929688 276.4292602539062 334.873291015625 178.0789489746094 334.873291015625 C 79.72866821289062 334.873291015625 0 259.9093627929688 0 167.4366455078125 C 0 74.96393585205078 79.72866821289062 0 178.0789489746094 0 Z"  /></Svg>
        <ReactImage data-layer="401b9cda-65f0-499f-849d-0a18afc5a76e" source={require('./assets/icons8AddUserMale50.png')} style={styles.profile_icons8AddUserMale50} />
        <Svg data-layer="1936be71-fee1-4a38-9c51-1b0ba79fa99d" style={styles.profile_line1} preserveAspectRatio="none" viewBox="0 -0.5 627 1" fill="transparent"><SvgPath d="M 0 0 L 627 0"  /></Svg>
        <Svg data-layer="8d68ed3f-bbda-4088-809b-10ad3997dadf" style={styles.profile_line2} preserveAspectRatio="none" viewBox="0 -0.5 627 1" fill="transparent"><SvgPath d="M 0 0 L 627 0"  /></Svg>
        <Svg data-layer="35268f42-c1b5-4254-b0d7-f678f2d6727f" style={styles.profile_line3} preserveAspectRatio="none" viewBox="0 -0.5 627 1" fill="transparent"><SvgPath d="M 0 0 L 627 0"  /></Svg>
        <Svg data-layer="ad1285e0-745c-4bfb-991e-6bf29ff67880" style={styles.profile_line4} preserveAspectRatio="none" viewBox="0 -0.5 627 1" fill="transparent"><SvgPath d="M 0 0 L 627 0"  /></Svg>
        <Svg data-layer="e7fd130b-2c0a-4dec-9b9a-9a486edbd51a" style={styles.profile_line5} preserveAspectRatio="none" viewBox="0 -0.5 627 1" fill="transparent"><SvgPath d="M 0 0 L 627 0"  /></Svg>
        <Text data-layer="dd65adb6-b703-444c-8f26-77224bf88b97" style={styles.profile_upload}>UPLOAD</Text>
        <Text data-layer="1465c9a5-3429-4adf-b6aa-2dc94d009ccb" style={styles.profile_name}>Name</Text>
        <Text data-layer="fbaf5d55-0b3b-4963-b9d8-d9f8e812ca1d" style={styles.profile_eMail}>E-mail</Text>
        <Text data-layer="e976150f-81fd-490d-9157-87d525a6201c" style={styles.profile_contact}>Contact</Text>
        <Text data-layer="ecbc9b25-2119-4b4a-98e4-94a5553076d3" style={styles.profile_address}>Address</Text>
        <Text data-layer="6a984c18-2234-4347-8b89-48cb4cbb5ddc" style={styles.profile_course}>Course</Text>
    </ScrollView>
    );
  }
}

Profile.propTypes = {

}

Profile.defaultProps = {

}


const styles = StyleSheet.create({
  "profile": {
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
  "profile_rectangle1": {
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
    "borderTopLeftRadius": 168,
    "borderTopRightRadius": 168,
    "borderBottomLeftRadius": 168,
    "borderBottomRightRadius": 168,
    "width": 1185,
    "height": 1024,
    "left": -52,
    "top": -400
  },
  "profile_rectangle14": {
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
    "top": 1856
  },
  "profile_path4": {
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
    "shadowColor": "rgb(17,  17,  17)",
    "shadowOpacity": 0.4392156862745098,
    "shadowOffset": {
      "width": 10,
      "height": 10
    },
    "shadowRadius": 40,
    "width": 406.16,
    "height": 384.87,
    "left": 361.92,
    "top": 330.06
  },
  "profile_icons8AddUserMale50": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 56,
    "borderTopRightRadius": 56,
    "borderBottomLeftRadius": 56,
    "borderBottomRightRadius": 56,
    "width": 154,
    "height": 153,
    "left": 488,
    "top": 421
  },
  "profile_line1": {
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
    "width": 627,
    "height": 1,
    "left": 226.5,
    "top": 1000
  },
  "profile_line2": {
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
    "width": 627,
    "height": 1,
    "left": 226.5,
    "top": 1171
  },
  "profile_line3": {
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
    "width": 627,
    "height": 1,
    "left": 226.5,
    "top": 1342
  },
  "profile_line4": {
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
    "width": 627,
    "height": 1,
    "left": 226.5,
    "top": 1513
  },
  "profile_line5": {
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
    "width": 627,
    "height": 1,
    "left": 226.5,
    "top": 1684
  },
  "profile_upload": {
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
    "width": 219,
    "height": 67,
    "left": 431,
    "top": 1914
  },
  "profile_name": {
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
    "width": 150,
    "height": 67,
    "left": 232,
    "top": 930
  },
  "profile_eMail": {
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
    "width": 167,
    "height": 67,
    "left": 232,
    "top": 1106
  },
  "profile_contact": {
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
    "width": 206,
    "height": 67,
    "left": 232,
    "top": 1276
  },
  "profile_address": {
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
    "width": 212,
    "height": 67,
    "left": 232,
    "top": 1447
  },
  "profile_course": {
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
    "width": 182,
    "height": 67,
    "left": 232,
    "top": 1621
  }
});