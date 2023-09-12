import { StyleSheet } from "react-native";
import colors from "../../resources/colors";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_scale.white,
    },
    logoutButton: {
        alignItems: 'flex-end',
        backgroundColor: colors.gray_scale.white,
    },
    logoutButtonText: {
        backgroundColor: colors.primary.cardinal,
        margin: 6,
        padding: 6,
        borderRadius: 5
    }
})