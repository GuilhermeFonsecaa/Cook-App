import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "../Components/Ingredient";
import { useState } from "react";


export default function Index() {
    const [selected, setSelected] = useState<string[]>([])
  
    function handleToogleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>Descubra recesitas baseadas nos produtos que você escolheu</Text>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ingredients}>
               {Array.from({length: 100}).map((item, index) => (
                <Ingredient name="" selected={selected.includes(String(index))} image={""} key={index} onPress={() => handleToogleSelected(String(index))}/>
               ))}
            </ScrollView>
        </View>
    )
}