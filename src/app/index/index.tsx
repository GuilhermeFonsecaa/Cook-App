import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "../Components/Ingredient";
import { useState } from "react";
import { Selected } from "../Components/Selected";
import { router } from "expo-router";


export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToogleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) }
        ])
    }

    function handleSearch() {
        router.navigate("/recipes/")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu</Text>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ingredients}>
                {Array.from({ length: 100 }).map((item, index) => (
                    <Ingredient name="Maçã" selected={selected.includes(String(index))} image={""} key={index} onPress={() => handleToogleSelected(String(index))} />
                ))}
            </ScrollView>

            {selected.length > 0 &&
                <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch} />
            }
        </View>
    )
}