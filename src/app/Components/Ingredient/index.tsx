import { Pressable, PressableProps, Text, Image } from "react-native";
import { styles } from "./styles";

export type IngredientProps = {
    name: string,
    image: string,
    selected: boolean
}

export function Ingredient({ name, image, selected = false, ...rest }: IngredientProps & PressableProps) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image source={require("@//app/assets/tomato.png")} style={styles.image} />
            <Text style={styles.title}>Maçã</Text>
        </Pressable>
    );
}