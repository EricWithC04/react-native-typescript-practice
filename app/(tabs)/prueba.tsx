import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="reader-sharp" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Este en una pagina de prueba</ThemedText>
      </ThemedView>
      <Collapsible title="Primer Collapse">

        <ThemedText>
            Esta es un ejemplo de collapse. Al hacer clic en el siguiente texto serás enviado a una pagina de suma importancia.
        </ThemedText>
        
        <ExternalLink href="https://www.argentina.gob.ar/noticias/argentina-es-el-principal-exportador-de-peras-y-manzanas-organicas-la-ue">
            <ThemedText type="link">Ingresar</ThemedText>
        </ExternalLink>

      </Collapsible>
      <Collapsible title="Segundo Collapse">

        <ThemedText>
            Este es un texto de ejemplo para utilizar el ThemedText,
            <ThemedText type="defaultSemiBold"> defaultSemiBold</ThemedText> es para colocar negrita
        </ThemedText>

      </Collapsible>
      <Collapsible title="Tercer Collapse">

        <ThemedText>
          Para imagenes estaticas, puedes utilizar el prefijo <ThemedText type="defaultSemiBold">@2x</ThemedText> y
          <ThemedText type="defaultSemiBold"> @3x</ThemedText> para darle imagenes con tamaño dinamico
        </ThemedText>
        
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        
        <ThemedText>
            PD: no se como se utiliza esto, sorry
        </ThemedText>

      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
