import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import { useTranslation } from 'react-i18next'
import TextComponent from '@textComponent'

export default function ListenScreen () {
  const { t, i18n } = useTranslation()
  return (
    <SafeAreaViewLayout
      backgroundColor='onSecondary'
      statusContentStyle='light'
    >
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
                  {t('listen.listen-en')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('listen.listen-ar')}
                </TextComponent>
              </>
            ) : (
              <>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('listen.listen-ar')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('listen.listen-en')}
                </TextComponent>
              </>
            )}
          </View>

          <View>
            <TextComponent
              size='titleLarge'
              fontFamily='Roboto-Medium-500'
              align={i18n.dir() === 'ltr' ? 'left' : 'right'}
            >
              My childhood was full of wonderful memories and adventures. I grew
              up in a small town, surrounded by nature and friendly neighbors.
              Every day was a new opportunity for discovery and learning. Let me
              take you on a journey through some of my favorite childhood
              stories
            </TextComponent>
          </View>

          <View style={{ gap: 12 }}>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              {t('listen.definition-en')}
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              childhood :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                the time when someone is a child : A person's childhood is the
                period of their life when they are a child.{' '}
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Full :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                complete unable to consume more food or drink too full to eat
                another bite Something is full, like a gas tank or a cup of
                water.{' '}
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Wonderful :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                excellent ; great ; We all had a wonderful weekend.
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Memories :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                memory : the ability to remember information.
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Adventures :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                an unusual, exciting, and possibly dangerous activity.{' '}
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Grew :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                The meaning of GREW is past tense of grow.
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Up :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                (up) is the opposite of the word (under) and means something
                above.
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              grew up :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                to gradually become an adult: I grew up in Scotland.
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              small :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                (Small) is the opposite of the word (Big) and means something
                large in size.{' '}
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              town :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                a place where people live and work, containing many houses,
                shops, places of work, : The town is smaller than the city
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Surrounded :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                Be surrounded by somebody/something. If police or soldiers
                surround a place,A wall surrounds the old city. Gwen sat at her
                desk, surrounded by books and papers.
              </TextComponent>
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
            >
              Nature :{' '}
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
              >
                The meaning of nature It includes things like plants, animals,
                mountains, rivers, and everything that is not made by humans.
                Enjoyed the beauties of nature.
              </TextComponent>
            </TextComponent>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
