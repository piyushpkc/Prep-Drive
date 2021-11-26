import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Dashboard extends Component {

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
    <ScrollView data-layer="5679c214-349e-426a-b203-a87629d3d46d" style={styles.dashboard}>
        <Svg data-layer="d5ad4fc5-f1ff-426d-82e7-ffef344e84cb" style={styles.dashboard_path1} preserveAspectRatio="none" viewBox="0 0 1185 1201" fill="rgba(88, 48, 224, 1)"><SvgPath d="M 247 0 L 938 0 C 1074.414306640625 0 1185 110.5856628417969 1185 247 L 1185 954 C 1185 1090.414306640625 1074.414306640625 1201 938 1201 L 247 1201 C 110.5856628417969 1201 0 1090.414306640625 0 954 L 0 247 C 0 110.5856628417969 110.5856628417969 0 247 0 Z"  /></Svg>
        <Svg data-layer="b85bf596-4186-4c25-9026-48259c68da7c" style={styles.dashboard_path4} preserveAspectRatio="none" viewBox="-0.75 -0.75 357.5 380.4841613769531" fill="rgba(252, 252, 252, 1)"><SvgPath d="M 153 0 C 237.4995574951172 0 306 73.64562225341797 306 164.4920959472656 C 306 255.3385772705078 237.4995574951172 328.9841918945312 153 328.9841918945312 C 68.50043487548828 328.9841918945312 0 255.3385772705078 0 164.4920959472656 C 0 73.64562225341797 68.50043487548828 0 153 0 Z"  /></Svg>
        <ReactImage data-layer="34601c82-3c28-4982-a4ee-acf9839b0798" source={require('./assets/icons8AddUserMale50.png')} style={styles.dashboard_icons8AddUserMale50} />
        <View data-layer="f8fcdee7-7159-4d88-a314-7cfb61de9984" style={styles.dashboard_rectangle2}></View>
        <View data-layer="68bb200f-ead7-4487-bdcd-3690b2f9500b" style={styles.dashboard_rectangle4}></View>
        <Svg data-layer="c2f39851-65b3-4cfc-8808-a3c1bbf7b1aa" style={styles.dashboard_path2} preserveAspectRatio="none" viewBox="-0.75 -0.75 505.5 514.5" fill="rgba(230, 151, 33, 1)"><SvgPath d="M 123 0 L 341 0 C 408.9310302734375 0 464 55.0689697265625 464 123 L 464 350 C 464 417.9310302734375 408.9310302734375 473 341 473 L 123 473 C 55.0689697265625 473 0 417.9310302734375 0 350 L 0 123 C 0 55.0689697265625 55.0689697265625 0 123 0 Z"  /></Svg>
        <View data-layer="89e747cf-321e-45ce-9d68-318b246941e6" style={styles.dashboard_rectangle3}></View>
        <View data-layer="788e2154-fc89-4c81-89ff-f97c2d215ea2" style={styles.dashboard_rectangle8}></View>
        <Svg data-layer="51ddffd0-c58f-476d-b794-54de0f0b61f5" style={styles.dashboard_path3} preserveAspectRatio="none" viewBox="-0.7500010396923926 -0.75 399.5908203125 359.8868103027344" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 198.7556304931641 0 C 308.5252990722656 0 397.5112609863281 79.8863525390625 397.5112609863281 178.4311676025391 C 397.5112609863281 233.8133544921875 406.5262756347656 311.8326721191406 353.4461364746094 339.4580688476562 C 316.0246276855469 358.9339599609375 270.0058898925781 351.9425964355469 231.333251953125 356.293701171875 C 192.6606292724609 360.644775390625 212.9389801025391 356.8623352050781 198.7556304931641 356.8623352050781 C 88.98593139648438 356.8623352050781 -1.039692392623692e-06 276.9759521484375 -1.039692392623692e-06 178.4311676025391 C -1.039692392623692e-06 79.8863525390625 88.98593139648438 0 198.7556304931641 0 Z"  /></Svg>
        <View data-layer="0ea4901a-720e-4c0a-8bd8-aac8ed02ad24" style={styles.dashboard_rectangle9}></View>
        <View data-layer="f87603b1-7f62-4288-b1c0-369bb5e9979b" style={styles.dashboard_rectangle11}></View>
        <View data-layer="0518f832-cbca-4f1d-9a2c-ab80e6d5e054" style={styles.dashboard_rectangle12}></View>
        <Text data-layer="745539e7-c47d-4f3d-809c-4d98c219ab69" style={styles.dashboard_quantAptitude}>Quant Aptitude</Text>
        <Text data-layer="39e3646f-ced5-40a9-9e33-3d9dd955ca18" style={styles.dashboard_verbalAptitude}>Verbal Aptitude</Text>
        <Text data-layer="815a192a-14c0-47ba-b109-4eec71f25f31" style={styles.dashboard_logicalReasoning}>Logical Reasoning</Text>
        <Text data-layer="33beef99-27e9-4d42-be7d-c640f1734a26" style={styles.dashboard_technicalAptitude}>Technical Aptitude</Text>
        <Text data-layer="2e1eadc0-97da-4275-a583-35e58fe95d1a" style={styles.dashboard_dataStructuresAndAlgorithm}>Data Structures and Algorithm</Text>
        <Svg data-layer="6d783d84-b0ff-4cf9-8c97-d3a55c2b8c66" style={styles.dashboard_path7} preserveAspectRatio="none" viewBox="0 0 1212.89794921875 2348" fill="rgba(14, 35, 83, 1)"><SvgPath d="M 606 0 L 606.8980712890625 0 C 941.5826416015625 0 1212.898071289062 271.3154296875 1212.898071289062 606 L 1212.898071289062 1742 C 1212.898071289062 2076.6845703125 941.5826416015625 2348 606.8980712890625 2348 L 606 2348 C 271.3154296875 2348 0 2076.6845703125 0 1742 L 0 606 C 0 271.3154296875 271.3154296875 0 606 0 Z"  /></Svg>
    </ScrollView>
    );
  }
}

