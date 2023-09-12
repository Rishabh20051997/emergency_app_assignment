import React from 'react';
import { Modal, View } from 'react-native';

import UIText from '../../../../widgets/ui-text';
import UIPressable from '../../../../widgets/ui-pressable';
import colors from '../../../../resources/colors';
import { styles } from './emerency-modal-style';

const EmergencyScreen = ({
  onConfirm = () => {},
  onDeny = () => {}
}) => {

  return (
    <Modal>
<View style={styles.mainContainer}>
      <UIText
        text={'Emergency Nearby'}
      />
       <UIText
        text={'Can you response?'}
        />

        <UIPressable onPress={onConfirm}>
        <UIText
        text={'Yes'}
        textAlign='center'
        color={colors.gray_scale.white}
        style={styles.buttonText}
        />
         </UIPressable>
         <UIPressable onPress={onDeny}>
        <UIText
        text={'No'}
        textAlign='center'
        color={colors.gray_scale.white}
        style={styles.buttonText}
        />
        </UIPressable>
    </View>
    </Modal>
  );
};



export default EmergencyScreen;
