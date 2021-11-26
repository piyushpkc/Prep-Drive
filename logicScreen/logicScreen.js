import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class LogicScreen extends Component {

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
    <ScrollView data-layer="821feef8-8814-4501-b57c-0ede69e27460" style={styles.logicScreen}>
        <Svg data-layer="b6397e9e-1ca9-4c58-aa15-e4a30be8db36" style={styles.logicScreen_path1} preserveAspectRatio="none" viewBox="0 0 892.647216796875 1489.0322265625" fill="rgba(249, 33, 98, 1)"><SvgPath d="M 186.0623321533203 0 L 706.5848999023438 0 C 809.34423828125 0 892.647216796875 137.1071166992188 892.647216796875 306.2373046875 L 892.647216796875 1182.795043945312 C 892.647216796875 1351.925415039062 809.34423828125 1489.032348632812 706.5848999023438 1489.032348632812 L 186.0623321533203 1489.032348632812 C 83.30293273925781 1489.032348632812 0 1351.925415039062 0 1182.795043945312 L 0 306.2373046875 C 0 137.1071166992188 83.30293273925781 0 186.0623321533203 0 Z"  /></Svg>
        <Svg data-layer="6a3dd264-4ca4-4455-8c9b-1c453c692387" style={styles.logicScreen_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 46.5 48.5" fill="rgba(214, 59, 85, 1)"><SvgPath d="M 22.5 0 C 34.92640686035156 0 45 10.52130889892578 45 23.5 C 45 36.47869110107422 34.92640686035156 47 22.5 47 C 10.07359409332275 47 0 36.47869110107422 0 23.5 C 0 10.52130889892578 10.07359409332275 0 22.5 0 Z"  /></Svg>
        <Svg data-layer="963010a3-c415-4577-ba9f-4f605621eadc" style={styles.logicScreen_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 46.5 48.5" fill="rgba(214, 59, 85, 1)"><SvgPath d="M 22.5 0 C 34.92640686035156 0 45 10.52130889892578 45 23.5 C 45 36.47869110107422 34.92640686035156 47 22.5 47 C 10.07359409332275 47 0 36.47869110107422 0 23.5 C 0 10.52130889892578 10.07359409332275 0 22.5 0 Z"  /></Svg>
        <Svg data-layer="8aea1795-8f56-4ad2-85a7-b448d0af4199" style={styles.logicScreen_ellipse8} preserveAspectRatio="none" viewBox="-0.75 -0.75 46.5 48.5" fill="rgba(214, 59, 85, 1)"><SvgPath d="M 22.5 0 C 34.92640686035156 0 45 10.52130889892578 45 23.5 C 45 36.47869110107422 34.92640686035156 47 22.5 47 C 10.07359409332275 47 0 36.47869110107422 0 23.5 C 0 10.52130889892578 10.07359409332275 0 22.5 0 Z"  /></Svg>
        <Svg data-layer="a0c6906a-ade9-439d-ae52-0f9ca31567d6" style={styles.logicScreen_ellipse9} preserveAspectRatio="none" viewBox="-0.75 -0.75 46.5 48.5" fill="rgba(214, 59, 85, 1)"><SvgPath d="M 22.5 0 C 34.92640686035156 0 45 10.52130889892578 45 23.5 C 45 36.47869110107422 34.92640686035156 47 22.5 47 C 10.07359409332275 47 0 36.47869110107422 0 23.5 C 0 10.52130889892578 10.07359409332275 0 22.5 0 Z"  /></Svg>
        <View data-layer="38cfc571-e6f3-4bfe-9f04-f54225115c25" style={styles.logicScreen_rectangle31}></View>
        <Text data-layer="3d9848b7-7dd0-4682-a308-c3ec48fd56bb" style={styles.logicScreen_logicScreenF01bcf655792}></Text>
        <Text data-layer="b0f6d902-b8de-42db-845e-b6170bb861af" style={styles.logicScreen_question}>Question</Text>
        <Text data-layer="bda4779f-d798-46a4-89a8-7d8978170aa3" style={styles.logicScreen_option1}>Option 1</Text>
        <Text data-layer="74127cc7-11e9-4d99-aadb-dd8d4244de1b" style={styles.logicScreen_option2}>Option 2</Text>
        <Text data-layer="51b5e1a0-6bd8-4523-9cf6-f4194aec40a8" style={styles.logicScreen_option3}>Option 3</Text>
        <Text data-layer="7f27dba5-dbb2-418c-a082-2d9af41945b7" style={styles.logicScreen_option4}>Option 4</Text>
        <Text data-layer="bbd255aa-ee48-43b3-abf4-392e6df28d25" style={styles.logicScreen_next}>Next</Text>
        <Text data-layer="5f151c2b-f674-41d3-8d33-8ce1c8e957fc" style={styles.logicScreen_restart}>Restart</Text>
        <Text data-layer="6144fc16-11d8-4ad8-83e4-66e76d2155de" style={styles.logicScreen_end}>End</Text>
        <View data-layer="a8d377c6-bf81-40e7-9358-90355c42cbdb" style={styles.logicScreen_rectangle32}></View>
        <Text data-layer="58673b1d-5d4a-4bb2-96b1-0fd3c597e943" style={styles.logicScreen_back}>Back</Text>
        <Svg data-layer="1079cb74-6c16-419d-bc26-935ded04d7a5" style={styles.logicScreen_path8} preserveAspectRatio="none" viewBox="0 0 490.32373046875 664.743896484375" fill="rgba(249, 33, 98, 1)"><SvgPath d="M 102.2024993896484 0 L 388.1212463378906 0 C 444.5661010742188 0 490.32373046875 61.20827865600586 490.32373046875 136.7125091552734 L 490.32373046875 528.0313110351562 C 490.32373046875 603.5355834960938 444.5661010742188 664.7437744140625 388.1212463378906 664.7437744140625 L 102.2024993896484 664.7437744140625 C 45.75761032104492 664.7437744140625 0 603.5355834960938 0 528.0313110351562 L 0 136.7125091552734 C 0 61.20827865600586 45.75761032104492 0 102.2024993896484 0 Z"  /></Svg>
        <Text data-layer="6d868ce3-a9e6-492c-9129-65cfc6617ed1" style={styles.logicScreen_timer}>TIMER</Text>
    </ScrollView>
    );
  }
}

