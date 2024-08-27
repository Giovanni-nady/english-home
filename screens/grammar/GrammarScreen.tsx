import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import TextComponent from '@/components/TextComponent'
import { useTheme } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { Entypo } from '@expo/vector-icons'
import { grammarKeywords } from '@/constants/Data'

export default function GrammarScreen () {
  const theme = useTheme()
  const { t, i18n } = useTranslation()

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View key={index} style={{ flexDirection: 'row', width: '48%' }}>
        <Entypo name='dot-single' size={24} color='black' />

        <TextComponent
          fontFamily='Roboto-Medium-500'
          size='titleLarge'
          style={{ lineHeight: 32, flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
          align={i18n.dir() === 'rtl' ? 'right' : 'left'}
          color='textPrimaryColor'
        >
          {item}
        </TextComponent>
      </View>
    )
  }

  return (
    <SafeAreaViewLayout backgroundColor='onSecondary' statusContentStyle='dark'>
      {/* <HomeHeader theme={theme} /> */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 12, flexDirection: 'column', gap: 22 }}>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
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
              <Entypo name='dot-single' size={24} color='black' />
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
              >
                In general, we speak about things in the present simple.
              </TextComponent>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Entypo name='dot-single' size={24} color='black' />
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
              >
                We use it to say that something happens usually, repeatedly, or
                that it is a fact in general.
              </TextComponent>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Entypo name='dot-single' size={24} color='black' />
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
              >
                A routine or fact is expressed in the simple present tense.
              </TextComponent>
            </View>
          </View>
          {/* reading card */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextComponent
                style={{ paddingStart: 6, paddingBottom: 8 }}
                align={i18n.dir() === 'rtl' ? 'right' : 'left'}
                fontFamily='Roboto-Bold-700'
                size='titleLarge'
                color='textPrimaryColor'
              >
                {t('grammar.words')}
              </TextComponent>
              <TextComponent
                style={{ paddingStart: 6, paddingBottom: 8 }}
                align={i18n.dir() === 'rtl' ? 'right' : 'left'}
                fontFamily='Roboto-Bold-700'
                size='titleLarge'
                color='textPrimaryColor'
              >
                {t('grammar.words-ar')}
              </TextComponent>
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
                  marginTop: 8,
                  flexShrink: 1,
                  flexWrap: 'nowrap',
                  flex: 1
                }}
                data={grammarKeywords}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between', // Creates space between the columns
                  marginBottom: 12 // Adds space between the rows
                }}
                // horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>

        {/* <HomeSearchBar theme={theme} /> */}
        {/* <View
        style={{
          marginVertical: -60,
          padding: 35,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50
        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignContent: 'center' }}
        >
          recommendation slider
          <DiscoverSlider theme={theme} setActiveCategory={setActiveCategory} />

          selected section
          <Animated.View style={animatedStyles}>
            {renderComponent()}
          </Animated.View>
        </ScrollView>
      </View> */}
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
