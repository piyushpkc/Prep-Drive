import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Menu extends Component {

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
    <ScrollView data-layer="d119dd50-6de5-4e24-8751-37f0ccd9538e" style={styles.menu}>
        <Svg data-layer="8249237b-4cc2-4d64-9d33-fa22953af0ed" style={styles.menu_path1} preserveAspectRatio="none" viewBox="0 0 1185 1201" fill="rgba(88, 48, 224, 1)"><SvgPath d="M 247 0 L 938 0 C 1074.414306640625 0 1185 110.5856628417969 1185 247 L 1185 954 C 1185 1090.414306640625 1074.414306640625 1201 938 1201 L 247 1201 C 110.5856628417969 1201 0 1090.414306640625 0 954 L 0 247 C 0 110.5856628417969 110.5856628417969 0 247 0 Z"  /></Svg>
        <Svg data-layer="37817501-c660-424d-90c3-9e698254f51c" style={styles.menu_path4} preserveAspectRatio="none" viewBox="-0.75 -0.75 446.5 463.5" fill="rgba(252, 252, 252, 1)"><SvgPath d="M 219.5 0 C 340.7265014648438 0 439 101.4075088500977 439 226.5 C 439 351.5924987792969 340.7265014648438 453 219.5 453 C 98.27350616455078 453 0 351.5924987792969 0 226.5 C 0 101.4075088500977 98.27350616455078 0 219.5 0 Z"  /></Svg>
        <ReactImage data-layer="711433a1-f1be-4d89-bd37-abe6717a5b22" source={require('./assets/icons8AddUserMale5075e62f75.png')} style={styles.menu_icons8AddUserMale5075e62f75} />
        <View data-layer="e64689ad-b3db-4f4a-a5df-4242cba7b1f3" style={styles.menu_rectangle2}></View>
        <View data-layer="87a65980-40d1-49b8-8193-1599360e23b3" style={styles.menu_rectangle4}></View>
        <Svg data-layer="fb5fd187-66e0-4563-b027-f6324af978dc" style={styles.menu_path2} preserveAspectRatio="none" viewBox="-0.75 -0.75 505.5 514.5" fill="rgba(230, 151, 33, 1)"><SvgPath d="M 123 0 L 341 0 C 408.9310302734375 0 464 55.0689697265625 464 123 L 464 350 C 464 417.9310302734375 408.9310302734375 473 341 473 L 123 473 C 55.0689697265625 473 0 417.9310302734375 0 350 L 0 123 C 0 55.0689697265625 55.0689697265625 0 123 0 Z"  /></Svg>
        <View data-layer="821a0eef-9944-4ecc-a0af-2bf1bb335cd5" style={styles.menu_rectangle3}></View>
        <View data-layer="a5d42d76-f594-48c1-8984-508cd99f05ff" style={styles.menu_rectangle8}></View>
        <Svg data-layer="02fc7bcb-fefc-419c-83e5-6e070df15a7e" style={styles.menu_path3} preserveAspectRatio="none" viewBox="-0.7500010396923926 -0.75 399.5908203125 358.3623352050781" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 198.7556304931641 0 C 308.5252990722656 0 397.5112609863281 79.8863525390625 397.5112609863281 178.4311676025391 C 397.5112609863281 233.8133544921875 406.5262756347656 311.8326721191406 353.4461364746094 339.4580688476562 C 316.0246276855469 358.9339599609375 269.5720520019531 337.3396911621094 230.8994140625 341.6907958984375 C 192.2267913818359 346.0418701171875 212.9389801025391 356.8623352050781 198.7556304931641 356.8623352050781 C 88.98593139648438 356.8623352050781 -1.039692392623692e-06 276.9759521484375 -1.039692392623692e-06 178.4311676025391 C -1.039692392623692e-06 79.8863525390625 88.98593139648438 0 198.7556304931641 0 Z"  /></Svg>
        <View data-layer="28befa08-552b-4f7e-a398-1eee5ca73dc3" style={styles.menu_rectangle9}></View>
        <View data-layer="7161f532-963c-472a-aa90-7005e8c38d20" style={styles.menu_rectangle11}></View>
        <View data-layer="7a2795a7-4583-4e18-8e8c-bc77e41a0666" style={styles.menu_rectangle12}></View>
        <Text data-layer="fca48f30-79ed-4c4c-a349-a993c86045d9" style={styles.menu_quantAptitude}>Quant Aptitude</Text>
        <Text data-layer="ee134339-2ad6-47af-8c39-488611e001b5" style={styles.menu_verbalAptitude}>Verbal Aptitude</Text>
        <Text data-layer="6ec98ee4-8071-4eba-a6b0-1e87bca9c9a5" style={styles.menu_logicalReasoning}>Logical Reasoning</Text>
        <Text data-layer="8a116ee2-56d1-4f37-8ea9-eb9b9db5167b" style={styles.menu_technicalAptitude}>Technical Aptitude</Text>
        <Text data-layer="6df4b0ac-65cb-4c6a-9108-f6f6ca76973d" style={styles.menu_dataStructuresAndAlgorithm}>Data Structures and Algorithm</Text>
        <View data-layer="c7d2afa4-4b1d-4694-9241-bdd186fb10ab" style={styles.menu_rectangle15}></View>
        <View data-layer="148a9100-5d5a-4181-9909-8b6358ce14da" style={styles.menu_rectangle16}></View>
        <Svg data-layer="de0c5dba-ded4-42fc-a061-5641156a0ced" style={styles.menu_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 2568.5 2930.5" fill="rgba(217, 48, 110, 1)"><SvgPath d="M 1263.5 0 C 1961.311767578125 0 2527 644.4861450195312 2527 1439.5 C 2527 2234.513916015625 1961.311767578125 2879 1263.5 2879 C 565.688232421875 2879 0 2234.513916015625 0 1439.5 C 0 644.4861450195312 565.688232421875 0 1263.5 0 Z"  /></Svg>
        <View data-layer="f116be83-a4b3-4949-8aa5-bfe5110fed07" style={styles.menu_rectangle17}></View>
        <Svg data-layer="bb73852b-8f53-47b2-a768-71eb491062be" style={styles.menu_path5} preserveAspectRatio="none" viewBox="-0.75 -0.75 556.5 7.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 0 L 555 0 L 555 6 L 0 6 L 0 0 Z"  /></Svg>
        <View data-layer="91a520c8-208a-44d3-ba82-3563b6aff311" style={styles.menu_rectangle20}></View>
        <View data-layer="bea1f907-638c-4ef5-a0b6-4c89ec5cc417" style={styles.menu_rectangle21}></View>
        <View data-layer="425fe59f-590b-476c-9a99-fcf8f949a124" style={styles.menu_rectangle22}></View>
        <View data-layer="92f15984-96be-471f-a8bc-bbbb139ca1fb" style={styles.menu_rectangle24}></View>
        <View data-layer="b64aba99-2399-4a47-b0e1-faa201912175" style={styles.menu_component11}>
            <View data-layer="024afa42-8fe2-4116-b672-5e84203e3954" style={styles.menu_component11_rectangle23}></View>
        </View>
        <Svg data-layer="426b52ea-b95b-4462-b8f1-0093e356ffb0" style={styles.menu_path6} preserveAspectRatio="none" viewBox="-0.75 -0.75 283.5 278" fill="rgba(252, 252, 252, 1)"><SvgPath d="M 116 0 C 180.0650329589844 0 232 50.70375061035156 232 113.25 C 232 175.7962493896484 180.0650329589844 226.5 116 226.5 C 51.93497467041016 226.5 0 175.7962493896484 0 113.25 C 0 50.70375061035156 51.93497467041016 0 116 0 Z"  /></Svg>
        <ReactImage data-layer="2d6bf646-299b-444d-8839-77f4293e1a7e" source={require('./assets/icons8AddUserMale50.png')} style={styles.menu_icons8AddUserMale50} />
    </ScrollView>
    );
  }
}

