import { StyleSheet } from "react-native";
import colors from "../../../../resources/colors";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        backgroundColor: colors.primary.cardinal,
        margin: 6,
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 5
    }
})