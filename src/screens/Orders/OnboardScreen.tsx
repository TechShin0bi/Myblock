import { StyleSheet } from 'react-native'
import React from 'react'
import { OnboardFlow } from 'react-native-onboard'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { ProfileScreenNavigationProp } from '@type/navigations'

const OnboardScreen = () => {
    const { t } = useTranslation()
    
    const navigation = useNavigation<ProfileScreenNavigationProp>()

    return (
        <OnboardFlow
            onDone={() => navigation.replace('SignInScreen')}
            pages={[
                {
                    title: 'Welcome to my app',
                    subtitle: t('home'),
                    imageUri: 'https://frigade.com/img/example1.png',
                },
                {
                    title: 'Page 2 header',
                    subtitle: 'This is page 2',
                    imageUri: 'https://frigade.com/img/example2.png',
                }
            ]}
            type={'fullscreen'}
        />
    )
}

export default OnboardScreen

const styles = StyleSheet.create({})