Menu.propTypes = {

}

Menu.defaultProps = {

}


const styles = StyleSheet.create({
  "menu": {
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
  "menu_path1": {
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
  "menu_path4": {
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
    "shadowOpacity": 0,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 445,
    "height": 462,
    "left": 321,
    "top": 166
  },
  "menu_icons8AddUserMale5075e62f75": {
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
    "width": 136,
    "height": 136,
    "left": 472,
    "top": 325
  },
  "menu_rectangle2": {
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
  "menu_rectangle4": {
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
  "menu_path2": {
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
  "menu_rectangle3": {
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
  "menu_rectangle8": {
    "opacity": 0.3100000023841858,
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
  "menu_path3": {
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
    "height": 356.86,
    "left": -235.02,
    "top": -194.31
  },
  "menu_rectangle9": {
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
    "left": 25,
    "top": 38
  },
  "menu_rectangle11": {
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
    "left": 25,
    "top": 66
  },
  "menu_rectangle12": {
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
    "left": 25,
    "top": 90
  },
  "menu_quantAptitude": {
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
  "menu_verbalAptitude": {
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
  "menu_logicalReasoning": {
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
  "menu_technicalAptitude": {
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
  "menu_dataStructuresAndAlgorithm": {
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
  "menu_rectangle15": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 25,
    "height": 21,
    "left": 0,
    "top": 0
  },
  "menu_rectangle16": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 22,
    "height": 43,
    "left": 75,
    "top": 123
  },
  "menu_ellipse5": {
    "opacity": 0.9599999785423279,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(45,  43,  43)",
    "shadowOpacity": 0.8,
    "shadowOffset": {
      "width": 10,
      "height": 20
    },
    "shadowRadius": 30,
    "width": 2567,
    "height": 2929,
    "left": -1207,
    "top": -606
  },
  "menu_rectangle17": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 555,
    "height": 6,
    "left": 72,
    "top": 319
  },
  "menu_path5": {
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
    "width": 555,
    "height": 6,
    "left": 75,
    "top": 801
  },
  "menu_rectangle20": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 555,
    "height": 6,
    "left": 72,
    "top": 1036
  },
  "menu_rectangle21": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 555,
    "height": 6,
    "left": 72,
    "top": 1239
  },
  "menu_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 555,
    "height": 6,
    "left": 72,
    "top": 1445
  },
  "menu_rectangle24": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 555,
    "height": 6,
    "left": 72,
    "top": 1679
  },
  "menu_component11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1132,
    "height": 708,
    "left": -26,
    "top": -146
  },
  "menu_component11_rectangle23": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "borderTopLeftRadius": 119,
    "borderTopRightRadius": 119,
    "borderBottomLeftRadius": 119,
    "borderBottomRightRadius": 119,
    "width": 1132,
    "height": 708,
    "left": 0,
    "top": 0
  },
  "menu_path6": {
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
    "width": 282,
    "height": 276.5,
    "left": 760,
    "top": 74.25
  },
  "menu_icons8AddUserMale50": {
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
    "width": 209,
    "height": 209,
    "left": 839,
    "top": 31.25
  }
});