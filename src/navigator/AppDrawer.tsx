import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { HomeStack } from './HomeStack';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import { navigationOptions } from '../data';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <MenuUI {...props} />}>
            <Drawer.Screen name="StackNavigator" component={HomeStack} />
        </Drawer.Navigator>
    );
}

const MenuUI = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

    const { _2xl, base, bold } = theme;

    return (
        <DrawerContentScrollView style={styles.menu}>
            <View style={styles.top}>
                <Text style={[_2xl, bold]}>Yummify</Text>
            </View>
            <View>
                {
                    navigationOptions.map(option => (
                        <TouchableOpacity key={option.text} style={styles.link} onPress={() => navigation.navigate(option.navigate)}>
                            <View>
                                <Text style={base}>{option.text}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    menu: {
        padding: 10,
    },
    top: {
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 5
    },
    link: {
        backgroundColor: '#efefef',
        marginBottom: 15,
        padding: 10
    }
})