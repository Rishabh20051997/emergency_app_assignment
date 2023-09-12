import React from 'react';
import { FlatList, View } from 'react-native';

import colors from '../../resources/colors';
import UIText from '../../widgets/ui-text';
import EmergencyCard from './component/emergency-card'
import UIPressable from '../../widgets/ui-pressable';
import EmergencyModal from './component/emergency-modal';
import { styles } from './home-screen-styles';

const HomeScreenView = ({
    emergencyList = [],
    isModalVisible = false,
    updateModalVisibility = (status: boolean) => { },
    onConfirm = () => { },
    onLogoutPressed = () => { },
}) => {

    const renderEmptyScreen = () => {
        return <View style={styles.mainContainer}>
            <UIText
                text={'No Emergency Have Occurred'}
            />
        </View>
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.gray_scale.white, }}>
            {isModalVisible ? <EmergencyModal
                onDeny={() => updateModalVisibility(false)}
                onConfirm={onConfirm}
            /> : null}
            <UIPressable
                onPress={onLogoutPressed}
                style={styles.logoutButton}>
                <UIText
                    color={colors.gray_scale.white}
                    text={'LogOut'}
                    style={styles.logoutButtonText}
                />
            </UIPressable>
            {emergencyList?.length === 0 ? renderEmptyScreen() :
                <FlatList
                    data={emergencyList}
                    renderItem={({ item }) => EmergencyCard({
                        dataItem: item,
                    })}

                />}
        </View>
    );
};



export default HomeScreenView;
