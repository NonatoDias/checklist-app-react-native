import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SettingsScreen = () => (
	<View style={styles.settingsScreen}>
		<Text>SettingsScreen</Text>
	</View>
);

const styles = StyleSheet.create({
	settingsScreen: {
		backgroundColor: 'whitesmoke',
	},
});

export default SettingsScreen;
