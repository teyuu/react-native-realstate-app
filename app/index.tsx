import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-500">
        Edittt app/index.tsx to edit this screen.
      </Text>

      <SafeAreaView className="w-full">
        <Text className="w-full bg-black border-red-400 border-4">hola</Text>
      </SafeAreaView>
    </View>
  );
}
