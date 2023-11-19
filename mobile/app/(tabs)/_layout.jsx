import Tabs from "expo-router/tabs";
import { Image } from "react-native"
import {COLORS} from "../../constants";

import { HomePageIcon, WalletPageIcon, HistoryPageIcon, SettingsPageIcon } from '../../constants'

export default () => {
    return (
        <Tabs screenOptions={{
            activeTintColor: 'tomato', // цвет активной вкладки
            inactiveTintColor: 'gray', // цвет неактивной вкладки
            labelStyle: {
                fontSize: 16, // размер шрифта для текста вкладок
            },
            style: {
                backgroundColor: COLORS.gray2, // цвет фона нижней панели навигации
                borderTopColor: 'darkblue', // цвет верхней границы панели навигации
                paddingTop: 5, // внутренний верхний отступ панели навигации
                paddingBottom: 5 // внутренний нижний отступ панели навигации
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    // tabBarLabel: 'Главная', // Текст вкладки
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={ HomePageIcon }/>
                    ),
                    // tabBarBadge: 3, // Бейдж счетчика, если требуется
                    // tabBarBadgeStyle: { backgroundColor: 'red' } // Стиль для счетчика
                }}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={ WalletPageIcon }/>
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={ HistoryPageIcon }/>
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={ SettingsPageIcon }/>
                    ),
                }}
            />
        </Tabs>
    )
}