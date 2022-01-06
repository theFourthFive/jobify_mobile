import { useContext,useState  } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ProfilScreen() {
  const [FirstName,setFirstName]=useState('')
  const handelChangeFirstName = (FirstName)=>{
    setFirstName(FirstName)
  }
  // const {user,logout}=useContext('')
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Image
          style={styles.Img}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.userName}>helloooooooooo</Text>
        <Text style={styles.aboutuser}>hello ggggg</Text>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userbtn}>
            <Text style={styles.userbtntxt}>follow</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.userbtn}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
            <Text style={styles.userbtntxt}>Edit</Text>
          </TouchableOpacity>
        </View>
      <View >
        <Text>FirstName:{FirstName}</Text>
        <Text>LastName:{FirstName}</Text>
        <Text>Email:{FirstName}</Text>
        <Text>FirstName:{FirstName}</Text>
        <Text>FirstName:{FirstName}</Text>

      </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    bottom:75,
  },
  Img: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutuser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userbtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  
  },
  userbtntxt: {
    color: '#2e64e5',
  },
});
