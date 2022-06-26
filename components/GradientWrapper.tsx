import React from 'react';
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export type Props = {
  viewExtendedStyle?: object;
  style?: object;
  children: React.ReactNode;
  noKeyboardDismiss: boolean;
};

const GradientWrapper: React.FC<Props> = ({viewExtendedStyle, style, children, noKeyboardDismiss}) => {
  const content = <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.2)']}
                    locations={[0.3, 1]}
                    style={{flex: 1, ...style}}
                  >
                    <SafeAreaView style={{...styles.container, ...viewExtendedStyle}}>
                      {children}
                    </SafeAreaView>
                  </LinearGradient>;

  if(noKeyboardDismiss) {
    return content;
  } else {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {content}
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default GradientWrapper;