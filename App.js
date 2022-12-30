import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CatApp from './components/Mycat';

const App = () => {
  return (
    <ScrollView>
      <CatApp />
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.img}
        />
      </View>
      <TextInput style={styles.text} defaultValue="You can type in me" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
  text: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
