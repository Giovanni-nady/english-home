import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import TextComponent from '@/components/TextComponent'
import { useTheme } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { Entypo } from '@expo/vector-icons'
import { grammarExamples, grammarKeywords } from '@/constants/Data'

export default function GrammarScreen () {
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  console.log(i18n.dir())

  // Custom function to always return 'ltr' or 'rtl'
  const customDir = () => 'ltr' // or 'rtl' if you want the opposite

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View
        key={index}
        style={{ flexDirection: 'row', alignItems: 'flex-start', width: '48%' }}
      >
        {i18n.dir() === 'ltr' && (
          <Entypo name='dot-single' size={24} color='black' />
        )}

        <TextComponent
          fontFamily='Roboto-Medium-500'
          size='titleLarge'
          style={{ lineHeight: 32, flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
          align={i18n.dir() === 'ltr' ? 'left' : 'right'}
          color='textPrimaryColor'
        >
          {item}
        </TextComponent>
        {i18n.dir() === 'rtl' && (
          <Entypo name='dot-single' size={24} color='black' />
        )}
      </View>
    )
  }

  const renderItemExample = ({
    item,
    index
  }: {
    item: string
    index: number
  }) => {
    return (
      <View key={index} style={{ flexDirection: 'row' }}>
        {i18n.dir() === 'ltr' && (
          <Entypo name='dot-single' size={24} color='black' />
        )}

        <TextComponent
          fontFamily='Roboto-Medium-500'
          size='titleLarge'
          style={{ lineHeight: 32, flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
          align={i18n.dir() === 'ltr' ? 'left' : 'right'}
          color='textPrimaryColor'
        >
          {item}
        </TextComponent>
        {i18n.dir() === 'rtl' && (
          <Entypo name='dot-single' size={24} color='black' />
        )}
      </View>
    )
  }

  return (
    <SafeAreaViewLayout backgroundColor='onSecondary' statusContentStyle='light'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 12, flexDirection: 'column', gap: 26 }}>
          <View
            style={{
              paddingTop: 8,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            {i18n.dir() === 'ltr' ? (
              <>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('grammar.present-simple')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('grammar.present-simple-ar')}
                </TextComponent>
              </>
            ) : (
              <>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('grammar.present-simple-ar')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('grammar.present-simple')}
                </TextComponent>
              </>
            )}
          </View>

          {/* definition */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 12,
              paddingVertical: 20
            }}
          >
            <TextComponent size='titleLarge' align='center'>
              The present tense is the{' '}
              <TextComponent
                size='titleLarge'
                fontFamily='Roboto-BoldItalic-700'
              >
                base form
              </TextComponent>{' '}
              of the verb
            </TextComponent>
          </View>

          {/* rules */}
          <View style={{ gap: 12, flexWrap: 'nowrap' }}>
            <View style={{ flexDirection: 'row' }}>
              {i18n.dir() === 'ltr' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
              >
                In general, we speak about things in the present simple.
              </TextComponent>
              {i18n.dir() === 'rtl' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
            </View>
            <View style={{ flexDirection: 'row' }}>
              {i18n.dir() === 'ltr' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
              >
                We use it to say that something happens usually, repeatedly, or
                that it is a fact in general.
              </TextComponent>
              {i18n.dir() === 'rtl' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
            </View>
            <View style={{ flexDirection: 'row' }}>
              {i18n.dir() === 'ltr' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
              >
                A routine or fact is expressed in the simple present tense.
              </TextComponent>
              {i18n.dir() === 'rtl' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
            </View>
          </View>

          {/* reading card */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {i18n.dir() === 'ltr' ? (
                <>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.words')}
                  </TextComponent>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.words-ar')}
                  </TextComponent>
                </>
              ) : (
                <>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.words-ar')}
                  </TextComponent>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.words')}
                  </TextComponent>
                </>
              )}
            </View>
            <View
              style={{
                width: '100%',
                padding: 18,
                borderRadius: 12,
                backgroundColor: 'white',
                shadowColor: '#00000040',
                shadowOffset: {
                  width: 0,
                  height: 6
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12
              }}
            >
              <FlatList
                contentContainerStyle={{
                  marginTop: 8
                }}
                data={grammarKeywords}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between', // Creates space between the columns
                  marginBottom: 12 // Adds space between the rows
                }}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
              />
            </View>
          </View>

          {/* examples card */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {i18n.dir() === 'ltr' ? (
                <>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.example')}
                  </TextComponent>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.example-ar')}
                  </TextComponent>
                </>
              ) : (
                <>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.example-ar')}
                  </TextComponent>
                  <TextComponent
                    style={{ paddingStart: 6, paddingBottom: 8 }}
                    fontFamily='Roboto-Bold-700'
                    size='titleLarge'
                    color='textPrimaryColor'
                  >
                    {t('grammar.example')}
                  </TextComponent>
                </>
              )}
            </View>
            <View
              style={{
                width: '100%',
                padding: 18,
                borderRadius: 12,
                backgroundColor: 'white',
                shadowColor: '#00000040',
                shadowOffset: {
                  width: 0,
                  height: 6
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12
              }}
            >
              <FlatList
                contentContainerStyle={{
                  marginTop: 8
                }}
                data={grammarExamples}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItemExample}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
