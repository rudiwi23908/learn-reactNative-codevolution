import { View, Image } from "react-native";
import styles from "./welcome.style.js";

export default function Welcome() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{ width: "100%", backgroundColor: "#5164ad", height: "auto" }}
      >
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../images/kemal.jpg")}
          />
        </View>
      </View>
    </View>
  );
}
