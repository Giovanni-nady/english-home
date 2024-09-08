import { View, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'
import { TodayExamples } from '@/constants/Data'

export default function TodayScreen () {
  const { i18n } = useTranslation()
  return (
    <SafeAreaViewLayout
      backgroundColor='onSecondary'
      statusContentStyle='light'
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 12, flexDirection: 'column', gap: 26 }}>
          <TextComponent
            size='titleLarge'
            fontFamily='Roboto-Bold-700'
            style={{ paddingTop: 12 }}
            align={i18n.dir() === 'ltr' ? 'right' : 'left'}
          >
            كيف أقدم نفسي باللغة الإنجليزية بطريقة سهلة؟
          </TextComponent>

          <View style={{ gap: 14 }}>
            <TextComponent
              size='titleLarge'
              fontFamily='Roboto-Medium-500'
              align={i18n.dir() === 'ltr' ? 'right' : 'left'}
            >
              يمكن تقديم نفسك باللغة الإنجليزية بطريقة بسيطة وودية. وهنا اقتراح:{' '}
            </TextComponent>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
              align={i18n.dir() === 'ltr' ? 'right' : 'left'}
            >
              1. التحية
              <TextComponent size='titleLarge' fontFamily='Roboto-Medium-500'>
                : ابدأ بتحية دافئة مثل “مرحبًا” أو “مرحبًا”.{' '}
              </TextComponent>
            </TextComponent>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
              align={i18n.dir() === 'ltr' ? 'right' : 'left'}
            >
              2. الاسم
              <TextComponent size='titleLarge' fontFamily='Roboto-Medium-500'>
                : اذكر اسمك بوضوح وببطء حتى يسهل على المستمع فهمك. على سبيل
                المثال، “اسمي هو [اسمك]”.{' '}
              </TextComponent>
            </TextComponent>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
              align={i18n.dir() === 'ltr' ? 'right' : 'left'}
            >
              3. الخلفية
              <TextComponent size='titleLarge' fontFamily='Roboto-Medium-500'>
                : شارك قليلاً عن نفسك، مثل مكان ولادتك أو ما تعمل فيه. حافظ على
                النص موجزًا وسهل الفهم. على سبيل المثال، “أنا من [بلدك / مدينتك]
                وأعمل كـ [مهنتك]”.{' '}
              </TextComponent>
            </TextComponent>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
              align={i18n.dir() === 'ltr' ? 'right' : 'left'}
            >
              4. الاهتمام
              <TextComponent size='titleLarge' fontFamily='Roboto-Medium-500'>
                : ذكر هواية أو اهتمام لديك. يمكن أن يساعد ذلك في إنشاء رابط وجعل
                المحادثة أكثر إشراكًا. يمكنك قول شيء من هذا القبيل: “في وقت
                فراغي، أستمتع بـ [هوايتك / اهتمامك]”.{' '}
              </TextComponent>
            </TextComponent>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='textPrimaryColor'
              align={i18n.dir() === 'ltr' ? 'right' : 'left'}
            >
              5. اسأل عن الآخرين
              <TextComponent size='titleLarge' fontFamily='Roboto-Medium-500'>
                : أظهر اهتمامًا بالمستمع من خلال طرح سؤال عنه. على سبيل المثال،
                “أما أنت؟ من أي بلد أنت؟”.{' '}
              </TextComponent>
            </TextComponent>
          </View>

          <TextComponent
            size='titleMedium'
            fontFamily='Roboto-Medium-500'
            // style={{ paddingTop: 12 }}
            align={'center'}
          >
            تذكر أن تتحدث ببطء ووضوح، وكن صبورًا إذا احتاج المستمع إلى وقت لفهم
            ما تقوله. يمكن أيضًا أن يساعد استخدام لغة بسيطة وتجنب المفردات
            المعقدة.
          </TextComponent>

          <TextComponent
            size='titleLarge'
            fontFamily='Roboto-Medium-500'
            // style={{ paddingTop: 12 }}
            align={'center'}
          >
            أقرأ هذه الكلمات السهلة وتدرب على التعريف بنفسك مرة تلو الأخرى حتى
            تحفظها ، وحاول تكرارها يوميا ، وستقوم بتسجيلها في مدة (15) ثانية ،
            حاول ان تكون واضحا .
          </TextComponent>

          <View>
            {TodayExamples.map((text, index) => (
              <TextComponent
                size='titleLarge'
                fontFamily='Roboto-Regular-400'
                style={{ marginTop: 8 }}
                key={index}
              >
                {text}
              </TextComponent>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
