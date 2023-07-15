import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  return <WebView style={styles.webViewContainer} source={{ uri: "www.acosta.codes" }} />;
};

export default WebViewScreen;

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
});
