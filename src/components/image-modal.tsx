import { Image, ImageSource } from 'expo-image';
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// rounded-md is standard 6px
const ROUNDED_MD = 6;

export type ImageModalProps = {
  visible: boolean;
  onClose: () => void;
  source: ImageSource | string | number;
  title?: string;
  description?: string;
};

export function ImageModal({
  visible,
  onClose,
  source,
  title = 'Image Detail',
  description,
}: ImageModalProps) {
  const theme = useTheme();
  const isDark = theme.background === '#000000';

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        {/* Backdrop tap to dismiss */}
        <Pressable
          style={styles.dismissOverlay}
          onPress={onClose}
          accessibilityLabel="Dismiss modal backdrop"
        />

        {/* Modal Card */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? '#000000' : '#ffffff',
              borderColor: isDark ? '#262626' : '#e5e5e5',
            },
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <ThemedText style={styles.titleText} numberOfLines={1}>
              {title}
            </ThemedText>

            {/* Close Button with rounded-md */}
            <Pressable
              onPress={onClose}
              hitSlop={8}
              style={({ pressed }) => [
                styles.closeButton,
                {
                  backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0',
                  borderColor: isDark ? '#333333' : '#e0e0e0',
                },
                pressed && styles.pressed,
              ]}
              accessibilityLabel="Close modal"
              accessibilityRole="button"
            >
              <ThemedText style={styles.closeIcon}>✕</ThemedText>
            </Pressable>
          </View>

          {/* Image Container with rounded-md */}
          <View
            style={[
              styles.imageContainer,
              {
                backgroundColor: isDark ? '#0a0a0a' : '#fafafa',
                borderColor: isDark ? '#1f1f1f' : '#eeeeee',
              },
            ]}
          >
            <Image
              source={source}
              style={styles.image}
              contentFit="cover"
              transition={150}
            />
          </View>

          {/* Description */}
          {description ? (
            <ThemedText
              style={[
                styles.description,
                { color: isDark ? '#888888' : '#666666' },
              ]}
            >
              {description}
            </ThemedText>
          ) : null}

          {/* Footer Action Button with rounded-md */}
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.actionButton,
              {
                backgroundColor: isDark ? '#ffffff' : '#000000',
              },
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <ThemedText
              style={[
                styles.actionButtonText,
                { color: isDark ? '#000000' : '#ffffff' },
              ]}
            >
              Close
            </ThemedText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.four,
  },
  dismissOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  card: {
    width: '100%',
    maxWidth: 440,
    borderRadius: ROUNDED_MD,
    borderWidth: 1,
    padding: Spacing.four,
    gap: Spacing.three,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    letterSpacing: -0.2,
  },
  closeButton: {
    width: 28,
    height: 28,
    borderRadius: ROUNDED_MD,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    lineHeight: 14,
  },
  imageContainer: {
    width: '100%',
    height: 260,
    borderRadius: ROUNDED_MD,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: ROUNDED_MD,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
  actionButton: {
    height: 44,
    borderRadius: ROUNDED_MD,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.half,
  },
  actionButtonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
  },
  pressed: {
    opacity: 0.8,
  },
});
