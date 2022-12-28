/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import detailImg from '../reports_test/assets/img/detail.png';
import icon from '../reports_test/assets/img/instructorImg.png';
import card from '../reports_test/assets/img/card.png';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NoEncryption} from '@mui/icons-material';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View style={styles.imgContainer}>
          <Image source={detailImg} style={styles.mainImg} />
          <Image source={icon} style={styles.icon} />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.cardContainer}>
            <Image source={card} style={styles.card} />
            <Text style={styles.cardTitle}>세모스 소속 강사진</Text>
          </View>
          <Section title="title">ahahahhaah</Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  icon: {
    width: 96,
    height: 96,
    left: 25,
    top: 240,
    position: 'absolute',
    // backgroundColor: 'rgba(52, 52, 52, 0)',
  },
  mainImg: {
    width: 400,
    height: 300,
  },
  imgContainer: {
    height: 340,
    backgroundColor: '#fff',
  },
  card: {
    width: 67,
    height: 19,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 7,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 24,
  },
});

export default App;
