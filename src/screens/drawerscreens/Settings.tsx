import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Settings = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Str_Setting')}</Text>
      <Text style={styles.selectLanguageText}>{t('Str_Select_Language')}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => changeLanguage('en')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeLanguage('hi')}>
          <Text style={styles.buttonText}>हिन्दी</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F1D1',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    selectLanguageText: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: '#4A90E2',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
})