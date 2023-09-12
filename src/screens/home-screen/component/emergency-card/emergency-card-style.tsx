import { StyleSheet } from "react-native";
import colors from "../../../../resources/colors";

export const styles = StyleSheet.create({
    cardContainer: {
        margin: 6,
        padding: 6,
        backgroundColor: colors.toned_down.cornsilk
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    userNameText: {
        flexShrink: 1,
        paddingHorizontal: 10
    },
    lowerRow: {
        marginVertical: 6
    },
    btnContainer: {
        flex: 1,
        marginHorizontal: 5
    },
    btnText: {
        flex: 1,
        backgroundColor: colors.primary.cardinal,
        borderRadius: 6,
        padding: 6
    }


})