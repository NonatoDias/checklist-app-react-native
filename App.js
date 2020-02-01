/**
 * @author Nonato Dias
 *  Checklist app
 *
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store/store';
import ExpensesScreen from './src/screens/ExpensesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from './theme/defaults';
import ToDoListScreen from './src/screens/ToDoListScreen';

const mainNavigation = createMaterialBottomTabNavigator(
	{
		Expenses: {
			screen: ExpensesScreen,
			navigationOptions: () => ({
				tabBarIcon: ({focused}) => (
					<Icon name="payment" size={20} color={focused ? '#fff' : '#ddd'} />
				),
			}),
		},
		ToDoList: {
			screen: ToDoListScreen,
			navigationOptions: () => ({
				tabBarIcon: ({focused}) => (
					<Icon name="format-list-bulleted" size={20} color={focused ? '#fff' : '#ddd'} />
				),
			}),
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: () => ({
				tabBarIcon: ({focused}) => (
					<Icon name="settings" size={20} color={focused ? '#fff' : '#ddd'} />
				),
			}),
		},
	},
	{
		barStyle: {
			backgroundColor: theme.primaryColor,
		},
	},
);

const App = createAppContainer(mainNavigation);

export default () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
