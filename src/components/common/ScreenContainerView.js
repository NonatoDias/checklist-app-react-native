import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenContainerView = ({children}) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'whitesmoke',
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
});

export default ScreenContainerView;