Dashboard.propTypes = {

}

Dashboard.defaultProps = {

}


const styles = StyleSheet.create({
  "dashboard": {
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
  "dashboard_path1": {
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
    "width": 1185,
    "height": 1201,
    "left": -52,
    "top": -206
  },
  "dashboard_path4": {
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
    "width": 356,
    "height": 378.98,
    "left": 387,
    "top": 230.01
  },
  "dashboard_icons8AddUserMale50": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 122,
    "height": 122,
    "left": 479,
    "top": 334
  },
  "dashboard_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(208, 73, 217, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 123,
    "borderTopRightRadius": 123,
    "borderBottomLeftRadius": 123,
    "borderBottomRightRadius": 123,
    "shadowColor": "rgb(12,  11,  11)",
    "shadowOpacity": 0.6588235294117647,
    "shadowOffset": {
      "width": 20,
      "height": 20
    },
    "shadowRadius": 20,
    "width": 464,
    "height": 473,
    "left": 56,
    "top": 758
  },
  "dashboard_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 33, 98, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 123,
    "borderTopRightRadius": 123,
    "borderBottomLeftRadius": 123,
    "borderBottomRightRadius": 123,
    "shadowColor": "rgb(12,  11,  11)",
    "shadowOpacity": 0.6588235294117647,
    "shadowOffset": {
      "width": 20,
      "height": 20
    },
    "shadowRadius": 20,
    "width": 464,
    "height": 473,
    "left": 56,
    "top": 1295
  },
  "dashboard_path2": {
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
    "shadowColor": "rgb(12,  11,  11)",
    "shadowOpacity": 0.6588235294117647,
    "shadowOffset": {
      "width": 20,
      "height": 20
    },
    "shadowRadius": 20,
    "width": 504,
    "height": 513,
    "left": 562,
    "top": 1295
  },
  "dashboard_rectangle3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(179, 30, 233, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 123,
    "borderTopRightRadius": 123,
    "borderBottomLeftRadius": 123,
    "borderBottomRightRadius": 123,
    "shadowColor": "rgb(12,  11,  11)",
    "shadowOpacity": 0.6588235294117647,
    "shadowOffset": {
      "width": 20,
      "height": 20
    },
    "shadowRadius": 20,
    "width": 464,
    "height": 473,
    "left": 562,
    "top": 767
  },
  "dashboard_rectangle8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 54,
    "borderTopRightRadius": 54,
    "borderBottomLeftRadius": 54,
    "borderBottomRightRadius": 54,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.6196078431372549,
    "shadowOffset": {
      "width": 15,
      "height": 10
    },
    "shadowRadius": 50,
    "width": 970,
    "height": 223,
    "left": 56,
    "top": 1877
  },
  "dashboard_path3": {
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
    "width": 398.09,
    "height": 358.39,
    "left": -235.04,
    "top": -194.31
  },
  "dashboard_rectangle9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 99,
    "height": 8,
    "left": 21,
    "top": 48
  },
  "dashboard_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 99,
    "height": 8,
    "left": 21,
    "top": 76
  },
  "dashboard_rectangle12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 99,
    "height": 8,
    "left": 21,
    "top": 100
  },
  "dashboard_quantAptitude": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
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
    "width": 282,
    "height": 53,
    "left": 148,
    "top": 967
  },
  "dashboard_verbalAptitude": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
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
    "width": 284,
    "height": 53,
    "left": 652,
    "top": 967
  },
  "dashboard_logicalReasoning": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
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
    "width": 327,
    "height": 53,
    "left": 125,
    "top": 1498
  },
  "dashboard_technicalAptitude": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
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
    "width": 335,
    "height": 53,
    "left": 627,
    "top": 1498
  },
  "dashboard_dataStructuresAndAlgorithm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
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
    "width": 553,
    "height": 53,
    "left": 264,
    "top": 1955
  },
  "dashboard_path7": {
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
    "width": 1212.9,
    "height": 2348,
    "left": -66.45,
    "top": 1606.33
  }
});