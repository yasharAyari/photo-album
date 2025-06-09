// import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { useData } from '@libs/hooks/useData';
import type { Picture } from '@libs/interfaces/picture';
import { getImageUrl } from '@libs/utils/apiUtils';

export default function App() {
  const { data, loading, error } = useData();

  if (error) {
    return (<SafeAreaView>
      <View style={styles.errorContainer}>
        <Text>some thing went wrong</Text>
      </View>
    </SafeAreaView>);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {loading ? <ActivityIndicator size="large" /> : data.map((pic: Picture) =>
          <View style={styles.container} key={pic.id}>
            <Image
              source={{ uri: getImageUrl(pic.url_token) }}
              style={styles.image}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover'
  },
});
