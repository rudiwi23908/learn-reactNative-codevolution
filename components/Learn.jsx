import {
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
const profileImg = require("../images/kemal.jpg");
export default function Learn() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "navy",
      }}
    >
      <ScrollView>
        <StatusBar />
        <Text
          style={{
            fontSize: 24,
            color: "red",
          }}
        >
          Hello <Text style={{ color: "white" }}>World</Text>
        </Text>
        <Image source={profileImg} style={{ width: 50, height: 50 }} />
        <Image
          style={{ width: 400, height: 400 }}
          source={{ uri: "https://picsum.photos/400" }}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ImageBackground source={profileImg} style={{ height: 100 }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              Tulisan di depannya background
            </Text>
          </ImageBackground>
        </View>
        <Text
          style={{ fontSize: 24, color: "white", backgroundColor: "salmon" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto
          excepturi neque voluptatem, tempore molestias exercitationem, iure rem
          accusantium sit explicabo nulla quos? Animi, quis sint. Itaque
          laboriosam dolorum consectetur perferendis eos eveniet harum. Vitae
          recusandae adipisci officia ratione et assumenda excepturi incidunt
          voluptate natus delectus quam, iure distinctio quaerat quasi, eos
          doloribus aspernatur voluptatum placeat sapiente non dignissimos, odit
          fugiat cupiditate. Dolorem, cupiditate recusandae numquam eius,
          distinctio vel quasi provident molestias suscipit ex, temporibus
          consectetur fugiat ducimus itaque aut labore impedit quam similique
          veritatis sint! Optio, deserunt unde! Dolore aspernatur culpa omnis id
          fugit vero repudiandae quam tenetur sed!
        </Text>
      </ScrollView>
    </View>
  );
}
