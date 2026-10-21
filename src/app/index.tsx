import { useState } from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ImageModal } from '@/components/image-modal';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// rounded-md is standard 6px
const ROUNDED_MD = 6;

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  const showcaseImage = require('@/assets/images/architecture.jpg');

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <ThemedText style={styles.mainTitle}>
              Architecture
            </ThemedText>
            <ThemedText
              style={[
                styles.subtitle,
                { color: isDark ? '#888888' : '#666666' },
              ]}
            >
              Minimalist concrete and glass study
            </ThemedText>
          </View>

          {/* Simple Image Card with rounded-md */}
          <Pressable
            onPress={() => setModalVisible(true)}
            style={({ pressed }) => [
              styles.card,
              {
                backgroundColor: isDark ? '#111111' : '#ffffff',
                borderColor: isDark ? '#222222' : '#e5e5e5',
              },
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="View Image"
          >
            <View
              style={[
                styles.imageFrame,
                {
                  borderColor: isDark ? '#222222' : '#eeeeee',
                },
              ]}
            >
              <Image
                source={showcaseImage}
                style={styles.cardImage}
                contentFit="cover"
              />
            </View>
          </Pressable>

          {/* Simple View Image Button with rounded-md */}
          <Pressable
            onPress={() => setModalVisible(true)}
            style={({ pressed }) => [
              styles.primaryButton,
              {
                backgroundColor: isDark ? '#ffffff' : '#000000',
              },
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Open modal"
          >
            <ThemedText
              style={[
                styles.primaryButtonText,
                { color: isDark ? '#000000' : '#ffffff' },
              ]}
            >
              View Image
            </ThemedText>
          </Pressable>
        </View>

        {/* Clean Image Modal with rounded-md */}
        <ImageModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          source={showcaseImage}
          title="Minimalist Architecture"
          description="Monochrome geometric structure in natural light."
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
  },
  content: {
    gap: Spacing.four,
    paddingVertical: Spacing.four,
  },
  header: {
    gap: Spacing.one,
  },
  mainTitle: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    borderRadius: ROUNDED_MD,
    borderWidth: 1,
    padding: Spacing.two,
  },
  imageFrame: {
    width: '100%',
    height: 240,
    borderRadius: ROUNDED_MD,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: ROUNDED_MD,
  },
  primaryButton: {
    height: 46,
    borderRadius: ROUNDED_MD,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },
  pressed: {
    opacity: 0.8,
  },
});