LogicScreen.propTypes = {

}

LogicScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "logicScreen": {
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
  "logicScreen_path1": {
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
    "width": 892.65,
    "height": 1489.03,
    "left": 93.68,
    "top": 13.48
  },
  "logicScreen_ellipse6": {
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
    "width": 45,
    "height": 47,
    "left": 59,
    "top": 1307
  },
  "logicScreen_ellipse7": {
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
    "width": 45,
    "height": 47,
    "left": 59,
    "top": 1484
  },
  "logicScreen_ellipse8": {
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
    "width": 45,
    "height": 47,
    "left": 59,
    "top": 1661
  },
  "logicScreen_ellipse9": {
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
    "width": 45,
    "height": 47,
    "left": 59,
    "top": 1871
  },
  "logicScreen_rectangle31": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(64, 185, 121, 1)",
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
    "borderTopLeftRadius": 34,
    "borderTopRightRadius": 34,
    "borderBottomLeftRadius": 34,
    "borderBottomRightRadius": 34,
    "width": 443,
    "height": 150,
    "left": 540,
    "top": 2156
  },
  "logicScreen_logicScreenF01bcf655792": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
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
    "width": 0,
    "height": 0,
    "left": 363,
    "top": 2156
  },
  "logicScreen_question": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 149,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 596,
    "height": 198,
    "left": 242,
    "top": 604
  },
  "logicScreen_option1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 272,
    "height": 94,
    "left": 204,
    "top": 1284
  },
  "logicScreen_option2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 272,
    "height": 94,
    "left": 204,
    "top": 1461
  },
  "logicScreen_option3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 272,
    "height": 94,
    "left": 204,
    "top": 1638
  },
  "logicScreen_option4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 272,
    "height": 94,
    "left": 204,
    "top": 1848
  },
  "logicScreen_next": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 145,
    "height": 94,
    "left": 693,
    "top": 2184
  },
  "logicScreen_restart": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 216,
    "height": 94,
    "left": 47,
    "top": 98
  },
  "logicScreen_end": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 116,
    "height": 94,
    "left": 803,
    "top": 98
  },
  "logicScreen_rectangle32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(64, 185, 121, 1)",
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
    "borderTopLeftRadius": 34,
    "borderTopRightRadius": 34,
    "borderBottomLeftRadius": 34,
    "borderBottomRightRadius": 34,
    "width": 443,
    "height": 150,
    "left": 59,
    "top": 2156
  },
  "logicScreen_back": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 143,
    "height": 94,
    "left": 191,
    "top": 2184
  },
  "logicScreen_path8": {
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
    "width": 490.32,
    "height": 664.74,
    "left": 294.84,
    "top": -519.74
  },
  "logicScreen_timer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI Historic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 195,
    "height": 94,
    "left": 443,
    "top": 26
  }
});