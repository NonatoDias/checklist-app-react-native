import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const ScreenContainerView = ({children}) => <SafeAreaView style={styles.container}>{children}</SafeAreaView>;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'whitesmoke',
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
});

export default ScreenContainerView;
