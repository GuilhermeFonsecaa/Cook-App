import { Slot } from "expo-router"; //todas as rotas dentro de app
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    })

    if (!fontsLoaded) {
        return
    }
   
    return fontsLoaded ? <Slot /> : null
}