import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ScreenContainerView from '../components/common/ScreenContainerView';
import ScreenTitle from '../components/common/ScreenTitle';

const ExpensesScreen = () => (
	<ScreenContainerView style={styles.ExpensesScreen}>
		<ScreenTitle>My Expenses</ScreenTitle>
		<View>
			<Text>Content</Text>
		</View>
	</ScreenContainerView>
);

const styles = StyleSheet.create({
	ExpensesScreen: {
		backgroundColor: 'whitesmoke',
	},
});

export default ExpensesScreen;
