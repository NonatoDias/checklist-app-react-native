import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ScreenTitle = ({children}) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 5,
	},
});

export default ScreenTitle;
