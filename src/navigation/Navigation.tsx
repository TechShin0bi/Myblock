import i18n from '@config/i18n'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { store } from 'src/store'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './DrawerNavigation'


const Navigation = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <NavigationContainer>
                    <DrawerNavigation />
                </NavigationContainer>
            </I18nextProvider>
        </Provider>
    )
}

export default Navigation